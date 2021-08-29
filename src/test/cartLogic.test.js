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
  })
})
