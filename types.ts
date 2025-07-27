
import { ReactElement } from 'react';

export interface NavLink {
  href: string;
  label: string;
}

export interface ServiceItem {
  icon: ReactElement;
  title: string;
  description: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  title: string;
}
