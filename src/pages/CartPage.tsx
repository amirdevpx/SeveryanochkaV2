import { useAppSelector } from "../app/hooks";
import { selectCart } from "../app/slices/cartSlice";
import CartItem from "../components/CartItem/CartItem";

function CartPage() {
  const { list, totalPrice, totalQuantity } = useAppSelector(selectCart);

  return (
    <>
      <section>
        <div className="container">
          <div className="section-title">
            <div>
              <h3>Корзина</h3>
              <span>Общее количество товаров: {totalQuantity}</span>
            </div>
          </div>
          <div className="section-row">
            {list.length === 0 && <h3>Товары не найдены</h3>}

            {list.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
          <h5>Итоговая цена: {totalPrice} ₽</h5>
        </div>
      </section>
    </>
  );
}

export default CartPage;
