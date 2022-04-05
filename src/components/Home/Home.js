import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useCustomerReviews from "../../hooks/customerReviews";
import Reviews from "../Reviews/Reviews";
import "./Home.css";

const Home = () => {
  const [reviews, setReviews] = useCustomerReviews();

  let navigate = useNavigate();

  return (
    <section>
      <div className="d-md-flex justify-content-between">
        <div className="description text-md-center">
          <h1 className="first-heading">Our Product</h1>
          <h1 className="second-heading">Your Satisfaction</h1>
          <p>
            Microsoft Surface series offers many products. It has many features
            than other brands.Removal keyboard and touch screen both of a great
            combination of this series. Microsoft Surface series is
            <span className="text-info">
              Stylish Outside, Savage Inside!
            </span>{" "}
          </p>
          <button className="btn">Live Demo</button>
        </div>
        <div className="product-img">
          <img
            className="img-fluid"
            src="./images/Surface-Laptop-Go-Colors.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="reviews-part">
        <Reviews></Reviews>

        <button className="btn mb-4" onClick={() => navigate("/reviews")}>
          See All Reviews
        </button>
      </div>
    </section>
  );
};

export default Home;
