'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [openAcc, setOpenAcc] = useState<number | null>(0);
  const railRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollRail = (direction: 'prev' | 'next') => {
    if (!railRef.current) return;
    const scrollAmount = railRef.current.clientWidth * 0.75;
    railRef.current.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  const handleRailScroll = () => {
    if (!railRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = railRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
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
            alt="Engineering expertise for critical power infrastructure"
            fetchPriority="high"
            decoding="async"
            width={1024}
            height={576}
          />
          <div className="hero-center-content">
            <h1 id="h-hero" className="hero-center-title">
              Engineering expertise<br />for critical power infrastructure
            </h1>
            <p className="hero-center-sub">
              Specialist civil, structural, and Protection &amp; Control engineering<br />for major
              UK power and infrastructure projects.
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

      {/* ================= PROJECT PARTNERS ================= */}
      <section className="wrap pp-section" aria-label="Project partners">
        <div className="pp-header">
          <div>
            <span className="dot-label">Project partners</span>
            <h2 className="t-h2 pp-heading">Built for complex<br />project teams.</h2>
          </div>
          <p className="pp-desc">
            PCD works alongside contractors, engineers and project owners across major UK power and
            infrastructure programmes.
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
              <span className="pp-card-sub">Heavy Civil &amp; Site Works</span>
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
                alt="Project Owners 400 kV high-voltage substation power transformer and infrastructure asset"
                loading="lazy"
              />
            </div>
            <div className="pp-card-bottom">
              <span className="pp-card-title">Project<br />Owners</span>
              <span className="pp-card-sub">Utilities &amp; Asset Clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= POSITIONING & FACTS ================= */}
      <section className="wrap sec" aria-labelledby="h-pos">
        <div className="intro">
          <div><span className="dot-label">Built around complex infrastructure</span></div>
          <div className="intro-right">
            <h2 id="h-pos" className="t-h3">
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
                across civil, structural, assurance, temporary works and Protection &amp; Control requirements.
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
                Projects supported across the UK, from Cornwall to Lincolnshire.
              </p>
            </div>
          </div>
          <div className="card fact">
            <span className="idx">/03</span>
            <div>
              <div className="big">4</div>
              <p className="t-small" style={{ marginTop: '12px' }}>
                Engineering disciplines: civil &amp; structural, design assurance, temporary works, Protection &amp; Control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SELECTED PROJECTS ================= */}
      <section className="wrap sec" aria-labelledby="h-work">
        <div className="shead">
          <span className="dot-label">Our work</span>
          <h2 id="h-work" className="t-h2">Selected Projects</h2>
          <div className="aside">
            <button
              className="circle light"
              onClick={() => scrollRail('prev')}
              aria-label="Previous projects"
              disabled={!canScrollLeft}
            >
              <svg>
                <use href="#chevl" />
              </svg>
            </button>
            <button
              className="circle"
              onClick={() => scrollRail('next')}
              aria-label="Next projects"
              disabled={!canScrollRight}
            >
              <svg>
                <use href="#chev" />
              </svg>
            </button>
          </div>
        </div>
        <p className="t-body" style={{ margin: '-24px 0 32px' }}>
          Experience across major power infrastructure. A selection of
          projects demonstrating PCD&apos;s experience across complex substation and power infrastructure programmes.
        </p>
        <div className="rail" id="rail" ref={railRef} onScroll={handleRailScroll}>
          <Link className="pcard zoom" href="/projects">
            <div className="img">
              <img
                src="/img/p01.jpg"
                alt="Outdoor high-voltage substation with gantries and transformers"
                loading="lazy"
              />
              <span className="rep">Representative image</span>
            </div>
            <div className="pcard-body">
              <span className="idx">/01</span>
              <h3 className="t-h4">Landulph 400 kV Substation</h3>
              <div className="pcard-meta"><span>Cornwall, UK</span><span>Power &amp; Energy</span></div>
              <p className="scope">Civil Engineering and Design Assurance</p>
            </div>
          </Link>
          <Link className="pcard zoom" href="/projects">
            <div className="img">
              <img
                src="/img/p02.jpg"
                alt="Power transformer with bushings and cooling pipework"
                loading="lazy"
              />
              <span className="rep">Representative image</span>
            </div>
            <div className="pcard-body">
              <span className="idx">/02</span>
              <h3 className="t-h4">Bulls Lodge 400 kV GIS Substation</h3>
              <div className="pcard-meta"><span>Essex, UK</span><span>Power &amp; Energy</span></div>
              <p className="scope">GIS Buildings, Foundations and Structural Design Assurance</p>
            </div>
          </Link>
          <Link className="pcard zoom" href="/projects">
            <div className="img">
              <img
                src="/img/p03.jpg"
                alt="Line of transmission towers crossing flat open farmland"
                loading="lazy"
              />
              <span className="rep">Representative image</span>
            </div>
            <div className="pcard-body">
              <span className="idx">/03</span>
              <h3 className="t-h4">Navenby 400 kV Substation</h3>
              <div className="pcard-meta"><span>Lincolnshire, UK</span><span>Power &amp; Energy</span></div>
              <p className="scope">Civil Engineering and Design Assurance</p>
            </div>
          </Link>
          <Link className="pcard zoom" href="/projects">
            <div className="img">
              <img
                src="/img/p04.jpg"
                alt="Close-up of substation insulators and bushings against blue sky"
                loading="lazy"
              />
              <span className="rep">Representative image</span>
            </div>
            <div className="pcard-body">
              <span className="idx">/04</span>
              <h3 className="t-h4">Wymondley Substation</h3>
              <div className="pcard-meta"><span>Hertfordshire, UK</span><span>Power &amp; Energy</span></div>
              <p className="scope">GIS Substation Civil and Structural Engineering</p>
            </div>
          </Link>
          <Link className="pcard zoom" href="/projects">
            <div className="img">
              <img
                src="/img/p05.jpg"
                alt="Black and white view of a substation compound"
                loading="lazy"
              />
              <span className="rep">Representative image</span>
            </div>
            <div className="pcard-body">
              <span className="idx">/05</span>
              <h3 className="t-h4">LPT2 Substation Programme</h3>
              <div className="pcard-meta"><span>London and Southeast England, UK</span><span>Power &amp; Energy</span></div>
              <p className="scope">400/132 kV Substation Civil and Structural Engineering</p>
            </div>
          </Link>
        </div>
      </section>

      {/* ================= SERVICES ACCORDION ================= */}
      <section className="wrap sec" aria-labelledby="h-svc">
        <div className="shead">
          <span className="dot-label">Services</span>
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
                <span className="t-h4">Civil &amp; Structural Engineering</span>
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
                        PCD provides civil and structural engineering expertise for major infrastructure
                        and substation projects.
                      </p>
                      <ul className="chips">
                        <li>Infrastructure</li>
                        <li>Substations</li>
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
                <span className="t-h4">Civil Design Assurance</span>
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
                        Technical design assurance focused on quality, constructability, coordination and
                        project delivery.
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
                        Engineering support for temporary works associated with complex construction and
                        infrastructure projects.
                      </p>
                      <ul className="chips">
                        <li>Construction</li>
                        <li>Infrastructure</li>
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
                <span className="t-h4">Protection &amp; Control</span>
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
                        Specialist Protection &amp; Control support for substation and power
                        infrastructure environments.
                      </p>
                      <ul className="chips">
                        <li>Substations</li>
                        <li>Power infrastructure</li>
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
          <span className="dot-label">How we work</span>
          <h2 id="h-app" className="t-h3">
            A clear route from technical review <span className="grey">to project delivery.</span>
          </h2>
          <div />
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
          <span className="dot-label" style={{ paddingTop: '12px' }}>Why PCD</span>
          <div style={{ display: 'grid', gap: '20px' }}>
            <h2 id="h-why" className="t-h3">
              Engineering assurance that works <span className="grey">in the real world.</span>
            </h2>
            <p className="t-body" style={{ maxWidth: '60ch' }}>
              Design assurance is more than checking whether a drawing looks right.
              It is about understanding how design information interacts with access, sequencing, safety, construction and
              the wider site.
            </p>
          </div>
          <div />
        </div>
        <div className="why-grid">
          <div className="card wcard" style={{ gridColumn: 'span 4' }}>
            <span className="idx">/01</span>
            <div>
              <h3 className="t-h4">Site-aware engineering</h3>
              <p className="t-small" style={{ marginTop: '8px' }}>
                Understanding design in the context of real construction and site conditions.
              </p>
            </div>
          </div>
          <div className="card wcard" style={{ gridColumn: 'span 4' }}>
            <span className="idx">/02</span>
            <div>
              <h3 className="t-h4">Actionable technical input</h3>
              <p className="t-small" style={{ marginTop: '8px' }}>
                Clear technical comments that help teams resolve issues and keep work moving.
              </p>
            </div>
          </div>
          <div className="icard" style={{ gridColumn: 'span 4' }}>
            <img
              src="/img/card2.jpg"
              alt="Red steel formwork and rebar on a concrete construction site"
              loading="lazy"
            />
            <div>
              <span className="idx">/03</span>
              <h3 className="t-h4">Controlled revisions</h3>
              <p>Structured coordination of comments, responses and design changes.</p>
            </div>
          </div>
          <div className="icard" style={{ gridColumn: 'span 8' }}>
            <img
              src="/img/s01.jpg"
              alt="Multi-storey structure enclosed in scaffolding"
              loading="lazy"
            />
            <div>
              <span className="idx">/04</span>
              <h3 className="t-h4">Traceable decisions</h3>
              <p>Clear technical decisions that support the route from submission to approval.</p>
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

      {/* ================= CLIENT FEEDBACK ================= */}
      <section className="wrap sec" aria-labelledby="h-fb">
        <div className="shead">
          <span className="dot-label">Client feedback</span>
          <h2 id="h-fb" className="t-h2">Trusted on major infrastructure</h2>
          <div className="aside">
            <Link className="pill" href="/contact">
              Discuss a Project{' '}
              <svg>
                <use href="#chev" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="fb">
          <div className="fb-side">
            <div>
              <span className="idx" style={{ color: 'var(--accent)' }}>/ Proven Track Record</span>
              <h3
                className="t-h3"
                style={{
                  marginTop: '14px',
                  color: '#fff',
                  fontSize: 'clamp(1.4rem, 2vw, 1.85rem)',
                  lineHeight: 1.2,
                }}
              >
                Engineered for quality, precision &amp; programme certainty.
              </h3>
              <p className="t-small" style={{ marginTop: '12px', color: '#A8A8A8', lineHeight: 1.6 }}>
                PCD collaborates with Tier-1 contractors, EPC consortia, and infrastructure owners across high-voltage substation and power generation programmes.
              </p>
            </div>
            <div className="fb-side-stats">
              <div>
                <span className="fb-stat-num">
                  400<span style={{ fontSize: '1rem', color: 'var(--accent)' }}>kV</span>
                </span>
                <p className="fb-stat-lbl">Substation &amp; GIS Engineering Experience</p>
              </div>
              <div>
                <span className="fb-stat-num">
                  100<span style={{ fontSize: '1rem', color: 'var(--accent)' }}>%</span>
                </span>
                <p className="fb-stat-lbl">Design Assurance Compliance Rate</p>
              </div>
            </div>
          </div>

          <div className="fb-list">
            <div className="fb-card">
              <div>
                <div className="fb-stars" aria-label="5 stars rating">
                  <svg><use href="#star" /></svg>
                  <svg><use href="#star" /></svg>
                  <svg><use href="#star" /></svg>
                  <svg><use href="#star" /></svg>
                  <svg><use href="#star" /></svg>
                </div>
                <p className="fb-quote" style={{ marginTop: '16px' }}>
                  &ldquo;PCD&apos;s design assurance and technical review were instrumental
                  in keeping our 400 kV substation programme on schedule. Their practical understanding of
                  constructability and site constraints prevented costly on-site revisions.&rdquo;
                </p>
              </div>
              <div className="fb-author">
                <strong className="fb-author-name">Principal Project Director</strong>
                <span className="fb-author-role">Major UK Transmission &amp; Substation EPC Contractor</span>
                <span className="fb-author-tag">Landulph 400 kV Substation Programme</span>
              </div>
            </div>

            <div className="fb-card">
              <div>
                <div className="fb-stars" aria-label="5 stars rating">
                  <svg><use href="#star" /></svg>
                  <svg><use href="#star" /></svg>
                  <svg><use href="#star" /></svg>
                  <svg><use href="#star" /></svg>
                  <svg><use href="#star" /></svg>
                </div>
                <p className="fb-quote" style={{ marginTop: '16px' }}>
                  &ldquo;The depth of expertise in structural engineering, temporary
                  works, and Protection &amp; Control that PCD brought to our team gave both our engineers and the client
                  complete technical confidence.&rdquo;
                </p>
              </div>
              <div className="fb-author">
                <strong className="fb-author-name">Head of Civil Engineering</strong>
                <span className="fb-author-role">National Energy Infrastructure Consortium</span>
                <span className="fb-author-tag">Bulls Lodge GIS Substation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="wrap sec" id="faq" aria-labelledby="h-faq">
        <div className="shead">
          <span className="dot-label">FAQ</span>
          <h2 id="h-faq" className="t-h2">Questions</h2>
          <div />
        </div>
        <div className="faq-grid">
          <div className="card ask">
            <div className="ask-badge">PCD</div>
            <div>
              <p style={{ fontWeight: 600, letterSpacing: '-.03em' }}>Perpetual Civil Design</p>
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
            <h2 id="h-cta" className="t-h4" style={{ fontSize: 'clamp(1.5rem, 2.2vw, 2rem)' }}>
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
