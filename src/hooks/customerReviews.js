import { useEffect, useState } from "react";

// custom hook
const useCustomerReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews-data.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return [reviews, setReviews];
};

export default useCustomerReviews;
