import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | Perpetual Civil Design Ltd',
  description:
    'Cookie Policy for Perpetual Civil Design Ltd. Strictly essential cookies only, with no analytics, advertising or tracking cookies.',
};

export default function CookiePolicyPage() {
  return (
    <main data-page="cookies">
      <section
        className="wrap"
        style={{ paddingTop: 'clamp(96px, 10vw, 130px)', paddingBottom: 'clamp(40px, 6vw, 80px)' }}
      >
        <div className="card legal" style={{ padding: 'clamp(24px, 4vw, 56px)' }}>
          <div
            className="legal-brand"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid var(--line)',
              paddingBottom: '20px',
              marginBottom: '28px',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <img
              src="/img/logo-full-trans.png"
              alt="Perpetual Civil Design Ltd"
              style={{
                height: '44px',
                width: 'auto',
                maxWidth: '280px',
                objectFit: 'contain',
                display: 'block',
              }}
            />
            <span className="dot-label">Legal</span>
          </div>
          <h1 className="t-h2">Cookie Policy</h1>
          <p style={{ fontSize: '1.0625rem' }}>
            Perpetual Civil Design Ltd operates an essential-only cookie policy. We do not use third-party
            advertising, tracking, or marketing cookies.
          </p>

          <h2>What cookies are</h2>
          <p>
            Cookies are small text files placed on your device by websites that you visit. They are widely
            used to make websites work properly, ensure network security, and store technical preferences.
          </p>

          <h2>Cookies used on this website</h2>
          <p>
            This website strictly utilizes only necessary cookies essential for website operation and security:
          </p>
          <div style={{ overflowX: 'auto', margin: '20px 0' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '0.9375rem',
                border: '1px solid var(--line)',
              }}
            >
              <thead>
                <tr style={{ background: '#f3f4f6', textAlign: 'left' }}>
                  <th style={{ padding: '12px 16px', borderBottom: '1px solid var(--line)' }}>Cookie Name</th>
                  <th style={{ padding: '12px 16px', borderBottom: '1px solid var(--line)' }}>Purpose</th>
                  <th style={{ padding: '12px 16px', borderBottom: '1px solid var(--line)' }}>Category</th>
                  <th style={{ padding: '12px 16px', borderBottom: '1px solid var(--line)' }}>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--line)', fontFamily: 'monospace' }}>
                    pcd_cookie_consent
                  </td>
                  <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--line)' }}>
                    Stores cookie preference acknowledgment.
                  </td>
                  <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--line)' }}>Essential</td>
                  <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--line)' }}>1 Year</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--line)', fontFamily: 'monospace' }}>
                    session_sec
                  </td>
                  <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--line)' }}>
                    CSRF protection and security token validation for contact form submissions.
                  </td>
                  <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--line)' }}>Security / Essential</td>
                  <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--line)' }}>Session</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>No tracking or advertising cookies</h2>
          <p>
            We do not deploy Google Analytics, Meta Pixel, advertising beacons, or any user fingerprinting
            technologies. Your browsing on this website remains private and unprofiled.
          </p>

          <h2>Managing cookies in your browser</h2>
          <p>
            Most modern web browsers allow you to control cookie settings through their preferences.
            You can configure your browser to block or alert you about cookies, though blocking essential
            cookies may affect form submissions.
          </p>

          <h2>Questions</h2>
          <p>
            For any enquiries regarding our cookie practices, please contact{' '}
            <a href="mailto:hr@civildesignltd.com" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>
              hr@civildesignltd.com
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
