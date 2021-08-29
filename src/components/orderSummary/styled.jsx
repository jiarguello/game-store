import styled from "styled-components";

export const OrderSummaryContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: 90%;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 5px;
  padding: 0.7em 1em;
  margin: 1em 0;

  @media(min-width: 1024px) {
    width: 80%;
  };
`;

export const TextContainer = styled.div`
  width: 20%
  padding: 0 1em;

  @media(min-width: 1024px) {
  };
`;

export const Text = styled.p`
  margin: 0.5em 0;
  font-weight: bold;
  font-size: 0.9em;

  @media(min-width: 1024px) {
    font-size: 1em;
  };
`;

export const Button = styled.button`
  padding: 1em;
  border-radius: 5px;
  border: none;
  font-size: 0.9em;
  font-weight: bold;
  background-color: ${(props) => props.theme.background.button};

  @media(min-width: 1024px) {
    font-size: 1.2em;
    padding: 0.7em;
  };
`;

