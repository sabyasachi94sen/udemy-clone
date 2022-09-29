import { handleMutation, handleQuery } from "@/shared/services/api-client"


interface UpdatedDataVal{
    username: string;
    email: string;
}

const userDetails=()=>handleQuery({ resourceUrl: "user/details" })

const userDetailsUpdate=(updatedData: UpdatedDataVal)=>handleMutation({ resourceUrl:"user/update",method: "PUT",reqBody: updatedData })

export const SettingObj={
    user_details: userDetails,
    user_details_update: userDetailsUpdate
}