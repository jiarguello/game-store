import React, { useEffect } from 'react';
import Header from '../../components/header';
import ProductsList from '../../components/productsList';
import Footer from '../../components/footer';
import FilterBar from '../../components/filterBar';
import * as S from './styled';
import { createLocalStorage } from '../../services/updateLocalStorage';

const Home = () => {

  useEffect(() => {
    createLocalStorage();
  }, [])

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