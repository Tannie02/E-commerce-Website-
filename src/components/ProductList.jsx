import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products, addToCart }) {

  return (
    <div className="row g-4">

      {products.map((product) => (

        <div
          className="col-12 col-sm-6 col-md-4 col-lg-3"
          key={product.id}
        >

          <ProductCard
            product={product}
            addToCart={addToCart}
          />

        </div>

      ))}

    </div>
  );
}

export default ProductList;