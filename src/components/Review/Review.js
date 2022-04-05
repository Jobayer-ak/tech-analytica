import Rating from "react-rating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Review.css";

const Review = ({ review }) => {
  const { name, rev, ratings, img } = review;
  return (
    <div className="card">
      <img src={img} alt="" />
      <div className="card-body">
        <h5 className="card-title text-primary">{name}</h5>
        <p className="fst-italic">"{rev}"</p>
        <Rating
          initialRating={ratings}
          emptySymbol={<FontAwesomeIcon icon={faStar} />}
          fullSymbol={
            <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
          }
          readonly></Rating>
      </div>
    </div>
  );
};

export default Review;
