import { IoHeartOutline } from "react-icons/io5";
import "./Card.css";
import StarRatings from "react-star-ratings";
import { useAppDispatch } from "../../app/hooks";
import { addToCart } from "../../app/slices/cartSlice";
import { ProductState } from "../../app/slices/productsSlice";
import { calcPrice } from "../../assets/utils/hooks";

function Card(data: ProductState) {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(addToCart({ ...data, quantity: 1 }));
  };

  if (data.discount === 0) {
    return (
      <div className="card">
        <div className="card-image">
          <button className="button-icon card-like">
            <IoHeartOutline size="20px" />
          </button>
          <img src={data.image} alt={data.title} />
        </div>
        <div className="card-content">
          <h5 className="card-price_bold">{data.price} ₽</h5>
          <p>{data.title}</p>
          <div>
            <StarRatings
              rating={data.rating}
              name="rating"
              starRatedColor="rgb(245 158 11)"
              starDimension="16px"
              starSpacing="4"
            />
          </div>
          <button
            className="button-success-outline"
            style={{ marginTop: "16px" }}
            onClick={handleClick}
          >
            В корзину 
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="card">
      <div className="card-image">
        <button className="button-icon card-like">
          <IoHeartOutline size="20px" />
        </button>
        <img src={data.image} alt={data.title} />
        <span className="card-discount">-{data.discount}%</span>
      </div>
      <div className="card-content">
        <div>
          <div className="card-flex-box">
            <h5 className="card-price_bold">{calcPrice(data.price, data.discount)} ₽</h5>
            <h5 className="card-price_light">{data.price} ₽</h5>
          </div>
          <div className="card-flex-box">
            <span className="card-payment-info">С картой</span>
            <span className="card-payment-info">Обычная</span>
          </div>
        </div>
        <p>{data.title}</p>
        <div>
          <StarRatings
            rating={data.rating}
            name="rating"
            starRatedColor="rgb(245 158 11)"
            starDimension="16px"
            starSpacing="4"
          />
        </div>
        <button className="button-success-outline" onClick={handleClick}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Card;
