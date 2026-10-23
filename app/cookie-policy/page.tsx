import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie Policy | Perpetual Civil Design Limited',
  description:
    'Cookie Policy for Perpetual Civil Design Limited. Explains how cookies and similar technologies are used on www.civildesignltd.com. Strictly necessary cookies only.',
};

export default function CookiePolicyPage() {
  return (
    <main data-page="cookies" className="min-h-screen bg-[#F7F7F7]">
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
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-[#0B0B0B] transition-colors"
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
            border: '1px solid #E6E6E6',
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
              borderBottom: '1px solid #E6E6E6',
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
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: '#707070',
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
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                color: '#0B0B0B',
                marginBottom: '8px',
              }}
            >
              Cookie Policy
            </h1>
            <p style={{ fontSize: '0.9375rem', color: '#707070', fontWeight: 500 }}>
              Last updated: 19 October 2026
            </p>
          </div>

          <div
            style={{
              fontSize: '1rem',
              lineHeight: 1.7,
              color: '#3A3A3A',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            {/* About this policy */}
            <div>
              <h2
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#0B0B0B',
                  letterSpacing: '-0.02em',
                  marginBottom: '10px',
                }}
              >
                About this policy
              </h2>
              <p>
                This Cookie Policy explains how Perpetual Civil Design Limited (&quot;PCD&quot;, &quot;we&quot;, &quot;us&quot;), company number 16070828, uses cookies and similar technologies on{' '}
                <a
                  href="https://www.civildesignltd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#F26B1D', textDecoration: 'underline' }}
                >
                  www.civildesignltd.com
                </a>
                . It should be read together with our{' '}
                <Link
                  href="/privacy-policy"
                  style={{ color: '#F26B1D', fontWeight: 600, textDecoration: 'underline' }}
                >
                  Privacy Policy
                </Link>
                , which explains how we handle your personal data.
              </p>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid #E6E6E6', margin: '8px 0' }} />

            {/* What are cookies? */}
            <div>
              <h2
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#0B0B0B',
                  letterSpacing: '-0.02em',
                  marginBottom: '10px',
                }}
              >
                What are cookies?
              </h2>
              <p>
                Cookies are small text files that a website places on your device when you visit it. They are widely used to make websites work, to keep them secure, and sometimes to collect information about how people use a site. Similar technologies, such as local storage, work in a similar way and are covered by this policy too.
              </p>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid #E6E6E6', margin: '8px 0' }} />

            {/* How we use cookies */}
            <div>
              <h2
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#0B0B0B',
                  letterSpacing: '-0.02em',
                  marginBottom: '10px',
                }}
              >
                How we use cookies
              </h2>
              <p style={{ marginBottom: '12px' }}>
                Our website is designed to be simple and privacy-friendly. We use only strictly necessary cookies, which are needed for the website to load and work securely. Under UK law (the Privacy and Electronic Communications Regulations), these cookies do not require your consent, but we still want you to know about them.
              </p>
              <p style={{ marginBottom: '8px' }}>We do not use:</p>
              <ul style={{ listStyle: 'disc', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                <li>analytics or statistics cookies</li>
                <li>advertising or marketing cookies</li>
                <li>social media tracking cookies</li>
                <li>cookies that track you across other websites</li>
              </ul>
              <div
                style={{
                  background: '#F9FAFB',
                  borderLeft: '4px solid #F26B1D',
                  padding: '14px 18px',
                  borderRadius: '6px',
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  color: '#0B0B0B',
                }}
              >
                Because we do not use any non-essential cookies, our website does not currently show a cookie consent banner.
              </div>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid #E6E6E6', margin: '8px 0' }} />

            {/* Cookies used on this website */}
            <div>
              <h2
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#0B0B0B',
                  letterSpacing: '-0.02em',
                  marginBottom: '10px',
                }}
              >
                Cookies used on this website
              </h2>

              {/* Responsive Table */}
              <div style={{ overflowX: 'auto', marginBottom: '16px', borderRadius: '12px', border: '1px solid #E6E6E6' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9375rem' }}>
                  <thead>
                    <tr style={{ background: '#0B0B0B', color: '#FFFFFF' }}>
                      <th style={{ padding: '14px 18px', fontWeight: 600, width: '22%' }}>Type</th>
                      <th style={{ padding: '14px 18px', fontWeight: 600, width: '25%' }}>Set by</th>
                      <th style={{ padding: '14px 18px', fontWeight: 600, width: '33%' }}>Purpose</th>
                      <th style={{ padding: '14px 18px', fontWeight: 600, width: '20%' }}>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ background: '#FFFFFF' }}>
                      <td style={{ padding: '14px 18px', verticalAlign: 'top', fontWeight: 500, color: '#0B0B0B' }}>
                        Strictly necessary
                      </td>
                      <td style={{ padding: '14px 18px', verticalAlign: 'top', color: '#3A3A3A' }}>
                        Our website host (GoDaddy)
                      </td>
                      <td style={{ padding: '14px 18px', verticalAlign: 'top', color: '#3A3A3A' }}>
                        Delivering the website securely, balancing traffic and protecting the site against misuse
                      </td>
                      <td style={{ padding: '14px 18px', verticalAlign: 'top', color: '#3A3A3A' }}>
                        Session, or as set by the host
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                Our website contains a link to LinkedIn. If you follow it, LinkedIn may set its own cookies, which are governed by LinkedIn&apos;s cookie policy, not ours.
              </p>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid #E6E6E6', margin: '8px 0' }} />

            {/* Managing cookies */}
            <div>
              <h2
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#0B0B0B',
                  letterSpacing: '-0.02em',
                  marginBottom: '10px',
                }}
              >
                Managing cookies
              </h2>
              <p style={{ marginBottom: '12px' }}>
                You can control and delete cookies through your browser settings. Most browsers let you block all cookies, block third-party cookies, or delete cookies when you close the browser. Help pages for common browsers include Google Chrome, Mozilla Firefox, Apple Safari and Microsoft Edge.
              </p>
              <p>
                Please note that if you block strictly necessary cookies, some parts of our website may not work properly.
              </p>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid #E6E6E6', margin: '8px 0' }} />

            {/* Changes to this policy */}
            <div>
              <h2
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#0B0B0B',
                  letterSpacing: '-0.02em',
                  marginBottom: '10px',
                }}
              >
                Changes to this policy
              </h2>
              <p>
                If we start using any cookies that are not strictly necessary, such as analytics cookies, we will update this policy and ask for your consent through a cookie banner before those cookies are set. The latest version will always be available on our website, with the date it was last updated at the top.
              </p>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid #E6E6E6', margin: '8px 0' }} />

            {/* Contact us */}
            <div>
              <h2
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#0B0B0B',
                  letterSpacing: '-0.02em',
                  marginBottom: '10px',
                }}
              >
                Contact us
              </h2>
              <p>
                If you have any questions about our use of cookies, please contact us at{' '}
                <a
                  href="mailto:hr@civildesignltd.com"
                  style={{ color: '#F26B1D', fontWeight: 600, textDecoration: 'underline' }}
                >
                  hr@civildesignltd.com
                </a>{' '}
                or write to us at Perpetual Civil Design Limited, 18 Chestnut Way, Repton, Derby, DE65 6FQ.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
