import styled from "styled-components";

export const List = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: auto;
  background-color: blue;
`;

export const Card = styled.main`
  background-color: green;
  display: flex;
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
  width: 100px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  max-width: 20ch;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 0;
  margin: 0;
`;

export const RemoveButton = styled.button`
`;
