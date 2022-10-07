export const logout=()=>{

   if(typeof window!=="undefined"){
      window.localStorage.removeItem("token")
    
    }
}