import React, { useState, useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { products } from "./HomePage";
import "../styles/ProductPage.css";
import image7 from "../assets/Image_7.png";
import { CartContext } from "../context/CartContext"; 

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);

  const { increaseCartCount } = useContext(CartContext); 

  if (!product) {
    return <h2>Produit non trouvé.</h2>;
  }

  const slides = product.slides;

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const nextSlide = () => {
    setSelectedSlideIndex(
      selectedSlideIndex === slides.length - 1 ? 0 : selectedSlideIndex + 1
    );
  };

  const prevSlide = () => {
    setSelectedSlideIndex(
      selectedSlideIndex === 0 ? slides.length - 1 : selectedSlideIndex - 1
    );
  };

  // Fonction pour ajouter au panier (ajoute la quantité sélectionnée)
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      increaseCartCount();
    }
  };

  return (
    <div className="product-page">
      <Navbar />

      <div className="main-content">
        <div className="product-container">
          {/* Partie image produit */}
          <div className="product-images">
            <div className="main-image-container">
              <img
                src={slides[selectedSlideIndex].image}
                alt={slides[selectedSlideIndex].name}
                className="main-image"
              />
            </div>

            <div className="carousel-controls">
              <button className="arrow-btn left" onClick={prevSlide}>
                <span className="arrow-icon">&#8249;</span>
              </button>

              <div className="image-indicators">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSlideIndex(index)}
                    className={`indicator ${
                      selectedSlideIndex === index ? "active" : ""
                    }`}
                  />
                ))}
              </div>

              <button className="arrow-btn right" onClick={nextSlide}>
                <span className="arrow-icon">&#8250;</span>
              </button>
            </div>
          </div>

          {/* Partie détails produit */}
          <div className="product-details">
            <div className="product-info">
              <p className="brand">{slides[selectedSlideIndex].name}</p>
              <h1 className="product-title">
                {slides[selectedSlideIndex].description}
              </h1>
              <p className="price">{slides[selectedSlideIndex].price}</p>
            </div>

            <div className="product-actions">
              <div className="quantity-selector">
                <span className="quantity-label">Quantité</span>
                <div className="quantity-controls">
                  <button
                    onClick={handleDecreaseQuantity}
                    className="quantity-btn"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="quantity-value">{quantity}</span>
                  <button onClick={handleIncreaseQuantity} className="quantity-btn">
                    +
                  </button>
                </div>
              </div>

              {/* Bouton Add to Cart */}
              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>

        {/* Section Description */}
        <div className="product-description-section">
          <div className="description-content">
            <h3 className="description-title">Description</h3>
            <p className="description-text">
              Énergisez votre look avec une touche moderne du style adidas. Ces
              chaussures Daily 3.0 allient un look classique à une tige en suède
              moderne. Parfaites pour le campus ou en ville.
            </p>
            <ul className="features-list">
              <li>Coupe régulière</li>
              <li>Fermeture à lacets</li>
              <li>Semelle extérieure en caoutchouc vulcanisé</li>
              <li>Importé</li>
            </ul>
          </div>

          <div className="description-image">
            <img src={image7} alt="Product View" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductPage;
