import styled from "styled-components";

export const Section = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  width: 90%;
  margin-top: 6em;
  padding: 0;
  background-color: ${(props) => props.theme.background.header};

  @media(min-width: 1024px) {
    width: 30%;
  };
`;
