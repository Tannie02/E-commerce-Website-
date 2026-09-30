import React from "react";

function Home({ setPage }) {
  return (
    <div className="container mt-5">

      <div className="bg-light p-5 rounded text-center">

        <h1>
          Welcome to House of 143 🧶
        </h1>

        <p className="lead">
          Handmade products made with love.
        </p>

        <button
          className="btn btn-dark"
          onClick={() => setPage("products")}
        >
          Shop Now
        </button>

      </div>

    </div>
  );
}

export default Home;