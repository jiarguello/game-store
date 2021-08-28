import styled from "styled-components";

export const List = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: auto;
`;

export const Card = styled.main`
  background-color: green;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  padding: 1em 0.5em;
  margin: 1em 0.5em;
  border-radius: 10px;
  min-width: 250px;
`;

export const Image = styled.img`
  height: 100%;
  width: 150px;
`;

export const Text = styled.p`
  max-width: 20ch;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 0;
  margin: 0;
`;

export const AddButton = styled.button`
`;
