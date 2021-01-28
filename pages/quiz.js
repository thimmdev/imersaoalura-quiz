import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../source/components/Widget';
import QuizBackground from '../source/components/QuizBackground';
import GitHubCorner from '../source/components/GitHubCorner';
import Logo from '../source/components/Logo';
import Button from '../source/components/Button';
import Input from '../source/components/Input';
import Section from '../source/components/Section';
import QuizContainer from '../source/components/QuizContainer';

export default function QuizPage() {
  const question = db.questions[0];
  return (

    <QuizBackground backgroundImage={db.quizBg}>
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
            <Widget.Content />
          </Widget>
        </Section>
      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/thimmdev" />
    </QuizBackground>
  );
}
