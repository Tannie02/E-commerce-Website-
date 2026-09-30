import React, { useState } from "react";

function CheckoutForm({ placeOrder }) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  function handleChange(event) {

    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

  }

  function handleSubmit(event) {

    event.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.address
    ) {
      alert("Please fill all the fields.");
      return;
    }

    placeOrder(formData);
  }

  return (
    <form onSubmit={handleSubmit}>

      <div className="mb-3">

        <label className="form-label">
          Name
        </label>

        <input
          type="text"
          name="name"
          className="form-control"
          value={formData.name}
          onChange={handleChange}
        />

      </div>

      <div className="mb-3">

        <label className="form-label">
          Email
        </label>

        <input
          type="email"
          name="email"
          className="form-control"
          value={formData.email}
          onChange={handleChange}
        />

      </div>

      <div className="mb-3">

        <label className="form-label">
          Phone
        </label>

        <input
          type="text"
          name="phone"
          className="form-control"
          value={formData.phone}
          onChange={handleChange}
        />

      </div>

      <div className="mb-3">

        <label className="form-label">
          Address
        </label>

        <textarea
          name="address"
          className="form-control"
          rows="3"
          value={formData.address}
          onChange={handleChange}
        />

      </div>

      <button
        type="submit"
        className="btn btn-dark"
      >
        Place Order
      </button>

    </form>
  );
}

export default CheckoutForm;