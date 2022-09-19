export function GetAuthToken(){

    const token=window.localStorage.getItem("token");

    return token;
}