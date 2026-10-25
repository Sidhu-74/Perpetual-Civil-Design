'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface ProjectItem {
  id: number;
  idx: string;
  title: string;
  location: string;
  sector: string;
  img: string;
  alt: string;
  frontScope: string;
  backDesc: string;
}

const allProjects: ProjectItem[] = [
  {
    id: 1,
    idx: '/01',
    title: 'Landulph 400 kV Substation',
    location: 'Cornwall, UK',
    sector: 'Power & Energy',
    img: '/img/p01.jpg',
    alt: 'Landulph 400 kV Substation outdoor equipment and busbars',
    frontScope: 'Lead Engineering: Civil, Structural & Design Assurance',
    backDesc:
      'Landulph is a National Grid substation where works form part of the ongoing expansion of the transmission network, upgrading the grid to support the UK’s shift to clean energy. PCD delivered the majority of the engineering works on the project, from civil engineering through to design assurance, reviewing design packages with site conditions in view to help keep the programme on track.',
  },
  {
    id: 2,
    idx: '/02',
    title: 'Navenby 400 kV Substation',
    location: 'Lincolnshire, UK',
    sector: 'Power & Energy',
    img: '/img/p03.jpg',
    alt: 'Navenby 400 kV Substation open-air plant and gantries',
    frontScope: 'Lead Engineering: Civil, Structural & Design Assurance',
    backDesc:
      'This new open-air 400 kV substation will help meet growing demand and connect new sources of cleaner power, as part of The Great Grid Upgrade. The scheme includes new access, drainage and landscaping, plus overhead line works terminating on gantries inside the substation. PCD delivered the majority of the engineering works on the project, from civil engineering through to design assurance.',
  },
  {
    id: 3,
    idx: '/03',
    title: 'Bicker Fen Substation',
    location: 'Lincolnshire, UK',
    sector: 'Power & Energy',
    img: '/img/card1.jpg',
    alt: 'Bicker Fen Substation high-voltage interconnector bays',
    frontScope: '400 kV Substation Civil & Structural Engineering',
    backDesc:
      'National Grid extended its Bicker Fen 400 kV substation to connect the Viking Link interconnector, a 1,400 MW link between the British and Danish transmission systems. The extension added double busbars, a bus coupler and two interconnector bays. PCD delivered civil and structural engineering for the 400 kV works.',
  },
  {
    id: 4,
    idx: '/04',
    title: 'West Burton Substation',
    location: 'Nottinghamshire, UK',
    sector: 'Power & Energy',
    img: '/img/card2.jpg',
    alt: 'West Burton Substation 400 kV transmission infrastructure',
    frontScope: '400 kV Substation Civil Engineering & Foundations',
    backDesc:
      'West Burton holds a notable place in UK grid history: the country’s first 400 kV line ran from West Burton power station to Sundon in Bedfordshire. Ongoing refurbishment of the surrounding network includes new underground cables and high-voltage connections at the substation. PCD provided civil engineering and foundation design for the 400 kV substation.',
  },
  {
    id: 5,
    idx: '/05',
    title: 'Wymondley Substation',
    location: 'Hertfordshire, UK',
    sector: 'Power & Energy',
    img: '/img/p04.jpg',
    alt: 'Wymondley Substation 400 kV GIS equipment and transformer plinth',
    frontScope: '400 kV GIS Substation Civil & Structural Engineering',
    backDesc:
      'Wymondley is a key National Grid substation in North Hertfordshire. As part of recent upgrade works, a 120-tonne transformer was moved across the site and positioned onto its final plinth. PCD delivered civil and structural engineering for the 400 kV GIS substation works.',
  },
  {
    id: 6,
    idx: '/06',
    title: 'Bulls Lodge 400 kV GIS Substation',
    location: 'Essex, UK',
    sector: 'Power & Energy',
    img: '/img/p02.jpg',
    alt: 'Bulls Lodge 400 kV GIS Substation building and switchgear',
    frontScope: 'Temporary Works',
    backDesc:
      'Bulls Lodge is a substation extension featuring a GIS building and non-SF6 switchgear, connecting new solar generation to the 400 kV network. PCD provided temporary works engineering for the project, supporting safe construction of the GIS buildings and foundations.',
  },
  {
    id: 7,
    idx: '/07',
    title: 'Spennymoor Substation',
    location: 'County Durham, UK',
    sector: 'Power & Energy',
    img: '/img/position.jpg',
    alt: 'Spennymoor 400 kV Substation overhead lines and busbars',
    frontScope: '400 kV Substation Civil & Structural Engineering',
    backDesc:
      'Spennymoor is a 400 kV substation in the North East, connected by overhead lines to Stella West on Tyneside and Norton on Teesside. It is a strategic node on the regional network, with circuit upgrades planned to increase capacity. PCD provided civil and structural engineering for the 400 kV substation.',
  },
  {
    id: 8,
    idx: '/08',
    title: 'Cowley 400 kV Bay Extension',
    location: 'Oxfordshire, UK',
    sector: 'Power & Energy',
    img: '/img/p05.jpg',
    alt: 'Cowley 400 kV Bay Extension steel gantries and supports',
    frontScope: 'Substation Bay Extension & Structural Engineering',
    backDesc:
      'Cowley sits on the Cowley–Minety–Walham 400 kV overhead line, a key transmission route serving Oxfordshire. PCD delivered structural engineering for a bay extension at the substation, supporting new connections to the 400 kV network.',
  },
  {
    id: 9,
    idx: '/09',
    title: 'Burwell Substation',
    location: 'Cambridgeshire, UK',
    sector: 'Power & Energy',
    img: '/img/s01.jpg',
    alt: 'Burwell 400/132 kV Substation network stability equipment',
    frontScope: '400/132 kV Substation Civil Engineering & Technical Assurance',
    backDesc:
      'Burwell Main is a 400/132 kV National Grid substation in East Cambridgeshire, linked to Pelham and Walpole. Recent works have extended the substation to add network stability equipment, supporting the integration of large-scale renewable generation. PCD provided civil engineering and technical assurance.',
  },
  {
    id: 10,
    idx: '/10',
    title: 'Wimbledon (LPT2)',
    location: 'London, UK',
    sector: 'Power & Energy (LPT2)',
    img: '/img/s03.jpg',
    alt: 'Wimbledon Substation London Power Tunnels shaft and headhouse',
    frontScope: '400 kV Substation Civil Engineering & Shaft Foundations',
    backDesc:
      'Wimbledon is the western end of London Power Tunnels 2, a programme rewiring South London through deep cable tunnels. The site’s shaft is about 15 m across and 35 m deep, topped by a new headhouse for ventilation and tunnel access. PCD provided civil engineering and shaft foundation design for the 400 kV substation works.',
  },
  {
    id: 11,
    idx: '/11',
    title: 'New Cross (LPT2)',
    location: 'London, UK',
    sector: 'Power & Energy (LPT2)',
    img: '/img/s02.jpg',
    alt: 'New Cross Substation deep tunnel shaft construction',
    frontScope: '400 kV Substation Civil & Structural Engineering',
    backDesc:
      'Cross substation in Southwark is a key node on London Power Tunnels 2. The new New Cross–Hurst circuit runs 18 km beneath South London in tunnels up to 50 m deep, and serves around 340,000 properties. PCD delivered civil and structural engineering for the 400 kV substation.',
  },
  {
    id: 12,
    idx: '/12',
    title: 'Hurst (LPT2)',
    location: 'Kent / South East London, UK',
    sector: 'Power & Energy (LPT2)',
    img: '/img/s04.jpg',
    alt: 'Hurst Substation eastern tunnel terminal and headhouse',
    frontScope: 'Substation Civil Engineering & Technical Assurance',
    backDesc:
      'Hurst in Bexley is the eastern end of the LPT2 tunnel network. The site includes a shaft about 15 m wide and 35 m deep, with a new headhouse providing ventilation and permanent tunnel access. PCD provided civil engineering and technical assurance.',
  },
  {
    id: 13,
    idx: '/13',
    title: 'Littlebrook (LPT2)',
    location: 'Kent, UK',
    sector: 'Power & Energy (LPT2)',
    img: '/img/projhero.jpg',
    alt: 'Littlebrook 400/132 kV Substation plant and switchgear',
    frontScope: '400/132 kV Substation Civil & Structural Engineering',
    backDesc:
      'Littlebrook is a major 400 kV substation in Kent, supplying power to the South East. Its replacement included cabling, overhead line connections and switchgear design. PCD delivered civil and structural engineering for the 400/132 kV substation.',
  },
  {
    id: 14,
    idx: '/14',
    title: 'Minety Substation',
    location: 'Wiltshire, UK',
    sector: 'Power & Energy',
    img: '/img/why.jpg',
    alt: 'Minety Battery Energy Storage and Supergrid Transformers',
    frontScope: 'Battery Energy Storage & Substation Civil Engineering',
    backDesc:
      'Minety has become a hub for grid-scale battery storage, including what was billed as Europe’s largest battery storage development. The substation extension adds supergrid transformers to connect around 450 MVA of battery storage and solar generation. PCD provided civil engineering for the battery storage and substation works.',
  },
  {
    id: 15,
    idx: '/15',
    title: 'Mannington Substation',
    location: 'Dorset, UK',
    sector: 'Power & Energy',
    img: '/img/approach.jpg',
    alt: 'Mannington 400/132 kV Substation and transmission network',
    frontScope: '400/132 kV Substation Civil & Structural Engineering',
    backDesc:
      'Mannington is a large 400 kV substation and one of only three in Dorset with capacity for access to the National Grid. That makes it a key connection point for new energy projects in the region. PCD delivered civil and structural engineering for the 400/132 kV substation.',
  },
];

