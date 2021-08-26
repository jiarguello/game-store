import React, { useState } from "react";
import Context from "./index";

const games = require('../assets/products.json');

const DEAFULT_CART = {
  totalValue: 0,
  quantityProducts: 0,
  shipping: 0,
  products: [],
}

const Provider = ({ children }) => {
  const [data, setData] = useState(JSON.parse(games));
  const [cart, setCart] = useState(DEAFULT_CART);

  const contentProvider = {
    data, setData,
    cart, setCart,
  }
  return (
    <Context.Provider value={contentProvider} >
      { children }
    </Context.Provider>
  );
}

export default Provider;
