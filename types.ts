
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  sizes: string[];
  colors: string[];
  category: string;
  details: string[];
  care: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
  color: string;
}

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    imageUrl: string;
    date: string;
    author: string;
}

export interface FaqItem {
    question: string;
    answer: string;
}
