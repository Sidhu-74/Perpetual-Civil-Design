import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Basic in-memory rate limiting map
const rateLimitMap = new Map<string, { count: number; startTime: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  // Periodic cleanup
  if (rateLimitMap.size > 1000) {
    rateLimitMap.forEach((value, key) => {
      if (now - value.startTime > RATE_LIMIT_WINDOW_MS) {
        rateLimitMap.delete(key);
      }
    });
  }

  if (!record) {
    rateLimitMap.set(ip, { count: 1, startTime: now });
    return true;
  }

  if (now - record.startTime > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, startTime: now });
    return true;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  record.count += 1;
  return true;
}

function sanitizeInput(str: unknown): string {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim();
}

function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

export async function POST(request: Request) {
  try {
    const forwardedFor = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const clientIp = forwardedFor ? forwardedFor.split(',')[0].trim() : (realIp || 'unknown');

    if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many submissions from this connection. Please wait 10 minutes before trying again.',
        },
        { status: 429 }
      );
    }

    const body = await request.json().catch(() => null);
    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { success: false, error: 'Invalid request payload.' },
        { status: 400 }
      );
    }

    // Honeypot check for bots
    if (body.b_hp_field && typeof body.b_hp_field === 'string' && body.b_hp_field.trim() !== '') {
      return NextResponse.json({
        success: true,
        message: 'Enquiry received successfully.',
      });
    }

    const rawName = body.name;
    const rawEmail = body.email;
    const rawCompany = body.company;
    const rawProjectType = body.project_type;
    const rawMessage = body.message;

    if (!rawName || typeof rawName !== 'string' || !rawName.trim()) {
      return NextResponse.json(
        { success: false, error: 'Please enter your name.' },
        { status: 400 }
      );
    }
    if (rawName.trim().length > 100) {
      return NextResponse.json(
        { success: false, error: 'Name must not exceed 100 characters.' },
        { status: 400 }
      );
    }

    if (!rawEmail || typeof rawEmail !== 'string' || !isValidEmail(rawEmail)) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid work email address.' },
        { status: 400 }
      );
    }
    if (rawEmail.trim().length > 150) {
      return NextResponse.json(
        { success: false, error: 'Email address must not exceed 150 characters.' },
        { status: 400 }
      );
    }

    if (!rawMessage || typeof rawMessage !== 'string' || rawMessage.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: 'Please enter a message of at least 5 characters.' },
        { status: 400 }
      );
    }
    if (rawMessage.trim().length > 3000) {
      return NextResponse.json(
        { success: false, error: 'Message must not exceed 3000 characters.' },
        { status: 400 }
      );
    }

    // Default recipient explicitly hr@civildesignltd.com as required by client
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || 'hr@civildesignltd.com';
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Perpetual Civil Design <enquiries@civildesignltd.com>';

    const name = sanitizeInput(rawName);
    const email = rawEmail.trim();
    const company = rawCompany ? sanitizeInput(rawCompany) : 'Not specified';
    const projectType = rawProjectType ? sanitizeInput(rawProjectType) : 'General enquiry';
    const message = sanitizeInput(rawMessage);
    const submissionTime = new Date().toUTCString();

    const subject = `New Project Enquiry: ${name}${company !== 'Not specified' ? ' (' + company + ')' : ''}`;

    const textContent = `
NEW PROJECT ENQUIRY - PERPETUAL CIVIL DESIGN LTD

Name: ${name}
Work Email: ${email}
Company: ${company}
Project Type: ${projectType}
Received At: ${submissionTime}

Message:
${message}

--------------------------------------------------
This message was submitted via the Perpetual Civil Design website (www.civildesignltd.com).
    `.trim();

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #f7f7f7; color: #141413; margin: 0; padding: 24px; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.06); border: 1px solid #e6e6e6; }
    .header { background: #0b0b0b; padding: 24px 28px; color: #ffffff; border-bottom: 3px solid #f26b1d; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 600; letter-spacing: -0.02em; }
    .header p { margin: 4px 0 0; font-size: 13px; color: #a3a3a3; }
    .content { padding: 28px; }
    .field-row { margin-bottom: 16px; border-bottom: 1px solid #f0f0f0; padding-bottom: 12px; }
    .field-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #707070; font-weight: 700; margin-bottom: 4px; }
    .field-value { font-size: 15px; color: #0b0b0b; font-weight: 500; }
    .message-box { background: #fafafa; border-left: 4px solid #f26b1d; padding: 16px; border-radius: 4px; margin-top: 10px; white-space: pre-wrap; font-size: 14.5px; line-height: 1.6; color: #1f1f1f; }
    .footer { background: #fdfdfd; padding: 16px 28px; font-size: 12px; color: #707070; text-align: center; border-top: 1px solid #eeeeee; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Project Enquiry</h1>
      <p>Perpetual Civil Design Ltd Website · Contact Portal</p>
    </div>
    <div class="content">
      <div class="field-row">
        <div class="field-label">Sender Name</div>
        <div class="field-value">${name}</div>
      </div>
      <div class="field-row">
        <div class="field-label">Work Email</div>
        <div class="field-value"><a href="mailto:${email}" style="color:#f26b1d;text-decoration:none;font-weight:600">${email}</a></div>
      </div>
      <div class="field-row">
        <div class="field-label">Company / Organization</div>
        <div class="field-value">${company}</div>
      </div>
      <div class="field-row">
        <div class="field-label">Project Type</div>
        <div class="field-value">${projectType}</div>
      </div>
      <div class="field-row" style="border-bottom:none">
        <div class="field-label">Enquiry Message</div>
        <div class="message-box">${message}</div>
      </div>
    </div>
    <div class="footer">
      Delivered to ${toEmail} · Perpetual Civil Design Ltd
    </div>
  </div>
</body>
</html>
    `.trim();

    if (!apiKey) {
      console.warn(
        '[PCD Dev Notice] RESEND_API_KEY is not defined. Email simulated successfully for testing. Destination:',
        toEmail
      );
      return NextResponse.json({
        success: true,
        simulated: true,
        message: 'Thank you! Your enquiry has been received. Our engineering team will review it and reply shortly.',
      });
    }

    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: subject,
      text: textContent,
      html: htmlContent,
    });

    if (error) {
      console.error('[PCD Contact API Error] Resend error:', error);
      return NextResponse.json(
        {
          success: false,
          error: error.message || 'Email delivery failed. Please reach out to hr@civildesignltd.com directly.',
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
      message: 'Thank you! Your enquiry has been received. Our engineering team will review it and reply shortly.',
    });
  } catch (err) {
    console.error('[PCD Contact API Fatal Exception]:', err);
    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected server error occurred. Please contact us directly at hr@civildesignltd.com.',
      },
      { status: 500 }
    );
  }
}
