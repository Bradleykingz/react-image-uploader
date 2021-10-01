import styled from "styled-components";
import React from "react";


const Button = (props: any)=> {

    return (
        <>
            <ButtonContainer
                disabled={props.isLoading ?? props.disabled}
                {...props}>
                {props.isLoading ? "Please wait..." : props.children}
            </ButtonContainer>
        </>
    );
}

export default Button;

const ButtonContainer = styled.button<any>`
    background: ${props=> props.type === "info"? "#1e90ff": "#f40028"};
    border: none;
    padding: 1rem 2rem;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    transition: background ease-in-out 0.25s;
    
    &:disabled {
      background: ${props=> props.type === "info"? "#d4eaff": "#ffccd5"};
      
      &:hover {
        cursor: not-allowed;
      }
    }
    
    &:hover {
      cursor: pointer;
      background: ${props=> props.type === "info"? "#5aacff": "#ff284b"};
    }
`

export const CloseButton = (props: any)=> {

    return (
        <>
            <CloseButtonContainer {...props}/>
        </>
    );
}




const CloseButtonContainer = styled.button`
    position: absolute;
    z-index: 1;
    right: 4px;
    top: 4px;
    // reduce the height and width so it fits better in our components
    height: 25px;
    width: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // align the "X" icon horizontally
    align-items: center;
    // set the background color to a light shade of grey
    background: lightgrey;
    // round off the corners
    border-radius: 50%;
    border: none;

    &::before, &::after {
        position: absolute;
        content: '';
        // set the width to 50%, so it fits better in the container
        width: 50%;
        height: 3px; /* cross thickness */
        // change the color of the "X" icon to white
        background-color: white;
    }
    
    &::before {
        transform: rotate(45deg);
    }
    
    &::after {
        transform: rotate(-45deg);
    }
    
    &:hover {
      cursor: pointer;
    }
    
`

const CBC = styled.button`

`
