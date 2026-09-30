import React from "react";

function DebugPanel({ cart }) {
  return (
    <div className="container mt-5">

      <h5>Debug Information</h5>

      <p>
        Items in cart: {cart.length}
      </p>

    </div>
  );
}

export default DebugPanel;