import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="foot-section">
      <div className="wrap foot-wrap">

        <div className="foot-cards">
          {/* Left Obsidian Hero Card */}
          <div className="foot-card-blue">
            <div className="fc-brand">
              <img
                src="/img/logo-full-light.png"
                alt="Perpetual Civil Design Ltd"
                className="fc-full-logo"
              />
            </div>

            <div className="fc-blue-bottom">
              <p className="fc-blue-tagline">
                Specialist civil, structural &amp; design assurance engineering for UK power and substation infrastructure.
              </p>

              <div className="fc-social-row">
                <span className="fc-handwritten">Get in touch</span>
                <div className="fc-social-icons">
                  <a
                    href="mailto:hr@civildesignltd.com"
                    className="fc-soc-btn"
                    aria-label="Email PCD"
                    title="hr@civildesignltd.com"
                  >
                    <svg>
                      <use href="#mail" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right White Card */}
          <div className="foot-card-light">

            {/* Navigation Columns */}
            <div className="fc-columns-wrap">
              <div className="fc-col">
                <span className="fc-col-title">Navigation</span>
                <ul className="fc-links">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/services">Our Services</Link></li>
                  <li><Link href="/projects">Our Works</Link></li>
                  <li><Link href="/#how-we-work">How We Work</Link></li>
                  <li><Link href="/#faq">Questions &amp; FAQ</Link></li>
                </ul>
              </div>

              <div className="fc-col">
                <span className="fc-col-title">Capabilities</span>
                <ul className="fc-links">
                  <li><Link href="/services#civil-structural">Civil &amp; Structural Engineering</Link></li>
                  <li><Link href="/services#design-assurance">Civil Design Assurance</Link></li>
                  <li><Link href="/services#temporary-works">Temporary Works</Link></li>
                  <li><Link href="/services#protection-control">Protection &amp; Control</Link></li>
                  <li><Link href="/projects">400 kV GIS Substations</Link></li>
                </ul>
              </div>

              <div className="fc-col fc-col-contact">
                <span className="fc-col-title">Office &amp; Contact</span>
                <ul className="fc-links">
                  <li>
                    <a href="mailto:hr@civildesignltd.com">hr@civildesignltd.com</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Project Action Row */}
            <div className="fc-subscribe-row">
              <div className="fc-sub-cta">
                <strong className="fc-sub-title">Engineer your next project with PCD.</strong>
                <p className="fc-sub-desc">Specialist civil &amp; structural engineering consultancy for UK infrastructure.</p>
              </div>
              <Link className="pill" href="/contact" style={{ flexShrink: 0 }}>
                Discuss a Project{' '}
                <svg>
                  <use href="#chev" />
                </svg>
              </Link>
            </div>

          </div>
        </div>

        {/* Giant Faint Background Typography Watermark */}
        <div className="foot-watermark" aria-hidden="true">
          <span>PERPETUAL</span>
        </div>

        {/* Bottom Bar with Corner Links */}
        <div className="foot-bottom-bar">
          <span>&copy; 2026 Perpetual Civil Design Ltd. All rights reserved.</span>
          <div className="foot-legal-links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span>&middot;</span>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
