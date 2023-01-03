
export const getLocalStorage=(key:string)=>{
    if(typeof window!=="undefined"){
        return window.localStorage.getItem(key)
    }
}