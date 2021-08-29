import React, { useContext } from 'react';
import Context from '../../context';
import * as S from './styled';
import orderList from '../../services/orderBy';
import formatPrice from '../../services/formatPrice';
import { addedToCart } from '../../services/updateCart';
import { updateLocalStorage } from '../../services/updateLocalStorage';

const ProductsList = () => {
  const { data, filter, cart, setCart } = useContext(Context);
  const { name, orderBy, type } = filter;
  const filteredData = data.filter((product) => product.name.toLowerCase().includes(name.toLowerCase()));
  const sortData = orderList(filteredData, orderBy, type);

  const addProductToCart = (id) => {
    const itemToCart = data.find((product) => product.id === id);
    const updatedCart = addedToCart(cart, itemToCart);
    
    setCart(updatedCart);
    updateLocalStorage(updatedCart);
  }

  return (
    <S.List>
      {
        sortData.map(({ id, name, image, price, score }) => (
          <S.Card key={id} >
            <S.Image src={`../../assets/images/${image}`} alt={`Imagem do jogo ${name}`} />
            <S.Text>{ name }</S.Text>
            <S.Text>{ formatPrice(price) }</S.Text>
            <S.AddButton onClick={ () => addProductToCart(id) } >Adicionar</S.AddButton>
            <S.Text>Avaliação: { score } &#11088;</S.Text>
          </S.Card>
        ))
      }
    </S.List>
  );
};

export default ProductsList;
