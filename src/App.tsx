import React, {useRef, useState} from 'react';
import ImageUploader from "./components/ImageUploader";

export type LocalFile = {
    src: string,
    file: File | null
}

function App (){

    return (
        <>
            <ImageUploader/>
        </>

    );
}

export default App;



