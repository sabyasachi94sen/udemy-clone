export function GetUserType(){
    
    if(typeof window!=="undefined"){
    return window.localStorage.getItem("type");
    }
}