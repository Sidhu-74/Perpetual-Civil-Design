'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const clientReviews = [
  {
    id: 1,
    name: 'Karan Patel',
    role: 'Project Director · Major Transmission EPC',
    avatar: '/img/rev-01.jpg',
    text: "PCD delivered civil and structural engineering for our GIS substation with buildability front and centre. Their site-aware reviews resolved interface clashes before construction, keeping our programme on track through to final sign-off.",
  },
  {
    id: 2,
    name: 'Catherine Hughes',
    role: 'Head of Engineering · National Power Alliance',
    avatar: '/img/rev-02.jpg',
    text: 'Finding specialist partners who understand primary HV plant layouts and secondary Protection and Control systems is rare. PCD integrated seamlessly alongside our team, resolving technical comments quickly and securing approvals without delays.',
  },
  {
    id: 3,
    name: 'Peter Henderson',
    role: 'Delivery Lead · Substation Infrastructure Consortium',
    avatar: '/img/rev-03.jpg',
    text: 'The temporary works engineering delivered for transformer crane platforms and deep excavation support was exceptional. PCD provided safe, pragmatic solutions specifically tailored to live substation site restrictions and tight grid outage windows.',
  },
  {
    id: 4,
    name: 'David Vance',
    role: 'Senior Technical Manager · Grid EPC Contractor',
    avatar: '/img/rev-04.jpg',
    text: 'PCD’s design assurance comments are actionable, rigorous and clear. Their thorough technical reviews helped our EPC consortium navigate complex asset owner standards smoothly, avoiding costly on-site revisions and keeping the programme moving.',
  },
  {
    id: 5,
    name: 'Sarah Lin',
    role: 'Transmission Package Manager · Clean Energy Grid Alliance',
    avatar: '/img/rev-05.jpg',
    text: 'PCD supported our transmission scheme across civil layouts, primary plant coordination and cable trench designs. Their engineers demonstrated consistent technical rigor, fast response times and dependable support through every phase of delivery.',
  },
  {
    id: 6,
    name: 'Alistair Robertson',
    role: 'Chief Construction Engineer · High-Voltage Projects',
    avatar: '/img/rev-06.jpg',
    text: 'From heavy transformer foundation checks to switchgear building interfaces, PCD’s practical understanding of construction sequencing made a demanding live substation project safe, compliant and straightforward to deliver within our allocated grid outage.',
  },
];

