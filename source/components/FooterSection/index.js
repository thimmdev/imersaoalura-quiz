import styled from 'styled-components';

const FooterSection = styled.section`
    padding: 20px 0;
    display: flex;
    justify-content: space-evenly;


    @media (max-width: 800px){
    flex-wrap: flex;
    flex-direction: column;
    
    }
`;

export default FooterSection;