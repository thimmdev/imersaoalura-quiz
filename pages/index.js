import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../source/components/Widget';
import QuizBackground from '../source/components/QuizBackground';
import Footer from '../source/components/Footer';
import GitHubCorner from '../source/components/GitHubCorner';
import Logo from '../source/components/Logo';
import Button from '../source/components/Button';
import Input from '../source/components/Input';
import Section from '../source/components/Section';
import QuizContainer from '../source/components/QuizContainer';
import FooterSection from '../source/components/FooterSection';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Cthulhu Quiz - H.P.Lovecraft</title>
        <link rel="shortcut icon" href="https://i.imgur.com/jBNJ0pW.jpeg" />
      </Head>
      <Logo />
      <QuizContainer>
        <Section>
          <Widget>
            <Widget.Header>
              <h1> Cthulhu Follower Quiz </h1>
            </Widget.Header>
            <Widget.Content>
              <h4>
                The oldest and strongest emotion of mankind is fear, and the oldest
                and strongest kind of fear is fear of the unknow...
              </h4>
              <p> A - H.P. Lovecraft Mythos based Quiz</p>
              <form onSubmit={(infosDoEvento) => {
                infosDoEvento.preventDefault();
                router.push(`/quiz?name=${name}`);

              // router mandando para próxima página
              }}
              >
                <Input
                  name="nomeDoUsuario"
                    onChange={(infosDoEvento) => {
                    setName(infosDoEvento.target.value);
                  }}
                  placeholder="Your name here mortal"
                  value={name}
                />
                <Button type="submit" disabled={name.length === 0}>
                  {`${name} Know thy scream for sanity! `}               
                </Button>
              </form>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Header>
              <h1> Hall of Awoken </h1>
            </Widget.Header>
            <Widget.Content>
              <p> Leaderboard of the most famous cultists around the world </p>
            </Widget.Content>
          </Widget>
        </Section>

        <FooterSection>
          <Footer />
        </FooterSection>

      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/thimmdev" />
    </QuizBackground>
  );
}
