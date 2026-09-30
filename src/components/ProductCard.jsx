import React from "react";

function ProductCard({ product, addToCart }) {

  return (
    <div className="card h-100 shadow-sm">

      <img
        src={product.image}
        alt={product.name}
        className="card-img-top"
        style={{
          height: "220px",
          objectFit: "cover"
        }}
      />

      <div className="card-body">

        <h5>
          {product.name}
        </h5>

        <p className="text-muted">
          {product.category}
        </p>

        <h5>
          ₹{product.price}
        </h5>

        <button
          className="btn btn-dark w-100"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;