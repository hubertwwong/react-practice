import React from 'react';

function ProductReviews(props) {
  const reviews = props.reviews.map(review => (
      <div className="product-review">
        <div className="product-review-name">{review.name}</div>
        <div className="product-review-review">{review.review}</div>
      </div>
    ));
  
  return (
    <div className="product-reviews">
      {reviews}
    </div>
  );
}

export default ProductReviews;