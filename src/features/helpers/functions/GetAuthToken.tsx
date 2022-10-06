export function GetAuthToken(){
     
    if(typeof window!=="undefined"){
    const token=window.localStorage.getItem("token");

    return token;
    }
}