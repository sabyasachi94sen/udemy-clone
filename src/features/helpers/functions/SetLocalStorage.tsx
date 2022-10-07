export const setLocalStorage=(key,item)=>{
    if(typeof window!=null){
        window.localStorage.setItem(key,item);
    }
}