import { handleQuery,handleMutation } from "@/shared/services/api-client"

const ActivityList=()=>handleQuery({ resourceUrl: "activity_api" })


const ActivityAdd=(formValues)=>{
    handleMutation({
        resourceUrl:"activity_api",
        method: "POST",
        reqBody: formValues,
     
      })
}


export const ActivityResObj={
    activity_list: ActivityList,
    activity_add: ActivityAdd,
}