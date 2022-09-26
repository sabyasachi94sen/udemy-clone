import axios from "axios"
import {GetAuthToken} from "@/features/helpers"

const AepList=()=>{

  const token=GetAuthToken();

    const config={
        method: "get",
        url: "https://pippams-dev.eoraa.com/api/aep/list/",
        headers:{
            "Content-Type": "application/json",
            "Authorization":token
        }
    }

    

    return axios(config)
}


export const AepResObj={
    aep_list: AepList
}