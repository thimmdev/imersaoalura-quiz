import styled from 'styled-components';

const Section = styled.section`
    padding: 40px 0;
    display: flex;
    background-color: ${({ theme }) => theme.colors.transpBox};
    justify-content: space-evenly;

    @media (max-width: 600px){
    flex-wrap: flex;
    flex-direction: column;
    margin: 0;
    width: 100%;
    }

    @media (max-width: 320px){
    background: none;
    justify-content: center;
    flex-direction: column;
    margin: auto;
    width: 85%;
    }
`;

export default Section;
