import React from "react";
import "./Review.css";

const Review = ({ review }) => {
  const { name, rev, ratings, img } = review;
  return (
    <div className="card">
      <img src={img} alt="" />
      <div className="card-body">
        <h5 className="card-title text-primary">{name}</h5>
        <p>{rev}</p>
        <p>
          <small>Ratings: {ratings}</small>
        </p>
      </div>
    </div>
  );
};

export default Review;
