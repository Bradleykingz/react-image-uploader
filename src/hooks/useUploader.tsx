import {createContext} from "react";

const uploaderContext = createContext(null);

export const useUploaderContext = ()=> {
    return uploaderContext;
}


