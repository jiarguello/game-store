import styled from "styled-components";

export const List = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: auto;

  @media(min-width: 1024px) {
    justify-content: space-between;
  };
`;

export const Card = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  padding: 1em 0.5em;
  margin: 1em 0.5em;
  border-radius: 10px;
  border: 1px solid black; 
  min-width: 250px;
  background-color: white;

  @media(min-width: 1024px) {
    width: 20%;
  };
`;

export const Image = styled.img`
  height: 100%;
  width: 150px;
  border-radius: 10px;
  margin-bottom: 1%;
`;

export const Text = styled.p`
  max-width: 20ch;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 0;
  margin-top: 4%;
  font-size: 1.3em;
`;

export const AddButton = styled.button`
  height: 2em;
  border-radius: 10px;
  padding: 0 0.7em;
  border: none;
  margin-top: 0.7em;
  background-color: ${(props) => props.theme.background.button};
`;
