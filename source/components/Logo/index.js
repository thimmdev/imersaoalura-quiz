import styled from 'styled-components';

const LogoWrapper = styled.div`
display: flex;
width: 500px;
align-items: center;
justify-content: center;


img {
    width: 100%;
    margin: 50px 0 0 250px
  }
`;

export default function Logo(props){
    return <LogoWrapper {...props}>
         <img src="https://i.imgur.com/G9sYsaF.png" alt="Logo WOW QUIZZ" />
    </LogoWrapper>

}  