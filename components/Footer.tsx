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
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fc-soc-btn"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.5a1.63 1.63 0 0 0-1.63 1.63c0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.63-1.63-1.63z" />
                    </svg>
                  </a>
                  <Link
                    href="/contact"
                    className="fc-soc-btn"
                    aria-label="UK Operations"
                    title="Contact PCD"
                  >
                    <svg>
                      <use href="#pin" />
                    </svg>
                  </Link>
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
                  <li><Link href="/projects">Selected Projects</Link></li>
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
