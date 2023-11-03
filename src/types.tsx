export interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
export interface State {
  products: { data: Product[]; isLoading: boolean; error: any };
}
