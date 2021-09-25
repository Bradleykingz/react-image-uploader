import {LocalFile} from "../../../App";
import styled from "styled-components";
import React from "react";


const ImagePreview = (props: {images: Array<LocalFile>})=> {

    return (
        <>
            <ImagePreviewContainer>
                {
                    props.images?.map(image=> (
                        <>
                            <Image src={image.src} alt={''}/>
                        </>
                    ))
                }
            </ImagePreviewContainer>
        </>
    );
}

export default ImagePreview;

const ImagePreviewContainer = styled.div`
  display: flex;
  gap: 1rem;
`

const Image = (props: { src: string, alt: string }) => {

    return (
        <>
            <ImageContainer>
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
