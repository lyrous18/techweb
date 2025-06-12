import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import banner from '../assets/banner.png';
import image1 from '../assets/Image_1.png';
import image2 from '../assets/Image_2.png';
import image3 from '../assets/Image_3.png';
import image4 from '../assets/Image_4.png';
import "../styles/HomePage.css";

export const products = [
  {
    id: 1,
    slides: [
      {
        image: image1,
        name: "Off-White",
        description: "Out Of Office 'Ooo' sneakers",
        price: "$775",
      },
      {
        image: image2,
        name: "Off-White Edition 2",
        description: "Summer Special Sneakers",
        price: "$750",
      },
      {
        image: image3,
        name: "Off-White Edition 3",
        description: "Casual Street Sneakers",
        price: "$799",
      },
      {
        image: image4,
        name: "Off-White Limited",
        description: "Limited Edition",
        price: "$820",
      },
    ],
  },
  {
    id: 2,
    slides: [
      {
        image: image2,
        name: "Nike",
        description: "Nike Air Force Premium",
        price: "$200",
      },
      {
        image: image3,
        name: "Nike Air Max",
        description: "Limited Streetwear Edition",
        price: "$230",
      },
      {
        image: image1,
        name: "Nike Retro",
        description: "Vintage Collection",
        price: "$210",
      },
      {
        image: image4,
        name: "Nike Pro",
        description: "Sports Edition",
        price: "$250",
      },
    ],
  },
  {
    id: 3,
    slides: [
      {
        image: image3,
        name: "Nike",
        description: "Timeless Classics",
        price: "$190",
      },
      {
        image: image1,
        name: "Nike Air Max",
        description: "Street-Ready Sneakers",
        price: "$180",
      },
      {
        image: image2,
        name: "Nike Retro",
        description: "High Comfort Edition",
        price: "$300",
      },
      {
        image: image4,
        name: "Nike Pro",
        description: "Performance Sneakers",
        price: "$220",
      },
    ],
  },
  {
    id: 4,
    slides: [
      {
        image: image4,
        name: "adidas",
        description: "Reinvented Classics",
        price: "$160",
      },
      {
        image: image2,
        name: "adidas",
        description: "Vintage Street Style",
        price: "$140",
      },
      {
        image: image3,
        name: "adidas",
        description: "Retro-Inspired",
        price: "$150",
      },
      {
        image: image1,
        name: "adidas",
        description: "Next-Gen Sports",
        price: "$170",
      },
    ],
  },
];


const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar />

      <section className="banner">
        <div className="banner-content">
          <h2 className="discount">25% OFF</h2>
          <h1 className="headline">Summer Sale</h1>
          <p>Discover our summer styles with discount</p>
          <button className="shop-button">Shop Now →</button>
        </div>
        <img src={banner} alt="Promo Shoe" className="promo-image" />
      </section>

      <section className="products">
        <h2 className="section-title">Explore our latest drops</h2>
        <div className="product-list">
          {products.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="product-card"
            >
              <img src={product.slides[0].image} alt={product.slides[0].name} />
              <div className="product-info">
                <h3>{product.slides[0].name}</h3>
                <p>{product.slides[0].description}</p>
                <strong>{product.slides[0].price}</strong>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
