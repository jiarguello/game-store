import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import App from '../App';
import Provider from '../context/provider'
import { keyLocalStorage } from '../services/updateLocalStorage';

describe('[Shopping Cart - Process]', () => {
  describe('Check if add button is working:', () => {
    afterEach(() => localStorage.clear());

    it('Add 1 product', () => {
      const { getAllByRole } = render(
        <Provider>
          <App />
        </Provider>
      );
      const allAddButton = getAllByRole('button', '/Adicionar/');
      
      fireEvent.click(allAddButton[0]);

      const LocalStorage = JSON.parse(localStorage.getItem(keyLocalStorage));
      
      expect(LocalStorage.products.length).toBe(1);
    });

    it('Add 3 products', () => {
      const { getAllByRole } = render(
        <Provider>
          <App />
        </Provider>
      );
      const allAddButton = getAllByRole('button', '/Adicionar/');
      
      fireEvent.click(allAddButton[0]);
      fireEvent.click(allAddButton[1]);
      fireEvent.click(allAddButton[2]);

      const LocalStorage = JSON.parse(localStorage.getItem(keyLocalStorage));
      
      expect(LocalStorage.products.length).toBe(3);
    });
  });

  describe('Check if remove button is working:', () => {
    afterEach(() => localStorage.clear());

    it('Remove all products in products cart', () => {
      const { getAllByRole, getByAltText, getAllByAltText } = render(
        <Provider>
          <App />
        </Provider>
      );

      const allAddButton = getAllByRole('button', '/Adicionar/');

      fireEvent.click(allAddButton[0]);
      fireEvent.click(allAddButton[1]);
      fireEvent.click(allAddButton[2]);

      const cartButton = getByAltText(/Ícone do carrinho de compras/i);
      console.log(cartButton);

      fireEvent.click(cartButton);

      const listOfRemoveItem = getAllByAltText(/Remover produto do carrinho/i);
      console.log(listOfRemoveItem.length);

      fireEvent.click(listOfRemoveItem[2]);
      fireEvent.click(listOfRemoveItem[1]);
      fireEvent.click(listOfRemoveItem[0]);

      const LocalStorage = JSON.parse(localStorage.getItem(keyLocalStorage));
      
      expect(LocalStorage.products.length).toBe(0);
    });
  });

  describe('Check if the shipping price is being charged correctly:', () => {
    afterEach(() => localStorage.clear());

    it('If when the purchase price exceeds BRL 250.00, shipping is free', () => {
      const { getAllByRole } = render(
        <Provider>
          <App />
        </Provider>
      );
      const allAddButton = getAllByRole('button', '/Adicionar/');

      fireEvent.click(allAddButton[0]);
      fireEvent.click(allAddButton[1]);
      fireEvent.click(allAddButton[2]);

      const LocalStorage = JSON.parse(localStorage.getItem(keyLocalStorage));
      
      expect(LocalStorage.shipping).toBe(0);
    });

    it('If the shipping price is increased by BRL 10.00 for each product added', () => {
      const { getAllByRole } = render(
        <Provider>
          <App />
        </Provider>
      );
      const allAddButton = getAllByRole('button', '/Adicionar/');

      fireEvent.click(allAddButton[0]);
      fireEvent.click(allAddButton[1]);

      const LocalStorage = JSON.parse(localStorage.getItem(keyLocalStorage));
      
      expect(LocalStorage.shipping).toBe(20);
    });
  });

  describe('Check that the total order price is calculated correctly', () => {
    afterEach(() => localStorage.clear());

    it('When there is 1 product with a price less than BRL 250.00', () => {
      const { getAllByRole } = render(
        <Provider>
          <App />
        </Provider>
      );
      const allAddButton = getAllByRole('button', '/Adicionar/');

      fireEvent.click(allAddButton[0]);

      const LocalStorage = JSON.parse(localStorage.getItem(keyLocalStorage));
      
      expect((LocalStorage.totalProducts + LocalStorage.shipping)).toBe(207.88);
    });

    it('When the order total exceeds BRL 250.00', () => {
      const { getAllByRole } = render(
        <Provider>
          <App />
        </Provider>
      );
      const allAddButton = getAllByRole('button', '/Adicionar/');

      fireEvent.click(allAddButton[0]);
      fireEvent.click(allAddButton[1]);
      fireEvent.click(allAddButton[2]);


      const LocalStorage = JSON.parse(localStorage.getItem(keyLocalStorage));
      
      expect((LocalStorage.totalProducts + LocalStorage.shipping)).toBe(367.37);
    });
  });
});
