'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('pcd_cookie_consent');
      if (!consent) {
        const timer = setTimeout(() => setIsVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch (e) {}
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('pcd_cookie_consent', 'essential_accepted');
    } catch (e) {}
    setIsVisible(false);
  };

  const handleDismiss = () => {
    try {
      localStorage.setItem('pcd_cookie_consent', 'dismissed');
    } catch (e) {}
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 bg-white/95 backdrop-blur-md border border-line rounded-2xl shadow-float p-5 transition-all duration-300"
      role="dialog"
      aria-labelledby="cookie-title"
    >
      <div className="flex items-start gap-3.5">
        <div className="w-9 h-9 rounded-full bg-accent-light text-accent flex items-center justify-center shrink-0 mt-0.5">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <h4 id="cookie-title" className="text-sm font-bold text-ink">
              Essential Cookies Only
            </h4>
            <button
              type="button"
              onClick={handleDismiss}
              className="text-neutral-400 hover:text-ink transition-colors p-1 -mr-1"
              aria-label="Dismiss cookie notice"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          <p className="text-xs text-ink-muted leading-relaxed mb-3.5">
            PCD only uses strictly essential cookies required for website security and operational performance. We do not use any third-party analytics, tracking, or marketing cookies.
          </p>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleAccept}
              className="px-4 py-1.5 rounded-full bg-ink text-white text-xs font-semibold hover:bg-accent transition-colors shadow-sm"
            >
              Accept Essential
            </button>
            <Link
              href="/cookie-policy"
              className="text-xs font-semibold text-ink-secondary hover:text-accent transition-colors underline"
            >
              View Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
