import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import ScrollObserver from '@/components/ScrollObserver';

export const viewport: Viewport = {
  themeColor: '#0B0B0B',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.civildesignltd.com'),
  title: 'Perpetual Civil Design Ltd | Specialist Engineering Consultancy',
  description:
    'Perpetual Civil Design provides specialist civil and structural engineering, design assurance, temporary works and Protection & Control services for major power and infrastructure projects across the UK.',
  keywords: [
    'Civil Engineering',
    'Structural Engineering',
    'Design Assurance',
    'Substations 400kV',
    'GIS Substations',
    'Protection and Control',
    'Temporary Works',
    'UK Power Infrastructure',
  ],
  authors: [{ name: 'Perpetual Civil Design Ltd' }],
  openGraph: {
    title: 'Perpetual Civil Design Ltd | Specialist Engineering Consultancy',
    description:
      'Specialist civil, structural, and Protection & Control engineering for major UK power and infrastructure projects.',
    url: 'https://www.civildesignltd.com',
    siteName: 'Perpetual Civil Design Ltd',
    images: [
      {
        url: '/img/hero.jpg',
        width: 1024,
        height: 576,
        alt: 'Perpetual Civil Design Ltd Infrastructure Engineering',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  icons: {
    icon: '/img/logo-icon.png',
    apple: '/img/logo-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Global SVG Symbol Sprites */}
        <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
          <symbol id="chev" viewBox="0 0 16 16">
            <path d="M6 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </symbol>
          <symbol id="chevl" viewBox="0 0 16 16">
            <path d="M10 3L5 8l5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </symbol>
          <symbol id="arr" viewBox="0 0 16 16">
            <path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </symbol>
          <symbol id="mail" viewBox="0 0 16 16">
            <rect x="1.5" y="3" width="13" height="10" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.3" />
            <path d="M2 4l6 5 6-5" fill="none" stroke="currentColor" strokeWidth="1.3" />
          </symbol>
          <symbol id="phone" viewBox="0 0 16 16">
            <path d="M5.2 1.8l1.6 3.1-1.5 1.3a8 8 0 004.5 4.5l1.3-1.5 3.1 1.6-.6 2.6c-.1.4-.5.7-.9.7A11.9 11.9 0 011.9 3.3c0-.4.3-.8.7-.9z" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
          </symbol>
          <symbol id="pin" viewBox="0 0 16 16">
            <path d="M8 14.5s4.8-4.4 4.8-8.1a4.8 4.8 0 10-9.6 0c0 3.7 4.8 8.1 4.8 8.1z" fill="none" stroke="currentColor" strokeWidth="1.3" />
            <circle cx="8" cy="6.4" r="1.7" fill="none" stroke="currentColor" strokeWidth="1.3" />
          </symbol>
          <symbol id="copy" viewBox="0 0 24 24">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </symbol>
          <symbol id="star" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </symbol>
        </svg>

        <ScrollObserver />
        <Navbar />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
