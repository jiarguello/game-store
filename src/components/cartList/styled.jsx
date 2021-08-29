import styled from "styled-components";

export const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EmptyCartImage = styled.img`
  height: 150px;
`;

export const List = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  margin: auto;
  align-self: flex-start;

  float:left;
  height: 700px;
  overflow-y: auto;
`;

export const Card = styled.main`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1em 0.8em;
  margin: 1em 0.5em;
  border-radius: 10px;
  min-width: 250px;

  @media(min-width: 1024px) {
    width: 35%;
    min-width: 320px;
    justify-content: space-between;
  };
`;

export const Image = styled.img`
  height: 100%;
  width: 50px;

  @media(min-width: 1024px) {
    width: 70px;
  };
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 100%;
  padding-left: 0.3em;

  @media(min-width: 1024px) {
    padding-left: 1em;
  };
`;

export const Text = styled.p`
  max-width: 20ch;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 0;
  margin: 0;
`;

export const Remove = styled.img`
  width: 30px;
`;
