import React from 'react';

import productData from '../data/productData';
import Product from './Product';

function Products() {
  
  const productList = productData.map(
    p => <Product name={p.name} 
                  description={p.description} 
                  price={p.price}
                  reviews={p.reviews}/>);

  return (
    <div className="products">
      {productList}
    </div>
  )
}

export default Products;