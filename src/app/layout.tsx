import type { Metadata, Viewport } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageTransition } from '@/components/PageTransition';
import { site } from '@/data/site';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: '%s — IDMAX'
  },
  description: site.description,
  alternates: { canonical: '/' },
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [{ url: site.ogImage, width: 1448, height: 1354, alt: 'IDMAX project showcase' }],
    locale: 'vi_VN',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#231f20'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body>
              <Header />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
