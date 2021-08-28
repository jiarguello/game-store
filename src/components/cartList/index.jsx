import React, { useContext } from 'react';
import * as S from './styled';
import Context from '../../context';
import EmptCart from '../../images/empty-cart.png';

const CartList = () => {
  const { cart, setCart } = useContext(Context);
  const { products, totalProducts, quantityProducts } = cart;
  const removeProduct = (id) => {
    const itemToCart = products.findIndex((product) => product.id === id);
    products.splice(itemToCart, 1);

    setCart({
      totalProducts: totalProducts - itemToCart.price,
      quantityProducts: quantityProducts - 1,
      shipping: ((totalProducts - itemToCart.price) > 250 ? 0 : products.length * 10),
      products: [...products],
    });
  }

  return (
    <S.List>
      {
        products.length === 0 ?
        <div>
          <h3>Seu carrinho ainda está vazio :(</h3>
          <img src={EmptCart} alt="Carrinho de compras vazio" />
        </div>
        : products.map(({ id, name, image, price, score }, index) => (
          <S.Card key={`${id}-${index}`} >
            <S.Image src={`../../assets/images/${image}`} alt={`Imagem do jogo ${name}`} />
            <S.Description>
              <S.Text>{ name }</S.Text>
              <S.Text>{ price }</S.Text>
              <S.Text>Avaliação: { score }</S.Text>
            </S.Description>
            <S.RemoveButton onClick={ () => removeProduct(id) } >Remove</S.RemoveButton>
          </S.Card>
        ))
      }
    </S.List>
  );
};

export default CartList;
