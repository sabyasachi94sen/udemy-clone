
import axios from "axios";

import { GetAuthToken } from "@/features/helpers"

const AccountManagerList=()=>{
    const token=GetAuthToken()

    const config={
        method: "get",
        url: "https://pippams-dev.eoraa.com/api/account_managers/list/",
        headers: {
            "Content-Type": "application/json",
             "Authorization": token,
          },
          
         
    }

    return axios(config);
}

const AccountManagerInfoAdd=(postData: object)=>{
    const token=GetAuthToken()


    const jsonObj={
        email: postData.email,
        manager_name: postData.name,

    }
   
    const config={
        method: "post",
        url: "https://pippams-dev.eoraa.com/api/manager/register/",
        headers: {
            "Content-Type": "application/json",
             "Authorization": token,
          },

          data: JSON.stringify(jsonObj)
  

    }
    axios(config)
}


const AccountManagerInfoEdit=(putDataObj: object)=>{

    const userId=putDataObj.id;
    const jsonObj=JSON.stringify({
     ...putDataObj.data,
     is_active: putDataObj.data.status==="Yes"?true: false,
     
    })
     
 
     const token=GetAuthToken()
 
     const config={
         method: "put",
         url: "https://pippams-dev.eoraa.com/api/manager/ud/"+userId+"/",
         headers: {
             "Content-Type": "application/json",
              "Authorization": token,
           },
           
           data: jsonObj
     }
 
     axios(config)
}

const AccountManagerInfoDelete=(userId)=>{
    const token=GetAuthToken()

    const config={
        method: "delete",
        url: "https://pippams-dev.eoraa.com/api/manager/ud/"+userId+"/",
        headers: {
            "Content-Type": "application/json",
             "Authorization": token,
          },
          
         
    }

    axios(config)
}



export const AccountManagerResObj={
    account_manager_list: AccountManagerList,
    account_manager_info_add: AccountManagerInfoAdd,
    account_manager_info_edit:AccountManagerInfoEdit,
    account_manager_info_delete: AccountManagerInfoDelete,
}