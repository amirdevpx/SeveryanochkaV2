import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Main from "./pages/Main";
import Cart from "./pages/CartPage";
import DiscountProductsPage from "./pages/DiscountProductsPage";
import NewProductsPage from "./pages/NewProductsPage";
import PurchasedProductsPage from "./pages/PurchasedProductsPage";
import { useAppDispatch } from "./app/hooks";
import { useEffect } from "react";
import { getAllProductsAsync } from "./app/slices/productsSlice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProductsAsync(50));
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="discount-products" element={<DiscountProductsPage />} />
          <Route path="new-products" element={<NewProductsPage />} />
          <Route path="purchased-products" element={<PurchasedProductsPage />} />
          <Route path="cart" element={<Cart />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
