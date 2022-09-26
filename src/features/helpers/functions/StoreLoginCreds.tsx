export const StoreLoginCreds=(loginCreds:object)=>{
     window.localStorage.setItem("loginCreds",JSON.stringify(loginCreds))
}