import React, { useState } from "react";
import Context from "./index";
import { DEFAULT_CART, DEFAULT_FILTERS, DEFAULT_CHECKOUT } from "./defaultObjects";
import light from "../theme";

const games = require('../products.json');

const Provider = ({ children }) => {
  const [data, setData] = useState(games);
  const [cart, setCart] = useState(DEFAULT_CART);
  const [filter, setFilter] = useState(DEFAULT_FILTERS);
  const [showMenu, setShowMenu] = useState(false);
  const [checkOut, setCheckOut] = useState(DEFAULT_CHECKOUT);
  const [theme, setTheme] = useState(light);
  const [redirect, setRedirect] = useState(false);

  const contentProvider = {
    data, setData,
    cart, setCart,
    filter, setFilter,
    showMenu, setShowMenu,
    checkOut, setCheckOut,
    theme, setTheme,
    redirect, setRedirect,
  }

  return (
    <Context.Provider value={contentProvider} >
      { children }
    </Context.Provider>
  );
}

export default Provider;
