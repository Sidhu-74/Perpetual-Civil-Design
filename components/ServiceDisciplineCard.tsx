'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export interface ServiceImage {
  src: string;
  alt: string;
}

export interface SubserviceData {
  title: string;
  description: string;
}

export interface ServiceDisciplineProps {
  id: string;
  index: string;
  title: string;
  lead: string;
  images: ServiceImage[];
  capabilities?: string[];
  subservices?: SubserviceData[];
  ctaText?: string;
  ctaHref?: string;
}

export default function ServiceDisciplineCard({
  id,
  index,
  title,
  lead,
  images,
  capabilities = [],
  subservices,
  ctaText = 'Discuss This Discipline',
  ctaHref = '/contact',
}: ServiceDisciplineProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [openSubservice, setOpenSubservice] = useState<number | null>(0);
  const slideCount = images.length;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (slideCount <= 1 || isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [slideCount, isPaused]);

  // Use subservices if available, else fallback to capabilities
  const items: SubserviceData[] = subservices || capabilities.map((c) => ({
    title: c,
    description: '',
  }));

  return (
    <section className="svc-tectra-sec" id={id} aria-labelledby={`title-${id}`}>
      <div className="wrap svc-tectra-wrap">
        <div className="svc-tectra-grid">
          {/* LEFT COLUMN: Title, Slideshow Image Frame, Indicators */}
          <div
            className="svc-tectra-left"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <h2 id={`title-${id}`} className="svc-tectra-title">
              {title}
            </h2>

            {/* Media Frame with smooth cross-fade slides */}
            <div className="svc-tectra-media-frame">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  className={`svc-tectra-slide ${currentSlide === i ? 'active' : ''}`}
                  loading="lazy"
                />
              ))}
            </div>

            {/* Slide Navigation Pills */}
            {slideCount > 1 && (
              <div
                className="svc-tectra-pills"
                role="tablist"
                aria-label={`${title} image slides`}
              >
                {images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={currentSlide === i}
                    aria-label={`Go to ${title} slide ${i + 1}`}
                    className={`svc-tectra-pill ${currentSlide === i ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(i)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Lead Description, Subservices Breakdown, CTA Button */}
          <div className="svc-tectra-right">
            <p className="svc-tectra-lead">{lead}</p>

            <div className="svc-tectra-list" role="list">
              {items.map((item, i) => {
                const isOpen = openSubservice === i;
                const hasDesc = !!item.description;
                return (
                  <div
                    key={i}
                    className={`svc-tectra-item ${isOpen ? 'is-open' : ''}`}
                    role="listitem"
                    onClick={() => hasDesc && setOpenSubservice(isOpen ? null : i)}
                    style={{ cursor: hasDesc ? 'pointer' : 'default' }}
                  >
                    <div className="svc-tectra-item-header">
                      <span className="svc-tectra-item-name">{item.title}</span>
                      <span className="svc-tectra-item-arrow" aria-hidden="true">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 20 20"
                          fill="none"
                          style={{
                            transform: hasDesc && isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                            transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                          }}
                        >
                          <path
                            d="M7.5 4.166l5.833 5.833L7.5 15.833"
                            stroke="currentColor"
                            strokeWidth="1.67"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                    {hasDesc && isOpen && (
                      <p className="svc-tectra-item-desc">{item.description}</p>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="svc-tectra-cta-row">
              <Link className="svc-tectra-cta-btn" href={ctaHref}>
                <span>{ctaText}</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M10 4.166l5.833 5.833L10 15.833M15.833 10H4.167"
                    stroke="currentColor"
                    strokeWidth="1.67"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
