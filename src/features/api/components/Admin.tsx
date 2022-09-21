import axios from "axios";

import { GetAuthToken } from "@/features/helpers"



const AdminInfoList= ()=>{

const token=GetAuthToken()


    const config={
        method:"get",
        url: "https://pippams-dev.eoraa.com/api/admin/",
    
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
        url: "https://pippams-dev.eoraa.com/api/admin/",
        headers: {
            "Content-Type": "application/json",
             "Authorization": token,
          },

          data: JSON.stringify(data)
  

    }
    axios(config)
}


const AdminInfoEdit=(putDataObj)=>{
  
   
    const userId=putDataObj.id;
    const jsonObj=JSON.stringify({
     ...putDataObj.data,
     is_active: putDataObj.data.status==="Yes"?true: false,
     
     
      
    })
     
 
     const token=GetAuthToken()
 
     const config={
         method: "put",
         url: "https://pippams-dev.eoraa.com/api/admin/"+userId+"/",
         headers: {
             "Content-Type": "application/json",
              "Authorization": token,
           },
           
           data: jsonObj
     }
 
     axios(config)
}


const AdminInfoDelete=(userId)=>{
    const token=GetAuthToken()

    const config={
        method: "delete",
        url: "https://pippams-dev.eoraa.com/api/admin/"+userId+"/",
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
    admin_info_edit: AdminInfoEdit,
    admin_info_delete: AdminInfoDelete
}