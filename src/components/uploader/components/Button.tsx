import styled from "styled-components";
import React from "react";


const Button = (props: any)=> {

    return (
        <>
            <ButtonContainer {...props}>
                {props.children}
            </ButtonContainer>
        </>
    );
}

export default Button;

const ButtonContainer = styled.button`
    background: #f40028;
    border: none;
    padding: 1rem 2rem;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    
    &:hover {
      cursor: pointer;
    }
`
