import React, { useState } from "react";
import Context from "./index";
import { DEFAULT_CART, DEFAULT_FILTERS } from "./defaultObjects";
const games = require('../products.json');

const Provider = ({ children }) => {
  const [data, setData] = useState(games);
  const [cart, setCart] = useState(DEFAULT_CART);
  const [filter, setFilter] = useState(DEFAULT_FILTERS);

  const contentProvider = {
    data, setData,
    cart, setCart,
    filter, setFilter,
  }
  return (
    <Context.Provider value={contentProvider} >
      { children }
    </Context.Provider>
  );
}

export default Provider;
