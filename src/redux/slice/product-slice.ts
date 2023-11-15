import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types";
const data = [
  {
    id: 1,
    image: "src/assets/green-shirt.webp",
    images: [""],
    title: "Leather Gloves ",
    description: "Perfect mint green",
    price: 42,
    category: "clothing",
    feature: "lorem lorem lorem ",
    rating: { rate: 4.9, count: 98 },
  },
  {
    id: 2,
    image: "src/assets/sport-1.webp",
    images: [""],
    title: "Manhattan Toy WRT ",
    description: "New design 2023",
    price: 30,
    category: "sport",
    feature: "lorem lorem lorem ",
    rating: { rate: 4.9, count: 98 },
  },
  {
    id: 3,
    image: "src/assets/short.webp",
    images: [""],
    title: "Ella Leather Tote",
    description: "Cream pink",
    price: 145,
    category: "clothing",
    feature: "lorem lorem lorem ",
    rating: { rate: 4.9, count: 98 },
  },
  {
    id: 4,
    image: "src/assets/sport-2.webp",
    images: [""],
    title: "Jump Rope Kids",
    description: "Classic green",
    category: "sport",
    price: 68,
    feature: "lorem lorem lorem ",
    rating: { rate: 4.9, count: 98 },
  },
  {
    id: 5,
    image: "src/assets/bag.webp",
    images: [""],
    title: "Wool Cashmere Jacket",
    description: "Matte black",
    price: 12,
    category: "clothing",
    feature: "lorem lorem lorem ",
    rating: { rate: 4.9, count: 98 },
  },
  {
    id: 6,
    image:
      "https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F17.fcfa959c.png&w=640&q=75",
    images: [""],
    title: "Rey Nylon Backpack",
    description: "Brown cockroach wings",
    price: 74,
    category: "clothing",
    feature: "lorem lorem lorem ",
    rating: { rate: 4.9, count: 98 },
  },
  {
    id: 7,
    image:
      "https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.95a88b31.png&w=640&q=75",
    images: [""],
    title: "Genuine leather bag",
    description: "Classic Green",
    price: 68,
    category: "bags",
    feature: "lorem lorem lorem ",
    rating: { rate: 4.9, count: 98 },
  },
  {
    id: 8,
    image:
      "https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F16.2c5b70f4.png&w=640&q=75",
    images: [""],
    title: "Waffle Net Beanie",
    description: "New blue aqua",
    price: 13,
    category: "hats",
    feature: "trend",
    rating: { rate: 4.9, count: 98 },
  },
  {
    id: 9,
    image:
      "https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.a3e1e5fb.png&w=640&q=75",
    images: [""],
    title: "Travel Bet Carrier",
    description: "Dark pink 2023",
    price: 13,
    category: "hats",
    feature: "trend",
    rating: { rate: 4.9, count: 98 },
  },
  {
    id: 10,
    image: "src/assets/full1.webp",
    images: [
      "src/assets/full1-1.webp",
      "src/assets/full1-2.webp",
      "src/assets/full1-3.webp",
    ],
    title: "Travel Bet Carrier",
    description: "Dark pink 2023",
    price: 13,
    category: "hats",
    feature: "trend",
    expert: true,
    new: false,
    trend: false,
    rating: { rate: 4.9, count: 98 },
  },
  {
    id: 11,
    image:
      "https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffull2.9813d812.png&w=640&q=75",
    images: [
      "https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffull2-1.1767ac99.png&w=256&q=75",
      "https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffull2-2.050e583d.png&w=256&q=75",
      "https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffull2-3.0a2928d2.png&w=256&q=75",
    ],
    title: "Downtown Pet Tote",
    description: "Black and orange",
    price: 88,
    category: "bags",
    feature: "trend",
    expert: true,
    new: false,
    trend: false,
    rating: { rate: 4.9, count: 98 },
  },
  {
    id: 12,
    image:
      "https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffull3.168b2ce0.png&w=640&q=75",
    images: [
      "https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffull3-1.812baca4.png&w=256&q=75",
      "https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffull3-2.f1fd6b13.png&w=256&q=75",
      "https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffull3-3.096a53c6.png&w=256&q=75",
    ],
    title: "Cader Leather Sneakers",
    description: "3 sizes available",
    price: 88,
    category: "bags",
    feature: "trend",
    expert: true,
    new: false,
    trend: false,
    rating: { rate: 4.9, count: 98 },
  },
];
// https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F17.fcfa959c.png&w=640&q=75
// Define the async thunk for fetching data from the product route
export const fetchProducts: any = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    // return data
  }
);

const initialState = {
  data: data as any[],
  isLoading: false,
  error: null,
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.data.push(action.payload);
    },
    deleteProduct: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        data: state.data.filter(
          (product: Product) => product.id !== action.payload
        ),
      };
    },
    updateProduct: (state, action: PayloadAction<any>) => {
      const index = state.data.findIndex(
        (product: any) => product.id == action.payload.id
      );
      if (index !== -1) {
        state.data[index] = action.payload.data;
      }
    },
  },
  extraReducers: (builder: any) => {
    // Add reducers for handling the fetchProducts action
    // builder.addCase(fetchProducts.pending, (state) => {
    //   state.status = 'loading';
    // });
    builder.addCase(fetchProducts.pending, (state: any) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state: any, action: any) => {
      return { ...state, data: action.payload, isLoading: false };
    });
    builder.addCase(fetchProducts.rejected, (state: any, action: any) => {
      return { ...state, error: action.payload.error };
    });
  },
});

export const { addProduct, updateProduct, deleteProduct } =
  productsSlice.actions;
export default productsSlice.reducer;
