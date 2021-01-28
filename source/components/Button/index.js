import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;

    margin-top: 15px;  
    width: 400px;
    height: 100%;
    padding: 8px 0 8px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    overflow: hidden;
    
    border-radius: 5px;
    border: none;
    box-shadow: 0px 3px 8px black;
    transition: background-color 0.5s;
    transition: color 1s;


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


    :hover {
        
       background-color: ${({ theme }) => theme.colors.mainBg};;
       color: white;
       background-blend-mode: lighten;
       animation: shake 0.8s;       
       animation-iteration-count: infinite;
       
    }

    :active {
        outline: 0;
    }

    :disabled {
        animation: none;
        color: black;
        transition: none;
        background-color: #979797;
        cursor: not-allowed;
    }


`;

Button.propTypes = {
    type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
    children: PropTypes.node.isRequired,
  };

export default Button;
