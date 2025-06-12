import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/Navbar.css";
import logo from '../assets/logo.png';
import cartIcon from '../assets/cart.png';

const Navbar = () => {
  const { cartCount } = useContext(CartContext);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <img src={logo} alt="Logo" />
        <Link to={`/`}><div className="navbar-logo">SUN CO.</div></Link>
      </div>
      <Link to={`/cart`}>
      <button className="cart-button">
        <img src={cartIcon} alt="Cart" className="cart-icon" />
        View Cart
        {cartCount > 0 && (
          <span className="cart-inline-notification">{cartCount}</span>
        )}
      </button>
      </Link>
    </nav>
  );
};

export default Navbar;
