import React, { useContext } from 'react';
import Context from '../../context';
import { List, Card, Image, Text  } from './styled';

const ProductsList = () => {
  const { data } = useContext(Context);
  return (
    <List>
      {
        data.map(({ id, name, image, price, score }) => (
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
