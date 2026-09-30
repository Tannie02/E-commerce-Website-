import React, { useState } from "react";

import Header from "./components/header";
import Cart from "./components/cart";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import products from "../utils/mockData.js";
import "./styles/App.css";

function App() {

  const [page, setPage] = useState("home");

  const [cart, setCart] = useState([]);

  function addToCart(product) {

    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {

      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        )
      );

    } else {

      setCart([
        ...cart,
        {
          ...product,
          quantity: 1
        }
      ]);

    }
  }

  function increaseQuantity(id) {

    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    );
  }

  function decreaseQuantity(id) {

    setCart(
      cart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeFromCart(id) {

    setCart(
      cart.filter(
        (item) => item.id !== id
      )
    );
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <>
      <Header
        setPage={setPage}
        cartCount={cart.length}
      />

      {page === "home" && (
        <Home setPage={setPage} />
      )}

      {page === "products" && (
        <Products
          products={products}
          addToCart={addToCart}
        />
      )}

      {page === "cart" && (
        <Cart
          cart={cart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeFromCart={removeFromCart}
          setPage={setPage}
        />
      )}

      {page === "checkout" && (
        <Checkout
          cart={cart}
          clearCart={clearCart}
          setPage={setPage}
        />
      )}
    </>
  );
}

export default App;