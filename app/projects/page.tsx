'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ProjectsPage() {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    const section = document.getElementById('projects-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          <span className="dot-label">Our work</span>
          <h2 className="t-h2">Selected Projects</h2>
          <div className="aside">
            <p className="t-small">Images shown are representative of each project type.</p>
          </div>
        </div>

        {/* 15 Projects Grid Container (6-6-3 per page) */}
        <div className="projects-paginated-container">
          {/* Page 1 (Projects 01-06) */}
          <div
            className={`projects-page ${currentPage === 1 ? 'active' : ''}`}
            data-proj-page="1"
            hidden={currentPage !== 1}
          >
            <div className="projects-uniform-grid">
              {/* 01: Landulph 400 kV */}
              <Link className="pcard zoom" href="/contact">
                <div className="img">
                  <img src="/img/p01.jpg" alt="Landulph 400 kV Substation" loading="lazy" />
                  <span className="rep">Representative image</span>
                </div>
                <div className="pcard-body">
                  <div className="pcard-title-group">
                    <span className="idx">/01</span>
                    <h3 className="t-h4">Landulph 400 kV</h3>
                    <div className="pcard-meta"><span>Cornwall, UK</span><span>Power &amp; Energy</span></div>
                  </div>
                  <p className="scope">Civil Engineering &amp; Design Assurance</p>
                </div>
              </Link>

              {/* 02: Navenby 400 kV */}
              <Link className="pcard zoom" href="/contact">
                <div className="img">
                  <img src="/img/p03.jpg" alt="Navenby 400 kV Substation" loading="lazy" />
                  <span className="rep">Representative image</span>
                </div>
                <div className="pcard-body">
                  <div className="pcard-title-group">
                    <span className="idx">/02</span>
                    <h3 className="t-h4">Navenby 400 kV</h3>
                    <div className="pcard-meta"><span>Lincolnshire, UK</span><span>Power &amp; Energy</span></div>
                  </div>
                  <p className="scope">Civil Engineering &amp; Design Assurance</p>
                </div>
              </Link>

              {/* 03: Bicker Fen */}
              <Link className="pcard zoom" href="/contact">
                <div className="img">
                  <img src="/img/card1.jpg" alt="Bicker Fen Substation" loading="lazy" />
                  <span className="rep">Representative image</span>
                </div>
                <div className="pcard-body">
                  <div className="pcard-title-group">
                    <span className="idx">/03</span>
                    <h3 className="t-h4">Bicker Fen</h3>
                    <div className="pcard-meta"><span>Lincolnshire, UK</span><span>Power &amp; Energy</span></div>
                  </div>
                  <p className="scope">400 kV Substation Civil &amp; Structural Engineering</p>
                </div>
              </Link>

              {/* 04: West Burton */}
              <Link className="pcard zoom" href="/contact">
                <div className="img">
                  <img src="/img/card2.jpg" alt="West Burton Substation" loading="lazy" />
                  <span className="rep">Representative image</span>
                </div>
                <div className="pcard-body">
                  <div className="pcard-title-group">
                    <span className="idx">/04</span>
                    <h3 className="t-h4">West Burton</h3>
                    <div className="pcard-meta"><span>Nottinghamshire, UK</span><span>Power &amp; Energy</span></div>
                  </div>
                  <p className="scope">400 kV Substation Civil Engineering &amp; Foundations</p>
                </div>
              </Link>

              {/* 05: Wymondley */}
              <Link className="pcard zoom" href="/contact">
                <div className="img">
                  <img src="/img/p04.jpg" alt="Wymondley Substation" loading="lazy" />
                  <span className="rep">Representative image</span>
                </div>
                <div className="pcard-body">
                  <div className="pcard-title-group">
                    <span className="idx">/05</span>
                    <h3 className="t-h4">Wymondley</h3>
                    <div className="pcard-meta"><span>Hertfordshire, UK</span><span>Power &amp; Energy</span></div>
                  </div>
                  <p className="scope">400 kV GIS Substation Civil &amp; Structural Engineering</p>
                </div>
              </Link>

              {/* 06: Bulls Lodge 400 kV GIS */}
              <Link className="pcard zoom" href="/contact">
                <div className="img">
                  <img src="/img/p02.jpg" alt="Bulls Lodge 400 kV GIS Substation" loading="lazy" />
                  <span className="rep">Representative image</span>
                </div>
                <div className="pcard-body">
                  <div className="pcard-title-group">
                    <span className="idx">/06</span>
                    <h3 className="t-h4">Bulls Lodge 400 kV GIS</h3>
                    <div className="pcard-meta"><span>Essex, UK</span><span>Power &amp; Energy</span></div>
                  </div>
                  <p className="scope">GIS Buildings, Foundations &amp; Design Assurance</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Page 2 (Projects 07-12) */}
          <div
            className={`projects-page ${currentPage === 2 ? 'active' : ''}`}
            data-proj-page="2"
            hidden={currentPage !== 2}
          >
            <div className="projects-uniform-grid">
              {/* 07: Spennymoor */}
              <Link className="pcard zoom" href="/contact">
                <div className="img">
                  <img src="/img/position.jpg" alt="Spennymoor Substation" loading="lazy" />
                  <span className="rep">Representative image</span>
                </div>
                <div className="pcard-body">
                  <div className="pcard-title-group">
                    <span className="idx">/07</span>
                    <h3 className="t-h4">Spennymoor</h3>
                    <div className="pcard-meta"><span>County Durham, UK</span><span>Power &amp; Energy</span></div>
                  </div>
                  <p className="scope">400 kV Substation Civil &amp; Structural Engineering</p>
                </div>
              </Link>

              {/* 08: Cowley 400 kV Bay Extension */}
              <Link className="pcard zoom" href="/contact">
                <div className="img">
                  <img src="/img/p05.jpg" alt="Cowley 400 kV Bay Extension" loading="lazy" />
                  <span className="rep">Representative image</span>
                </div>
                <div className="pcard-body">
                  <div className="pcard-title-group">
                    <span className="idx">/08</span>
                    <h3 className="t-h4">Cowley 400 kV Bay Extension</h3>
                    <div className="pcard-meta"><span>Oxfordshire, UK</span><span>Power &amp; Energy</span></div>
                  </div>
                  <p className="scope">Substation Bay Extension &amp; Structural Engineering</p>
                </div>
              </Link>

              {/* 09: Burwell */}
              <Link className="pcard zoom" href="/contact">
                <div className="img">
                  <img src="/img/s01.jpg" alt="Burwell Substation" loading="lazy" />
                  <span className="rep">Representative image</span>
                </div>
                <div className="pcard-body">
                  <div className="pcard-title-group">
                    <span className="idx">/09</span>
                    <h3 className="t-h4">Burwell</h3>
                    <div className="pcard-meta"><span>Cambridgeshire, UK</span><span>Power &amp; Energy</span></div>
                  </div>
                  <p className="scope">400/132 kV Substation Civil Engineering &amp; Technical Assurance</p>
                </div>
              </Link>

              {/* 10: Wimbledon (LPT2) */}
              <Link className="pcard zoom" href="/contact">
                <div className="img">
                  <img src="/img/s03.jpg" alt="Wimbledon Substation (LPT2)" loading="lazy" />
                  <span className="rep">Representative image</span>
                </div>
                <div className="pcard-body">
                  <div className="pcard-title-group">
                    <span className="idx">/10</span>
                    <h3 className="t-h4">Wimbledon (LPT2)</h3>
                    <div className="pcard-meta"><span>London, UK</span><span>Power &amp; Energy (LPT2)</span></div>
                  </div>
                  <p className="scope">400 kV Substation Civil Engineering &amp; Shaft Foundations</p>
                </div>
              </Link>

              {/* 11: New Cross (LPT2) */}
              <Link className="pcard zoom" href="/contact">
                <div className="img">
                  <img src="/img/s02.jpg" alt="New Cross Substation (LPT2)" loading="lazy" />
                  <span className="rep">Representative image</span>
                </div>
                <div className="pcard-body">
                  <div className="pcard-title-group">
                    <span className="idx">/11</span>
                    <h3 className="t-h4">New Cross (LPT2)</h3>
                    <div className="pcard-meta"><span>London, UK</span><span>Power &amp; Energy (LPT2)</span></div>
                  </div>
                  <p className="scope">400 kV Substation Civil &amp; Structural Engineering</p>
                </div>
              </Link>

              {/* 12: Hurst (LPT2) */}
              <Link className="pcard zoom" href="/contact">
                <div className="img">
                  <img src="/img/s04.jpg" alt="Hurst Substation (LPT2)" loading="lazy" />
                  <span className="rep">Representative image</span>
                </div>
                <div className="pcard-body">
                  <div className="pcard-title-group">
                    <span className="idx">/12</span>
                    <h3 className="t-h4">Hurst (LPT2)</h3>
                    <div className="pcard-meta"><span>Kent / Southeast London, UK</span><span>Power &amp; Energy (LPT2)</span></div>
                  </div>
                  <p className="scope">Substation Civil Engineering &amp; Technical Assurance</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Page 3 (Projects 13-15) */}
          <div
            className={`projects-page ${currentPage === 3 ? 'active' : ''}`}
            data-proj-page="3"
            hidden={currentPage !== 3}
          >
            <div className="projects-uniform-grid">
              {/* 13: Littlebrook (LPT2) */}
              <Link className="pcard zoom" href="/contact">
                <div className="img">
                  <img src="/img/projhero.jpg" alt="Littlebrook Substation (LPT2)" loading="lazy" />
                  <span className="rep">Representative image</span>
                </div>
                <div className="pcard-body">
                  <div className="pcard-title-group">
                    <span className="idx">/13</span>
                    <h3 className="t-h4">Littlebrook (LPT2)</h3>
                    <div className="pcard-meta"><span>Kent, UK</span><span>Power &amp; Energy (LPT2)</span></div>
                  </div>
                  <p className="scope">400/132 kV Substation Civil &amp; Structural Engineering</p>
                </div>
              </Link>

              {/* 14: Minety */}
              <Link className="pcard zoom" href="/contact">
                <div className="img">
                  <img src="/img/why.jpg" alt="Minety Battery &amp; Substation" loading="lazy" />
                  <span className="rep">Representative image</span>
                </div>
                <div className="pcard-body">
                  <div className="pcard-title-group">
                    <span className="idx">/14</span>
                    <h3 className="t-h4">Minety</h3>
                    <div className="pcard-meta"><span>Wiltshire, UK</span><span>Power &amp; Energy</span></div>
                  </div>
                  <p className="scope">Major Battery Energy Storage &amp; Substation Civil Engineering</p>
                </div>
              </Link>

              {/* 15: Mannington */}
              <Link className="pcard zoom" href="/contact">
                <div className="img">
                  <img src="/img/approach.jpg" alt="Mannington Substation" loading="lazy" />
                  <span className="rep">Representative image</span>
                </div>
                <div className="pcard-body">
                  <div className="pcard-title-group">
                    <span className="idx">/15</span>
                    <h3 className="t-h4">Mannington</h3>
                    <div className="pcard-meta"><span>Dorset, UK</span><span>Power &amp; Energy</span></div>
                  </div>
                  <p className="scope">400/132 kV Substation Civil &amp; Structural Engineering</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Pagination Controls */}
          <div className="projects-pagination">
            <span className="projects-page-info" id="projPageInfo">
              {currentPage === 1 && 'Showing 1–6 of 15 projects'}
              {currentPage === 2 && 'Showing 7–12 of 15 projects'}
              {currentPage === 3 && 'Showing 13–15 of 15 projects'}
            </span>
            <div className="projects-page-btns">
              <button
                type="button"
                className="proj-nav-btn"
                id="projPrev"
                disabled={currentPage === 1}
                onClick={() => goToPage(currentPage - 1)}
                aria-label="Previous projects page"
              >
                <svg><use href="#chevl" /></svg>
                <span>Previous</span>
              </button>
              <div className="proj-page-nums" id="projPageNums">
                <button
                  type="button"
                  className={`proj-num-btn ${currentPage === 1 ? 'active' : ''}`}
                  onClick={() => goToPage(1)}
                >
                  1
                </button>
                <button
                  type="button"
                  className={`proj-num-btn ${currentPage === 2 ? 'active' : ''}`}
                  onClick={() => goToPage(2)}
                >
                  2
                </button>
                <button
                  type="button"
                  className={`proj-num-btn ${currentPage === 3 ? 'active' : ''}`}
                  onClick={() => goToPage(3)}
                >
                  3
                </button>
              </div>
              <button
                type="button"
                className="proj-nav-btn"
                id="projNext"
                disabled={currentPage === 3}
                onClick={() => goToPage(currentPage + 1)}
                aria-label="Next projects page"
              >
                <span>Next</span>
                <svg><use href="#chev" /></svg>
              </button>
            </div>
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
          <div />
          <div className="card cta-card">
            <h2 className="t-h4" style={{ fontSize: 'clamp(1.4rem, 2vw, 1.85rem)' }}>
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
