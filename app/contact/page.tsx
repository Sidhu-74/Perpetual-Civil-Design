'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project_type: '',
    message: '',
    b_hp_field: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [note, setNote] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Enter an email address like name@company.com.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 5) {
      errs.message = 'Tell us briefly about your project or enquiry.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNote(null);
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setFormData({ name: '', email: '', company: '', project_type: '', message: '', b_hp_field: '' });
        setErrors({});
        setNote({
          type: 'success',
          text: data.message || 'Thank you! Your enquiry has been sent successfully. We will get back to you shortly.',
        });
      } else {
        setNote({
          type: 'error',
          text: data.error || 'Failed to send enquiry. Please try again or email hr@civildesignltd.com directly.',
        });
      }
    } catch {
      setNote({
        type: 'error',
        text: 'Network error. Please check your connection or email hr@civildesignltd.com directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main data-page="contact">
      <section className="hero" aria-labelledby="h-contact">
        <div className="hero-frame hero-frame-contact">
          <img
            src="/img/contacthero.jpg"
            alt="Power infrastructure facility and cooling towers at golden sunset"
            fetchPriority="high"
          />
          <div className="cu-split-wrap">
            {/* Left Column: Title & Subtitle in bottom-left */}
            <div className="cu-split-left">
              <h1 id="h-contact" className="cu-split-title">
                Let&apos;s discuss<br />your next project
              </h1>
              <p className="cu-split-sub">
                Speak with PCD about civil, structural and Protection &amp; Control engineering for
                power and infrastructure projects across the UK.
              </p>
            </div>

            {/* Right Column: White Floating Contact Card matching mockup */}
            <div className="cu-form-card">
              <h2 className="cu-form-title">Tell us about your project</h2>
              <p className="cu-form-desc">Share a few details and our team will get back to you.</p>

              <form className="cu-form" id="enquiry" onSubmit={handleSubmit} noValidate>
                {/* Honeypot field */}
                <div
                  style={{ display: 'none', opacity: 0, position: 'absolute', left: '-9999px' }}
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_hp_field"
                    value={formData.b_hp_field}
                    onChange={(e) => setFormData({ ...formData, b_hp_field: e.target.value })}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="cu-form-row">
                  <div className="cu-field">
                    <input
                      id="f-name"
                      name="name"
                      autoComplete="name"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && <span className="err" id="e-name">{errors.name}</span>}
                  </div>
                  <div className="cu-field">
                    <input
                      id="f-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="Work email"
                      required
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <span className="err" id="e-email">{errors.email}</span>}
                  </div>
                </div>

                <div className="cu-form-row">
                  <div className="cu-field">
                    <input
                      id="f-company"
                      name="company"
                      autoComplete="organization"
                      placeholder="Company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                  <div className="cu-field cu-field-select">
                    <select
                      id="f-project-type"
                      name="project_type"
                      aria-label="Project type"
                      value={formData.project_type}
                      onChange={(e) => setFormData({ ...formData, project_type: e.target.value })}
                      required
                    >
                      <option value="" disabled>Select project type</option>
                      <option value="Power infrastructure">Power infrastructure</option>
                      <option value="Substations &amp; GIS">Substations &amp; GIS</option>
                      <option value="Civil &amp; Structural">Civil &amp; Structural</option>
                      <option value="Design Assurance">Design Assurance</option>
                      <option value="Temporary Works">Temporary Works</option>
                      <option value="Protection &amp; Control">Protection &amp; Control</option>
                      <option value="Other">Other</option>
                    </select>
                    <svg className="cu-select-icon">
                      <use href="#chev" />
                    </svg>
                  </div>
                </div>

                <div className="cu-field">
                  <textarea
                    id="f-message"
                    name="message"
                    placeholder="Project details or requirements..."
                    required
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && <span className="err" id="e-message">{errors.message}</span>}
                </div>

                <button className="cu-submit-btn" type="submit" disabled={isSubmitting}>
                  <span>{isSubmitting ? 'Sending...' : 'Send enquiry'}</span>
                  <svg>
                    <use href="#arr" />
                  </svg>
                </button>

                <p className="cu-form-disclaimer">Your details will only be used to respond to your enquiry.</p>
                {note && (
                  <p
                    className="note"
                    id="formNote"
                    role="status"
                    style={{
                      display: 'block',
                      marginTop: '12px',
                      color: note.type === 'success' ? '#15803d' : '#b91c1c',
                      fontWeight: 500,
                    }}
                  >
                    {note.text}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
