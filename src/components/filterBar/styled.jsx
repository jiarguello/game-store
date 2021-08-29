import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  height: 10em;
  background-color: ${(props) => props.theme.background.header};
  border-radius: 10px;
  margin-top: 5em;
  padding: 1em 0;

  @media(min-width: 1024px) {
    margin-top: 8em;
    padding: 0 1em;
  };
`;

export const SearchBar = styled.input`
  width: 78%;
  height: 3em;
  border-radius: 10px;
  border: none;
  padding: 0 1em;

  font-size: 1em;

  @media(min-width: 1024px) {
    width: 60%;
  };
`;

export const SelectFilter = styled.select`
  border-radius: 5px;
  border: none;
  height: 2em;
  padding: 0.2em;
  color: ${(props) => props.theme.font.filter};
  background-color: ${(props) => props.theme.background.filter};
  justify-content: center;
  width: 35%;

  @media(min-width: 1024px) {
    width: 15%;
    border-radius: 5px;
    height: 3em;
    font-size: 1em;
  };
`;

export const Option = styled.option`
`;