export default function HomePage() {
  const [openAcc, setOpenAcc] = useState<number | null>(0);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [currentReview, setCurrentReview] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % clientReviews.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + clientReviews.length) % clientReviews.length);
  };

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % clientReviews.length);
  };

  const toggleFlip = (id: number) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  const toggleAcc = (index: number) => {
    setOpenAcc(openAcc === index ? null : index);
  };

  return (
    <main data-page="home">
      {/* ================= HERO ================= */}
      <section className="hero" aria-labelledby="h-hero">
        <div className="hero-frame hero-frame-center">
          <img
            src="/img/hero.jpg"
            alt="Specialist engineering services for UK substations"
            fetchPriority="high"
            decoding="async"
            width={1024}
            height={576}
          />
          <div className="hero-center-content">
            <h1 id="h-hero" className="hero-center-title">
              Specialist engineering services<br />for UK substations
            </h1>
            <p className="hero-center-sub">
              Expertise in Civil, structural, primary and secondary (Protection &amp; Control) engineering<br />for 400 kV, GIS and 132 kV substation projects across the UK.
            </p>
            <Link className="hero-center-cta" href="/contact">
              <span>Discuss a Project</span>
              <span className="hcta-circle">
                <svg>
                  <use href="#arr" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= OUR WORKS ================= */}
      <section className="wrap sec" aria-labelledby="h-work">
        <div className="shead">
          <h2 id="h-work" className="t-h2">Our Works</h2>
          <div className="aside">
            <Link className="pill" href="/projects">
              View All Projects{' '}
              <svg>
                <use href="#chev" />
              </svg>
            </Link>
          </div>
        </div>
        <p className="t-body" style={{ margin: '-24px 0 32px' }}>
          Substation experience across the UK. A selection of 400 kV, GIS and 400/132 kV substation projects delivered with major contractors and asset owners.
        </p>
        <div className="projects-uniform-grid">
          {/* Card 01: Landulph 400 kV */}
          <div
            className={`flip-card ${flippedCard === 1 ? 'is-flipped' : ''}`}
            onClick={() => toggleFlip(1)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleFlip(1);
              }
            }}
            tabIndex={0}
            role="region"
            aria-label="Landulph 400 kV Substation project card"
          >
            <div className="flip-card-inner">
              {/* FRONT */}
              <div className="flip-card-front">
                <div className="img">
                  <img
                    src="/img/p01.jpg"
                    alt="Outdoor high-voltage substation with gantries and transformers"
                    loading="lazy"
                  />
                  <span className="rep">Representative image</span>
                </div>
                <div className="pcard-front-body">
                  <div className="pcard-front-top">
                    <span className="pcard-idx">/01</span>
                    <span className="pcard-loc">Cornwall, UK</span>
                  </div>
                  <div className="pcard-front-main">
                    <h3 className="t-h4 pcard-front-title">Landulph 400 kV Substation</h3>
                    <span className="pcard-sector">Power &amp; Energy</span>
                  </div>
                  <div className="pcard-front-scope">
                    <span className="pcard-scope-label">Scope</span>
                    <p className="pcard-scope-text">Lead Engineering: Civil, Structural &amp; Design Assurance</p>
                  </div>
                </div>
              </div>

              {/* BACK */}
              <div className="flip-card-back">
                <div className="flip-back-top">
                  <span className="flip-back-idx">/01</span>
                  <span className="flip-back-tag">Cornwall, UK</span>
                </div>
                <div className="flip-back-content">
                  <h3 className="flip-back-title">Landulph 400 kV Substation</h3>
                  <span className="flip-back-scope-label">Lead Engineering: Civil, Structural &amp; Design Assurance</span>
                  <p className="flip-back-desc">
                    Landulph is a National Grid substation where works form part of the ongoing expansion of the transmission network, upgrading the grid to support the UK&apos;s shift to clean energy. PCD delivered the majority of the engineering works on the project, from civil engineering through to design assurance, reviewing design packages with site conditions in view to help keep the programme on track.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 02: Bulls Lodge 400 kV GIS */}
          <div
            className={`flip-card ${flippedCard === 2 ? 'is-flipped' : ''}`}
            onClick={() => toggleFlip(2)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleFlip(2);
              }
            }}
            tabIndex={0}
            role="region"
            aria-label="Bulls Lodge 400 kV GIS Substation project card"
          >
            <div className="flip-card-inner">
              {/* FRONT */}
              <div className="flip-card-front">
                <div className="img">
                  <img
                    src="/img/p02.jpg"
                    alt="Power transformer with bushings and cooling pipework"
                    loading="lazy"
                  />
                  <span className="rep">Representative image</span>
                </div>
                <div className="pcard-front-body">
                  <div className="pcard-front-top">
                    <span className="pcard-idx">/02</span>
                    <span className="pcard-loc">Essex, UK</span>
                  </div>
                  <div className="pcard-front-main">
                    <h3 className="t-h4 pcard-front-title">Bulls Lodge 400 kV GIS Substation</h3>
                    <span className="pcard-sector">Power &amp; Energy</span>
                  </div>
                  <div className="pcard-front-scope">
                    <span className="pcard-scope-label">Scope</span>
                    <p className="pcard-scope-text">Temporary Works</p>
                  </div>
                </div>
              </div>

              {/* BACK */}
              <div className="flip-card-back">
                <div className="flip-back-top">
                  <span className="flip-back-idx">/02</span>
                  <span className="flip-back-tag">Essex, UK</span>
                </div>
                <div className="flip-back-content">
                  <h3 className="flip-back-title">Bulls Lodge 400 kV GIS Substation</h3>
                  <span className="flip-back-scope-label">Temporary Works</span>
                  <p className="flip-back-desc">
                    Bulls Lodge is a substation extension featuring a GIS building and non-SF6 switchgear, connecting new solar generation to the 400 kV network. PCD provided temporary works engineering for the project, supporting safe construction of the GIS buildings and foundations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 03: Navenby 400 kV */}
          <div
            className={`flip-card ${flippedCard === 3 ? 'is-flipped' : ''}`}
            onClick={() => toggleFlip(3)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleFlip(3);
              }
            }}
            tabIndex={0}
            role="region"
            aria-label="Navenby 400 kV Substation project card"
          >
            <div className="flip-card-inner">
              {/* FRONT */}
              <div className="flip-card-front">
                <div className="img">
                  <img
                    src="/img/p03.jpg"
                    alt="Line of transmission towers crossing flat open farmland"
                    loading="lazy"
                  />
                  <span className="rep">Representative image</span>
                </div>
                <div className="pcard-front-body">
                  <div className="pcard-front-top">
                    <span className="pcard-idx">/03</span>
                    <span className="pcard-loc">Lincolnshire, UK</span>
                  </div>
                  <div className="pcard-front-main">
                    <h3 className="t-h4 pcard-front-title">Navenby 400 kV Substation</h3>
                    <span className="pcard-sector">Power &amp; Energy</span>
                  </div>
                  <div className="pcard-front-scope">
                    <span className="pcard-scope-label">Scope</span>
                    <p className="pcard-scope-text">Lead Engineering: Civil, Structural &amp; Design Assurance</p>
                  </div>
                </div>
              </div>

              {/* BACK */}
              <div className="flip-card-back">
                <div className="flip-back-top">
                  <span className="flip-back-idx">/03</span>
                  <span className="flip-back-tag">Lincolnshire, UK</span>
                </div>
                <div className="flip-back-content">
                  <h3 className="flip-back-title">Navenby 400 kV Substation</h3>
                  <span className="flip-back-scope-label">Lead Engineering: Civil, Structural &amp; Design Assurance</span>
                  <p className="flip-back-desc">
                    This new open-air 400 kV substation will help meet growing demand and connect new sources of cleaner power, as part of The Great Grid Upgrade. The scheme includes new access, drainage and landscaping, plus overhead line works terminating on gantries inside the substation. PCD delivered the majority of the engineering works on the project, from civil engineering through to design assurance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECT PARTNERS ================= */}
      <section className="wrap pp-section" aria-label="Project partners">
        <div className="pp-header">
          <div>
            <h2 className="t-h2 pp-heading">Built for complex<br />project teams.</h2>
          </div>
          <p className="pp-desc">
            PCD works alongside contractors, engineers and asset owners delivering UK substation programmes.
          </p>
        </div>

        <div className="pp-grid">
          <div className="pp-card">
            <span className="pp-idx">01</span>
            <div className="pp-img-wrap">
              <img
                src="/img/partner-01.jpg"
                alt="Main Contractors reinforced concrete foundation rebar and earthworks on UK infrastructure site"
                loading="lazy"
              />
            </div>
            <div className="pp-card-bottom">
              <span className="pp-card-title">Main<br />Contractors</span>
              <span className="pp-card-sub">Tier-1 &amp; EPC Delivery</span>
            </div>
          </div>

          <div className="pp-card">
            <span className="pp-idx">02</span>
            <div className="pp-img-wrap">
              <img
                src="/img/partner-02.jpg"
                alt="Construction Companies crane and structural steel building framework on infrastructure site"
                loading="lazy"
              />
            </div>
            <div className="pp-card-bottom">
              <span className="pp-card-title">Construction<br />Companies</span>
              <span className="pp-card-sub">Substation Civils &amp; Site Works</span>
            </div>
          </div>

          <div className="pp-card">
            <span className="pp-idx">03</span>
            <div className="pp-img-wrap">
              <img
                src="/img/partner-03.jpg"
                alt="Infrastructure Companies high-voltage 400 kV substation and electrical power grid"
                loading="lazy"
              />
            </div>
            <div className="pp-card-bottom">
              <span className="pp-card-title">Infrastructure<br />Companies</span>
              <span className="pp-card-sub">HV Transmission &amp; Grids</span>
            </div>
          </div>

          <div className="pp-card">
            <span className="pp-idx">04</span>
            <div className="pp-img-wrap">
              <img
                src="/img/partner-04.jpg"
                alt="Engineering Companies Protection and Control substation relay room and switchgear panels"
                loading="lazy"
              />
            </div>
            <div className="pp-card-bottom">
              <span className="pp-card-title">Engineering<br />Companies</span>
              <span className="pp-card-sub">Consultancies &amp; P&amp;C</span>
            </div>
          </div>

          <div className="pp-card">
            <span className="pp-idx">05</span>
            <div className="pp-img-wrap">
              <img
                src="/img/partner-05.jpg"
                alt="Project Clients 400 kV high-voltage substation power transformer and infrastructure asset"
                loading="lazy"
              />
            </div>
            <div className="pp-card-bottom">
              <span className="pp-card-title">Project<br />Clients</span>
              <span className="pp-card-sub">Utilities &amp; Stakeholders</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= POSITIONING & FACTS ================= */}
      <section className="wrap sec" aria-labelledby="h-pos">
        <div className="intro">
          <div></div>
          <div className="intro-right">
            <h2 id="h-pos" className="t-h2">
              Specialist engineering support <span className="grey">where technical decisions meet real project conditions.</span>
            </h2>
            <div className="intro-media">
              <div className="img">
                <img
                  src="/img/position.jpg"
                  alt="Aerial view of reinforced concrete foundations on an excavated site"
                  loading="lazy"
                />
              </div>
              <p className="t-body">
                PCD supports major power and infrastructure projects with specialist engineering expertise
                across civil, structural, Assurance, primary, Secondary and temporary works requirements.
              </p>
            </div>
          </div>
        </div>
        <div className="facts">
          <div className="card fact">
            <span className="idx">/01</span>
            <div>
              <div className="big">400 kV</div>
              <p className="t-small" style={{ marginTop: '12px' }}>
                Substation project experience, including GIS substations and 400/132 kV programmes.
              </p>
            </div>
          </div>
          <div className="card fact">
            <span className="idx">/02</span>
            <div>
              <div className="big">UK-wide</div>
              <p className="t-small" style={{ marginTop: '12px' }}>
                Substation projects supported across the UK, from Cornwall to Lincolnshire.
              </p>
            </div>
          </div>
          <div className="card fact">
            <span className="idx">/03</span>
            <div>
              <div className="big">Design to Delivery</div>
              <p className="t-small" style={{ marginTop: '12px' }}>
                Civil, structural, primary, P&amp;C, and temporary works engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ACCORDION ================= */}
      <section className="wrap sec" aria-labelledby="h-svc">
        <div className="shead">
          <h2 id="h-svc" className="t-h2">Our Services</h2>
          <div className="aside">
            <Link className="pill" href="/services">
              All Services{' '}
              <svg>
                <use href="#chev" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="svc">
          <div className="svc-side">
            <div className="card" style={{ display: 'grid', gap: '22px' }}>
              <h3 className="t-h4">Engineering capability for complex infrastructure.</h3>
              <p className="t-small">
                Focused technical capability across the engineering disciplines required to support major
                power and infrastructure projects.
              </p>
              <div className="row">
                <Link className="pill" href="/contact">
                  Discuss a Project{' '}
                  <svg>
                    <use href="#chev" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="acc" data-acc>
            {/* Item 001 */}
            <div className={`acc-item ${openAcc === 0 ? 'open' : ''}`}>
              <button
                type="button"
                className="acc-btn"
                aria-expanded={openAcc === 0}
                onClick={() => toggleAcc(0)}
              >
                <span className="idx">/001</span>
                <span className="t-h4">Civil &amp; Structural</span>
                <span className="pm" aria-hidden="true" />
              </button>
              <div className="acc-panel">
                <div>
                  <div className="acc-content">
                    <div className="img">
                      <img
                        src="/img/why.jpg"
                        alt="Steel building frame rising beside a tower crane"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <p className="t-body">
                        PCD delivers civil and structural engineering for new and extended substations, from early layouts to construction-ready designs. This covers foundations for transformers and HV plant, GIS and substation buildings, structures, cable trenches and drainage, with buildability considered from the start.
                      </p>
                      <ul className="chips">
                        <li>Substations</li>
                        <li>Foundations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 002 */}
            <div className={`acc-item ${openAcc === 1 ? 'open' : ''}`}>
              <button
                type="button"
                className="acc-btn"
                aria-expanded={openAcc === 1}
                onClick={() => toggleAcc(1)}
              >
                <span className="idx">/002</span>
                <span className="t-h4">Design Assurance</span>
                <span className="pm" aria-hidden="true" />
              </button>
              <div className="acc-panel">
                <div>
                  <div className="acc-content">
                    <div className="img">
                      <img
                        src="/img/s02.jpg"
                        alt="Engineering drawings laid out for review"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <p className="t-body">
                        PCD provides independent technical review of substation design packages, checking they are safe, buildable and compliant before they reach site. We give clear, actionable comments and track them through to approval, keeping projects moving.
                      </p>
                      <ul className="chips">
                        <li>Quality</li>
                        <li>Constructability</li>
                        <li>Coordination</li>
                        <li>Delivery</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 003 */}
            <div className={`acc-item ${openAcc === 2 ? 'open' : ''}`}>
              <button
                type="button"
                className="acc-btn"
                aria-expanded={openAcc === 2}
                onClick={() => toggleAcc(2)}
              >
                <span className="idx">/003</span>
                <span className="t-h4">Primary Works</span>
                <span className="pm" aria-hidden="true" />
              </button>
              <div className="acc-panel">
                <div>
                  <div className="acc-content">
                    <div className="img">
                      <img
                        src="/img/p04.jpg"
                        alt="Substation high-voltage insulators and busbars"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <p className="t-body">
                        PCD supports the primary side of substation projects: the high-voltage plant that carries and switches power. We help ensure transformers, switchgear and busbars fit together safely with the substation layout and civil design.
                      </p>
                      <ul className="chips">
                        <li>HV plant</li>
                        <li>Substations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 004 */}
            <div className={`acc-item ${openAcc === 3 ? 'open' : ''}`}>
              <button
                type="button"
                className="acc-btn"
                aria-expanded={openAcc === 3}
                onClick={() => toggleAcc(3)}
              >
                <span className="idx">/004</span>
                <span className="t-h4">Secondary Works (Protection &amp; Control)</span>
                <span className="pm" aria-hidden="true" />
              </button>
              <div className="acc-panel">
                <div>
                  <div className="acc-content">
                    <div className="img">
                      <img
                        src="/img/s04.jpg"
                        alt="Control room lined with electrical panels and instruments"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <p className="t-body">
                        PCD provides Protection &amp; Control engineering for substations, covering the systems that monitor, protect and control the network. Our secondary designs are clear, coordinated and ready for installation and commissioning.
                      </p>
                      <ul className="chips">
                        <li>Protection</li>
                        <li>Control</li>
                        <li>Substations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 005 */}
            <div className={`acc-item ${openAcc === 4 ? 'open' : ''}`}>
              <button
                type="button"
                className="acc-btn"
                aria-expanded={openAcc === 4}
                onClick={() => toggleAcc(4)}
              >
                <span className="idx">/005</span>
                <span className="t-h4">Temporary Works</span>
                <span className="pm" aria-hidden="true" />
              </button>
              <div className="acc-panel">
                <div>
                  <div className="acc-content">
                    <div className="img">
                      <img
                        src="/img/s03.jpg"
                        alt="Scaffolding wrapped around a structure under construction"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <p className="t-body">
                        PCD designs the temporary works that allow substation and infrastructure projects to be built safely. From excavation support to crane platforms and temporary access, our solutions suit live sites, tight programmes and restricted access.
                      </p>
                      <ul className="chips">
                        <li>Construction</li>
                        <li>Substations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW WE WORK ================= */}
      <section className="wrap sec" id="how-we-work" aria-labelledby="h-app">
        <div className="shead">
          <h2 id="h-app" className="t-h2">
            A clear route from technical review <span className="grey">to project delivery.</span>
          </h2>
        </div>
        <div className="img app-img">
          <img
            src="/img/approach.jpg"
            alt="Technical drawings with drafting pencils, scale rule and tape"
            loading="lazy"
          />
        </div>
        <ol className="steps">
          <li className="card step">
            <div className="step-top"><span className="k">RECEIVE</span><span className="idx">/01</span></div>
            <div>
              <h3 className="t-h4">Design package submitted.</h3>
              <p className="t-small" style={{ marginTop: '8px' }}>Clear intake and scope understanding.</p>
            </div>
          </li>
          <li className="card step">
            <div className="step-top"><span className="k">ASSURE</span><span className="idx">/02</span></div>
            <div>
              <h3 className="t-h4">Technical review.</h3>
              <p className="t-small" style={{ marginTop: '8px' }}>Technical review with site context in view.</p>
            </div>
          </li>
          <li className="card step">
            <div className="step-top"><span className="k">RESOLVE</span><span className="idx">/03</span></div>
            <div>
              <h3 className="t-h4">Comments and revisions tracked.</h3>
              <p className="t-small" style={{ marginTop: '8px' }}>Actionable comments and controlled responses.</p>
            </div>
          </li>
          <li className="card step" style={{ background: 'var(--ink)', color: '#fff' }}>
            <div className="step-top"><span className="k">APPROVE</span><span className="idx" style={{ color: '#8A8A8A' }}>/04</span></div>
            <div>
              <h3 className="t-h4">Progress to sign-off.</h3>
              <p className="t-small" style={{ marginTop: '8px', color: '#A8A8A8' }}>A clear route through to client approval.</p>
            </div>
          </li>
        </ol>
      </section>

      {/* ================= WHY PCD ================= */}
      <section className="wrap sec" aria-labelledby="h-why">
        <div className="shead" style={{ alignItems: 'start' }}>
          <div style={{ display: 'grid', gap: '20px' }}>
            <h2 id="h-why" className="t-h2">
              Substation engineering that works <span className="grey">in the real world.</span>
            </h2>
            <p className="t-body" style={{ maxWidth: '60ch' }}>
              Substations are complex, live and tightly programmed. PCD brings civil, structural, primary, secondary and temporary works expertise together, so design decisions hold up on site, not just on paper.
            </p>
          </div>
        </div>
        <div className="why-grid">
          <div className="card wcard" style={{ gridColumn: 'span 4' }}>
            <span className="idx">/01</span>
            <div>
              <h3 className="t-h4">Power grid specialists</h3>
              <p className="t-small" style={{ marginTop: '8px' }}>
                Experience across the UK transmission network, from 400 kV and GIS substations to supergrid transformer (SGT) connections and grid reinforcement schemes.
              </p>
            </div>
          </div>
          <div className="card wcard" style={{ gridColumn: 'span 4' }}>
            <span className="idx">/02</span>
            <div>
              <h3 className="t-h4">Joined-up disciplines</h3>
              <p className="t-small" style={{ marginTop: '8px' }}>
                Civil, structural, primary, secondary and temporary works coordinated under one team, with fewer gaps between packages and smoother project delivery.
              </p>
            </div>
          </div>
          <div className="icard" style={{ gridColumn: 'span 4' }}>
            <img
              src="/img/card2.jpg"
              alt="Site-aware engineering on live high-voltage power substation"
              loading="lazy"
            />
            <div>
              <span className="idx">/03</span>
              <h3 className="t-h4">Site-aware engineering</h3>
              <p>Designs that account for access, sequencing, outages and safety on live HV sites across the power grid.</p>
            </div>
          </div>
          <div className="icard" style={{ gridColumn: 'span 8' }}>
            <img
              src="/img/s01.jpg"
              alt="Clear route to approval for substation design packages"
              loading="lazy"
            />
            <div>
              <span className="idx">/04</span>
              <h3 className="t-h4">Clear route to approval</h3>
              <p>Actionable comments and controlled revisions that keep grid projects moving through to sign-off without unnecessary delays.</p>
            </div>
          </div>
          <div className="icard" style={{ gridColumn: 'span 4' }}>
            <img
              src="/img/card1.jpg"
              alt="Steel roof trusses lit by low sun"
              loading="lazy"
            />
            <div>
              <h3 className="t-h4">Built to work alongside complex project teams.</h3>
              <p>PCD works both as a specialist subcontractor and directly with project owners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS CAROUSEL ================= */}
      <section className="wrap rev-section" aria-labelledby="h-reviews">
        {/* Top Centered Header */}
        <div className="rev-head-center">
          <h2 id="h-reviews" className="t-h2 rev-top-title">
            Client &amp; partner <span className="grey">testimonials.</span>
          </h2>
        </div>

        {/* Split Carousel Section */}
        <div className="rev-split-wrap">
          {/* Left Column: Quote Icon, Heading, Navigation Controls */}
          <div className="rev-left-col">
            <div className="rev-quote-icon" aria-hidden="true">
              <svg width="46" height="40" viewBox="0 0 512 512" fill="currentColor">
                <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" />
              </svg>
            </div>
            <h3 className="rev-left-heading">
              What our<br />partners say.
            </h3>
            <div className="rev-controls-row">
              <button
                type="button"
                className="rev-arrow-btn"
                onClick={prevReview}
                aria-label="Previous testimonial"
              >
                <svg viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M10 3L5 8l5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="rev-progress-track" aria-hidden="true">
                <div
                  className="rev-progress-bar"
                  style={{
                    width: `${74 / clientReviews.length}px`,
                    left: `${(currentReview / (clientReviews.length - 1)) * (74 - 74 / clientReviews.length)}px`,
                  }}
                />
              </div>
              <button
                type="button"
                className="rev-arrow-btn"
                onClick={nextReview}
                aria-label="Next testimonial"
              >
                <svg viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M6 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Carousel Loop Track */}
          <div
            className="rev-carousel-container"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            aria-live="polite"
          >
            <div
              className="rev-carousel-track"
              style={{
                ['--current-idx' as any]: currentReview,
              }}
            >
              {clientReviews.concat(clientReviews).map((rev, idx) => (
                <div
                  key={`${rev.id}-${idx}`}
                  className="rev-card-item"
                  aria-hidden={idx !== currentReview && idx !== (currentReview + 1) % clientReviews.length}
                >
                  <div className="rev-bubble">
                    <p className="rev-quote-text">{rev.text}</p>
                  </div>
                  <div className="rev-author-row">
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      className="rev-avatar"
                      loading="lazy"
                    />
                    <div className="rev-author-info">
                      <strong className="rev-author-name">{rev.name}</strong>
                      <span className="rev-author-role">{rev.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="wrap sec" id="faq" aria-labelledby="h-faq">
        <div className="shead">
          <h2 id="h-faq" className="t-h2">Questions</h2>
        </div>
        <div className="faq-grid">
          <div className="card ask">
            <div className="ask-badge">PCD</div>
            <div>
              <p style={{ fontWeight: 500, letterSpacing: '-.02em', color: 'var(--ink)' }}>Perpetual Civil Design</p>
              <p className="t-small">hr@civildesignltd.com</p>
            </div>
            <div>
              <Link className="pill" href="/contact">
                Ask Questions{' '}
                <svg>
                  <use href="#chev" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="faq">
            <details open>
              <summary>What services does PCD provide?<span className="pm" aria-hidden="true" /></summary>
              <p className="ans">
                PCD provides Civil &amp; Structural Engineering, Civil Design Assurance, Temporary Works and
                Protection &amp; Control support for major power and infrastructure projects.
              </p>
            </details>
            <details>
              <summary>What types of projects does PCD support?<span className="pm" aria-hidden="true" /></summary>
              <p className="ans">
                PCD works on major power and infrastructure projects, including substation programmes.
                Project experience includes 400 kV substations, a 400 kV GIS substation and 400/132 kV substation civil
                and structural engineering.
              </p>
            </details>
            <details>
              <summary>Who does PCD work with?<span className="pm" aria-hidden="true" /></summary>
              <p className="ans">
                PCD works both as a specialist subcontractor and directly with project owners. Partners
                include main contractors, construction companies, infrastructure companies, engineering companies and
                project owners.
              </p>
            </details>
            <details>
              <summary>Where does PCD work?<span className="pm" aria-hidden="true" /></summary>
              <p className="ans">
                PCD supports projects across the UK. Selected projects are located in Cornwall, Essex,
                Lincolnshire, Hertfordshire, and London and Southeast England.
              </p>
            </details>
            <details>
              <summary>How does the design assurance process work?<span className="pm" aria-hidden="true" /></summary>
              <p className="ans">
                The route runs in four stages: Receive, where the design package is submitted; Assure, a
                technical review with site context in view; Resolve, where comments and revisions are tracked; and
                Approve, progressing to client sign-off.
              </p>
            </details>
            <details>
              <summary>How do I start a project enquiry?<span className="pm" aria-hidden="true" /></summary>
              <p className="ans">
                Use the enquiry form on the Contact page, or email hr@civildesignltd.com.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="wrap" style={{ paddingTop: 'clamp(40px, 5vw, 64px)' }} aria-labelledby="h-cta">
        <div className="cta-frame">
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
            <h2 id="h-cta" className="cta-card-title">
              Have a project that needs specialist engineering support?
            </h2>
            <p className="t-small">Talk to PCD about your next power, energy or infrastructure project.</p>
            <Link className="pill" href="/contact" style={{ justifyContent: 'center' }}>
              Discuss a Project{' '}
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
