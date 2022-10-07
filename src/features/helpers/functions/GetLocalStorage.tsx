import { FaWindowRestore } from "react-icons/fa"

export const getLocalStorage=(key)=>{
    if(typeof window!=="undefined"){
        return window.localStorage.getItem(key)
    }
}