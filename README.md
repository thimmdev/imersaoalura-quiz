![web-preview](https://raw.githubusercontent.com/thimmdev/imersaoalura-quiz/main/cthulhuquizgif.gif)

<h1> 
	🚧  Cthulhu Quiz - Imersão Alura 🚀
</h1>

![Javascript Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![ReactJs Badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Nextjs Badge](https://img.shields.io/badge/-NextJs-105b94?style=for-the-badge&logoColor=black)
![StyledComponents Badge](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![ESLint Badge](https://img.shields.io/badge/-ESLint-5b1094?style=for-the-badge&logoColor=black)
![PropTypes Badge](https://img.shields.io/badge/-PropTypes-5b9410?style=for-the-badge&logoColor=black)

<h3> Projeto selecionado para os 10 melhores trabalhos da Imersão 🏆 </h3>
 <p>(4º lugar)</p>

<h3>Etapas do Projeto</h3>

## Futuras Correções (bugs) 🚧 :
<ul>
<li> 🚧 Correção do sistema de fetch de outros "quizes" 🚧 </li>
<li> 🚧 Correção da Logo 🚧 </li>
</ul>

## 🔥 Futuras Features 🔥 :
<ul>
<li> 🎵 Música temática ao abrir a página -- 🚧 </li>
<li> ❗ Modal verificando idade do usuário ao entrar na página -- 🚧 </li>
<li> 👏 Sistema de "Recompensa" (Título) -- 🚧:
	<ul>
	<li>🚧 1-3 acertos: Novice Acolyte </li>
	<li>🚧 4-6 acertos: Acolyte </li>
	<li>🚧 7-9 acertos: Summonner </li>
	<li>🚧 10 acertos: Grand Master of the Cult </li>
	</ul>
</li>
<br />
<br />
<p>🔥 Componentes do Projeto: 🚀</p> 
<ul>
<li>Reactjs 👌</li>
<li>ESLint 👌</li>
<details>
<summary> Sobre o ESLint </summary>
<h4>Getting Started with ESLint</h4>
ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs. In many ways, it is similar to JSLint and JSHint with a few exceptions:
<ul>
<li>ESLint uses Espree for JavaScript parsing.</li>
<li>ESLint uses an AST to evaluate patterns in code.</li>
<li>ESLint is completely pluggable, every single rule is a plugin and you can add more at runtime.</li>
</ul>
For more details such as: Installation and Usage and configuration use the link below:
https://eslint.org/docs/user-guide/getting-started
</details>
      
<li>StyledComponents 👌</li>
<details>
<summary>Sobre o Styled Components ( texto em inglês )</summary>
<br>
  <h3>Example app with styled-components</h3>

This example features how you use a different styling solution than [styled-jsx](https://github.com/zeit/styled-jsx) that also supports universal styles. That means we can serve the required styles for the first render within the HTML and then load the rest in the client. In this case we are using [styled-components] (https://github.com/styled-components/styled-components).

For this purpose we are extending the `<Document />` and injecting the server side rendered styles into the `<head>`, and also adding the `babel-plugin-styled- components` (which is required for server side rendering). Additionally we set up a global [theme](https://www.styled-components.com/docs/advanced#theming) for styled-components using NextJS custom [`<App>`](https://nextjs.org/docs/advanced-features/custom-app) component.
</details>

<li>Proptypes 👌</li>
<details>
<summary> Sobre o Proptypes ( texto em inglês ) </summary>
<br>
# Runtime type checking for React props and similar objects.
You can use prop-types to document the intended types of properties passed to components. 
React (and potentially other libraries—see the checkPropTypes() reference below) will check props passed to your components against those definitions, 
and warn in development if they don’t match.

Installation
`npm install --save prop-types`

</details>
  
<li>Nextjs 👌</li>
<details>
<summary>Sobre o Next? ( texto em inglês )</summary>
<br>
Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-styled-components with-styled-components-app
# or
yarn create next-app --example with-styled-components with-styled-components-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

### Try it on CodeSandbox

[Open this example on CodeSandbox](https://codesandbox.io/s/github/vercel/next.js/tree/canary/examples/with-styled-components)

### Notes

When wrapping a [Link](https://nextjs.org/docs/api-reference/next/link) from `next/link` within a styled-component, the [as](https://styled-components.com/docs/api#as-polymorphic-prop) prop provided by `styled` will collide with the Link's `as` prop and cause styled-components to throw an `Invalid tag` error. To avoid this, you can either use the recommended [forwardedAs](https://styled-components.com/docs/api#forwardedas-prop) prop from styled-components or use a different named prop to pass to a `styled` Link.

<details>
<summary>Click to expand workaround example</summary>
<br />

**components/StyledLink.js**

```javascript
import Link from "next/link";
import styled from "styled-components";

const StyledLink = ({ as, children, className, href }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
);

export default styled(StyledLink)`
  color: #0075e0;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #40a9ff;
  }

  &:focus {
    color: #40a9ff;
    outline: none;
    border: 0;
  }
`;
```

**pages/index.js**

```javascript
import StyledLink from "../components/StyledLink";

export default () => (
  <StyledLink href="/post/[pid]" forwardedAs="/post/abc">
    First post
  </StyledLink>
);
```

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-styled-components&project-name=with-styled-components&repository-name=with-styled-components)

## How to use

</details>
</details>    
</h1>

## 💪 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
   > Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](./CONTRIBUTING.md)

---

## 👍 Autor

<a href="https://www.linkedin.com/in/thiagommdev/">
 <img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/76121511?s=400&u=4629bd1a8919ee7a1b04b70adb584ec89099e945&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Thiago Machado</b></sub></a> <a href="https://www.linkedin.com/in/thiagommdev/" title="Linkedin">🚀</a>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Thiago-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/thiagommdev/)](https://www.linkedin.com/in/thiagommdev/)
[![Gmail Badge](https://img.shields.io/badge/-thiagomm.dev@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:thiagommm.dev@gmail.com)](mailto:thiagomm.dev@gmail.com)

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).
