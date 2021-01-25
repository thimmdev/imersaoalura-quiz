import styled from 'styled-components'
import db from '../db.json'
import Widget from '../source/components/Widget'
import QuizBackground from '../source/components/QuizBackground'
import Footer from '../source/components/Footer'
import GitHubCorner from '../source/components/GitHubCorner'
import Logo from '../source/components/Logo'


const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

//   const BackgroundImage = styled.div `
//   background-image: url( ${db.bg} );
//   flex: 1;
//   background-size: cover;
//   background-position: center;
//   color: ${({ theme }) => theme.colors.textWhite};
// `;

export const QuizContainer = styled.div `
width: 100%;
max-width: 350px;
padding-top: 45px;
margin: auto 10%;
@media screen and (max-width: 500px) {
  margin: auto;
  padding: 15px;
}
`;

export default function Home() {
  return(
    <QuizBackground backgroundImage={db.bg}>
      <Logo />
      <QuizContainer>
        <Widget>
          <Widget.Header>
               <h1> Are you a WOW gamer ?</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Discover how much you know about the World of Warcraft Lore </p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
          <h1> Hall of Champions </h1>
          </Widget.Header>
          <Widget.Content>
          <p> a.k.a. Leaderboard - Scores from other gamers - Do your best to beat them! </p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/thimmdev" />
    </QuizBackground>
  );
}