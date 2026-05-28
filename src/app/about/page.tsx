import { AboutReveal } from '@/components/AboutReveal';
import Image from 'next/image';
import type { Metadata } from 'next';
import { VideoHero } from '@/components/VideoHero';
import { site } from '@/data/site';

const partners = [
  { name: 'HHP Global', src: '/assets/images/partners/hhp-global.png' },
  { name: 'Biluxury', src: '/assets/images/partners/biluxury.png' },
  { name: 'TuArt', src: '/assets/images/partners/tuart.png' },
  { name: 'Kingsman', src: '/assets/images/partners/kingsman.png' },
  { name: 'Kofest', src: '/assets/images/partners/kofest.png' },
  { name: 'Dapano Group', src: '/assets/images/partners/dapano.png' },
  { name: 'GHT', src: '/assets/images/partners/ght.png' },
  { name: 'Badass', src: '/assets/images/partners/badass.png' },
  { name: 'Fratelli', src: '/assets/images/partners/fratelli.png' },
  { name: 'GTECO', src: '/assets/images/partners/gteco.png' },
  { name: 'CFM', src: '/assets/images/partners/cfm.png' },
  { name: 'Trans Human', src: '/assets/images/partners/trans-human.png' }
];

export const metadata: Metadata = {
  title: 'About',
  description: 'IDMAX là đơn vị tập trung chuyên sâu vào lĩnh vực thiết kế logo thương hiệu.',
  alternates: { canonical: `${site.url}/about` },
  openGraph: {
    title: 'About IDMAX',
    description: 'IDMAX là đơn vị tập trung chuyên sâu vào lĩnh vực thiết kế logo thương hiệu.',
    url: `${site.url}/about`,
    images: [{ url: '/assets/images/about/hero-poster.webp', width: 2600, height: 1364, alt: 'IDMAX abstract hero' }]
  }
};

export default function AboutPage() {
  return (
    <main className="about-main">
      <VideoHero />
      <AboutReveal />

      <section className="about-intro">
        <div className="about-intro-grid">
          <h1 className="about-intro-title" data-about-reveal="left">
            <span>IDMAX LÀ ĐƠN VỊ DUY NHẤT TẠI</span>
            <span>VIỆT NAM LỰA CHỌN TẬP TRUNG</span>
            <span className="wide-line">CHUYÊN SÂU VÀO LĨNH VỰC</span>
            <span>THIẾT KẾ LOGO THƯƠNG HIỆU</span>
          </h1>

          <p className="about-intro-desc" data-about-reveal="right">
            Chúng tôi chấp nhận việc loại bỏ bớt nhiều công việc gây sao nhãng khác để tập trung toàn bộ nguồn lực vào nghiên cứu, lý giải, thử nghiệm và tìm kiếm những giải pháp tối ưu nhất để nâng tầm thiết kế Logo lên mức tiêu chuẩn vượt trội trong ngành.
          </p>
        </div>
      </section>

      <section className="turning-section">
        <Image
          src="/assets/images/about/turning-bg.webp"
          alt="Abstract geometric background"
          fill
          sizes="100vw"
        />

        <div className="turning-copy" data-about-reveal="up">
          <h2>
            TURNING BRANDS
            <br />
            INTO ICONS
          </h2>

          <p>
            MỤC ĐÍCH CỦA CHÚNG TÔI LÀ GIÚP CHO CÁC THƯƠNG HIỆU
            <br />
            TRỞ NÊN CÓ DẤU ẤN, CÓ CẢM XÚC VÀ MANG TÍNH BIỂU TƯỢNG
          </p>
        </div>
      </section>

      <section className="partners-section">
        <div className="partners-container">
          <h2 className="partners-title" data-scroll-reveal="up">
            ĐỐI TÁC ĐỒNG HÀNH
          </h2>

    <div className="partners-board">
      <div className="partners-left-space" />

      <div className="partners-logo-grid">
        {[
          { name: 'HHP Global', logo: '/assets/images/partners/hhp-global.png' },
          { name: 'Biluxury', logo: '/assets/images/partners/biluxury.png' },
          { name: 'Tuart', logo: '/assets/images/partners/tuart.png' },
          { name: 'Kingsman', logo: '/assets/images/partners/kingsman.png' },
          { name: 'Kofest', logo: '/assets/images/partners/kofest.png' },
          { name: 'Dapano Group', logo: '/assets/images/partners/dapano-group.png' },
          { name: 'GHT', logo: '/assets/images/partners/ght.png' },
          { name: 'Badass', logo: '/assets/images/partners/badass.png' },
          { name: 'Fratelli', logo: '/assets/images/partners/fratelli.png' },
          { name: 'Gteco', logo: '/assets/images/partners/gteco.png' },
          { name: 'CFM', logo: '/assets/images/partners/cfm.png' },
          { name: 'Trans Human', logo: '/assets/images/partners/trans-human.png' },
        ].map((partner) => (
          <div className="partner-logo-item" key={partner.name}>
            <img src={partner.logo} alt={`${partner.name} logo`} />
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      <section className="about-cta">
  <Image
    src="/assets/images/about/icon-face.webp"
    alt="Digital human face illustration"
    fill
    sizes="100vw"
  />

  <div className="about-cta-copy">
    <h2 className="about-cta-title" data-about-reveal="up">
      CÙNG CHÚNG TÔI
      <br />
      BIẾN THƯƠNG HIỆU CỦA BẠN
      <br />
      THÀNH BIỂU TƯỢNG
    </h2>
  </div>
</section>
    </main>
  );
}
