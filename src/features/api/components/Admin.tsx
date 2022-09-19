import axios from "axios";

import { GetAuthToken } from "@/features/helpers"



const AdminInfoList= ()=>{

const token=GetAuthToken()


    const config={
        method:"get",
        url: "https://pippams-dev.eoraa.com/api/admin/list/",
    
            headers: {
              "Content-Type": "application/json",
               "Authorization": token,
            }
    
        
    }

    return axios(config);
}


const AdminInfoSubmit= (data: object)=>{

    
const token=GetAuthToken()
   
    const config={
        method: "post",
        url: "https://pippams-dev.eoraa.com/api/admin/create/",
        headers: {
            "Content-Type": "application/json",
             "Authorization": token,
          },

          data: JSON.stringify(data)
  

    }
    return axios(config)
}


const AdminInfoEdit=(id:number,putData)=>{

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





export const AdminResObj={
    admin_info_list :AdminInfoList,
    admin_info_submit: AdminInfoSubmit,
    admininfo_edit: AdminInfoEdit,
}