export default function ProjectsPage() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const toggleFlip = (id: number) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
    setFlippedCard(null);
    const section = document.getElementById('projects-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 12 on page 1, next 3 on page 2
  const displayedProjects =
    currentPage === 1 ? allProjects.slice(0, 12) : allProjects.slice(12, 15);

  return (
    <main data-page="projects">
      {/* ================= HERO ================= */}
      <section className="hero" aria-labelledby="h-pp">
        <div className="hero-frame">
          <img
            src="/img/projhero.jpg"
            alt="Substation busbars and gantries behind a line of trees"
            fetchPriority="high"
          />
          <div className="hero-inner">
            <div className="hero-left-content">
              <span className="status">Project Experience</span>
              <h1 id="h-pp" className="hero-display-title">
                Experience across critical<br />power infrastructure.
              </h1>
              <p className="hero-display-sub">
                Selected projects demonstrating PCD&apos;s experience across<br />major substation and
                infrastructure programmes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 15 PROJECTS GALLERY ================= */}
      <section className="wrap sec" id="projects-section">
        <div className="shead">
          <h2 className="t-h2">Our Projects</h2>
          <div className="aside">
            <p className="t-small">Images shown are representative of each project type.</p>
          </div>
        </div>

        {/* 15 Projects Paginated Container: Page 1 (1–12) & Page 2 (13–15) */}
        <div className="projects-paginated-container">
          <div
            className={`projects-page active`}
            key={currentPage}
            data-proj-page={currentPage}
          >
            <div className="projects-uniform-grid">
              {displayedProjects.map((p) => {
                const isFlipped = flippedCard === p.id;
                return (
                  <div
                    key={p.id}
                    className={`flip-card ${isFlipped ? 'is-flipped' : ''}`}
                    onClick={() => toggleFlip(p.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleFlip(p.id);
                      }
                    }}
                    tabIndex={0}
                    role="region"
                    aria-label={`${p.title} project card. Click or hover to reveal details.`}
                  >
                    <div className="flip-card-inner">
                      {/* FRONT OF CARD */}
                      <div className="flip-card-front">
                        <div className="img">
                          <img
                            src={p.img}
                            alt={p.alt}
                            loading="lazy"
                          />
                          <span className="rep">Representative image</span>
                        </div>
                        <div className="pcard-front-body">
                          <div className="pcard-front-top">
                            <span className="pcard-idx">{p.idx}</span>
                            <span className="pcard-loc">{p.location}</span>
                          </div>
                          <div className="pcard-front-main">
                            <h3 className="t-h4 pcard-front-title">{p.title}</h3>
                            <span className="pcard-sector">{p.sector}</span>
                          </div>
                          <div className="pcard-front-scope">
                            <span className="pcard-scope-label">Scope</span>
                            <p className="pcard-scope-text">{p.frontScope}</p>
                          </div>
                        </div>
                      </div>

                      {/* BACK OF CARD */}
                      <div className="flip-card-back">
                        <div className="flip-back-top">
                          <span className="flip-back-idx">{p.idx}</span>
                          <span className="flip-back-tag">{p.location}</span>
                        </div>
                        <div className="flip-back-content">
                          <h3 className="flip-back-title">{p.title}</h3>
                          <span className="flip-back-scope-label">{p.frontScope}</span>
                          <p className="flip-back-desc">{p.backDesc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Centered Pagination Controls */}
          <div className="projects-pagination">
            <div className="projects-page-btns">
              <button
                type="button"
                className="proj-nav-btn"
                id="projPrev"
                disabled={currentPage === 1}
                onClick={() => goToPage(currentPage - 1)}
                aria-label="Previous projects page"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M10 3.5L5.5 8L10 12.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Previous</span>
              </button>
              <div className="proj-page-nums" id="projPageNums">
                <button
                  type="button"
                  className={`proj-num-btn ${currentPage === 1 ? 'active' : ''}`}
                  onClick={() => goToPage(1)}
                  aria-label="Page 1"
                  aria-current={currentPage === 1 ? 'page' : undefined}
                >
                  1
                </button>
                <button
                  type="button"
                  className={`proj-num-btn ${currentPage === 2 ? 'active' : ''}`}
                  onClick={() => goToPage(2)}
                  aria-label="Page 2"
                  aria-current={currentPage === 2 ? 'page' : undefined}
                >
                  2
                </button>
              </div>
              <button
                type="button"
                className="proj-nav-btn"
                id="projNext"
                disabled={currentPage === 2}
                onClick={() => goToPage(currentPage + 1)}
                aria-label="Next projects page"
              >
                <span>Next</span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M6 3.5L10.5 8L6 12.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <span className="projects-page-info" id="projPageInfo">
              {currentPage === 1 ? 'Showing 1–12 of 15 projects' : 'Showing 13–15 of 15 projects'}
            </span>
          </div>
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="wrap sec">
        <div className="cta-frame" style={{ minHeight: 'clamp(440px, 38vw, 560px)' }}>
          <img
            src="/img/position.jpg"
            alt="Aerial view of reinforced concrete foundations on an excavated site"
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
              Engineering experience for infrastructure that matters.
            </h2>
            <p className="t-small">
              PCD supports complex power and infrastructure projects with specialist engineering
              capability, technical assurance and a practical understanding of project delivery.
            </p>
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
