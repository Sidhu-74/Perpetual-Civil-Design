import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import ServiceDisciplineCard from "@/components/ServiceDisciplineCard";
import { serviceDisciplines } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "Services | Perpetual Civil Design Ltd",
  description:
    "Specialist engineering for complex infrastructure. PCD provides focused engineering support across civil, structural, assurance, temporary works and Protection & Control requirements.",
};

export default function ServicesPage() {
  return (
    <main data-page="services">
      {/* Hero Section */}
      <section className="hero" aria-labelledby="h-sp">
        <div className="hero-frame">
          <img
            src="/img/s01.jpg"
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

      {/* Section Header */}
      <section className="wrap sec" style={{ paddingBottom: '0' }}>
        <div className="shead">
          <div>
            <h2 className="t-h2">Engineering Disciplines</h2>
          </div>
          <div className="aside">
            <Link className="pill" href="/contact">
              Discuss a Project{' '}
              <svg>
                <use href="#chev" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Tectra-Style Disciplines Content Layout with Expandable Subservices */}
      <div className="svc-tectra-container">
        {serviceDisciplines.map((discipline) => (
          <ServiceDisciplineCard
            key={discipline.id}
            id={discipline.id}
            index={discipline.index}
            title={discipline.title}
            lead={discipline.lead}
            images={discipline.images}
            capabilities={discipline.capabilities}
            subservices={discipline.subservices}
            ctaText={discipline.ctaText}
            ctaHref={discipline.ctaHref}
          />
        ))}
      </div>

      {/* Bottom Call to Action Section */}
      <section className="wrap sec">
        <div className="cta-frame" style={{ minHeight: "clamp(420px,36vw,520px)" }}>
          <img
            src="/img/cta.jpg"
            alt="Transmission pylons and overhead lines against a muted evening sky"
            loading="lazy"
          />
          <div className="card cta-contact-card">
            <div className="cta-contact-tag">
              <span className="cta-contact-dot" aria-hidden="true" />
              <span>For Contact</span>
            </div>
            <div className="cta-contact-detail">
              <svg className="cta-contact-icon" aria-hidden="true">
                <use href="#mail" />
              </svg>
              <span>
                <strong>Email :</strong>{' '}
                <a href="mailto:hr@civildesignltd.com" className="cta-contact-link">
                  hr@civildesignltd.com
                </a>
              </span>
            </div>
          </div>
          <div className="card cta-card">
            <h2 className="cta-card-title">
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
