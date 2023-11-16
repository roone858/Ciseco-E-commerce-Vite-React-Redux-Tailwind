import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types";

const data = [
  {
    id: 1,
    image: "http://127.0.0.1:5173/src/assets/green-shirt.webp",
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
    image: "http://127.0.0.1:5173/src/assets/sport-1.webp",
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
    image: "http://127.0.0.1:5173/src/assets/short.webp",
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
    image: "http://127.0.0.1:5173/src/assets/sport-2.webp",
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
    image: "http://127.0.0.1:5173/src/assets/bag.webp",
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
    image: "http://127.0.0.1:5173/src/assets/full1.webp",
    images: [
      "http://127.0.0.1:5173/src/assets/full1-1.webp",
      "http://127.0.0.1:5173/src/assets/full1-2.webp",
      "http://127.0.0.1:5173/src/assets/full1-3.webp",
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
  {
    id: 13,
    image:
      "https://f.nooncdn.com/p/pzsku/Z4A17D0BB1DCA03BCD10CZ/45/_/1674986012/b1a2f8fe-843f-4bf2-86eb-6c7de430fe88.jpg?format=avif&width=800",
    images: [
      "https://f.nooncdn.com/p/pzsku/Z4A17D0BB1DCA03BCD10CZ/45/_/1674986012/4c056e54-8aa0-4684-b5ff-c3c111e86dfe.jpg?format=avif&width=800",
      "https://f.nooncdn.com/p/pzsku/Z4A17D0BB1DCA03BCD10CZ/45/_/1674986012/dcf3cd08-f804-4b80-a3f0-b8a47b67b8cc.jpg?format=avif&width=800",
      "",
    ],
    title: "Basic Lace-Up Faux leather Fashion Sneaker For Men White",
    description:
      "Desert Shoes is pushing the boundaries of sneaker design with its latest trend-setting chunky sole sneakers. These shoes feature a bold and modern design that is sure to turn heads. The chunky sole adds a fashion-forward edge while the attractive color options are versatile and perfect for any season. These shoes are perfect for pairing with sweet pants, jeans, or shorts, making them the perfect choice for any casual occasion. Whether you're running errands, going out with friends or hitting the gym, these shoes will elevate your style.",
    price: 88,
    category: "men",
    subCategory: "shoes",
    sizes: ["", "", "", "44", "", ""],
    colors: ["wight"],
    highlights: [
      "Lace-up closure with reinforced eyelets for a secure fit",
      "Upper constructed from soft leather material",
      "High-quality PVC sole material",
      "Plush soft leather lining for ultimate comfort",
      "Classic and timeless minimalist shoe design",
    ],
    feature: "trend",
    expert: false,
    discount: "30",
    new: false,
    trend: true,
    rating: { rate: 4.9, count: 98 },
  },
  {
    id: 14,
    image:
      "https://f.nooncdn.com/p/pzsku/ZCCD78A447532F7A1D0AEZ/45/_/1698495520/34782563-531f-42b5-ae46-0c5c5f30676a.jpg?format=avif&width=800",
    images: [
      "https://f.nooncdn.com/p/pzsku/ZCCD78A447532F7A1D0AEZ/45/_/1698495522/8ddfbb43-125c-46a0-8309-ad9f77e981e2.jpg?format=avif&width=800",
      "https://f.nooncdn.com/p/pzsku/ZCCD78A447532F7A1D0AEZ/45/_/1698495521/8295c823-c38c-477c-b6ac-7394189f104e.jpg?format=avif&width=800",
      "",
    ],
    title: "Basic Lace-Up Knit Flat Sneakers For Women",
    description:
      "Desert Shoes was established in 1975. We started to manufacture easy-to-manufacture shoes, and after they gained great popularity in the popular markets, production lines were developed and now Desert owns the largest production lines in Egypt and China on the highest quality standards to provide all kinds of shoes for Women, woWomen, and children Definitely, DESERT SHOES is your best choice",
    price: 88,
    category: "women",
    subCategory: "shoes",
    sizes: ["36", "37 ", "", "39", "40", "41"],
    colors: ["blue"],
    highlights: [
      "Textile upper that is durable, lightweight, and affordable",
      "Upper constructed from soft leather material",
      "Basic design that suits with all outfits",
      "Soft footbed to ensure all day comfort",
    ],
    feature: "trend",
    expert: false,
    discount: "46%",
    new: false,
    trend: true,
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
