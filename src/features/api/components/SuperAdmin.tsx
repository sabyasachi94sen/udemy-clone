
import { handleMutation ,handleQuery } from "@/shared/services/api-client";

export interface SuperAdminPutDataObjVal {
    data: SuperAdminPayloadData ;
    id:   number;
}

export interface SuperAdminPayloadData {
    username: string;
    email:    string;
    status:   string;
}


export interface SuperAdminPostDataObjVal{
    username: string;
    email: string
}


const SuperAdminInfoList= ()=>handleQuery({ resourceUrl: "super_admin" })


const SuperAdminInfoSubmit= (postDataObj: SuperAdminPostDataObjVal )=>handleMutation({
        resourceUrl: "super_admin",
        method: "POST",
        reqBody: postDataObj,
      })


const SuperAdminInfoEdit=(putDataObj :SuperAdminPutDataObjVal)=>{



   const userId=putDataObj.id;
   const jsonObj=JSON.stringify({
    ...putDataObj.data,
      
    is_active: putDataObj.data.status==="active",
    role: "superadmin"
     
   })
    

    return handleMutation({
        resourceUrl: `super_admin/${userId}`,
        method: "PUT",
        reqBody: jsonObj
      })
}



const SuperAdminInfoDelete=(userId:string)=>handleMutation({
        resourceUrl: `super_admin/${userId}`,
        method: "DELETE",
        
      })





export const SuperAdminResObj={
    super_admin_info_list :SuperAdminInfoList,
    super_admin_info_submit: SuperAdminInfoSubmit,
    super_admin_info_edit: SuperAdminInfoEdit,
    super_admin_info_delete: SuperAdminInfoDelete,

}