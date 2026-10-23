try { require('dotenv').config(); } catch (e) {}
const { Resend } = require('resend');

// In-memory rate limiting map for basic spam mitigation
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function checkRateLimit(ip) {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  // Clean up old entries periodically
  if (rateLimitMap.size > 1000) {
    for (const [key, value] of rateLimitMap.entries()) {
      if (now - value.startTime > RATE_LIMIT_WINDOW_MS) {
        rateLimitMap.delete(key);
      }
    }
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

// HTML & Text sanitizer helper
function sanitizeInput(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim();
}

function isValidEmail(email) {
  if (!email || typeof email !== 'string') return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

module.exports = async function handler(req, res) {
  // 1. Enforce POST method
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({
      success: false,
      error: 'Method Not Allowed. Contact form submissions must use POST.'
    });
  }

  try {
    // 2. Extract client IP and evaluate rate limit
    const clientIp =
      req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
      req.headers['x-real-ip'] ||
      req.socket?.remoteAddress ||
      'unknown';

    if (!checkRateLimit(clientIp)) {
      return res.status(429).json({
        success: false,
        error: 'Too many submissions from this connection. Please wait 10 minutes before trying again.'
      });
    }

    // Parse request body
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (e) {
        return res.status(400).json({
          success: false,
          error: 'Invalid request body payload format.'
        });
      }
    }
    body = body || {};

    // 3. Honeypot check for automated spam bots
    if (body.b_hp_field && body.b_hp_field.trim() !== '') {
      // Silently return success without calling Resend API
      return res.status(200).json({
        success: true,
        message: 'Enquiry received successfully.'
      });
    }

    // 4. Input Validation & Sanitization
    const rawName = body.name;
    const rawEmail = body.email;
    const rawCompany = body.company;
    const rawProjectType = body.project_type;
    const rawMessage = body.message;

    if (!rawName || typeof rawName !== 'string' || !rawName.trim()) {
      return res.status(400).json({ success: false, error: 'Please provide your name.' });
    }
    if (rawName.trim().length > 100) {
      return res.status(400).json({ success: false, error: 'Name must not exceed 100 characters.' });
    }

    if (!rawEmail || !isValidEmail(rawEmail)) {
      return res.status(400).json({ success: false, error: 'Please provide a valid work email address.' });
    }
    if (rawEmail.trim().length > 150) {
      return res.status(400).json({ success: false, error: 'Email address must not exceed 150 characters.' });
    }

    if (!rawMessage || typeof rawMessage !== 'string' || rawMessage.trim().length < 5) {
      return res.status(400).json({ success: false, error: 'Please enter a message of at least 5 characters.' });
    }
    if (rawMessage.trim().length > 3000) {
      return res.status(400).json({ success: false, error: 'Message must not exceed 3000 characters.' });
    }

    // 5. Validate Environment Variables
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || 'sidharthramasamy27@gmail.com';
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Perpetual Civil Design <onboarding@resend.dev>';

    if (!apiKey) {
      console.error('[PCD Contact API Error] Missing RESEND_API_KEY environment variable.');
      return res.status(500).json({
        success: false,
        error: 'Server configuration error: RESEND_API_KEY is not set.'
      });
    }

    const name = sanitizeInput(rawName);
    const email = rawEmail.trim();
    const company = rawCompany ? sanitizeInput(rawCompany) : 'Not specified';
    const projectType = rawProjectType ? sanitizeInput(rawProjectType) : 'Not specified';
    const message = sanitizeInput(rawMessage);
    const submissionTime = new Date().toUTCString();

    // 6. Build Plain Text & HTML Email Templates
    const subject = `New Project Enquiry from ${name}${company !== 'Not specified' ? ' (' + company + ')' : ''}`;

    const textContent = `
NEW PROJECT ENQUIRY - PERPETUAL CIVIL DESIGN

Name: ${name}
Email: ${email}
Company: ${company}
Project Type: ${projectType}
Submitted At: ${submissionTime}

Message:
${message}
--------------------------------------------------
This email was generated from the Perpetual Civil Design website contact form.
`.trim();

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #f7f7f7; color: #141413; margin: 0; padding: 24px; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.06); border: 1px solid #e6e6e6; }
    .header { background: #0b0b0b; padding: 24px; color: #ffffff; text-align: left; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 600; letter-spacing: -0.02em; }
    .header p { margin: 4px 0 0; font-size: 13px; color: #a3a3a3; }
    .content { padding: 28px; }
    .field-row { margin-bottom: 16px; border-bottom: 1px solid #f0f0f0; padding-bottom: 12px; }
    .field-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #707070; font-weight: 600; margin-bottom: 4px; }
    .field-value { font-size: 15px; color: #0b0b0b; font-weight: 500; }
    .message-box { background: #f9f9f9; border-left: 4px solid #f26b1d; padding: 16px; border-radius: 4px; margin-top: 12px; white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #262626; }
    .footer { background: #fafafa; padding: 16px 28px; font-size: 12px; color: #707070; text-align: center; border-top: 1px solid #eeeeee; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Project Enquiry</h1>
      <p>Perpetual Civil Design Website Contact Form</p>
    </div>
    <div class="content">
      <div class="field-row">
        <div class="field-label">Sender Name</div>
        <div class="field-value">${name}</div>
      </div>
      <div class="field-row">
        <div class="field-label">Work Email</div>
        <div class="field-value"><a href="mailto:${email}" style="color:#f26b1d;text-decoration:none">${email}</a></div>
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
      Received at ${submissionTime} · Perpetual Civil Design Website API
    </div>
  </div>
</body>
</html>
`.trim();

    // 7. Dispatch Email via Resend SDK
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: subject,
      text: textContent,
      html: htmlContent
    });

    if (error) {
      console.error('[PCD Contact API Error] Resend Delivery Error:', error);
      return res.status(500).json({
        success: false,
        error: error.message || 'Email delivery failed. Please try again later.'
      });
    }

    // 8. Return Success response ONLY if email accepted by Resend
    return res.status(200).json({
      success: true,
      id: data ? data.id : null,
      message: 'Thank you! Your enquiry has been sent successfully.'
    });

  } catch (err) {
    console.error('[PCD Contact API Fatal Error]:', err);
    return res.status(500).json({
      success: false,
      error: 'An unexpected server error occurred while processing your enquiry.'
    });
  }
};
