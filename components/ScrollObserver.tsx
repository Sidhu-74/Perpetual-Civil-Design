'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Respect reduced motion preferences
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.classList.add('reduced-motion');
      return;
    }

    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.08,
    });

    const selector = [
      '.reveal-on-scroll',
      '.pp-header',
      '.pp-card',
      '.pcard',
      '.srow',
      '.step',
      '.wcard',
      '.icard',
      '.app-img',
      '.svc-side',
      '.fb-side',
      '.fcard',
      '.faq details',
      '.shead',
      '.cta-frame',
      '.card.legal',
      '.foot-cards',
    ].join(', ');

    const elements = document.querySelectorAll(selector);
    elements.forEach((el, index) => {
      // If element is already in initial viewport, reveal immediately
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('is-revealed');
      } else {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
