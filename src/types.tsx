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
  sizes: string[];
  colors: string[];
  category: string;
  subCategory: string;
  thumbnail: string;
  images: string[];
  highlights: string[];
  feature: string;
}
export interface Customer {
  id: string;
  name: string;
  username: string;
  email: string;
  password: string;
  image: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
}
export interface CartItem {
  id: string;
  productId: number;
  price: number;
  size: string;
  color: string;
  count: number;
}
export interface CartState {
  items: CartItem[];
  total: number;
}
export interface LoginState {
  user: null | Customer;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: any;
}
export interface State {
  products: { data: Product[]; isLoading: boolean; error: any };
  cart: CartState;
  login: LoginState;
  customers: { data: Customer[]; isLoading: boolean; error: any };
}
