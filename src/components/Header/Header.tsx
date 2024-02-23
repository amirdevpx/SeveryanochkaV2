import { IoCartOutline, IoHeartOutline, IoSearchOutline } from "react-icons/io5";
import Logo from "../Logo/Logo";
import "./Header.css";
import { useAppDispatch } from "../../app/hooks";
import { selectProducts, setSeachText } from "../../app/slices/productsSlice";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart } from "../../app/slices/cartSlice";
import Badge from "../Badge/Badge";

function Header() {
  const { searchText } = useSelector(selectProducts);
  const { totalQuantity } = useSelector(selectCart);
  const dispatch = useAppDispatch();

  const handleChange = (e: any) => {
    dispatch(setSeachText({ text: e.target.value }));
  };

  return (
    <header id="header" className="header">
      <div className="container">
        <div className="header-row">
          <Logo />
          <div className="header-search">
            <input
              type="text"
              value={searchText}
              className="header-input"
              placeholder="Search..."
              onChange={handleChange}
            />
            <button className="button-icon">
              <IoSearchOutline size="20px" />
            </button>
          </div>

          <ul className="header-list">
            <li>
              <Link to="/" className="header-button">
                <IoHeartOutline size="20px" />
                Избранное
              </Link>
            </li>
            <li>
              <Link to="/cart" className="header-button">
                <IoCartOutline size="20px" />
                Корзина
                <Badge isAbsolete positions={{ right: "-4px", top: "-4px" }}>
                  {totalQuantity}
                </Badge>
              </Link>
            </li>
          </ul>

          <Link to="/">Login</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
