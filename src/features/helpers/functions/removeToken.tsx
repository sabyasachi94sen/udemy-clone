export const removeToken=()=>{
 
    if(typeof window!=="undefined"){
      window.localStorage.removeItem("token")
    }
}