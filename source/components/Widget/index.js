import styled from 'styled-components';

const Widget = styled.div`
text-align: center;
margin: auto 40px;
width: 50%;
box-shadow: inset 0 0 50px black;
border: 1px solid ${({ theme }) => theme.colors.bgBox};
background-color: ${({ theme }) => theme.colors.bgBox};
border-radius: 4px;
box-shadow: 0 10px 50px black;


h1, h2, h3 {
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0;
}

h4 {
  color: #8fcc00;
  line-height: 1.5;
}

p {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
}

@media (max-width: 1200px){
  flex-direction: column
}


@media (max-width: 900px){
  flex-direction: column

}

@media (max-width: 600px){
 flex-direction: column;
 margin: auto;
 width: 100%;
 max-width: 450px;
 :first-child {
   margin-bottom: 20px;
 }
}
 
 @media (max-width: 320px){
  
}
`;

Widget.Header = styled.div`
box-shadow: 0 0 10px black;
text-align: center;
padding: 18px 32px;
background-color: ${({ theme }) => theme.colors.secondary};

* {
margin: 0;
}

@media (max-width: 320px){
  margin-top: 0px;
}
`;

Widget.Content = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
padding: 24px 32px 32px 32px;
& > *:first-child {
  margin-top: 0;
}
& > *:last-child {
  margin-bottom: 0;
}
ul {
  list-style: none;
  padding: 0;
}

@media (max-width: 320px) {
  max-width:auto;
  position: relative;
  right: 20px;

  p:last-child {
    position: relative;
    left: 20px;
  }
}
`;

Widget.Topic = styled.a `
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 10px 15px;
  margin-bottom: 8px;
  border-radius: 4px;
  transition: .3s;
  display: block;
  cursor: pointer;

  &:hover, 
  &:focus {
    background-color: ${({ theme }) => theme.colors.transpBox};
    color: white;
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.transpBox};
    color: white;
    animation: shake 0.3s;       
    animation-iteration-count: infinite;

  }

  &:checked {
    background-color: ${({ theme }) => theme.colors.transpBox};
    color: white;
  }

  @keyframes shake {
        0% { transform: translate(1px, 1px) rotate(0deg); }
        10% { transform: translate(-1px, -2px) rotate(-1deg); }
        20% { transform: translate(-3px, 0px) rotate(1deg); }
        30% { transform: translate(3px, 2px) rotate(0deg); }
        40% { transform: translate(1px, -1px) rotate(1deg); }
        50% { transform: translate(-1px, 2px) rotate(-1deg); }
        60% { transform: translate(-3px, 1px) rotate(0deg); }
        70% { transform: translate(3px, 1px) rotate(-1deg); }
        80% { transform: translate(-1px, -1px) rotate(1deg); }
        90% { transform: translate(1px, 2px) rotate(0deg); }
        100% { transform: translate(1px, -2px) rotate(-1deg); }
    }

`;

export default Widget;
