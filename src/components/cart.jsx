import React from "react";
import CartItem from "./CartItem";

function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  setPage
}) {
  if (cart.length === 0) {
    return (
      <div className="container text-center mt-5">

        <h2>Your Cart is Empty 🛒</h2>

        <p className="text-muted">
          Add some products to your cart.
        </p>

        <button
          className="btn btn-dark"
          onClick={() => setPage("products")}
        >
          Continue Shopping
        </button>

      </div>
    );
  }

  const total = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-5">

      <h2 className="mb-4">
        Shopping Cart
      </h2>

      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeFromCart={removeFromCart}
        />
      ))}

      <div className="text-end mt-4">

        <h3>
          Total: ₹{total}
        </h3>

        <button
          className="btn btn-dark mt-2"
          onClick={() => setPage("checkout")}
        >
          Checkout
        </button>

      </div>

    </div>
  );
}

export default Cart;