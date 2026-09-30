import React, { useState } from "react";
import ProductList from "../components/ProductList";

function Products({ products, addToCart }) {

  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Crochet",
    "Bags",
    "Accessories"
  ];

  const filteredProducts =
    category === "All"
      ? products
      : products.filter(
          (product) =>
            product.category === category
        );

  return (
    <div className="container mt-5">

      <h2 className="mb-4">
        Our Products
      </h2>

      <div className="mb-4">

        {categories.map((item) => (

          <button
            key={item}
            className={
              category === item
                ? "btn btn-dark me-2"
                : "btn btn-outline-dark me-2"
            }
            onClick={() => setCategory(item)}
          >
            {item}
          </button>

        ))}

      </div>

      <ProductList
        products={filteredProducts}
        addToCart={addToCart}
      />

    </div>
  );
}

export default Products;