import React from "react";

const Review = ({ review }) => {
  const { name, rev, ratings } = review;
  return (
    <div>
      <h4>Name: {name}</h4>
      <p>
        <small>Review: {rev}</small>
      </p>
      <p>
        <small>Ratings: {ratings}</small>
      </p>
    </div>
  );
};

export default Review;
