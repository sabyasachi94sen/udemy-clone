import axios from "axios";

import { GetAuthToken } from "@/features/helpers"



const SuperAdminInfoList= ()=>{

const token=GetAuthToken()


    const config={
        method:"get",
        url: "https://pippams-dev.eoraa.com/api/super_admin/",
    
            headers: {
              "Content-Type": "application/json",
               "Authorization": token,
            }
    
        
    }

    return axios(config);
}


const SuperAdminInfoSubmit= (data: object)=>{

    
const token=GetAuthToken()
   
    const config={
        method: "post",
        url: "https://pippams-dev.eoraa.com/api/super_admin/",
        headers: {
            "Content-Type": "application/json",
             "Authorization": token,
          },

          data: JSON.stringify(data)
  

    }
    return axios(config)
}


const SuperAdminInfoEdit=(id:number,putData)=>{

    console.log(putData)

    const token=GetAuthToken()

    const config={
        method: "put",
        url: "https://pippams-dev.eoraa.com/api/admin/"+id,
        headers: {
            "Content-Type": "application/json",
             "Authorization": token,
          },
    }

    axios(config)
}





export const SuperAdminResObj={
    super_admin_info_list :SuperAdminInfoList,
    super_admin_info_submit: SuperAdminInfoSubmit,
    super_admin_info_edit: SuperAdminInfoEdit,
}