import type { Metadata } from 'next';
import Image from 'next/image';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Liên hệ IDMAX Logo Expert.',
  alternates: { canonical: `${site.url}/contact` },
  openGraph: {
    title: 'Contact — IDMAX',
    description: 'Liên hệ IDMAX Logo Expert.',
    url: `${site.url}/contact`,
    images: [{ url: '/assets/images/logos/idmax-logo-light.png', width: 1200, height: 630, alt: 'IDMAX Contact' }]
  }
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <div className="contact-headline">
            <h1>
              Let&apos;s build
              <br />
              your icon.
            </h1>
          </div>

          <div className="contact-info-card">
            <Image
              className="contact-brand-logo"
              src="/assets/images/logos/idmax-logo-dark.png"
              alt="IDMAX"
              width={205}
              height={42}
              priority
            />

            <p className="contact-address">
              70 Market Str, Sunrise G, The Manor Central Park
              <br />
              Nguyễn Xiển, Hoàng Mai, Hà Nội
            </p>

            <div className="contact-direct">
              <Image
                className="contact-qr"
                src="/assets/images/contact/qr-zalo.png"
                alt="IDMAX Zalo QR code"
                width={96}
                height={96}
              />

              <div className="contact-lines">
                <p>
                  <span>M</span>
                  <a href="tel:+84931321888">+84 931 321 888</a>
                </p>
                <p>
                  <span>E</span>
                  <a href="mailto:idmax.vn@gmail.com">idmax.vn@gmail.com</a>
                </p>
              </div>
            </div>

            <nav className="contact-socials" aria-label="Social links">
              <a href="https://www.facebook.com/idmaxbranding" target="_blank" rel="noreferrer">Facebook</a>
              <a href="#" target="_blank" rel="noreferrer">Youtube</a>
              <a href="#" target="_blank" rel="noreferrer">Behance</a>
              <a href="#" target="_blank" rel="noreferrer">instagram</a>
            </nav>
          </div>
        </div>
      </section>
    </main>
  );
}