import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Perpetual Civil Design Ltd",
  description:
    "Specialist engineering for complex infrastructure. PCD provides focused engineering support across civil, structural, assurance, temporary works and Protection & Control requirements.",
};

export default function ServicesPage() {
  return (
    <main data-page="services">
      <section className="hero" aria-labelledby="h-sp">
        <div className="hero-frame">
          <img
            src="/img/svchero.jpg"
            alt="Looking up through the lattice of a transmission tower"
            fetchPriority="high"
          />
          <div className="hero-inner">
            <div className="hero-left-content">
              <span className="status">Our Services</span>
              <h1 id="h-sp" className="hero-display-title">
                Specialist engineering for complex infrastructure.
              </h1>
              <p className="hero-display-sub">
                PCD provides focused engineering support across civil, structural,<br />assurance,
                temporary works and Protection &amp; Control requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap sec">
        <div className="shead">
          <span className="dot-label">Capabilities</span>
          <h2 className="t-h2">Four disciplines</h2>
          <div className="aside">
            <Link className="pill" href="/contact">
              Discuss a Project{" "}
              <svg>
                <use href="#chev" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="srow">
          <div className="img zoom" style={{ gridColumn: "span 7", aspectRatio: "4/3" }}>
            <img
              src="/img/why.jpg"
              alt="Steel building frame rising beside a tower crane"
              loading="lazy"
            />
          </div>
          <div className="card" style={{ gridColumn: "span 5" }}>
            <span className="idx">/001</span>
            <div>
              <h3 className="t-h3">Civil &amp; Structural Engineering</h3>
              <p className="t-body" style={{ marginTop: "14px" }}>
                PCD provides civil and structural engineering expertise for major infrastructure and substation projects.
              </p>
              <ul className="chips">
                <li>Infrastructure</li>
                <li>Substations</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="srow">
          <div className="card" style={{ gridColumn: "span 5" }}>
            <span className="idx">/002</span>
            <div>
              <h3 className="t-h3">Civil Design Assurance</h3>
              <p className="t-body" style={{ marginTop: "14px" }}>
                Technical design assurance focused on quality, constructability, coordination and project delivery.
              </p>
              <ul className="chips">
                <li>Quality</li>
                <li>Constructability</li>
                <li>Coordination</li>
                <li>Delivery</li>
              </ul>
            </div>
          </div>
          <div className="img order-img" style={{ gridColumn: "span 7", aspectRatio: "4/3" }}>
            <img
              src="/img/s02.jpg"
              alt="Engineering drawings laid out for review"
              loading="lazy"
            />
          </div>
        </div>

        <div className="srow">
          <div className="img" style={{ gridColumn: "span 7", aspectRatio: "4/3" }}>
            <img
              src="/img/s03.jpg"
              alt="Scaffolding wrapped around a structure under construction"
              loading="lazy"
            />
          </div>
          <div className="card" style={{ gridColumn: "span 5" }}>
            <span className="idx">/003</span>
            <div>
              <h3 className="t-h3">Temporary Works</h3>
              <p className="t-body" style={{ marginTop: "14px" }}>
                Engineering support for temporary works associated with complex construction and infrastructure projects.
              </p>
              <ul className="chips">
                <li>Construction</li>
                <li>Infrastructure</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="srow">
          <div className="card" style={{ gridColumn: "span 5", background: "var(--ink)", color: "#fff" }}>
            <span className="idx" style={{ color: "#8A8A8A" }}>/004</span>
            <div>
              <h3 className="t-h3">Protection &amp; Control</h3>
              <p className="t-body" style={{ marginTop: "14px", color: "#A8A8A8" }}>
                Specialist Protection &amp; Control support for substation and power infrastructure environments.
              </p>
            </div>
          </div>
          <div className="img order-img" style={{ gridColumn: "span 7", aspectRatio: "4/3" }}>
            <img
              src="/img/s04.jpg"
              alt="Control room lined with electrical panels and instruments"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="wrap sec">
        <div className="cta-frame" style={{ minHeight: "clamp(420px,36vw,520px)" }}>
          <img
            src="/img/cta.jpg"
            alt="Transmission pylons and overhead lines against a muted evening sky"
            loading="lazy"
          />
          <div></div>
          <div className="card cta-card">
            <h2 className="t-h4" style={{ fontSize: "clamp(1.5rem,2.2vw,2rem)" }}>
              Discuss your next project with PCD.
            </h2>
            <Link className="pill" href="/contact" style={{ justifyContent: "center" }}>
              Discuss a Project{" "}
              <svg>
                <use href="#chev" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
