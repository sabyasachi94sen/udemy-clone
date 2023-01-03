export const setLocalStorage=(key:string,item:string)=>{
    if(typeof window!=null){
        window.localStorage.setItem(key,item);
    }
}