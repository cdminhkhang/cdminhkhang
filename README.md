# CƠ ĐIỆN MINH KHANG - Website

Website giới thiệu dịch vụ cơ điện của Công ty Minh Khang với cấu trúc file được tách riêng để dễ quản lý.

## 📁 Cấu trúc dự án

```
cdminhkhang/
├── index.html              # File chính - mở file này để chạy trang web
├── css/
│   └── codien.css          # File CSS chính với tất cả styles
├── js/
│   └── codien.js           # File JavaScript chính với tất cả functionality
├── components/             # Thư mục chứa các component React (nếu sử dụng)
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Gallery.tsx
│   ├── Testimonials.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
├── constants.tsx           # Dữ liệu tĩnh
├── types.ts               # Định nghĩa kiểu dữ liệu
└── README.md              # File hướng dẫn này
```

## 🚀 Cách sử dụng

### Cách 1: Mở trực tiếp (Khuyến nghị)
1. Tải xuống tất cả các file trong thư mục này
2. Đảm bảo tất cả file đều ở cùng một thư mục
3. Mở file `index.html` bằng trình duyệt web (Chrome, Firefox, Edge, Safari)

### Cách 2: Sử dụng Live Server (Dành cho nhà phát triển)
1. Cài đặt extension Live Server trong VS Code
2. Click chuột phải vào file `index.html`
3. Chọn "Open with Live Server"

## 🎨 Tính năng

### ✅ Responsive Design
- Tương thích hoàn toàn với mobile, tablet, desktop
- Mobile-first approach với breakpoints tối ưu

### ✅ Animations & Effects
- Smooth scrolling navigation
- Fade-in animations cho các section
- Hover effects cho service cards
- Glassmorphism effect cho header
- Loading animations

### ✅ Interactive Features
- Mobile menu với animations
- Gallery lightbox khi click vào hình ảnh
- Contact buttons với loading states
- Smooth scroll cho anchor links

### ✅ Performance Optimizations
- Throttled scroll events (~60fps)
- Debounced functions cho performance
- Optimized animations với CSS transforms
- Lazy loading cho images

## 🛠️ Dịch vụ được giới thiệu

1. **Điện 1 pha, 3 pha** - Thi công, lắp đặt, bảo trì hệ thống điện
2. **Hệ thống nước** - Lắp đặt, sửa chữa hệ thống nước sinh hoạt
3. **Chống trộm & Định vị** - Giải pháp an ninh cho xe máy và ô tô
4. **Máy lọc & Máy nước nóng** - Lắp đặt máy lọc nước RO, máy nước nóng
5. **Cơ điện lạnh** - Sửa chữa, bảo dưỡng máy lạnh, tủ lạnh
6. **Camera giám sát** - Lắp đặt hệ thống camera an ninh
7. **Đèn năng lượng mặt trời** - Đèn đường, đèn sân vườn năng lượng mặt trời
8. **Dịch vụ xe du lịch** - Cho thuê xe có tài xế

## 📞 Liên hệ

- **Điện thoại**: 09xx.xxx.xxx
- **Zalo**: 09xx.xxx.xxx
- **Email**: info@codienminhkhang.com

## 🔧 Tùy chỉnh

### Thay đổi nội dung
1. **Dữ liệu**: Chỉnh sửa file `constants.tsx` để thay đổi thông tin dịch vụ, testimonials
2. **Layout**: Chỉnh sửa các component trong thư mục `components/`
3. **Styling**: Chỉnh sửa file `css/codien.css` để thay đổi giao diện

### Thay đổi functionality
1. **JavaScript**: Chỉnh sửa file `js/codien.js` để thêm/sửa tính năng
2. **Animations**: Thêm CSS animations trong `css/codien.css`
3. **Interactions**: Tùy chỉnh event handlers trong `js/codien.js`

### Thay đổi màu sắc
Các biến màu chính trong `css/codien.css`:
```css
/* Primary colors */
--primary: #00C2FF;
--secondary: #2ACFCF;
--accent: #FFA652;
--dark: #1E2A38;
--light: #F5F7FA;
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Browser Support

- ✅ Chrome (khuyến nghị)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 📋 Lưu ý

- Trang web sử dụng CDN để load Tailwind CSS và Google Fonts
- Cần kết nối internet để load các thư viện từ CDN
- Hình ảnh sử dụng placeholder từ Placehold.co
- Tất cả animations được tối ưu cho performance

## 🚀 Deployment

### GitHub Pages
1. Push code lên GitHub repository
2. Vào Settings > Pages
3. Chọn source branch và folder
4. Website sẽ được deploy tại `https://username.github.io/repository-name`

### Netlify
1. Drag & drop thư mục dự án vào Netlify
2. Hoặc connect với GitHub repository
3. Website sẽ được deploy tự động

### Vercel
1. Import project từ GitHub
2. Vercel sẽ tự động detect và deploy
3. Website sẽ có URL dạng `https://project-name.vercel.app`

## 📄 License

© 2024 CƠ ĐIỆN MINH KHANG. All Rights Reserved. 