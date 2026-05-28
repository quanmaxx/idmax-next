# IDMAX Website — Hybrid Pixel + Editable

Source dựng lại website IDMAX từ bộ file thiết kế PDF/AI theo hướng component thật, text thật, ảnh/video/font tách riêng trong `public/assets` và dữ liệu quản lý qua file TypeScript.

## Tech stack

- Next.js App Router
- TypeScript
- CSS variables + global CSS
- Static export-ready: `output: 'export'`
- `next/image` với `unoptimized: true` để deploy được trên hosting static

## Cấu trúc chính

```txt
/public
  /assets
    /images
      /projects
      /news
      /logos
      /partners
    /video
    /fonts
    /icons
/src
  /app
    /page.tsx
    /work/[slug]/page.tsx
    /about/page.tsx
    /news/page.tsx
    /news/[slug]/page.tsx
    /contact/page.tsx
  /components
  /data
  /styles
```

## Chạy dự án

Trước khi chạy, copy các font gốc từ ZIP của bạn vào `/public/assets/fonts` theo danh sách trong `/public/assets/fonts/README.md`.

```bash
npm install
npm run dev
```

Mở: `http://localhost:3000`

## Build / Export static

```bash
npm run build
```

Sau khi build, Next.js xuất static site trong thư mục `out/`.

## Cách thêm dự án mới

Mở file:

```txt
/src/data/projects.ts
```

Thêm một object mới vào mảng `projects`:

```ts
{
  slug: 'ten-du-an',
  title: 'TÊN DỰ ÁN',
  sector: 'Business Sector',
  client: 'Client Name',
  publishedYear: '2026',
  thumbnail: '/assets/images/projects/ten-du-an-thumb.webp',
  heroImage: '/assets/images/projects/ten-du-an-hero.webp',
  galleryImages: [
    { src: '/assets/images/projects/ten-du-an-01.webp', alt: 'Mô tả ảnh' }
  ],
  description: 'Mô tả dự án...',
  relatedProjects: ['tuart-wedding', 'biluxury', 'kingsman']
}
```

URL tự động có dạng:

```txt
/work/ten-du-an
```

## Cách thêm bài viết mới

Mở file:

```txt
/src/data/news.ts
```

Thêm một object mới vào mảng `news`:

```ts
{
  slug: 'ten-bai-viet',
  title: 'Tiêu đề bài viết',
  date: 'May 20, 2026',
  categories: ['BRANDING', 'LOGO'],
  thumbnail: '/assets/images/news/ten-bai-viet.webp',
  excerpt: 'Mô tả ngắn...',
  content: ['Đoạn 1...', 'Đoạn 2...'],
  relatedPosts: ['ykk-dai-gia-khoa-keo']
}
```

URL tự động có dạng:

```txt
/news/ten-bai-viet
```

## Cách thay ảnh

1. Đưa ảnh mới vào đúng folder:
   - Dự án: `/public/assets/images/projects`
   - News: `/public/assets/images/news`
   - Logo: `/public/assets/images/logos`
   - Partner: `/public/assets/images/partners`
2. Ưu tiên dùng `.webp` để nhẹ hơn.
3. Cập nhật đường dẫn trong `/src/data/projects.ts` hoặc `/src/data/news.ts`.
4. Luôn viết `alt` rõ nghĩa cho ảnh gallery.

## Cách thay video About

Thay file:

```txt
/public/assets/video/about-hero.mp4
```

Giữ nguyên tên file nếu không muốn sửa code. Nếu đổi tên, cập nhật trong:

```txt
/src/components/VideoHero.tsx
```

Video đang được set:

```html
autoplay muted loop playsinline
```

## SEO

Đã có:

- Metadata cho Home, About, News, Contact
- Metadata riêng cho từng project detail
- Metadata riêng cho từng news detail
- Canonical URL
- Open Graph image
- `sitemap.xml`
- `robots.txt`
- Heading hierarchy: mỗi trang có một H1 chính

Nếu đổi domain, sửa trong:

```txt
/src/data/site.ts
```

```ts
url: 'https://idmax.vn'
```

## Design tokens

Các biến nền tảng nằm ở:

```txt
/src/styles/tokens.css
```

Gồm:

```css
--page-bg
--header-bg
--text
--muted
--container
--gutter
--ease
--header-height
```

## Visual QA đã thực hiện

- Render PDF reference ở desktop width 1920px để đo layout.
- Xác định các mốc chính: header 69px, container 1717px, gutter 102px, grid 3 cột, footer 262px.
- Build production đã chạy thành công bằng `npm run build` trước khi đóng gói.
- Các asset trong PDF/AI/links đã được tách thành ảnh riêng, không dùng ảnh chụp nguyên trang làm giao diện chính.
- Font files không được đóng gói trong file bàn giao; hãy copy lại các file font từ ZIP gốc vào `/public/assets/fonts` trước khi chạy/build.

## Ghi chú triển khai

- Không hard-code project/news trong component. Dữ liệu nằm ở `/src/data`.
- Text là text thật, không crop thành ảnh.
- Motion nhẹ, có hỗ trợ `prefers-reduced-motion`.
- Footer, menu, heading, bài viết và dự án đều sửa được bằng code/data.
