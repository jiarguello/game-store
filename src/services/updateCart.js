import { updateLocalStorage } from "./updateLocalStorage";

export const removeProduct = (id, cart) => {
  const { products, totalProducts, quantityProducts } = cart;

  const itemToCart = products.findIndex((product) => product.id === id);
  products.splice(itemToCart, 1);

  const updatedCart = {
    totalProducts: totalProducts - itemToCart.price,
    quantityProducts: quantityProducts - 1,
    shipping: ((totalProducts - itemToCart.price) > 250 ? 0 : products.length * 10),
    products: [...products],
  }

  updateLocalStorage(updatedCart);

  return updatedCart;
}

export const addedToCart = (cart, product) => {
  const { totalProducts, quantityProducts, shipping, products } = cart;

  const updatedCart = {
    totalProducts: totalProducts + product.price,
    quantityProducts: quantityProducts + 1,
    shipping: ((totalProducts + product.price) > 250 ? 0 : shipping + 10),
    products: [...products, product],
  }

  return updatedCart;
};
