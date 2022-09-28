export const GetLoginCreds=()=>{

    if(typeof window!=="undefined")
    return JSON.parse(window.localStorage.getItem("loginCreds"))
}