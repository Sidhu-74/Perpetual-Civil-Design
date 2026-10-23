import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Perpetual Civil Design Ltd',
  description:
    'Privacy Policy for Perpetual Civil Design Ltd. Details how enquiries and information submitted through the website are handled.',
};

export default function PrivacyPolicyPage() {
  return (
    <main data-page="privacy">
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
          <h1 className="t-h2">Privacy Policy</h1>
          <p style={{ fontSize: '1.0625rem' }}>
            Perpetual Civil Design Limited respects your privacy and is committed to protecting personal
            information provided through this website.
          </p>
          <h2>Information you provide</h2>
          <p>Information voluntarily submitted through contact forms may include:</p>
          <ul>
            <li>Name</li>
            <li>Company</li>
            <li>Email address</li>
            <li>Telephone number</li>
            <li>Project or enquiry information</li>
            <li>Additional message information</li>
          </ul>
          <h2>How information is used</h2>
          <p>Information may be used to:</p>
          <ul>
            <li>Respond to enquiries</li>
            <li>Discuss project requirements</li>
            <li>Provide requested information</li>
            <li>Maintain communication relating to an enquiry</li>
          </ul>
          <h2>Sharing</h2>
          <p>Personal information is never sold or shared for unrelated marketing purposes.</p>
          <p>
            Where trusted service providers are used to operate the website or process enquiries,
            information is handled strictly under confidentiality obligations.
          </p>
          <h2>Retention</h2>
          <p>
            Information is only retained as reasonably necessary for business communications and in
            accordance with statutory UK legal and professional requirements.
          </p>
          <h2>Your rights</h2>
          <p>
            Under UK GDPR and applicable data protection law, you have rights relating to access,
            rectification, erasure, restriction, and portability of your personal data.
          </p>
          <h2>Privacy contact</h2>
          <p>
            If you have questions regarding this policy or your personal data, contact us at{' '}
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
