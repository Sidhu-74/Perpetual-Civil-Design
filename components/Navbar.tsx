'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  const isLegal = pathname === '/privacy-policy' || pathname === '/cookie-policy' || pathname === '/privacy' || pathname === '/cookies';

  useEffect(() => {
    if (isLegal) {
      document.documentElement.classList.add('theme-dark-logo');
      document.body.classList.add('theme-dark-logo');
    } else {
      document.documentElement.classList.remove('theme-dark-logo');
      document.body.classList.remove('theme-dark-logo');
    }
  }, [isLegal]);

  // Close drawer on path change
  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  const navItems = [
    { label: 'Home', href: '/', key: 'home', num: '/01' },
    { label: 'Services', href: '/services', key: 'services', num: '/02' },
    { label: 'Projects', href: '/projects', key: 'projects', num: '/03' },
    { label: 'Contact', href: '/contact', key: 'contact', num: '/04' },
  ];

  return (
    <header className="head">
      <div className="wrap head-row">
        {/* Brand Logo */}
        <Link href="/" className="logo" aria-label="Perpetual Civil Design, home">
          {/* Light Logo for Hero / Dark Backgrounds */}
          <img
            src="/img/logo-full-light.png"
            alt="Perpetual Civil Design Ltd"
            className="logo-img logo-img-light"
            id="siteLogoLight"
          />
          {/* Dark Logo for White Backgrounds / Legal pages */}
          <img
            src="/img/logo-full-trans.png"
            alt="Perpetual Civil Design Ltd"
            className="logo-img logo-img-dark"
            id="siteLogoDark"
          />
        </Link>

        {/* Center Floating Pill Navigation */}
        <nav className="nav" aria-label="Primary">
          {navItems.map((item) => {
            const isActive =
              item.href === '/'
                ? pathname === '/' || pathname === ''
                : pathname === item.href || pathname.startsWith(item.href);

            return (
              <Link
                key={item.key}
                href={item.href}
                data-nav={item.key}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </Link>
            );
          })}
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

      {/* Mobile Drawer */}
      <div className="wrap drawer" id="drawer" hidden={!drawerOpen}>
        {navItems.map((item) => (
          <Link
            key={item.key}
            className="dl"
            href={item.href}
            onClick={() => setDrawerOpen(false)}
          >
            {item.label} <span>{item.num}</span>
          </Link>
        ))}
        <Link
          className="pill"
          href="/contact"
          onClick={() => setDrawerOpen(false)}
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
