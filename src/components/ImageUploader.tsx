import React, {useRef, useState} from "react";
import axios from "axios";
import {Image, ImagePreviewContainer} from "./ImagePreview";
import styled from "styled-components";
import Button from "./Button";
import {LocalFile} from "../App";

type ButtonsProps = {
    onClickUpload: (images: LocalFile[])=> void
    onSelectImage: (e: React.ChangeEvent<HTMLInputElement>)=> void
}

function ImageUploader (){

    const UPLOAD_URL = "https://httpbin.org/post";

    const [selectedImages, setSelectedImages] = useState<Array<LocalFile>>([]);

    // since only one image is uploaded at a time, we can track its progress
    const [uploadProgress, setUploadProgress] = useState(0);
    // the index of the image being uploaded
    const [uploadIndex, setUploadIndex] = useState(0);
    // the total number of images being uploaded
    const [totalCount, setTotalCount] = useState(0);

    const onSelectImage = (e: React.ChangeEvent<HTMLInputElement>)=> {
        const fileList: FileList | null = e.target.files;

        if (fileList?.length) {
            const newSelectedImagesArr: Array<LocalFile> =
                Array.from(fileList).map((currentFile, ) => {
                    const newSource = URL.createObjectURL(currentFile);

                    return {
                        src: newSource,
                        file: currentFile,
                    }
                });

            setSelectedImages(newSelectedImagesArr);
        }
    }

    async function upload(images: LocalFile[]){

        setTotalCount(images.length);
        let uploadCount = 1;
        for (let i = 0; i < images.length; i++){
            let localFile: LocalFile = images[i];
            const formData = new FormData();

            const currentImage = (localFile.file as File);
            formData.append('fileName', currentImage.name);

            try {
                setUploadIndex(uploadCount++);
                await axios.post(UPLOAD_URL, formData, {
                    onUploadProgress: (progressEvent)=> {
                        const uploadPercent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                        setUploadProgress(uploadPercent);
                    }
                });

                setUploadProgress(0);

                images.splice(i, 1);
                setSelectedImages([...images]);

                i--;
            }catch (e){
                console.log("Could not upload image due to an error: ", e);
            }
        }

    }

    function removeImage(i: number){
        const newSelectedImages = [...selectedImages];
        newSelectedImages.splice(i, 1)
        setSelectedImages(newSelectedImages);
    }


    return (

        <div>
            {
                selectedImages?.length ? (
                    <>

                        <ImagePreviewContainer>
                            {
                                selectedImages?.map((image, index) => (
                                    <>
                                        <Image onClickCloseButton={() => removeImage(index)}
                                               src={image.src} alt={''}/>
                                    </>
                                ))
                            }
                        </ImagePreviewContainer>
                        {
                            uploadIndex ? (
                                <div>
                                    <p>Uploading: image {uploadIndex}/{totalCount} - {uploadProgress}%</p>
                                </div>
                            ) : <span/>
                        }

                    </>

                ): <p>No selected images</p>
            }

            <Buttons
                onClickUpload={() => upload(selectedImages)}
                onSelectImage={onSelectImage}/>
        </div>

    );
}

export default ImageUploader;


const ButtonsContainer = styled.div`
  display: flex;
  gap: 2rem;

`

const Buttons = (props: ButtonsProps)=> {

    const buttonRef = useRef<HTMLInputElement>(null);

    return (
        <ButtonsContainer>

            <input
                style={{display: 'none'}}
                type="file"
                name="file"
                ref={buttonRef}
                multiple
                onChange={props.onSelectImage}
            />

            <Button onClick={() => buttonRef?.current?.click()}>
                Select images
            </Button>

            <Button
                onClick={props.onClickUpload}
                type="info">
                Upload
            </Button>

        </ButtonsContainer>
    );
}
