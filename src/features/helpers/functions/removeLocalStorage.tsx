export const removeLocalStorage=(item)=>{
 
    if(typeof window!=="undefined"){
      window.localStorage.removeItem(item)
    }
}