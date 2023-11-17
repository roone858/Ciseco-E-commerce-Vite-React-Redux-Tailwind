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
    category: "men",
    subCategory: "t-shirt",
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
    category: "men",
    subCategory: "short",
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
    category: "all",
    subCategory: "bag",
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
    category: "all",
    subCategory: "hoodie",
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
    category: "all",
    subCategory: "bags",
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
    category: "men",
    feature: "hats",
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
    category: "women",
    feature: "bag",
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
    category: "men",
    feature: "jacket",
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
    price: 45,
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
  {
    id: 15,
    image:
      "https://f.nooncdn.com/p/pzsku/Z126A4813362FCF6F7DFFZ/45/_/1699379854/96c4988e-a175-4654-a1eb-96118ae04a73.jpg?format=avif&width=800",
    images: [
      "https://f.nooncdn.com/p/pzsku/Z126A4813362FCF6F7DFFZ/45/_/1699379855/14bd5bf7-bebb-4c02-b1ac-f26b89951303.jpg?format=avif&width=800",
      "https://f.nooncdn.com/p/pzsku/Z126A4813362FCF6F7DFFZ/45/_/1699379856/adcf8b39-f595-4d6e-b98a-f55e1155a461.jpg?format=avif&width=800",
      "https://f.nooncdn.com/p/pzsku/Z126A4813362FCF6F7DFFZ/45/_/1699379855/4c265218-0bb9-4efa-ba57-d61b15b1a4da.jpg?format=avif&width=800",
    ],
    title: "AE Classic Fit Oxford Button-Up Shirt",
    description: "AE Classic Fit Oxford Button-Up Shirt",
    price: 64,
    category: "men",
    subCategory: "shirt",
    sizes: ["XS", "S", "M", "L", "", ""],
    colors: ["red"],
    highlights: [
      "100% Cotton",
      "Oxford shirts are the perfect shirt to dress up or down It's totally up to you",
    ],
    feature: "trend",
    expert: false,
    discount: "46%",
    new: false,
    trend: true,
    rating: { rate: 4.9, count: 98 },
  },
  {
    id: 16,
    image:
      "https://f.nooncdn.com/p/pzsku/ZFD6DB9BDF7D65E3302D0Z/45/_/1681289734/e94fcd4b-997a-4a3c-813d-4bfd823e7212.jpg?format=avif&width=800",
    images: [
      "https://f.nooncdn.com/p/pzsku/ZFD6DB9BDF7D65E3302D0Z/45/_/1681289666/93f5b11e-2080-4bdb-b4ec-2050b43da5c3.jpg?format=avif&width=800",
      "https://f.nooncdn.com/p/pzsku/ZFD6DB9BDF7D65E3302D0Z/45/_/1681289665/34927b3a-f27a-4f4c-a0e8-c980c95023d5.jpg?format=avif&width=800",
      "https://f.nooncdn.com/p/pzsku/ZFD6DB9BDF7D65E3302D0Z/45/_/1681289665/b894569e-9f26-4ebc-9ac5-b5c029fa67e4.jpg?format=avif&width=800",
    ],
    title: "AE Super Soft Graphic T-Shirt",
    description: "AE Super Soft Graphic T-Shirt",
    price: 50.9,
    category: "men",
    subCategory: "shirt",
    sizes: ["XS", "S", " ", "L", "", ""],
    colors: ["red"],
    highlights: ["Your graphics game needs a refresh - we've got ya covered!"],
    feature: "trend",
    expert: false,
    discount: "50%",
    new: false,
    trend: true,
    rating: { rate: 4.9, count: 98 },
  },
  {
    id: 17,
    image:
      "https://f.nooncdn.com/p/pzsku/ZB241E9573A0F9C85017DZ/45/_/1695272129/58898ad0-962d-4568-a7c3-57521b627571.jpg?format=avif&width=800",
    images: [
      "https://f.nooncdn.com/p/pzsku/ZB241E9573A0F9C85017DZ/45/_/1695272130/79a1f497-ebfe-4d37-ab9a-fd44bae936d7.jpg?format=avif&width=800",
      "https://f.nooncdn.com/p/pzsku/ZB241E9573A0F9C85017DZ/45/_/1695272130/87a66407-d88b-43fa-a9e1-c56d408cfda7.jpg?format=avif&width=800",
    ],
    title: "Carrot Fit Jeans",
    description:
      "Crafted Elegantly, It Lend The Perfect Touch Of Fashion Vibe To Your Overall Look Designed To Accentuate Your Style Statement Ideal For Regular Use Made Of High Quality Materials Fit : Slim Care Instructions : Machine Wash Item Pack Quantity : Single Carrot fit jeans. Five pockets. Faded effect. Front zip fly and top button fastening.",
    price: 99.99,
    category: "men",
    subCategory: "pants",
    sizes: ["30 US", "31 US", " ", "33 US", "", ""],
    colors: ["red"],
    highlights: [
      "Designed To Accentuate Your Style Statement",
      "Designed To Accentuate Your Style Statement",
      "Washing Machine",
      "Ideal For Regular Use",
      "Carrot fit jeans. Five pockets. Faded effect. Front zip fly and top button fastening.",
    ],
    feature: "trend",
    expert: false,
    discount: "10%",
    new: false,
    trend: true,
    rating: { rate: 4.9, count: 98 },
  },
  {
    id: 18,
    image:
      "https://f.nooncdn.com/p/pzsku/Z506EF35E87E972A3E44FZ/45/_/1677761019/7c339d72-4996-4676-8ced-6264e65576b1.jpg?format=avif&width=800",
    images: [
      "https://f.nooncdn.com/p/pzsku/Z506EF35E87E972A3E44FZ/45/_/1677761019/387a33f1-3d09-4faf-8146-196819dd6bf2.jpg?format=avif&width=800",
      "https://f.nooncdn.com/p/pzsku/Z506EF35E87E972A3E44FZ/45/_/1677761020/06cce2de-1046-4d69-a961-b94137485e3b.jpg?format=avif&width=800",
    ],
    title: "Kids Unisex Hooded Camp Jacket",
    description:
      "Dress your little ones in this comfortable long-sleeved waterproof hooded jacket with a front zipper and a hoodie. Style with a t-shirt and a pair of jeans or many more options.",
    price: 150.0,
    category: "kids",
    subCategory: "jacket",
    sizes: ["6Y", "7Y", "", "9Y", "10Y", "11Y"],
    colors: ["Beige", "red"],
    highlights: [
      "Soft and lightweight polyester fabric",
      "Hooded neck with front zip closure",
      "Long sleeves with elastic cuffs",
      "Triangle patch detail to sleeve",
      "Dual side slip-in pockets",
      "Wash according to care label instructions",
    ],
    feature: "trend",
    brand: "NAME IT",
    expert: false,
    discount: "20%",
    new: false,
    trend: true,
    rating: { rate: 4.9, count: 98 },
  },
  {
    id: 19,
    image:
      "https://f.nooncdn.com/p/pzsku/ZF251EC6B3DDB828E83A6Z/45/_/1682508885/9614f091-12a7-40f2-8796-b5b736553a3d.jpg?format=avif&width=800",
    images: [
      "https://f.nooncdn.com/p/pzsku/ZF251EC6B3DDB828E83A6Z/45/_/1682508886/2eaa69dc-d2f7-45b8-885a-cd52c1bdd478.jpg?format=avif&width=800",
      "https://f.nooncdn.com/p/pzsku/ZF251EC6B3DDB828E83A6Z/45/_/1682508887/08a67be9-015e-40c0-b9ca-bada0b94d7c9.jpg?format=avif&width=800",
    ],
    title: "Baby/Kids Dri-FIT T-Shirt",
    description:
      "Dress your little ones in this comfortable long-sleeved waterproof hooded jacket with a front zipper and a hoodie. Style with a t-shirt and a pair of jeans or many more options.",
    price: 150.0,
    category: "kids",
    subCategory: "t-shirt",
    sizes: ["6Y", "7Y", "", "9Y", "10Y", "11Y"],
    colors: ["Beige", "red"],
    highlights: [
      "Soft and lightweight polyester fabric",
      "Dri-FIT technology wicks moisture away",
      "Crew neckline, long sleeves",
      "Wash according to care label instructions",
      "Nike signature branding detail",
    ],
    feature: "trend",
    brand: "NAME IT",
    expert: false,
    discount: "20%",
    new: false,
    trend: true,
    rating: { rate: 4.9, count: 98 },
  },
  {
    id: 20,
    image:
      "https://f.nooncdn.com/p/v1651774357/N39735020V_1.jpg?format=avif&width=800",
    images: [
      "https://f.nooncdn.com/p/v1651774357/N39735020V_3.jpg?format=avif&width=800",
      "https://f.nooncdn.com/p/v1651774357/N39735020V_4.jpg?format=avif&width=800",
    ],
    title: "Kids SST Sweatpants HAZCOR/WHITE",
    description:
      "Dress your little ones in this comfortable long-sleeved waterproof hooded jacket with a front zipper and a hoodie. Style with a t-shirt and a pair of jeans or many more options.",
    price: 120.0,
    category: "kids",
    subCategory: "pants",
    sizes: ["6Y", "7Y", "", "9Y", "10Y", "11Y"],
    colors: [ "pink"],
    highlights: [
      "PRIMEGREEN: Made with a series of high-performance recycled materials to help end plastic waste",
      "Drawcord on elastic waist",
      "Side zip pockets",
      "Ribbed cuffs",
      "Embroidered logo detail",
      "100% recycled polyester",
      "Wash according to care label instructions",
    ],
    feature: "trend",
    brand: "NAME IT",
    expert: false,
    discount: "20%",
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
