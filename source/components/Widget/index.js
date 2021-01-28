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

export default Widget;
