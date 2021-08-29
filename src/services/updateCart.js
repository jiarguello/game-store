export const removeProduct = (id, cart) => {
  const { products, totalProducts, quantityProducts } = cart;

  const itemToRemove = products.findIndex((product) => product.id === id);
  const removed = products[itemToRemove];
  products.splice(itemToRemove, 1);

  const updatedCart = {
    totalProducts: totalProducts - removed.price,
    quantityProducts: quantityProducts - 1,
    shipping: ((totalProducts - removed.price) > 250 ? 0 : products.length * 10),
    products: [...products],
  }

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
