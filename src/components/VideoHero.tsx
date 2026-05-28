import Image from 'next/image';

export function VideoHero() {
  return (
    <section className="video-hero" aria-label="IDMAX Logo Expert video hero">
      <Image className="video-poster" src="/assets/images/about/hero-poster.webp" alt="IDMAX abstract motion poster" fill priority />
      <video autoPlay muted loop playsInline poster="/assets/images/about/hero-poster.webp" aria-hidden="true">
        <source src="/assets/video/about-hero.mp4" type="video/mp4" />
      </video>
      <div className="video-overlay" />
      <div className="video-hero-copy">
        <Image src="/assets/images/logos/idmax-logo-light.png" alt="IDMAX" width={356} height={51} priority />
        <p>L O G O&nbsp;&nbsp; E X P E R T</p>
      </div>
    </section>
  );
}
