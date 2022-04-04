import React from "react";
import useCustomerReviews from "../../hooks/customerReviews";
import Review from "../Review/Review";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setreviews] = useCustomerReviews();
  // console.log(reviews);

  return (
    <div className="mt-5 customer-review ">
      <h3 className="review-heading">Customer Reviews: {reviews.length} </h3>
      <div className="all-review my-5">
        {reviews.slice(0, 2).map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
