import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Website Privacy Policy | Perpetual Civil Design Limited',
  description:
    'Website Privacy Policy for Perpetual Civil Design Limited. Explains what information we collect, how we use it, sharing, storage, retention, and your rights under UK GDPR.',
};

export default function PrivacyPolicyPage() {
  return (
    <main data-page="privacy" className="min-h-screen bg-[#F7F7F7]">
      <section
        className="wrap"
        style={{
          paddingTop: 'clamp(96px, 10vw, 130px)',
          paddingBottom: 'clamp(48px, 6vw, 96px)',
          maxWidth: '1000px',
        }}
      >
        {/* Back Link */}
        <div style={{ marginBottom: '24px' }}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-[#0B0B0B] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 3L5 8l5 5" />
            </svg>
            Back to Home
          </Link>
        </div>

        {/* Legal Document Card */}
        <div
          className="card"
          style={{
            background: '#FFFFFF',
            borderRadius: '20px',
            border: '1px solid var(--line)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.03)',
            padding: 'clamp(28px, 5vw, 64px)',
          }}
        >
          {/* Header Brand Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid var(--line)',
              paddingBottom: '24px',
              marginBottom: '32px',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <Link href="/" aria-label="Perpetual Civil Design Home">
              <img
                src="/img/logo-full-trans.png"
                alt="Perpetual Civil Design Limited"
                style={{
                  height: '42px',
                  width: 'auto',
                  maxWidth: '260px',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </Link>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.8125rem',
                fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--muted)',
                background: '#F2F2F2',
                padding: '6px 14px',
                borderRadius: '50px',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#F26B1D',
                }}
              />
              Official Legal Policy
            </span>
          </div>

          {/* Title & Metadata */}
          <div style={{ marginBottom: '32px' }}>
            <h1
              style={{
                fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)', fontWeight: 400, letterSpacing: '-0.035em', lineHeight: 1.14, color: 'var(--ink)',
                marginBottom: '8px',
              }}
            >
              Website Privacy Policy
            </h1>
            <p style={{ fontSize: '0.875rem', color: 'var(--muted)', fontWeight: 400 }}>
              Last updated: 19 October 2026
            </p>
          </div>

          <div
            style={{
              fontSize: '1rem', lineHeight: 1.65, color: 'var(--ink-2)',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            {/* Who we are */}
            <div>
              <h2
                style={{
                  fontSize: 'clamp(1.18rem, 1.35vw, 1.28rem)', fontWeight: 500, color: 'var(--ink)', letterSpacing: '-0.025em',
                  marginBottom: '10px',
                }}
              >
                Who we are
              </h2>
              <p style={{ marginBottom: '12px' }}>
                Perpetual Civil Design Limited (&quot;PCD&quot;, &quot;we&quot;, &quot;us&quot;) is a civil and structural engineering consultancy registered in England and Wales, company number 16070828, with its registered office at 18 Chestnut Way, Repton, Derby, DE65 6FQ. We are the controller of any personal data collected through{' '}
                <a
                  href="https://www.civildesignltd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#F26B1D', textDecoration: 'underline' }}
                >
                  www.civildesignltd.com
                </a>
                .
              </p>
              <p>
                Questions about this policy or your data can be sent to{' '}
                <a
                  href="mailto:hr@civildesignltd.com"
                  style={{ color: '#F26B1D', fontWeight: 500, textDecoration: 'underline' }}
                >
                  hr@civildesignltd.com
                </a>{' '}
                or by post to the address above.
              </p>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid var(--line)', margin: '8px 0' }} />

            {/* What information we collect */}
            <div>
              <h2
                style={{
                  fontSize: 'clamp(1.18rem, 1.35vw, 1.28rem)', fontWeight: 500, color: 'var(--ink)', letterSpacing: '-0.025em',
                  marginBottom: '10px',
                }}
              >
                What information we collect
              </h2>
              <p style={{ marginBottom: '12px' }}>
                Our website does not ask you to create an account or make payments. We collect only a small amount of information:
              </p>
              <ul style={{ listStyle: 'disc', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
                <li>
                  <strong style={{ color: 'var(--ink)' }}>Enquiry form</strong> – if you use the form on our Contact page, we collect your name, email address, phone number, company name and the details of your project or question.
                </li>
                <li>
                  <strong style={{ color: 'var(--ink)' }}>Information you send us directly</strong> – if you email us or call us on the numbers shown on the site, we receive your contact details and anything you include in your message.
                </li>
                <li>
                  <strong style={{ color: 'var(--ink)' }}>Technical data</strong> – your IP address, browser type, device and the pages you visit, recorded automatically by our website host in server logs.
                </li>
              </ul>
              <p>
                We do not knowingly collect information from children, and we do not collect special category data (such as health information).
              </p>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid var(--line)', margin: '8px 0' }} />

            {/* Cookies */}
            <div>
              <h2
                style={{
                  fontSize: 'clamp(1.18rem, 1.35vw, 1.28rem)', fontWeight: 500, color: 'var(--ink)', letterSpacing: '-0.025em',
                  marginBottom: '10px',
                }}
              >
                Cookies
              </h2>
              <p style={{ marginBottom: '12px' }}>
                Our website uses only essential cookies needed for the site to load and work securely. These do not need your consent and do not track you across other websites. Full details are in our{' '}
                <Link
                  href="/cookie-policy"
                  style={{ color: '#F26B1D', fontWeight: 500, textDecoration: 'underline' }}
                >
                  Cookie Policy
                </Link>
                .
              </p>
              <p>
                We do not use analytics, advertising or social media tracking cookies. If we add any in future, we will ask for your consent first through a cookie banner and update this policy.
              </p>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid var(--line)', margin: '8px 0' }} />

            {/* How we use your information */}
            <div>
              <h2
                style={{
                  fontSize: 'clamp(1.18rem, 1.35vw, 1.28rem)', fontWeight: 500, color: 'var(--ink)', letterSpacing: '-0.025em',
                  marginBottom: '10px',
                }}
              >
                How we use your information
              </h2>
              <p style={{ marginBottom: '16px' }}>
                We use your information only for the purposes below, each with a lawful basis under UK GDPR.
              </p>

              {/* Responsive Table */}
              <div style={{ overflowX: 'auto', marginBottom: '16px', borderRadius: '12px', border: '1px solid var(--line)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9375rem' }}>
                  <thead>
                    <tr style={{ background: 'var(--ink)', color: '#FFFFFF' }}>
                      <th style={{ padding: '14px 18px', fontWeight: 500, width: '32%' }}>Purpose</th>
                      <th style={{ padding: '14px 18px', fontWeight: 500, width: '32%' }}>Information used</th>
                      <th style={{ padding: '14px 18px', fontWeight: 500, width: '36%' }}>Lawful basis</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--line)', background: '#FFFFFF' }}>
                      <td style={{ padding: '14px 18px', verticalAlign: 'top', fontWeight: 500, color: 'var(--ink)' }}>
                        Running and securing the website
                      </td>
                      <td style={{ padding: '14px 18px', verticalAlign: 'top', color: 'var(--ink-2)' }}>
                        Technical data
                      </td>
                      <td style={{ padding: '14px 18px', verticalAlign: 'top', color: 'var(--ink-2)' }}>
                        Legitimate interests – keeping the site working and safe
                      </td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--line)', background: '#FAFAFA' }}>
                      <td style={{ padding: '14px 18px', verticalAlign: 'top', fontWeight: 500, color: 'var(--ink)' }}>
                        Replying to enquiries and quotes
                      </td>
                      <td style={{ padding: '14px 18px', verticalAlign: 'top', color: 'var(--ink-2)' }}>
                        Contact details, message
                      </td>
                      <td style={{ padding: '14px 18px', verticalAlign: 'top', color: 'var(--ink-2)' }}>
                        Legitimate interests, or steps before entering a contract
                      </td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--line)', background: '#FFFFFF' }}>
                      <td style={{ padding: '14px 18px', verticalAlign: 'top', fontWeight: 500, color: 'var(--ink)' }}>
                        Delivering services you engage us for
                      </td>
                      <td style={{ padding: '14px 18px', verticalAlign: 'top', color: 'var(--ink-2)' }}>
                        Contact and project details
                      </td>
                      <td style={{ padding: '14px 18px', verticalAlign: 'top', color: 'var(--ink-2)' }}>
                        Contract
                      </td>
                    </tr>
                    <tr style={{ background: '#FAFAFA' }}>
                      <td style={{ padding: '14px 18px', verticalAlign: 'top', fontWeight: 500, color: 'var(--ink)' }}>
                        Keeping business records
                      </td>
                      <td style={{ padding: '14px 18px', verticalAlign: 'top', color: 'var(--ink-2)' }}>
                        Correspondence
                      </td>
                      <td style={{ padding: '14px 18px', verticalAlign: 'top', color: 'var(--ink-2)' }}>
                        Legal obligation
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                We do not use your information for marketing unless you have agreed to it, and we never sell it.
              </p>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid var(--line)', margin: '8px 0' }} />

            {/* Sharing, storage and security */}
            <div>
              <h2
                style={{
                  fontSize: 'clamp(1.18rem, 1.35vw, 1.28rem)', fontWeight: 500, color: 'var(--ink)', letterSpacing: '-0.025em',
                  marginBottom: '10px',
                }}
              >
                Sharing, storage and security
              </h2>
              <p style={{ marginBottom: '12px' }}>
                We share information only with service providers who help us run the business, such as GoDaddy, which hosts our website and provides our email service. Enquiries submitted through our contact form are sent to{' '}
                <a
                  href="mailto:hr@civildesignltd.com"
                  style={{ color: '#F26B1D', fontWeight: 500, textDecoration: 'underline' }}
                >
                  hr@civildesignltd.com
                </a>
                . Our service providers may process your information only on our instructions. We may also disclose information where the law requires it.
              </p>
              <p style={{ marginBottom: '12px' }}>
                Some providers may store data outside the UK. Where they do, we rely on safeguards approved under UK law, such as adequacy regulations or the International Data Transfer Agreement.
              </p>
              <p>
                We keep enquiry emails for up to 2 years and client project records for 6 years after the project ends, to meet legal and insurance requirements. Server logs are kept by our host for a limited period in line with its own policies. We use reasonable technical and organisational measures to protect your information.
              </p>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid var(--line)', margin: '8px 0' }} />

            {/* Your rights */}
            <div>
              <h2
                style={{
                  fontSize: 'clamp(1.18rem, 1.35vw, 1.28rem)', fontWeight: 500, color: 'var(--ink)', letterSpacing: '-0.025em',
                  marginBottom: '10px',
                }}
              >
                Your rights
              </h2>
              <p style={{ marginBottom: '12px' }}>
                Under UK data protection law you have the right to:
              </p>
              <ul style={{ listStyle: 'disc', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
                <li>access the personal data we hold about you</li>
                <li>have inaccurate data corrected</li>
                <li>have your data erased</li>
                <li>restrict or object to how we use it</li>
                <li>receive your data in a portable format</li>
              </ul>
              <p style={{ marginBottom: '12px' }}>
                To use any of these rights, contact us at{' '}
                <a
                  href="mailto:hr@civildesignltd.com"
                  style={{ color: '#F26B1D', fontWeight: 500, textDecoration: 'underline' }}
                >
                  hr@civildesignltd.com
                </a>
                . We will respond within one month and there is normally no charge.
              </p>
              <p>
                If you are unhappy with how we handle your data, please tell us first. You also have the right to complain to the Information Commissioner&apos;s Office (ICO) at{' '}
                <a
                  href="https://ico.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#F26B1D', textDecoration: 'underline' }}
                >
                  ico.org.uk
                </a>{' '}
                or on{' '}
                <a
                  href="tel:03031231113"
                  style={{ color: '#F26B1D', textDecoration: 'underline' }}
                >
                  0303 123 1113
                </a>
                .
              </p>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid var(--line)', margin: '8px 0' }} />

            {/* Changes to this policy */}
            <div>
              <h2
                style={{
                  fontSize: 'clamp(1.18rem, 1.35vw, 1.28rem)', fontWeight: 500, color: 'var(--ink)', letterSpacing: '-0.025em',
                  marginBottom: '10px',
                }}
              >
                Changes to this policy
              </h2>
              <p>
                We may update this policy from time to time. The latest version will always be on this page, with the date it was last updated at the top.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
