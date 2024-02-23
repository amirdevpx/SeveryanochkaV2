import { useAppSelector } from "../app/hooks";
import { ProductState, selectProducts } from "../app/slices/productsSlice";
import Card from "../components/Card/Card";
import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import Articles from "../components/Articles/Articles";

function HomePage() {
  const { list, searchText, discountsList, newList, purchasesList, status } =
    useAppSelector(selectProducts);

  const filteredList: Array<ProductState> = list.filter((item: ProductState) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      {searchText.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="section-title">
              <div>
                <h3>Поиск по {searchText}</h3>
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
      )}

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h3>Акции</h3>
            <button className="button button-ghost">
              <Link to="/discount-products">Все акции</Link>
              <IoMdArrowDropright />
            </button>
          </div>
          {status === "loading" ? <h5>Загрузка...</h5> : null}
          {status === "failed" ? <h5>Ошибка сервера</h5> : null}

          <div className="section-responsive-row">
            {discountsList.slice(0, 4).map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h3>Новинки</h3>
            <button className="button button-ghost">
              <Link to="/new-products">Все новинки</Link>
              <IoMdArrowDropright />
            </button>
          </div>
          {status === "loading" ? <h5>Загрузка...</h5> : null}
          {status === "failed" ? <h5>Ошибка сервера</h5> : null}

          <div className="section-responsive-row">
            {newList.slice(0, 4).map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h3>Покупали раньше</h3>
            <button className="button button-ghost">
              <Link to="/purchased-products">Все покупки</Link>
              <IoMdArrowDropright />
            </button>
          </div>
          {status === "loading" ? <h5>Загрузка...</h5> : null}
          {status === "failed" ? <h5>Ошибка сервера</h5> : null}

          <div className="section-responsive-row">
            {purchasesList.slice(0, 4).map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h3>Статьи</h3>
            <button className="button button-ghost">
              <Link to="/">Все статьи</Link>
              <IoMdArrowDropright />
            </button>
          </div>

          <div className="section-responsive-row">
            {purchasesList.slice(0, 4).map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      <Articles />
    </>
  );
}

export default HomePage;
