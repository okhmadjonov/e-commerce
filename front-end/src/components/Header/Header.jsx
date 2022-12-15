import { useSelector } from "react-redux";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as LogoSvg } from "../../assets/img/logo.svg";
import { ReactComponent as CartSvg } from "../../assets/img/handbag.svg";
import "./header.scss";

const Header = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  return (
    <div className="header">
      <div className="header__header_links">
        <Link className="nav-link" to="/">
          All
        </Link>
        <Link className="nav-link" to="/clothes">
          Womens
        </Link>
        <Link className="nav-link" to="/tech">
          Mens
        </Link>
        <Link className="nav-link" to="/tech">
          Kids
        </Link>
      </div>
      <div className="header__header_logo">
        <Link to="/">
          <LogoSvg />
        </Link>
      </div>
      <div className="header__header_cart">
        <Link to="/cart" className="header_cart">
          <CartSvg />
          <p className="counter">{cartTotalQuantity}</p>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
