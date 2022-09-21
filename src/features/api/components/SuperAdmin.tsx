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
    axios(config)
}


const SuperAdminInfoEdit=(putDataObj)=>{

   const userId=putDataObj.id;
   const jsonObj=JSON.stringify({
    ...putDataObj.data,
    is_active: putDataObj.data.status==="Yes"?true: false,
    role: "superadmin"
     
   })
    

    const token=GetAuthToken()

    const config={
        method: "put",
        url: "https://pippams-dev.eoraa.com/api/super_admin/"+userId+"/",
        headers: {
            "Content-Type": "application/json",
             "Authorization": token,
          },
          
          data: jsonObj
    }

    axios(config)
}



const SuperAdminInfoDelete=(userId)=>{
    const token=GetAuthToken()

    const config={
        method: "delete",
        url: "https://pippams-dev.eoraa.com/api/super_admin/"+userId+"/",
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
    super_admin_info_delete: SuperAdminInfoDelete,

}