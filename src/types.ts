export interface CarouselCard {
  id: string;
  variant: 'pay' | 'launch' | 'shop' | 'brand' | 'frete' | 'power' | 'off' | 'plain';
  title: string;
  subtitle?: string;
  tag?: string;
  imageUrl: string;
  accentColor?: string;
}

export interface MarqueeItem {
  id: string;
  title: string;
  category: 'Full-Stack Apps' | 'E-Commerce Stores' | 'SaaS Platforms' | 'Headless & 3D Web' | string;
  gifUrl: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  tools: string[];
  startingPrice: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  client: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  mainImage: string;
  subImage1: string;
  subImage2: string;
  description: string;
  liveUrl?: string;
  results: { metric: string; label: string }[];
  tags: string[];
}

export interface StorefrontProduct {
  id: string;
  name: string;
  category: string;
  price: string;
  originalPrice?: string;
  tag?: string;
  image: string;
}

export interface StorefrontTheme {
  id: string;
  name: string;
  heroTitle: string;
  heroSubtitle: string;
  heroButtonText: string;
  heroImage: string;
  bannerAnnouncement: string;
  brandName: string;
  brandTagline: string;
  products: StorefrontProduct[];
}
