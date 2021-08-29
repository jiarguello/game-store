import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 100%;
  background-color: ${(props) => props.theme.background.header};
  height: 15%;
  padding: 0 20%;
`;

export const H3 = styled.h3`
  font-size: 1.5em;
  font-style: italic;
  align-self: center;
  margin: 1em 0;
  color: ${(props) => props.theme.font.header};
`;

export const HR = styled.hr`
  color: ${(props) => props.theme.font.header};
`;

export const ImageDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 50px;
  border-radius: 100%;
  margin: 1em 2em;
`;

export const Span = styled.span`
  font-size: 1em;
  font-weight: bold;
  color: ${(props) => props.theme.font.header};
`;
