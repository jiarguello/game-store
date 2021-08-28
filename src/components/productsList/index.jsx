import React, { useContext } from 'react';
import Context from '../../context';
import * as S from './styled';
import orderList from '../../services/orderBy';

const ProductsList = () => {
  const { data, filter, cart, setCart } = useContext(Context);
  const { name, orderBy, type } = filter;
  const filteredData = data.filter((product) => product.name.toLowerCase().includes(name.toLowerCase()));
  const sortData = orderList(filteredData, orderBy, type);

  const addToCart = (id) => {
    const { totalValue, quantityProducts, shipping, products } = cart;
    const itemToCart = data.find((product) => product.id === id);
    console.log(id);
    console.log(itemToCart);
    setCart({
      totalValue: totalValue + itemToCart.price,
      quantityProducts: quantityProducts + 1,
      shipping: ((totalValue + itemToCart.price) > 250 ? 0 : shipping + 10),
      products: [...products, itemToCart],
    });
  }

  return (
    <S.List>
      {
        sortData.map(({ id, name, image, price, score }) => (
          <S.Card key={id} >
            <S.Image src={`../../assets/images/${image}`} alt={`Imagem do jogo ${name}`} />
            <S.Text>{ name }</S.Text>
            <S.Text>{ price }</S.Text>
            <S.Text>Avaliação: { score }</S.Text>
            <S.AddButton onClick={ () => addToCart(id) } >Add to Cart</S.AddButton>
          </S.Card>
        ))
      }
    </S.List>
  );
};

export default ProductsList;
