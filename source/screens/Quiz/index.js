/* eslint-disable react/prop-types */

import React from 'react';
// import Head from 'next/head';

// import db from '../../../db.json'
import Widget from '../../components/Widget';
import Logo from '../../components/Logo';
import QuizBackground from '../../components/QuizBackground';
import QuizContainer from '../../components/QuizContainer';
import GitHubCorner from '../../components/GitHubCorner';
import AlternativesForm from '../../components/AlternativesForm';
import Button from '../../components/Button';
import Section from '../../components/Section';
import FooterSection from '../../components/FooterSection';
import Footer from '../../components/Footer';
import BackLinkArrow from '../../components/BackLinkArrow';

function ResultWidget({ results }) {
  return (
    <QuizBackground>
      <QuizContainer>
        <Section>
          <Widget>
            <Widget.Header>
              <h2>Final score!</h2>
            </Widget.Header>
            <Widget.Content>
              <h2> Your final score is: </h2>
              <h1>
                {' '}
                {results.reduce((somatoriaAtual, resultadoAtual) => {
                  const isAcerto = resultadoAtual === true;
                  if (isAcerto) {
                    return somatoriaAtual + 1;
                  }
                  return somatoriaAtual;
                }, 0)}
              </h1>
              <ul>
                {results.map((result, index) => (
                  <li key={`result__${result}`}>
                    {`# ${index + 1} Result: ${result === true ? 'Good one!' : 'You have missed this one'}`}
                  </li>
                ))}
              </ul>
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

function LoadingWidget() {
  return (
    <QuizBackground>
      <QuizContainer>
        <Section>
          <Widget>
            <Widget.Header>
              <h2>Loading Questions</h2>
            </Widget.Header>
            <img className="loadingGif" src="https://media3.giphy.com/media/CEhmB9dU0XN1m/giphy.gif?cid=ecf05e47ft2uoa1js82jpoz2lrfxady5wie2b3lqpiiu9ybf&rid=giphy.gif" alt="cthulhu with necronomicon" />
            <Widget.Content>
              <h3> Searching your question in the Necronomicon... </h3>
            </Widget.Content>
          </Widget>
        </Section>
        <FooterSection>
          <Footer />
        </FooterSection>
      </QuizContainer>
    </QuizBackground>
  );
}

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
}) {
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  const [isQuestionSubmitted, setIsQuestionSubmitted] = React.useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  return (

    <Widget>
      <Widget.Header>
        <h1>
          <BackLinkArrow href="/" />
          {' '}
          {`Cthulhu Quiz - Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h1>
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

        <AlternativesForm
          onSubmit={(infosDoEvento) => {
            infosDoEvento.preventDefault();
            setIsQuestionSubmitted(true);
            setTimeout(() => {
              addResult(isCorrect);
              onSubmit();
              setIsQuestionSubmitted(false);
              setSelectedAlternative(undefined);
            }, 4 * 1000);
          }}
        >

          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;

            return (
              <Widget.Topic
                as="label"
                htmlFor={alternativeId}
                key={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmitted && alternativeStatus}
              >
                <input
                  id={alternativeId}
                  name={questionId}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}
          ;

          <Button type="submit" disabled={!hasAlternativeSelected}> Confirm! </Button>

          {isQuestionSubmitted && isCorrect && (
          <h4>
            {' '}
            {`Nice one! ${question.success}`}
          </h4>
          )}
          {isQuestionSubmitted && !isCorrect && (
          <h4>
            {' '}
            {`Wrong answer :( ${question.success}`}
          </h4>
          )}
        </AlternativesForm>

      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage({ externalQuestions, externalBg }) {
  const [screenState, setScreenState] = React.useState(screenStates.QUIZ);
  const [results, setResults] = React.useState([]);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = externalQuestions[questionIndex];
  const totalQuestions = externalQuestions.length;
  const bg = externalBg;

  function addResult(result) {
    setResults([
      ...results,
      result,
    ]);
  }

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 2 * 1000);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (

    <QuizBackground backgroundImage={bg}>
      <Logo />
      <QuizContainer>
        <Section>
          {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
          )}

          {screenState === screenStates.LOADING && <LoadingWidget />}

          {screenState === screenStates.RESULT && <ResultWidget results={results} />}
        </Section>
      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/thimmdev" />
    </QuizBackground>
  );
}
