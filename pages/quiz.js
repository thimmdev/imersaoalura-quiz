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

function QuestionWidget ( { question, questionIndex, totalQuestions, onSubmit }) {
  return (

  <Widget>
    <Widget.Header>
    <h1> {`Cthulhu Quiz - Pergunta ${ questionIndex +1 } de ${ totalQuestions }`}</h1>
    </Widget.Header>
      <img 
      alt="Necronomicon"
      style={{ 
        width: '100%',
        height: '150px',
        objectFit: 'cover',
      }}
      src={question.image}
      />
      <Widget.Content>
      <h2>
      {question.title}
      </h2>
      <p>
      {question.description}
      </p>

      <form onSubmit = { ( infosDoEvento ) => {
        infosDoEvento.preventDefault();
        onSubmit();
      }}>
      {question.alternatives.map(( alternative, alternativeIndex ) =>   {
        const alternativeId = `alternative__${alternativeIndex}`;
        const questionId = `question__${ questionIndex }`
        return (
          <Widget.Topic as="label" htmlFor={alternativeId}>
            <input 
            // style={{ display: "none" }}
              id={alternativeId}
              name={ questionId }
              type ="radio"
              />
              {alternative}
          </Widget.Topic>
        );
      })
      };

      <Button type="submit">Confirm!</Button>
      </form>



      </Widget.Content>
      </Widget>
);
};

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.QUIZ);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  React.useEffect( () => { 
  setTimeout (() => {
    setScreenState(screenStates.QUIZ);
  }, 1 * 1000);
}, []);

  function handleSubmitQuiz ( ) {
    const nextQuestion = questionIndex + 1;
    if ( nextQuestion < totalQuestions ) {
      setCurrentQuestion (nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  };
  
  return (

    <QuizBackground backgroundImage={db.quizBg}>
      <Head>
        <title>Cthulhu Quiz - H.P.Lovecraft</title>
        <link rel="shortcut icon" href="https://i.imgur.com/jBNJ0pW.jpeg" />
      </Head>
      <Logo />
      <QuizContainer>
        <Section>
         {screenState === screenStates.QUIZ && (
           <QuestionWidget
           question={ question }
           questionIndex={ questionIndex }
           totalQuestions={ totalQuestions }
           onSubmit = { handleSubmitQuiz }
       />
       )}

         {screenState === screenStates.LOADING && <LoadingWidget />}

         {screenState === screenStates.RESULT && <div> Você acertou X questões, Parabéns! </div>}
        </Section>
      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/thimmdev" />
    </QuizBackground>
  );
}
