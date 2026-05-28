export type NewsPost = {
  slug: string;
  title: string;
  date: string;
  categories: string[];
  thumbnail: string;
  excerpt: string;
  content: string[];
  relatedPosts: string[];
};

export const news: NewsPost[] = [
  {
    slug: 'ykk-dai-gia-khoa-keo',
    title: 'YKK – đại gia kín tiếng đang bán ra 1/2 dây khóa khắp thế giới',
    date: 'May 20, 2026',
    categories: ['BRANDING', 'LOGO'],
    thumbnail: '/assets/images/news/ykk-zipper.webp',
    excerpt:
      'Bối cảnh: Do quá “bất bình” với các dây chuyền sản xuất dây khóa thời bấy giờ, Tadao Yoshida – một thợ cơ khí người Nhật đã tự mày mò một cỗ máy cho riêng mình và thành lập nên công ty YKK. Kế hoạch: Chỉ tập trung vào một điều: chất lượng sản phẩm. Mọi công đoạn từ nung chảy kim loại đến sản xuất bao bì đều được YKK đứng ra thực hiện. Kết quả: Trở thành lựa chọn số một của các thương hiệu thời trang.',
    content: [
      'Thầm lặng và cầu toàn như người Nhật. Được thành lập bởi Tadao Yoshida tại Tokyo vào năm 1934, “YKK” là viết tắt của Yoshida Kogyo Kabushikikaisha. Trên thực tế, Yoshida không sáng tạo ra khóa kéo, nhưng ông đã tạo ra một tiêu chuẩn sản xuất khiến cả ngành thời trang luôn cảm thấy an tâm khi lựa chọn.',
      'Trái ngược với địa vị hào nhoáng của nhiều thương hiệu thời trang, YKK giống như một nhân vật hỗ trợ thầm lặng. Không tập trung vào quảng cáo, YKK để chất lượng sản phẩm và khách hàng tự quảng bá cho mình. Công ty kiểm soát rất sâu chuỗi cung ứng, từ nguyên liệu, sợi tổng hợp, nhuộm màu cho đến dây chuyền sản xuất riêng.',
      'Triết lý của YKK xoay quanh một niềm tin đơn giản: không ai phồn vinh nếu không giúp ích cho người khác. Nhân công được chăm sóc tốt sẽ tạo ra sản phẩm tốt, sản phẩm tốt đem lại lợi ích cho khách hàng, và khách hàng hài lòng sẽ đem về lợi nhuận cho công ty.',
      'Đó là lý do hàng trăm thương hiệu khóa kéo giá rẻ vẫn khó thay thế YKK. Trong một sản phẩm thời trang, chi tiết nhỏ đôi khi lại là nơi quyết định cảm giác tin cậy. Chọn YKK thì gần như không thể sai được.'
    ],
    relatedPosts: ['mr-vegas-casino-incentive-code-2026-totally', 'nhung-loi-the-cho-cac-thuong-hieu-tre-thoi-4-0']
  },
  {
    slug: 'coco-chanel-5-bai-hoc',
    title: 'Coco Chanel và 5 bài học kinh điển về xây dựng phong cách',
    date: 'May 20, 2026',
    categories: ['BRANDING', 'LOGO'],
    thumbnail: '/assets/images/news/coco-chanel.webp',
    excerpt: 'Phong cách không chỉ là hình thức bên ngoài. Nó là một hệ tiêu chuẩn được lặp lại đủ lâu để người khác có thể nhận ra bạn mà không cần giải thích quá nhiều.',
    content: [
      'Coco Chanel để lại một bài học rất rõ: thương hiệu mạnh không chạy theo mọi xu hướng. Thương hiệu mạnh biết loại bỏ những thứ không cần thiết để giữ lại một cảm giác nhất quán.',
      'Khi phong cách đủ rõ, khách hàng không chỉ nhớ sản phẩm. Họ nhớ một thái độ, một tiêu chuẩn sống và một hình ảnh mà họ muốn thuộc về.'
    ],
    relatedPosts: ['ykk-dai-gia-khoa-keo', 'thoi-trang-va-phong-cach-giong-hay-khac']
  },
  {
    slug: 'thoi-trang-va-phong-cach-giong-hay-khac',
    title: 'Thời trang và phong cách, giống hay khác?',
    date: 'May 20, 2026',
    categories: ['BRANDING', 'LOGO'],
    thumbnail: '/assets/images/news/fashion-style.webp',
    excerpt: 'Thời trang có thể thay đổi theo mùa. Phong cách là thứ giúp thương hiệu không bị trôi đi mỗi khi thị trường đổi hướng.',
    content: [
      'Thời trang là thứ dễ nhìn thấy. Phong cách là thứ khiến người ta nhận ra bạn dù bối cảnh đã thay đổi. Với thương hiệu, phong cách chính là hệ quy chiếu để mọi quyết định hình ảnh không bị rời rạc.',
      'Một thương hiệu chỉ chạy theo cái mới sẽ luôn mệt. Một thương hiệu có phong cách sẽ biết cái gì nên thay đổi và cái gì phải giữ lại.'
    ],
    relatedPosts: ['coco-chanel-5-bai-hoc', 'nhung-loi-the-cho-cac-thuong-hieu-tre-thoi-4-0']
  },
  {
    slug: 'mr-vegas-casino-incentive-code-2026-totally',
    title: 'Mr Vegas Casino Incentive Code 2026 Totally',
    date: 'May 20, 2026',
    categories: ['BRANDING', 'LOGO'],
    thumbnail: '/assets/images/news/casino-code.webp',
    excerpt: 'Một bản ghi nội dung mẫu trong hệ thống news, dùng để kiểm tra bố cục danh sách, khoảng cách và metadata bài viết.',
    content: ['Đây là nội dung mẫu để giữ cấu trúc dữ liệu news có thể mở rộng. Bạn có thể thay toàn bộ đoạn này trong /src/data/news.ts.'],
    relatedPosts: ['ykk-dai-gia-khoa-keo', 'nhung-loi-the-cho-cac-thuong-hieu-tre-thoi-4-0']
  },
  {
    slug: 'nhung-loi-the-cho-cac-thuong-hieu-tre-thoi-4-0',
    title: 'Những lợi thế cho các thương hiệu trẻ thời 4.0',
    date: 'May 20, 2026',
    categories: ['BRANDING', 'LOGO'],
    thumbnail: '/assets/images/news/brand-4-0.webp',
    excerpt: 'Thương hiệu trẻ không có lịch sử dài, nhưng có tốc độ, sự linh hoạt và khả năng kể chuyện mới mẻ hơn nếu biết dùng đúng.',
    content: [
      'Thương hiệu trẻ không nhất thiết phải yếu thế. Khi chưa bị ràng buộc bởi quá nhiều hệ thống cũ, họ có thể chọn cách xuất hiện khác hơn, rõ hơn và nhanh hơn.',
      'Vấn đề nằm ở việc sự nhanh đó có được đặt vào một tiêu chuẩn thương hiệu đủ chắc hay không. Nếu có, thương hiệu trẻ có thể đi rất xa.'
    ],
    relatedPosts: ['ykk-dai-gia-khoa-keo', 'thoi-trang-va-phong-cach-giong-hay-khac']
  }
];

export function getPost(slug: string) {
  return news.find((post) => post.slug === slug);
}

export function getRelatedPosts(slugs: string[]) {
  return slugs.map((slug) => getPost(slug)).filter((post): post is NewsPost => Boolean(post));
}
