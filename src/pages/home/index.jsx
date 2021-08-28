import React from 'react';
import Header from '../../components/header';
import ProductsList from '../../components/productsList';
import Footer from '../../components/footer';
import FilterBar from '../../components/filterBar';
import * as S from './styled';

const Home = () => {
  return (
    <S.Container>
      <Header />
      <FilterBar />
      <ProductsList />
      <Footer />      
    </S.Container>
  );
};

export default Home;