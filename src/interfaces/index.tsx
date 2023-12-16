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
export interface User {
  id?: string;
  name: string;
  username: string;
  email: string;
  dob: Date;
  password: string;
  bio: string;
  image?: string;
  role: "user" | "admin";
  address: Address;
  phone: string;
  gender: "Male" | "Female";
}
export interface Address {
  street: string;
  state: string;
  city: string;
  zipcode: string;
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
  accessToken: null | string;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: any;
}
export interface State {
  products: { data: Product[]; isLoading: boolean; error: any };
  cart: CartState;
  login: LoginState;
  user: { data: User; isLoading: boolean; error: any };
}
export interface Credentials {
  username: string;
  password: string;
}
export enum HttpStatusCodes {
  OK = 200,
  Created = 201,
  Accepted = 202,
  NoContent = 204,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  InternalServerError = 500,
}
export interface SignupFormValues {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
}
