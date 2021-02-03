import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import db from 'db.json';
import Widget from 'source/components/Widget';
import Logo from 'source/components/Logo';
import QuizBackground from 'source/components/QuizBackground';
import Footer from 'source/components/Footer';
import GitHubCorner from 'source/components/GitHubCorner';
import Input from 'source/components/Input';
import Button from 'source/components/Button';
import Section from 'source/components/Section';
import QuizContainer from 'source/components/QuizContainer';
import FooterSection from 'source/components/FooterSection';
import Link from 'source/components/Link';
import ModalAge from 'source/components/ModalAge';

export default function Home() {
  	const router = useRouter();
  	const [name, setName] = useState('');
	const [userAge, setUserAge] = useState('');
	const [showModal, setShowModal] = useState(true);
	const [validAge, setValidAge] = useState(true);

	const verifyUserAge = () => {
		let verifiedAge = (userAge.match(new RegExp('[0-9]', 'g')) && userAge > 17 && userAge <= 100) || userAge === ''
		setShowModal(!verifiedAge)
		setValidAge(verifiedAge)
	}

  	return (
		<QuizBackground backgroundImage={db.bg}>
			{showModal &&
				<ModalAge>
					<ModalAge.Content>
						<img src="https://i.imgur.com/WWY3gZd.png" alt="cthulhu Logo" />
						<h3>
							Are you old enough to be a cultist?
						</h3>
						<p></p>
						<form onSubmit={(event) => event.preventDefault()} >
							<Input
								type="text"
								onChange={({target})=>setUserAge(target.value)}
								className="ageInput"
								name="userAge"
								placeholder="Your age here!"
								value={userAge}
							/>
							<Button className="ageButton" type="submit" disabled={userAge.length === 0} onClick={verifyUserAge}>
								{`${userAge}? Let me check with the Grand Master`}
							</Button>
						</form>
						<div style={{marginTop: '1em', color: 'red'}}>
							{!validAge && 'Idade inválida' }
						</div>
					</ModalAge.Content>
				</ModalAge>
			}
			<Logo
				as={motion.section}
				transition={{ delay: 0, duration: 0.5 }}
				variants={{
					show: { opacity: 1, scale: 1 },
					hidden: { opacity: 0, scale: 2 },
				}}
				initial="hidden"
				animate="show"
			/>
			<QuizContainer>
				<Section>
					<Widget
						as={motion.section}
						transition={{ delay: 0.5, duration: 0.5 }}
						variants={{
						show: { opacity: 1, x: '0' },
						hidden: { opacity: 0, x: '100%' },
						}}
						initial="hidden"
						animate="show"
					>
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
							}}>

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
					<Widget
						as={motion.section}
						transition={{ delay: 1, duration: 0.5 }}
						variants={{
						show: { opacity: 1 },
						hidden: { opacity: 0 },
						}}
						initial="hidden"
						animate="show"
					>
						<Widget.Header>
						<h1> Other Quizzes </h1>
						</Widget.Header>
						<Widget.Content>

						<ul>
							{db.external.map((linkExterno) => {
								const [projectName, githubUser] = linkExterno
									.replace(/\//g, '')
									.replace('https:', '')
									.replace('.vercel.app', '')
									.split('.');
								return (
									<li key={linkExterno}>
									<Widget.Topic
										as={Link}
										href={`/quiz/${projectName}___${githubUser}`}
									>
										{`${githubUser}/${projectName}`}
									</Widget.Topic>
									</li>
								);
							})}
						</ul>
						</Widget.Content>
					</Widget>
				</Section>
				{!showModal &&
				<FooterSection>
					<Footer />
				</FooterSection>
				}
			</QuizContainer>
			<GitHubCorner projectUrl="https://github.com/thimmdev" />
		</QuizBackground>
  	);
}
