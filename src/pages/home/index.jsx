import React, { useContext, useEffect } from 'react';
import Header from '../../components/header';
import ProductsList from '../../components/productsList';
import Footer from '../../components/footer';
import FilterBar from '../../components/filterBar';
import * as S from './styled';
import { createLocalStorage } from '../../services/updateLocalStorage';
import Context from '../../context';
import { keyLocalStorage } from '../../services/updateLocalStorage';

const Home = () => {
  const { setCart } = useContext(Context);

  useEffect(() => {
    createLocalStorage();
    const localCart = JSON.parse(localStorage.getItem(keyLocalStorage));
    setCart(localCart);
  }, [setCart])

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