import React, { useContext } from 'react';
import Context from '../../context';
import { List, Card, Image, Text  } from './styled';
import orderList from '../../services/orderBy';

const ProductsList = () => {
  const { data, filter } = useContext(Context);
  const { name, orderBy, type } = filter;
  const filteredData = data.filter((game) => game.name.toLowerCase().includes(name.toLowerCase()));
  const sortData = orderList(filteredData, orderBy, type);
  return (
    <List>
      {
        sortData.map(({ id, name, image, price, score }) => (
          <Card key={id} >
            <Image src={`../../assets/images/${image}`} alt={`Imagem do jogo ${name}`} />
            <Text>{ name }</Text>
            <Text>{ price }</Text>
            <Text>Avaliação: { score }</Text>
          </Card>
        ))
      }
    </List>
  );
};

export default ProductsList;
