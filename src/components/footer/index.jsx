import React from 'react';
import * as S from './styled';
import github from '../../images/github.png';
import linkedin from '../../images/linkedin.png';

const Footer = () => {
  return (
    <S.Container>
      <S.H3>Site desenvolvido por Jhonatan Arguello</S.H3>
      <S.HR />
      <S.ImageDiv>
        <S.H3>Confira mais projetos e conteúdos em:</S.H3>
        <S.Img src={github} alt="Logo do github" />
        <S.Img src={linkedin} alt="Logo do linkedin" />
      </S.ImageDiv>
    </S.Container>
  );
};

export default Footer;
