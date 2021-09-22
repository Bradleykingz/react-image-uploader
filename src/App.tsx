import React, {useState} from 'react';
import ImagePreview from "./components/uploader/components/ImagePreview";

export type LocalFile = {
    src: string,
    file: File | null
}

function ImageUploader (){

    const [selectedImages, setSelectedImages] = useState<Array<LocalFile>>([]);

    const onSelectImage = (e: React.ChangeEvent<HTMLInputElement>)=> {
        const fileList: Array<FileList | null> = [e.target.files];
        const selectedImages: Array<LocalFile> = [];
        const files = fileList?.[0]

        if (files?.length) {
            for (let i = 0; i < files.length; i++) {
                const currentFile = files[i];

                const newSource = URL.createObjectURL(currentFile);

                selectedImages.push({
                    src: newSource,
                    file: currentFile,
                });

                setSelectedImages(selectedImages);
            }
        }
    }

    return (
        <div>
            <ImagePreview images={selectedImages}/>

            <input
                type="file"
                name="file"
                multiple
                onChange={onSelectImage}
            />
        </div>
    );
}

export default ImageUploader;

