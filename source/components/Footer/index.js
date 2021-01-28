import styled from 'styled-components';
import React from 'react';

// source/components/Footer/index.js
const FooterWrapper = styled.footer`
  width: 30%;
  background-color: #00000070;
  padding: 10px ;
  display: flex;
  align-items: center;
  border-radius: 4px; 

  img {
    width: 58px;
    margin-right: 23px;
    margin-left: 23px;
  }

  a {
    color: white;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }
  }

  @media (max-width: 1200px){
      justify-content: center;
      display: flex;
      flex-direction: row;
      width: 100%;
    }


    @media (max-width: 900px){
      justify-content: center;
      display: flex;
      flex-direction: row;
      width: 100%;
    }

    @media (max-width: 600px){
    flex-wrap: flex;
    flex-direction: column;
    margin: 0;
    width: 100%;
    }

    @media (max-width: 320px){
    text-align: center;
    margin: 0;
    width: 100%;
    
    img {
      width: 40px;
    }

    p{
      font-size: 11px;
    }

    a {
      font-size: 11px
    }
    }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>

      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante
        {' '}
        a
        {' '}
        <a href="https://www.alura.com.br/">
          <span>Imersão React da Alura</span>
        </a>
      </p>

    </FooterWrapper>
  );
}
