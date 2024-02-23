import { Link } from "react-router-dom";
import img from "../../assets/images/image 5.jpg";
import { IoMdArrowDropright } from "react-icons/io";
import "./Articles.css";

function Articles() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-title">
          <h3>Статьи</h3>
          <button className="button button-ghost">
            <Link to="/">Все статьи</Link>
            <IoMdArrowDropright />
          </button>
        </div>

        <div className="articles-responsive-row">
          <div className="articles-card">
            <div className="articles-card-img">
              <img src={img} alt="404" />
            </div>
            <div className="articles-card-content">
              <span>05.03.2021</span>
              <h5>Режим использования масок и перчаток на территории магазинов</h5>
              <p>
                Подробная информация о режимах использования масок и перчаток на территории
                магазинов "ЛЕНТА". Информация обновляется каждый будний день.
              </p>
              <div>
                <button className="button button-success-outline">Подробнее</button>
              </div>
            </div>
          </div>
          <div className="articles-card">
            <div className="articles-card-img">
              <img src={img} alt="404" />
            </div>
            <div className="articles-card-content">
              <span>05.03.2021</span>
              <h5>Режим использования масок и перчаток на территории магазинов</h5>
              <p>
                Подробная информация о режимах использования масок и перчаток на территории
                магазинов "ЛЕНТА". Информация обновляется каждый будний день.
              </p>
              <div>
                <button className="button button-success-outline">Подробнее</button>
              </div>
            </div>
          </div>
          <div className="articles-card">
            <div className="articles-card-img">
              <img src={img} alt="404" />
            </div>
            <div className="articles-card-content">
              <span>05.03.2021</span>
              <h5>Режим использования масок и перчаток на территории магазинов</h5>
              <p>
                Подробная информация о режимах использования масок и перчаток на территории
                магазинов "ЛЕНТА". Информация обновляется каждый будний день.
              </p>
              <div>
                <button className="button button-success-outline">Подробнее</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Articles;
