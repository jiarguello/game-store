import { useContext } from "react";
import Context from "../context";
import { updateLocalStorage } from "./updateLocalStorage";

const RemoveProduct = (id) => {
  const { cart } = useContext(Context);
  // const localStorage = 

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
}

export default RemoveProduct;
