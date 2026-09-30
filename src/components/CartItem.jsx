import React from "react";

function CartItem({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
}) {
  return (
    <div className="card mb-3">

      <div className="card-body">

        <div className="row align-items-center">

          <div className="col-md-2">
            <img
              src={item.image}
              alt={item.name}
              className="img-fluid rounded"
              style={{
                height: "100px",
                width: "100px",
                objectFit: "cover"
              }}
            />
          </div>

          <div className="col-md-4">

            <h5>
              {item.name}
            </h5>

            <p className="text-muted">
              ₹{item.price}
            </p>

          </div>

          <div className="col-md-3">

            <button
              className="btn btn-outline-dark btn-sm"
              onClick={() =>
                decreaseQuantity(item.id)
              }
            >
              -
            </button>

            <span className="mx-3">
              {item.quantity}
            </span>

            <button
              className="btn btn-outline-dark btn-sm"
              onClick={() =>
                increaseQuantity(item.id)
              }
            >
              +
            </button>

          </div>

          <div className="col-md-2">

            <strong>
              ₹{item.price * item.quantity}
            </strong>

          </div>

          <div className="col-md-1">

            <button
              className="btn btn-danger btn-sm"
              onClick={() =>
                removeFromCart(item.id)
              }
            >
              X
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default CartItem;