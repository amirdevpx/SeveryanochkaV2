import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { fetchAllProducts } from "../api/productsApi";

export interface ProductState {
  id: string;
  title: string;
  price: number;
  rating: number;
  discount: number;
  image: string;
  isPurchased: boolean;
  createAt: Date | string;
}

export interface ProductsState {
  list: Array<ProductState> | [];
  discountsList: Array<ProductState> | [];
  newList: Array<ProductState> | [];
  purchasesList: Array<ProductState> | [];
  searchText: string;
  status: "idle" | "loading" | "failed";
}

const initialState: ProductsState = {
  list: [],
  discountsList: [],
  newList: [],
  purchasesList: [],
  searchText: "",
  status: "idle",
};

export const getAllProductsAsync = createAsyncThunk(
  "products/fetchAllProducts",
  async (limit: number | undefined = 20, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetchAllProducts(limit);
      dispatch(getDiscountProducts());
      dispatch(getNewProducts());
      dispatch(getPurchasedProducts());
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state) => {
      state.list = [];
      state.newList = [];
      state.discountsList = [];
      state.purchasesList = [];
      state.status = "idle";
      state.searchText = "";
    },
    setSeachText: (state, action) => {
      state.searchText = action.payload.text;
    },
    getDiscountProducts: (state) => {
      state.discountsList = state.list.filter((item) => item.discount > 0);
    },
    getNewProducts: (state) => {
      state.newList = state.list.sort(
        (a, b) => new Date(b.createAt).getTime() - new Date(a.createAt).getTime()
      );
    },
    getPurchasedProducts: (state) => {
      state.purchasesList = state.list.filter((item) => item.isPurchased);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.list = action.payload;
      })
      .addCase(getAllProductsAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const {
  setProducts,
  setSeachText,
  getDiscountProducts,
  getNewProducts,
  getPurchasedProducts,
} = productsSlice.actions;
export const selectProducts = (state: RootState) => state.products;
export default productsSlice.reducer;
