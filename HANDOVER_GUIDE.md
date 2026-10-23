# Perpetual Civil Design Ltd — Website Handover & Launch Guide

This document contains everything needed to answer the client's questions, transfer full administrator ownership to Perpetual Civil Design Ltd (PCD), configure the domain on GoDaddy, and launch on **www.civildesignltd.com**.

---

## 1. Ready-to-Send Email Reply to the Client

You can copy and send this exact reply to the client:

```text
Subject: Re: Perpetual Civil Design Website Launch & Ownership Handover

Hi [Client Name],

Thank you for your feedback! I'm thrilled to hear that you're pleased with how the website is looking.

I have completed all the required updates to the codebase and policies, and I'm happy to clarify each of the points you raised:

1. Hosting Recommendation (GoDaddy vs Vercel):
   • We strongly recommend hosting the website application on Vercel while keeping your domain registration on GoDaddy.
   • Why Vercel? Because the website is built with Next.js (the modern React framework maintained by Vercel), Vercel provides high-speed global CDN delivery, automated SSL certificates, bank-grade DDoS protection, and zero maintenance overhead.
   • How it works: You keep your domain on GoDaddy and simply add two standard DNS records (an A record and a CNAME) pointing to Vercel. This gives you enterprise performance without having to transfer the domain away from GoDaddy.

2. Essential Cookies Only & Zero Analytics:
   • Confirmed. The website uses strictly essential cookies only (namely, a lightweight token to remember your cookie notice dismissal preference and security session tokens for the contact form).
   • There are NO tracking cookies, NO Google Analytics, NO marketing pixels, and NO user profiling scripts installed anywhere on the site.
   • The Cookie Policy page on the website has been updated to explicitly detail these exact cookies and confirm zero analytics tracking.

3. Contact Form Delivery:
   • Confirmed. All enquiries submitted through the website form are routed directly to hr@civildesignltd.com.
   • The form is protected with automated bot honeypots and rate limiting to prevent spam.

4. Company Name & Trademark:
   • Confirmed. All references across the website footer, privacy policy, and cookie policy now strictly use:
     "© 2026 Perpetual Civil Design Ltd. All rights reserved."
   • No trademark symbols (™, ®) are used anywhere.

5. Transferring Full Ownership & Admin Access to PCD:
   To ensure PCD has complete and independent control over the code, hosting, and email delivery, here are the simple next steps:

   Step A: GitHub (Source Code)
   • Create a company GitHub account or organization (e.g., github.com/civildesignltd) at https://github.com/join (Free).
   • I will immediately transfer repository ownership of the source code directly to your company account.

   Step B: Vercel (Hosting)
   • Sign up for a free Vercel account at https://vercel.com using a PCD company email address (e.g., hr@civildesignltd.com or info@civildesignltd.com).
   • Vercel's Hobby tier is 100% free with unlimited traffic for standard corporate websites. If you ever require enterprise multi-seat access, Vercel Pro is just $20/month per team seat.
   • Once signed in, you can connect the GitHub repository with one click.

   Step C: GoDaddy (Domain DNS)
   • In your GoDaddy DNS Management panel for civildesignltd.com:
     - Add an A Record: Host "@" pointing to 76.76.21.21
     - Add a CNAME Record: Host "www" pointing to cname.vercel-dns.com
   • This connects www.civildesignltd.com seamlessly to your live website with free automatic SSL.

   Step D: Resend (Email Dispatch for Contact Form)
   • Sign up for a free account at https://resend.com using hr@civildesignltd.com.
   • Their free tier includes 3,000 emails per month (100/day), which is more than sufficient and completely free of charge.

6. Future Website Changes & Maintenance Handover:
   • The codebase is structured cleanly with modular content components.
   • I have prepared step-by-step documentation detailing how text, project case studies, and images can be updated in minutes.
   • For non-technical team members, we can also integrate a lightweight visual headless CMS (e.g., Sanity or Strapi) in the future if you'd like an inline admin dashboard.

Please let me know once you have created the PCD company GitHub and Vercel accounts so I can initiate the immediate transfer. I can also jump on a quick screen share if you'd like me to guide you through pointing the GoDaddy DNS records.

Kind regards,
Samrich
```

---

## 2. Technical Summary of Changes Made in This Upgrade

### Next.js & Tailwind CSS Migration
- Converted static HTML into a modern **Next.js (App Router)** production application.
- Modern **Tailwind CSS** design system with exact brand color tokens:
  - Canvas / Background: `#F7F7F7`
  - High-Voltage Accent: `#F26B1D`
  - Obsidian Dark: `#0B0B0B`
  - Subtle Borders: `#E6E6E6`
- **Full Responsiveness**: Custom layouts perfected for mobile (360px–480px), tablet (768px–1024px), desktop (1280px+), and ultra-wide screens.
- **Framer Motion Animations**:
  - Smooth page transitions and fade-in reveals on scroll.
  - Interactive hero recent projects auto-cycler with pause-on-hover.
  - Interactive accordion for Services with smooth height expansion.
  - Horizontal drag / button scrolling rail for selected projects.
  - Interactive FAQ with spring toggles.
  - Mobile slide-down navigation drawer.

### Client Feedback & Requirements Fulfilled
1. **Contact Form Routing**:
   - Backend API endpoint `/api/contact` defaults destination to `hr@civildesignltd.com`.
   - Bot honeypot and IP rate limiting included.
2. **Essential-Only Cookies**:
   - Bottom floating `CookieBanner` explaining strictly essential cookies.
   - Dedicated `/cookie-policy` page detailing `pcd_cookie_consent` and session security, explicitly confirming zero third-party tracking or advertising cookies.
3. **Company Name & Trademark Removal**:
   - Updated site footer and legal headers to: `© 2026 Perpetual Civil Design Ltd. All rights reserved.`
4. **Dedicated Next.js Routes**:
   - `/` — Homepage with Hero, Partners, Positioning, Projects Rail, Services Accordion, How We Work, Why PCD, Feedback, FAQ, and CTA.
   - `/services` — Full 4-discipline engineering capabilities breakdown.
   - `/projects` — Full 15-project gallery with categories, search, and 6-6-3 pagination.
   - `/contact` — Split contact hero with UK telephone numbers, email, and interactive contact form.
   - `/privacy-policy` — Legally formatted Privacy Policy.
   - `/cookie-policy` — Legally formatted Cookie Policy.

---

## 3. GoDaddy DNS Configuration for www.civildesignltd.com

When launching on Vercel with GoDaddy:

| Type | Name / Host | Value / Target | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` | `76.76.21.21` | 600 seconds (or 1/2 hour) |
| **CNAME** | `www` | `cname.vercel-dns.com` | 600 seconds (or 1/2 hour) |

Once saved in GoDaddy, Vercel will automatically verify the domain, issue a free Let's Encrypt SSL certificate, and redirect HTTP to HTTPS.

---

## 4. Cost Breakdown for PCD

| Service | Recommended Provider | Monthly Cost | Annual Cost |
| :--- | :--- | :--- | :--- |
| **Domain Registration** | GoDaddy (existing) | Existing renewal | Existing renewal |
| **Web Hosting** | Vercel (Hobby Tier) | **£0 / month** | **£0 / year** |
| **Email API (Contact Form)** | Resend (Free Tier - 3,000 emails/mo) | **£0 / month** | **£0 / year** |
| **Code Repository** | GitHub (Free Tier) | **£0 / month** | **£0 / year** |
| **Total Ongoing Hosting Cost** | | **£0 / month** | **£0 / year** |
