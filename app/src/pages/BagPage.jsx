import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import image1 from '../assets/Image_1.png';
import image2 from '../assets/Image_2.png';
import '../styles/BagPage.css';

const BagPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Nike',
      description: 'Nike Air Force Premium',
      price: 98.23,
      quantity: 1,
      image: image1
    },
    {
      id: 2,
      name: 'adidas',
      description: 'DAILY 3.0 SHOES',
      price: 98.23,
      quantity: 1,
      image: image2
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 20.00;
  const tax = 6.00;
  const discount = -6.00;
  const total = subtotal + shipping + tax + discount;

  return (
    <div className="shopping-cart">
      <Navbar />
      <div className="cart-container">
        <div className="cart-section">
          <h1 className="cart-title">Your Bag</h1>

          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <h2>Your bag is empty</h2>
              <p>Browse products and add them to your bag.</p>
            </div>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img 
                    src={item.image} 
                    alt={item.name}
                  />
                </div>

                <div className="item-details">
                  <div className="item-header">
                    <div className="item-info">
                      <h3 className="item-name">{item.name}</h3>
                      <p className="item-description">{item.description}</p>
                    </div>
                    <span className="item-price">${item.price.toFixed(2)}</span>
                  </div>

                  <div className="item-controls">
                    <div className="quantity-controls">
                      <button
                        className="quantity-btn"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        −
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button
                        className="quantity-btn"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    
                    <button
                      className="remove-btn"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="summary-section">
            <h2 className="summary-title">Summary</h2>

            <div className="summary-details">
              <div className="summary-line">
                <span className="summary-label">Subtotal</span>
                <span className="summary-value">${subtotal.toFixed(2)}</span>
              </div>
              
              <div className="summary-line">
                <span className="summary-label">Shipping and delivery</span>
                <span className="summary-value">${shipping.toFixed(2)}</span>
              </div>
              
              <div className="summary-line">
                <span className="summary-label">Tax</span>
                <span className="summary-value">${tax.toFixed(2)}</span>
              </div>
              
              <div className="summary-line">
                <span className="summary-label">Discount</span>
                <span className="summary-value discount">${discount.toFixed(2)}</span>
              </div>
              
              <div className="summary-total">
                <span className="total-label">Total</span>
                <span className="total-value">${total.toFixed(2)}</span>
              </div>
            </div>

            <button className="checkout-btn">
              Checkout →
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default BagPage;
