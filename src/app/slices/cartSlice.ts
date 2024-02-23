import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { calcPrice } from "../../assets/utils/hooks";

export interface CartState {
  id: string;
  title: string;
  price: number;
  rating: number;
  discount: number;
  image: string;
  quantity: number;
}

export interface CartsState {
  list: Array<CartState>;
  totalQuantity: number;
  totalPrice: number;
}

const data = localStorage.getItem("cart");
const parsedData = data ? JSON.parse(data) : null;

const initialState: CartsState = parsedData || {
  list: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isExist = state.list.find((item) => item.id === action.payload.id);
      if (isExist) {
        return;
      }

      state.list.push(action.payload);
      state.totalPrice += calcPrice(action.payload.price, action.payload.discount);
      state.totalQuantity++;

      localStorage.setItem("cart", JSON.stringify({ ...state }));
    },
    removeFromCart: (state, action) => {
      state.list = state.list.filter((item) => {
        if (action.payload.id !== item.id) return true;

        state.totalPrice -= calcPrice(item.price, item.discount) * item.quantity;
        state.totalQuantity--;
        return false;
      });

      localStorage.setItem("cart", JSON.stringify({ ...state }));
    },
    setQuantityFromCart: (state, action) => {
      const product = state.list.find((item) => item.id === action.payload.id);
      if (!product) return;

      if (action.payload.quantity > product.quantity) {
        state.totalPrice += action.payload.price;
      } else {
        state.totalPrice -= action.payload.price;
      }
      product.quantity = action.payload.quantity;

      localStorage.setItem("cart", JSON.stringify({ ...state }));
    },
  },
});

export const { addToCart, removeFromCart, setQuantityFromCart } = cartSlice.actions;
export const selectCart = (state: RootState) => state.cart;
export default cartSlice.reducer;
