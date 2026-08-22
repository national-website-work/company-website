export type RouteKey = "home" | "products" | "services" | "contact";

export interface ProductItem {
  id: string;
  name: string;
  category: "Detergent Powder" | "Liquid Cleaners" | "Toilet Care" | "Bulk & Loose" | "Raw Materials";
  weight?: string;
  fragrance?: string;
  description?: string;
  image: string;
  moq?: string;
  features?: string[];
  isPopular?: boolean;
}

export interface ServiceProcessStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface ServiceDeliverable {
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceItem {
  slug: string;
  badge: string;
  title: string;
  short: string;
  hero: string;
  overview: string[];
  offerings: string[];
  processFlow: ServiceProcessStep[];
  deliverables: ServiceDeliverable[];
  faqs: ServiceFAQ[];
  audience: string;
  image: string;
  whatsappMessage: string;
}

export interface RFQItem {
  productId: string;
  productName: string;
  quantity: number;
  unit: string;
}
