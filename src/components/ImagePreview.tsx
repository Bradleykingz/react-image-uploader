import {LocalFile} from "../App";
import styled from "styled-components";
import React, {useEffect, useState} from "react";
import {CloseButton} from "./Button";

type ImagePreviewProps = {
    images: Array<LocalFile>
    onRemoveImage: (e: number)=> void
    title?: string
}

export const ImagePreviewContainer = styled.div`
  display: flex;
  gap: 1rem;
`

type ImageProps = {
    src: string;
    alt: string;
    onClickCloseButton: (e: number)=> void
}

export const Image = (props: ImageProps) => {

    return (
        <>
            <ImageContainer>
                <CloseButton onClick={props.onClickCloseButton}/>

                <img src={props.src} alt={props.alt}/>
            </ImageContainer>
        </>
    );
};


const ImageContainer = styled.div`
  position: relative;
  
   img {
     max-width: 150px;
     
     &:hover {
      cursor:pointer;
     }
   }
`;
