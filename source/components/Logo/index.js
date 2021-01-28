import styled from 'styled-components';
import React from 'react';

const LogoWrapper = styled.div`
margin: auto;
display: flex;
width: 100vw;

 img {
    width:400px;
    margin: auto;
  }  

  @media (max-width: 900px) {
    img {
        margin: auto;
        width: 40%;
    }
}
`;

export default function Logo(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <LogoWrapper {...props}>
      <img src="https://i.imgur.com/WWY3gZd.png" alt="Logo Cthulhu Quiz" />
    </LogoWrapper>
  );
}
