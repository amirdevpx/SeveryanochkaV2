import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { ProductState, selectProducts, setSeachText } from "../app/slices/productsSlice";
import Card from "../components/Card/Card";

function PurchasedProductsPage() {
  const { searchText, newList } = useAppSelector(selectProducts);

  const dispatch = useAppDispatch();

  const filteredList: Array<ProductState> = newList.filter((item: ProductState) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  useEffect(() => {
    return () => {
      dispatch(setSeachText({ text: "" }));
    };
  }, []);
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section-title">
            <div>
              <h3>Все покупки</h3>
              <span>Найдено {filteredList.length} товаров</span>
            </div>
          </div>
          {filteredList.length === 0 && <h3>Товары не найдены</h3>}

          <div className="section-responsive-row">
            {filteredList.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default PurchasedProductsPage;
