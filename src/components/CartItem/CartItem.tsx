import { IoTrashOutline } from "react-icons/io5";
import { useAppDispatch } from "../../app/hooks";
import { CartState, removeFromCart, setQuantityFromCart } from "../../app/slices/cartSlice";
import { calcPrice } from "../../assets/utils/hooks";
import Badge from "../Badge/Badge";
import "./CartItem.css";

function CartItem({ id, image, title, discount, price, quantity }: CartState) {
  const dispatch = useAppDispatch();

  const handleChangeQuantity = (e: any) => {
    const newQuantity = e.target.value;
    if (newQuantity === "0") return;
    dispatch(setQuantityFromCart({ id, quantity: newQuantity, price: calcPrice(price, discount) }));
  };

  if (discount > 0) {
    return (
      <div className="cart-item">
        <div className="cart-item-img discount">
          <img src={image} alt="404" />
          <Badge isAbsolete positions={{ top: "16px", right: "16px" }}>
            -{discount}%
          </Badge>
        </div>
        <div className="cart-item-content">
          <div className="cart-item-row">
            <h5 className="cart-item-title">{title.slice(0, 20)}...</h5>
            <h5 className="cart-item-discount-price">
              Discount price: {calcPrice(price, discount)} ₽
            </h5>
          </div>
          <div className="cart-item-row">
            <h5 className="cart-item-price">Price: {price} ₽</h5>
            <div className="cart-item-controls">
              <h5>Quantity:</h5>
              <input
                type="number"
                value={quantity}
                className="cart-item-quantity"
                onChange={handleChangeQuantity}
              />
              <button
                className="button button-danger-outline"
                onClick={() => dispatch(removeFromCart({ id }))}
              >
                <IoTrashOutline size={"20px"} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-item">
      <div className="cart-item-img">
        <img src={image} alt="404" />
      </div>
      <div className="cart-item-content">
        <div className="cart-item-row">
          <h5 className="cart-item-title">{title.slice(0, 20)}...</h5>
          <h5 className="cart-item-price">---</h5>
        </div>
        <div className="cart-item-row">
          <h5 className="cart-item-price">Price: {price} ₽</h5>
          <div className="cart-item-controls">
            <h5>Quantity:</h5>
            <input
              type="number"
              value={quantity}
              className="cart-item-quantity"
              onChange={handleChangeQuantity}
            />
            <button
              className="button button-danger-outline"
              onClick={() => dispatch(removeFromCart({ id }))}
            >
              <IoTrashOutline size={"20px"} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
