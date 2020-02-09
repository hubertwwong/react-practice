import React from 'react';

import ProductReviews from './ProductReviews';

function Product(props) {
  return (
    <div className="product">
      <div className="product-description">
        <div className="product-name">{props.name}</div>
          <div className="product-price">{props.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</div>
        <div className="product-description">{props.description}</div>
      </div>
      <ProductReviews reviews={props.reviews}/>
    </div>
  )
}

export default Product;