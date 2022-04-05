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
      <div className="d-flex justify-content-between">
        <div className="description">
          <h1 className="first-heading">Your Next Laptop</h1>
          <h1 className="second-heading">Our Next Service</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
            deleniti autem aut minus quaerat, ipsa nisi harum illum consectetur
            veritatis dolorem? Labore dolorem minus quaerat necessitatibus autem
            provident
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
