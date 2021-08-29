import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  width: 90%;
  height: 100%;
  margin-top: 6em;
  padding: 0;
  background-color: ${(props) => props.theme.background.header};

  @media(min-width: 1024px) {
    width: 30%;
  };
`;
