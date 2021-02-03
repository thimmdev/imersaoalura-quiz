import styled from 'styled-components';

const ModalAge = styled.div`
position: absolute;
z-index: 2;
background-color: ${({ theme }) => theme.colors.modalBg};
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 150px black;
`;

ModalAge.Content = styled.div`
    top: 25%;
    left: 30%;
    position: absolute;
    border-radius: 15px;
    display: block;
    text-align: center;
    z-index:3;
    width: 800px;
    height: 500px;
    background-color: ${({ theme }) => theme.colors.primary};

    
    h3 {
        color: black;
        text-transform: uppercase;
    }

    Button {
        width: 450px;
        height: 50px;
    }

    img {
        width: auto;
        height: 250px;
        margin: 0;
    }
`;

export default ModalAge;
