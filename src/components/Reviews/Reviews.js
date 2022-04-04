import React from "react";
import useCustomerReviews from "../../hooks/customerReviews";
import Review from "../Review/Review";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setreviews] = useCustomerReviews();
  // console.log(reviews);

  return (
    <div className="mt-4 customer-review ">
      <h3 className="review-heading">Customer Reviews: {reviews.length} </h3>
      {reviews.map((review) => (
        <Review key={review.id} review={review}></Review>
      ))}
    </div>
  );
};

export default Reviews;
