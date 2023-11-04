import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types";
const data = [
  {
    image: "src/assets/green-shirt.webp",
    title: "Leather Gloves ",
    category: "Perfect mint green",
    price: 42,
    type: "clothing",
    description: "lorem lorem lorem ",
    rating: { rate: 4.9, count: 98 },
  },
  {
    image: "src/assets/sport-1.webp",
    title: "Manhattan Toy WRT ",
    category: "New design 2023",
    price: 30,
    type: "sport",
    description: "lorem lorem lorem ",
    rating: { rate: 4.9, count: 98 },
  },
  {
    image: "src/assets/short.webp",
    title: "Ella Leather Tote",
    category: "Cream pink",
    price: 145,
    type: "clothing",
    description: "lorem lorem lorem ",
    rating: { rate: 4.9, count: 98 },
  },
  {
    image: "src/assets/sport-2.webp",
    title: "Jump Rope Kids",
    category: "Classic green",
    type: "sport",
    price: 68,
    description: "lorem lorem lorem ",
    rating: { rate: 4.9, count: 98 },
  },
  {
    image: "src/assets/bag.webp",
    title: "Wool Cashmere Jacket",
    category: "Matte black",
    price: 12,
    type: "clothing",
    description: "lorem lorem lorem ",
    rating: { rate: 4.9, count: 98 },
  },
];
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
