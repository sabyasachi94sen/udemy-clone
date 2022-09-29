import { handleMutation, handleQuery } from "@/shared/services/api-client"

interface payloadVal{
    
        plan_id : string;
        is_completed : string;
        remarks : string;
    
}

const AepTrackerList=()=>handleQuery({ resourceUrl:"student/activity/track" })


const ActivityCompleteCheck=(payload:payloadVal)=>handleMutation({ resourceUrl:"student/activity/track",method: "PUT",reqBody: payload })


export const AepTrackerObj={
    aep_tracker_list: AepTrackerList,
    activity_complete_check:ActivityCompleteCheck,
}