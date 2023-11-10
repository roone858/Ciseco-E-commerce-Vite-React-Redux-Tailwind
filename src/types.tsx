export interface Product {
  id: number;
  image: string;
  expert: boolean;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: { rate: number; count: number } | number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  feature: string;
}
export interface State {
  products: { data: Product[]; isLoading: boolean; error: any };
}
