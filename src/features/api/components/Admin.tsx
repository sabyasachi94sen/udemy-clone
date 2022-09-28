import { handleMutation,handleQuery } from "@/shared/services/api-client"

export interface AdminPostDataObjVal {
    name:  string;
    email: string;
}


export interface AdminPutDataObjVal {
    data: AdminPayloadData;
    id:   number;
}

export interface AdminPayloadData {
    username: string;
    email:    string;
    status:   string;
    role:     string;
}




const AdminInfoList= ()=>handleQuery({ resourceUrl: "admin" })


const AdminInfoSubmit= (postData: AdminPostDataObjVal)=>handleMutation({
    resourceUrl: "admin",
    method: "POST",
    reqBody: postData,
  })


const AdminInfoEdit=(putDataObj: AdminPutDataObjVal)=>{



  
   
    const userId=putDataObj.id;
    const jsonObj=JSON.stringify({
     ...putDataObj.data,
     is_active: putDataObj.data.status==="Yes",
     
     
      
    })


     
 

    return handleMutation({
        resourceUrl: `admin/${userId}`,
        method: "PUT",
        reqBody: jsonObj,
      })
    
}


const AdminInfoDelete=(userId:string)=>handleMutation({
        resourceUrl: `admin/${userId}`,
        method: "DELETE",
       
      })





const AdminActivity=(adminId:string)=>handleQuery({ resourceUrl: `admin_list/?id=${adminId}` })





export const AdminResObj={
    admin_info_list :AdminInfoList,
    admin_info_submit: AdminInfoSubmit,
    admin_info_edit: AdminInfoEdit,
    admin_info_delete: AdminInfoDelete,
    admin_activity:AdminActivity
}