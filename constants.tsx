
import React from 'react';
import { NavLink, ServiceItem, GalleryImage, TestimonialItem } from './types';
import { 
  BsLightningChargeFill, 
  BsSnow, 
  BsFillShieldLockFill 
} from 'react-icons/bs';
import { 
  IoWater, 
  IoCarSportSharp 
} from 'react-icons/io5';
import { 
  MdOutlineWaterDrop, 
  MdSolarPower, 
  MdCameraAlt 
} from 'react-icons/md';

export const NAV_LINKS: NavLink[] = [
  { href: '#gioi-thieu', label: 'Giới thiệu' },
  { href: '#dich-vu', label: 'Dịch vụ' },
  { href: '#hinh-anh', label: 'Hình ảnh' },
  { href: '#lien-he', label: 'Liên hệ' },
];

export const SERVICES: ServiceItem[] = [
  {
    icon: <BsLightningChargeFill className="w-10 h-10 text-primary" />,
    title: 'Điện 1 pha, 3 pha',
    description: 'Thi công, lắp đặt, và bảo trì hệ thống điện dân dụng và công nghiệp an toàn, ổn định.',
  },
  {
    icon: <IoWater className="w-10 h-10 text-primary" />,
    title: 'Hệ thống nước',
    description: 'Lắp đặt, sửa chữa hệ thống nước sinh hoạt, tưới tiêu tự động cho gia đình và trang trại.',
  },
  {
    icon: <BsFillShieldLockFill className="w-10 h-10 text-primary" />,
    title: 'Chống trộm & Định vị',
    description: 'Giải pháp an ninh cho xe máy và ô tô với thiết bị chống trộm và định vị GPS hiện đại.',
  },
  {
    icon: <MdOutlineWaterDrop className="w-10 h-10 text-primary" />,
    title: 'Máy lọc & Máy nước nóng',
    description: 'Lắp đặt máy lọc nước RO, máy nước nóng năng lượng mặt trời và trực tiếp.',
  },
  {
    icon: <BsSnow className="w-10 h-10 text-primary" />,
    title: 'Cơ điện lạnh',
    description: 'Sửa chữa, bảo dưỡng máy lạnh, tủ lạnh, máy giặt và các thiết bị điện lạnh khác.',
  },
  {
    icon: <MdCameraAlt className="w-10 h-10 text-primary" />,
    title: 'Camera giám sát',
    description: 'Tư vấn, lắp đặt hệ thống camera an ninh cho gia đình, cửa hàng, và nhà xưởng.',
  },
  {
    icon: <MdSolarPower className="w-10 h-10 text-primary" />,
    title: 'Đèn năng lượng mặt trời',
    description: 'Cung cấp và lắp đặt đèn đường, đèn sân vườn sử dụng năng lượng mặt trời tiết kiệm.',
  },
  {
    icon: <IoCarSportSharp className="w-10 h-10 text-primary" />,
    title: 'Dịch vụ xe du lịch',
    description: 'Cho thuê xe 4 chỗ, 7 chỗ có tài xế kinh nghiệm, phục vụ các chuyến đi tỉnh an toàn.',
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
    { src: 'https://picsum.photos/id/160/800/600', alt: 'Lắp đặt camera an ninh ngoài trời' },
    { src: 'https://picsum.photos/id/219/800/600', alt: 'Hệ thống dây điện và tủ điều khiển' },
    { src: 'https://picsum.photos/id/56/800/600', alt: 'Đường nông thôn với đèn năng lượng mặt trời' },
    { src: 'https://picsum.photos/id/1059/800/600', alt: 'Hộp hẹn giờ và ổ cắm điện' },
    { src: 'https://picsum.photos/id/1079/800/600', alt: 'Kỹ thuật viên đang làm việc' },
    { src: 'https://picsum.photos/id/211/800/600', alt: 'Lắp đặt đèn trong nhà' },
    { src: 'https://picsum.photos/id/10/800/600', alt: 'Camera giám sát trên cột' },
    { src: 'https://picsum.photos/id/200/800/600', alt: 'Thiết bị camera và máy tính mới' },
    { src: 'https://picsum.photos/id/1032/800/600', alt: 'Đèn năng lượng mặt trời trên nền trời xanh' },
];


export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: 'Dịch vụ rất chuyên nghiệp và nhanh chóng. Kỹ thuật viên tư vấn nhiệt tình, xử lý sự cố điện nhà tôi rất hiệu quả. Sẽ tiếp tục ủng hộ!',
    author: 'Anh Tuấn',
    title: 'Khách hàng tại TP.HCM',
  },
  {
    quote: 'Hệ thống camera hoạt động rất ổn định, hình ảnh sắc nét. Tôi rất yên tâm khi đi vắng. Cảm ơn Cơ Điện Minh Khang.',
    author: 'Chị Lan',
    title: 'Chủ cửa hàng',
  },
  {
    quote: 'Đội ngũ lắp đặt đèn năng lượng mặt trời làm việc rất cẩn thận và đúng tiến độ. Sản phẩm chất lượng, tiết kiệm chi phí tiền điện đáng kể.',
    author: 'Chú Ba',
    title: 'Chủ trang trại',
  },
];
