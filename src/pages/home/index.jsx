import React from 'react';
import Header from '../../components/header';
import ProductsList from '../../components/productsList';
import Footer from '../../components/footer';

const Home = () => {
  return (
    <div>
      <Header />
      <ProductsList />
      <Footer />      
    </div>
  );
};

export default Home;