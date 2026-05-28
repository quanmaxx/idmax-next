export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  sector: string;
  client: string;
  publishedYear: string;
  thumbnail: string;
  heroImage: string;
  galleryImages: ProjectImage[];
  description: string;
  relatedProjects: string[];
};

export const projects: Project[] = [
  {
    slug: 'tuart-wedding',
    title: 'TUART WEDDING',
    sector: 'Art / Wedding',
    client: 'TUART GROUP',
    publishedYear: '2017',
    thumbnail: '/assets/images/projects/tuart-wedding-thumb.webp',
    heroImage: '/assets/images/projects/tuart-wedding-hero.webp',
    galleryImages: [
      { src: '/assets/images/projects/tuart-wedding-gallery-entrance.webp', alt: 'TuArt Wedding logo ứng dụng tại không gian thương hiệu' },
      { src: '/assets/images/projects/tuart-wedding-gallery-stage.webp', alt: 'TuArt Wedding logo trên sân khấu sự kiện' },
      { src: '/assets/images/projects/tuart-wedding-brand-panel.webp', alt: 'Bảng định hướng tái định nghĩa tình yêu hiện đại của TuArt Wedding' }
    ],
    description:
      'TuArt Wedding là một trong các hệ thống Studio ảnh cưới hàng đầu tại Việt Nam với 8 chi nhánh trải dài từ Bắc vào Nam. Là một trong các thương hiệu truyền cảm hứng và có sự ảnh hưởng rất lớn trong lĩnh vực ảnh viện áo cưới. Năm 2017 sau rất nhiều lần thay đổi nhận diện thương hiệu nhưng vẫn chưa có sự lựa chọn tối ưu, TuArt Wedding đã hợp tác cùng IDMAX để thực hiện một sự thay đổi mạnh mẽ cho diện mạo mới của mình để xây dựng nền tảng cho các mục tiêu cao hơn. Chúng tôi đã có một quá trình kết hợp rất thành công cho sự thay đổi này.',
    relatedProjects: ['tuart-wedding', 'biluxury', 'kingsman']
  },
  {
    slug: 'biluxury',
    title: 'BILUXURY',
    sector: 'Fashion / Retail',
    client: 'Biluxury',
    publishedYear: '2024',
    thumbnail: '/assets/images/projects/biluxury-thumb.webp',
    heroImage: '/assets/images/projects/biluxury-hero.webp',
    galleryImages: [{ src: '/assets/images/projects/biluxury-store-thumb.webp', alt: 'Biluxury storefront brand application' }],
    description: 'Một dự án hình ảnh thương hiệu dành cho thời trang nam, tập trung vào cảm giác chỉn chu, hiện đại và cao cấp trong từng điểm chạm.',
    relatedProjects: ['tuart-wedding', 'kingsman', 'ght']
  },
  {
    slug: 'kingsman',
    title: 'KINGSMAN',
    sector: 'Hospitality / Lifestyle',
    client: 'Kingsman',
    publishedYear: '2024',
    thumbnail: '/assets/images/projects/kingsman-thumb.webp',
    heroImage: '/assets/images/projects/kingsman-thumb.webp',
    galleryImages: [{ src: '/assets/images/projects/kingsman-event-thumb.webp', alt: 'Kingsman event brand application' }],
    description: 'Hệ nhận diện mang tinh thần lịch lãm, mạnh mẽ và có chất riêng cho một thương hiệu định hướng cao cấp.',
    relatedProjects: ['tuart-wedding', 'biluxury', 'kofest']
  },
  {
    slug: 'ght',
    title: 'GHT',
    sector: 'Industrial / Manufacturing',
    client: 'GHT',
    publishedYear: '2025',
    thumbnail: '/assets/images/projects/ght-thumb.webp',
    heroImage: '/assets/images/projects/ght-thumb.webp',
    galleryImages: [],
    description: 'Thiết kế hình ảnh thương hiệu cho một doanh nghiệp sản xuất công nghiệp với tinh thần rõ ràng, đáng tin cậy và có quy mô.',
    relatedProjects: ['tuart-wedding', 'biluxury', 'kingsman']
  },
  {
    slug: 'kingsman-event',
    title: 'KINGSMAN EVENT',
    sector: 'Event / Brand Space',
    client: 'Kingsman',
    publishedYear: '2025',
    thumbnail: '/assets/images/projects/kingsman-event-thumb.webp',
    heroImage: '/assets/images/projects/kingsman-event-thumb.webp',
    galleryImages: [],
    description: 'Không gian trình diễn thương hiệu được xử lý theo hướng tối giản, sang trọng và có tính nghi thức.',
    relatedProjects: ['kingsman', 'biluxury', 'kofest']
  },
  {
    slug: 'kofest',
    title: 'KOFEST',
    sector: 'F&B / Coffee',
    client: 'Kofest',
    publishedYear: '2025',
    thumbnail: '/assets/images/projects/kofest-thumb.webp',
    heroImage: '/assets/images/projects/kofest-thumb.webp',
    galleryImages: [],
    description: 'Dự án ứng dụng thương hiệu trong không gian F&B với cảm giác gần gũi, chuyên nghiệp và có chất trình diễn.',
    relatedProjects: ['kingsman', 'biluxury', 'tuart-wedding']
  },
  {
    slug: 'ykk-brand-story',
    title: 'YKK BRAND STORY',
    sector: 'Brand Story / Editorial',
    client: 'YKK',
    publishedYear: '2026',
    thumbnail: '/assets/images/projects/ykk-thumb.webp',
    heroImage: '/assets/images/projects/ykk-thumb.webp',
    galleryImages: [],
    description: 'Một hướng tiếp cận nội dung thương hiệu dựa trên câu chuyện, sự bền bỉ và tiêu chuẩn chất lượng âm thầm.',
    relatedProjects: ['tuart-wedding', 'biluxury', 'ght']
  },
  {
    slug: 'tuart-entrance',
    title: 'TUART SPACE',
    sector: 'Brand Space',
    client: 'TuArt',
    publishedYear: '2017',
    thumbnail: '/assets/images/projects/tuart-entrance-thumb.webp',
    heroImage: '/assets/images/projects/tuart-entrance-thumb.webp',
    galleryImages: [],
    description: 'Ứng dụng nhận diện TuArt trong không gian, ánh sáng và vật liệu để tăng cảm giác biểu tượng của thương hiệu.',
    relatedProjects: ['tuart-wedding', 'biluxury', 'kingsman']
  },
  {
    slug: 'biluxury-store',
    title: 'BILUXURY STORE',
    sector: 'Retail Space',
    client: 'Biluxury',
    publishedYear: '2024',
    thumbnail: '/assets/images/projects/biluxury-store-thumb.webp',
    heroImage: '/assets/images/projects/biluxury-store-thumb.webp',
    galleryImages: [],
    description: 'Hình ảnh cửa hàng được tổ chức để tạo cảm giác thương hiệu nam tính, tinh gọn và dễ ghi nhớ.',
    relatedProjects: ['biluxury', 'tuart-wedding', 'kingsman']
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(slugs: string[]) {
  return slugs.map((slug) => getProject(slug)).filter((project): project is Project => Boolean(project));
}
