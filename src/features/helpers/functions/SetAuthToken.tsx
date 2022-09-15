export const SetAuthToken=(token: string)=>{
    const authToken="token"+" "+token;
    window.localStorage.setItem("token",authToken);
}