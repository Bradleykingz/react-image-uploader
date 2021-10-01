import {LocalFile} from "../App";
import styled from "styled-components";
import React, {useEffect, useState} from "react";
import {CloseButton} from "./Button";



export const ImagePreviewContainer = styled.div`
  display: flex;
  gap: 1rem;
`

type ImageProps = {
    src: string;
    alt: string;
    onClickCloseButton: (e: number)=> void
}

type ImagePreviewProps = {
    images: Array<LocalFile>
    onRemoveImage: (e: number)=> void
    title?: string
    uploadIndex: number
    totalCount: number
    uploadProgress: number
}

export const ImagePreview = (props: ImagePreviewProps)=> {
    return (
        <>
            {
                props.images?.length ? (
                    <>

                        <ImagePreviewContainer>
                            {
                                props.images?.map((image, index) => (
                                    <>
                                        <Image onClickCloseButton={() => props.onRemoveImage(index)}
                                               src={image.src} alt={''}/>
                                    </>
                                ))
                            }
                        </ImagePreviewContainer>
                        {
                            props.uploadIndex ? (
                                <div>
                                    <p>Uploading: image {props.uploadIndex}/{props.totalCount} - {props.uploadProgress}%</p>
                                </div>
                            ) : <span/>
                        }

                    </>

                ): <p>No selected images</p>
            }

        </>
    );
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
