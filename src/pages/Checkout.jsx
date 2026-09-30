import React from "react";
import CheckoutForm from "../components/CheckoutForm";

function Checkout({ cart, clearCart, setPage }) {
  const total = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );
function placeOrder(formData) {
    alert(
      `Thank you ${formData.name}! Your order has been placed.`
    );
    clearCart();
    setPage("home");
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-7">
          <h2>Checkout</h2>
          <CheckoutForm placeOrder={placeOrder}/>
        </div>
        <div className="col-md-5">
          <div className="card">
            <div className="card-body">
              <h4>Order Summary </h4>
              <hr />
              {cart.map((item) => (

                <div key={item.id} className="d-flex justify-content-between mb-2" >
                  <span> {item.name} × {item.quantity} </span>
                  <span> ₹{item.price * item.quantity} </span>
                </div>
              ))}
              <hr />
              <h5 className="text-end"> Total: ₹{total}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Checkout;