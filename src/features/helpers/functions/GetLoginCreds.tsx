export const GetLoginCreds=()=>{

    if(typeof window!=="undefined"){
        const val=window.localStorage.getItem("loginCreds")

        if(val!=null)
        return JSON.parse(val)
    }
    
}