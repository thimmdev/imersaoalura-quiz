// src/components/QuizBackground/index.js
import styled from 'styled-components';

const QuizBackground = styled.div`
  overflow: hidden;
  display: block;
  background-size: cover;
  background-position: center;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-color: ${({ theme }) => theme.colors.mainBg};
  flex: 1;
  box-shadow: inset 0 0 200px black;
  
  @media (max-width: 320px) {
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`;


export default QuizBackground;
