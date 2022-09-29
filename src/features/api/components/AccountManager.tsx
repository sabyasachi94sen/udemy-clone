
import { handleMutation,handleQuery } from "@/shared/services/api-client"


export interface ManagerPostDataObjVal {
    name:  string;
    email: string;
}


export interface ManagerPutDataObjVal {
    data: ManagerPayloadData;
    id:   number;
}

export interface ManagerPayloadData {
    username: string;
    email:    string;
    status:   string;
    role:     string;
}


const AccountManagerList=()=>handleQuery({ resourceUrl: "account_managers/list" })

const AccountManagerInfoAdd=(postDataObj: ManagerPostDataObjVal)=>{





    const jsonObj={
        email: postDataObj.email,
        manager_name: postDataObj.name,

    }
   
    

   return handleMutation({
        resourceUrl:"manager/register",
        method: "POST",
        reqBody: jsonObj,
      })
}


const AccountManagerInfoEdit=(putDataObj: ManagerPutDataObjVal)=>{




    const userId=putDataObj.id;
    const jsonObj=JSON.stringify({
     ...putDataObj.data,
     is_active: putDataObj.data.status==="Active",
     
    })
    

    return handleMutation({
        resourceUrl:`manager/ud/${userId}`,
        method: "PUT",
        reqBody: jsonObj,
      })
}

const AccountManagerInfoDelete=(userId:string)=>handleMutation({
        resourceUrl:`manager/ud/${userId}`,
        method: "DELETE",
     
      })



export const AccountManagerResObj={
    account_manager_list: AccountManagerList,
    account_manager_info_add: AccountManagerInfoAdd,
    account_manager_info_edit:AccountManagerInfoEdit,
    account_manager_info_delete: AccountManagerInfoDelete,
}