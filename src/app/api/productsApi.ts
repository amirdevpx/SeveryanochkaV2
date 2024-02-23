import { ProductState } from "../slices/productsSlice";
import products from "../../assets/data/data.json";

export function fetchAllProducts(limit: number) {
  return new Promise<{ data: Array<ProductState> }>((resolve) => {
    setTimeout(() => resolve({ data: products.slice(0, limit) }), 500);
  });
}
