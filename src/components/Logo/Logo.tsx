import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import './Logo.css'

function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="Severyanochka" />
      </Link>
    </div>
  );
}

export default Logo;
