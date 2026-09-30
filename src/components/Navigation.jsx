import React from "react";

function Navigation({ setPage, cartCount }) {

  return (
    <div className="container mt-3">

      <button
        className="btn btn-outline-dark me-2"
        onClick={() => setPage("home")}
      >
        Home
      </button>

      <button
        className="btn btn-outline-dark me-2"
        onClick={() => setPage("products")}
      >
        Products
      </button>

      <button
        className="btn btn-outline-dark"
        onClick={() => setPage("cart")}
      >
        Cart ({cartCount})
      </button>

    </div>
  );
}

export default Navigation;