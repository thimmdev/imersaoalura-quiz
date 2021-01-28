import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const InputBase = styled.input` 
    text-align: center;
    display: block;
    margin: 0 auto ;
    outline: 0;
    width: 390px;
    height: 45px;
    background-color: ${({ theme }) => theme.colors.mainBg};
    color: ${({ theme }) => theme.colors.primary};
    
    border-radius: 5px;
    border: 2px solid ${({ theme }) => theme.colors.transpBox};
    box-shadow: inset 0 0px 30px black;

    @media (max-width: 1200px){
        flex-direction: column
    }


    @media (max-width: 900px){
        flex-direction: column
    }

    @media (max-width: 600px){
        flex-direction: column
    }

    @media (max-width: 320px){
        flex-direction: column
    }

    /* ::placeholder {
    text-transform: uppercase;
    color: rgba(255,255,255 0.5) */
}

`;

export default function Input({ onChange, placeholder, ...props }) {
  return (
    <div>
      <InputBase
        placeholder={placeholder}
        onChange={onChange}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </div>
  );
}

Input.defaultProps = {
    value: '',
};

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
}
