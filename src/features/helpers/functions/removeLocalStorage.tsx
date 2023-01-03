export const removeLocalStorage=(item:string)=>{
 
    if(typeof window!=="undefined"){
      window.localStorage.removeItem(item)
    }
}