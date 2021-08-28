import React, { useEffect, useContext, useRef } from 'react';
import * as S from './styled';
import Context from '../../context';

const OrderForm = () => {
  const { setCheckOut } = useContext(Context);

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const cpfInputRef = useRef(null);

  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  const sendOrder = (e) => {
    e.preventDefault()
    const consolidado = {
      name: nameInputRef.current.value,
      email: emailInputRef.current.value,
      cpf: cpfInputRef.current.value,
    }
    setCheckOut(consolidado);
  };

  const personalInputs = [
    { type: 'text', name: 'name', placeholder: 'Nome completo', reference: nameInputRef },
    { type: 'email', name: 'email', placeholder: 'Email', reference: emailInputRef },
    { type: 'number', name: 'cpf', placeholder: 'CPF', reference: cpfInputRef }
  ];

  return (
    <S.Container>
      {
        personalInputs.map(({ type, name, placeholder, reference}) => (
          <S.Input
            type={type}
            name={name}
            ref={reference}
            placeholder={placeholder}
          />
        ))
      }
      <S.Button onClick={ sendOrder } >Comprar</S.Button>
    </S.Container>
  );
};

export default OrderForm;
