import React, { useContext } from 'react';
import * as S from './styled';
import EmptCart from '../../images/empty-cart.png';
import formatPrice from '../../services/formatPrice';
import Remove from '../../images/remove.png';
import { removeProduct } from '../../services/updateCart';
import Context from '../../context';
import { updateLocalStorage } from '../../services/updateLocalStorage';

const CartList = () => {
  const { cart, setCart } = useContext(Context);
  const { products } = cart;

  const removeProductToCart = (id) => {
    const updatedCart = removeProduct(id, cart);
    setCart(updatedCart);
    updateLocalStorage(updatedCart);
  };

  return (
    <S.List>
      {
        products.length === 0
        ? <S.EmptyCartContainer>
            <h3>Seu carrinho ainda está vazio :(</h3>
            <S.EmptyCartImage src={EmptCart} alt="Carrinho de compras vazio" />
          </S.EmptyCartContainer>
        : products.map(({ id, name, image, price, score }, index) => (
          <S.Card key={`${id}-${index}`} >
            <S.Image src={`../../assets/images/${image}`} alt={`Imagem do jogo ${name}`} />
            <S.Description>
              <S.Text>{ name }</S.Text>
              <S.Text>{ formatPrice(price) }</S.Text>
              <S.Text>Avaliação: { score } &#11088;</S.Text>
            </S.Description>
            <S.Remove src={Remove} onClick={ () => removeProductToCart(id) } alt="Remover produto do carrinho" />
          </S.Card>
        ))
      }
    </S.List>
  );
};

export default CartList;
