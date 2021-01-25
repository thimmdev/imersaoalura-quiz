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

  @media (max-width: 600px) {
    img {
        margin: 100px 50px 0;
        width: 80%;
    }
}

`;





export default function Logo(props){
    return <LogoWrapper {...props}>
         <img src="https://i.imgur.com/G9sYsaF.png" alt="Logo WOW QUIZZ" />
    </LogoWrapper>

}  