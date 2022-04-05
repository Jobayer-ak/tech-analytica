import React from "react";
import useCustomerReviews from "../../hooks/customerReviews";
import Review from "../Review/Review";
import "./Reviews.css";

const Reviews = () => {
  // using custom hook
  const [reviews, setreviews] = useCustomerReviews();

  // check current path
  let currentPath = window.location.pathname;

  return (
    <div className="mt-5 customer-review ">
      <h3 className="review-heading">Customer Reviews: {reviews.length} </h3>
      <div className="all-review my-5">
        {/* conditional rendering */}
        {currentPath === "/home"
          ? reviews
              .slice(0, 3)
              .map((review) => (
                <Review key={review.id} review={review}></Review>
              ))
          : reviews
              .slice(0, reviews.length)
              .map((review) => (
                <Review key={review.id} review={review}></Review>
              ))}
      </div>
    </div>
  );
};

export default Reviews;
