import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="d-flex justify-content-between">
      <div className="description">
        <h2>Your Laptop</h2>
        <h2>Our Service</h2>
      </div>
      <div className="product-img">
        <img
          className="img-fluid"
          src="./images/Surface-Laptop-Go-Colors.jpg"
          alt=""
        />
      </div>
    </section>
  );
};

export default Home;
