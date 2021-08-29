export const keyLocalStorage = 'gameStoreCart';

export const DEFAULT_CART = {
  totalProducts: 0.00,
  quantityProducts: 0,
  shipping: 0.00,
  products: [],
};

export const createLocalStorage = () => {
  const localCart = localStorage.getItem(keyLocalStorage);

  if (!localCart) {
    const cart = JSON.stringify(DEFAULT_CART);
    return localStorage.setItem(keyLocalStorage, cart);
  }
};

export const clearLocalStorage = () => {
  localStorage.clear();
};

export const updateLocalStorage = (cart) => {
  const jsonCart = JSON.stringify(cart);
  localStorage.setItem(keyLocalStorage, jsonCart)
};
