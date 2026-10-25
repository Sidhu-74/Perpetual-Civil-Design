'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { serviceDisciplines } from '@/data/servicesData';

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [activeDisciplineId, setActiveDisciplineId] = useState('civil-structural');
  
  // Mobile accordion state
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileExpandedDiscipline, setMobileExpandedDiscipline] = useState<string | null>('civil-structural');

  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const navTriggerRef = useRef<HTMLDivElement | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isLegal =
    pathname === '/privacy-policy' ||
    pathname === '/cookie-policy' ||
    pathname === '/privacy' ||
    pathname === '/cookies';

  useEffect(() => {
    if (isLegal) {
      document.documentElement.classList.add('theme-dark-logo');
      document.body.classList.add('theme-dark-logo');
    } else {
      document.documentElement.classList.remove('theme-dark-logo');
      document.body.classList.remove('theme-dark-logo');
    }
  }, [isLegal]);

  // Close menus on route change
  useEffect(() => {
    setDrawerOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setServicesDropdownOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        navTriggerRef.current &&
        !navTriggerRef.current.contains(e.target as Node)
      ) {
        setServicesDropdownOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 180);
  };

  const activeDiscipline =
    serviceDisciplines.find((d) => d.id === activeDisciplineId) || serviceDisciplines[0];

  return (
    <header className="head">
      <div className="wrap head-row">
        {/* Brand Logo */}
        <Link href="/" className="logo" aria-label="Perpetual Civil Design, home">
          <img
            src="/img/logo-full-light.png"
            alt="Perpetual Civil Design Ltd"
            className="logo-img logo-img-light"
            id="siteLogoLight"
          />
          <img
            src="/img/logo-full-trans.png"
            alt="Perpetual Civil Design Ltd"
            className="logo-img logo-img-dark"
            id="siteLogoDark"
          />
        </Link>

        {/* Center Floating Pill Navigation */}
        <nav className="nav" aria-label="Primary">
          <Link
            href="/"
            data-nav="home"
            aria-current={pathname === '/' ? 'page' : undefined}
          >
            Home
          </Link>

          {/* Services with Dropdown Trigger */}
          <div
            className="nav-item-dropdown"
            ref={navTriggerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/services"
              className={`nav-link-btn ${
                servicesDropdownOpen ? 'dropdown-open' : ''
              }`}
              data-nav="services"
              aria-current={pathname.startsWith('/services') ? 'page' : undefined}
              aria-expanded={servicesDropdownOpen}
              aria-haspopup="true"
              onClick={() => setServicesDropdownOpen(false)}
            >
              <span>Services</span>
              <svg
                className={`nav-chev ${servicesDropdownOpen ? 'open' : ''}`}
                width="12"
                height="12"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3.5 6L8 10.5L12.5 6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          <Link
            href="/projects"
            data-nav="projects"
            aria-current={pathname.startsWith('/projects') ? 'page' : undefined}
          >
            Projects
          </Link>

          <Link
            href="/contact"
            data-nav="contact"
            aria-current={pathname === '/contact' ? 'page' : undefined}
          >
            Contact
          </Link>
        </nav>

        {/* End Actions: Discuss Pill & Burger */}
        <div className="head-end">
          <Link className="pill white" href="/contact">
            Discuss a Project{' '}
            <svg>
              <use href="#arr" />
            </svg>
          </Link>
          <button
            className="burger"
            id="burger"
            type="button"
            aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={drawerOpen}
            aria-controls="drawer"
            onClick={() => setDrawerOpen(!drawerOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* ================= DESKTOP MEGA DROPDOWN PANEL ================= */}
      <div
        className={`wrap nav-mega-dropdown-wrap ${servicesDropdownOpen ? 'is-open' : ''}`}
        ref={dropdownRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-hidden={!servicesDropdownOpen}
      >
          <div
            className="nav-mega-dropdown"
            role="region"
            aria-label="Services &amp; Subservices Menu"
          >
            {/* Top Sub-Header */}
            <div className="nmd-top-bar">
              <div className="nmd-top-left">
                <span className="nmd-top-badge">
                  <span className="nmd-badge-dot"></span>
                  Engineering Disciplines &amp; Subservices
                </span>
                <span className="nmd-top-desc">
                  Focused engineering for high-voltage substations, grid reinforcement &amp; infrastructure.
                </span>
              </div>
            </div>

            {/* Split Content Body */}
            <div className="nmd-body">
              {/* Left Column: 5 Disciplines Tabs */}
              <div
                className="nmd-disciplines-list"
                role="tablist"
                aria-label="Substation Engineering Disciplines"
              >
                {serviceDisciplines.map((d) => {
                  const isSelected = activeDisciplineId === d.id;
                  return (
                    <button
                      key={d.id}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      className={`nmd-disc-tab ${isSelected ? 'active' : ''}`}
                      onMouseEnter={() => setActiveDisciplineId(d.id)}
                      onClick={() => setActiveDisciplineId(d.id)}
                    >
                      <div className="nmd-disc-tab-top">
                        <span className="nmd-disc-idx">{d.index}</span>
                        <span className="nmd-disc-count">{d.subservices.length} Subservices</span>
                      </div>
                      <div className="nmd-disc-title">{d.title}</div>
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Subservices Panel for each Discipline */}
              <div className="nmd-panels-container">
                {serviceDisciplines.map((d) => {
                  const isSelected = activeDisciplineId === d.id;
                  return (
                    <div
                      key={d.id}
                      className={`nmd-subservices-panel ${isSelected ? 'active' : ''}`}
                      style={{ display: isSelected ? 'flex' : 'none' }}
                      role="tabpanel"
                      aria-labelledby={`tab-${d.id}`}
                    >
                      <div className="nmd-panel-header">
                        <div className="nmd-panel-title-group">
                          <span className="nmd-panel-idx">{d.index}</span>
                          <h3 className="nmd-panel-title">{d.title}</h3>
                        </div>
                      </div>

                      <div className="nmd-subservices-grid">
                        {d.subservices.map((sub, i) => (
                          <Link
                            key={i}
                            href={`/services#${d.id}`}
                            className="nmd-sub-card"
                            onClick={() => setServicesDropdownOpen(false)}
                          >
                            <span className="nmd-sub-title">{sub.title}</span>
                            <span className="nmd-sub-arrow" aria-hidden="true">
                              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                                <path
                                  d="M6 3.5L10.5 8L6 12.5"
                                  stroke="currentColor"
                                  strokeWidth="1.8"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Footer Action Bar */}
            <div className="nmd-bottom-bar">
              <div className="nmd-bottom-info">
                <strong>Need multi-discipline civil, structural or P&amp;C support?</strong>
                <span>Our designs hold up on site, not just on paper. Discuss requirements with our engineers.</span>
              </div>
              <div className="nmd-bottom-actions">
                <Link
                  href="/contact"
                  className="pill"
                  onClick={() => setServicesDropdownOpen(false)}
                >
                  Discuss a Project{' '}
                  <svg>
                    <use href="#arr" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

      {/* ================= MOBILE DRAWER WITH EXPANDABLE SERVICES ================= */}
      <div className="wrap drawer" id="drawer" hidden={!drawerOpen}>
        <Link className="dl" href="/" onClick={() => setDrawerOpen(false)}>
          Home <span>/01</span>
        </Link>

        {/* Mobile Services Accordion */}
        <div className="mobile-services-accordion">
          <div className="mobile-services-row">
            <Link
              className="dl mobile-services-link"
              href="/services"
              onClick={() => setDrawerOpen(false)}
            >
              Services <span>/02</span>
            </Link>
            <button
              type="button"
              className={`mobile-acc-toggle ${mobileServicesOpen ? 'open' : ''}`}
              aria-label="Toggle Services subservices dropdown"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3.5 6L8 10.5L12.5 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Subservices List in Drawer */}
          {mobileServicesOpen && (
            <div className="mobile-disciplines-list">
              {serviceDisciplines.map((d) => {
                const isExpanded = mobileExpandedDiscipline === d.id;
                return (
                  <div key={d.id} className="mobile-disc-block">
                    <button
                      type="button"
                      className="mobile-disc-btn"
                      onClick={() =>
                        setMobileExpandedDiscipline(isExpanded ? null : d.id)
                      }
                    >
                      <span className="mobile-disc-idx">{d.index}</span>
                      <span className="mobile-disc-name">{d.title}</span>
                      <span className="mobile-disc-chev">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 16 16"
                          fill="none"
                          style={{
                            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s ease',
                          }}
                        >
                          <path
                            d="M3.5 6L8 10.5L12.5 6"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>

                    {isExpanded && (
                      <div className="mobile-subservices-list">
                        {d.subservices.map((sub, sIdx) => (
                          <Link
                            key={sIdx}
                            href={`/services#${d.id}`}
                            className="mobile-sub-item"
                            onClick={() => setDrawerOpen(false)}
                          >
                            <span className="mobile-sub-name">{sub.title}</span>
                            <span className="mobile-sub-arrow">&rarr;</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <Link className="dl" href="/projects" onClick={() => setDrawerOpen(false)}>
          Projects <span>/03</span>
        </Link>
        <Link className="dl" href="/contact" onClick={() => setDrawerOpen(false)}>
          Contact <span>/04</span>
        </Link>

        <Link
          className="pill"
          href="/contact"
          onClick={() => setDrawerOpen(false)}
          style={{ marginTop: '14px', width: '100%', justifyContent: 'center' }}
        >
          Discuss a Project{' '}
          <svg>
            <use href="#arr" />
          </svg>
        </Link>
      </div>
    </header>
  );
}
