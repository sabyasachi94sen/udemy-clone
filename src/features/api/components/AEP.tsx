import { handleMutation, handleQuery } from "@/shared/services/api-client";


interface AepStudentPayload{
    activity_id: string,
    student_id: string
}

interface FilterObjVal{
    student_id: string;
    activity_status: string;
    activity_subject: string;

}

const AepList=()=>handleQuery({ resourceUrl: "aep/list" })


const AepStudentActivity=(student_id: string)=>handleQuery({ resourceUrl:`student/aep/list/?student_id=${student_id}` })

const AepStudentAssignedActivityList=(student_id:string)=>handleQuery({ resourceUrl: `activity_assignment/aep/filter/?student_id=${student_id}` })

const AepStudentAssignActivity=(payload: AepStudentPayload)=>handleMutation({
        resourceUrl: "activity_assignment_api",
        method: "POST",
        reqBody: payload,
      })

const AepStudentActivityFilter=(filterObj: FilterObjVal)=>handleQuery({ resourceUrl:`activity_assignment/aep/filter/?student_id=${filterObj.student_id}&&activity_status=${filterObj.activity_status}&&activity_subject=${filterObj.activity_subject}` })


const AepStudentActivityDelete=(payload: AepStudentPayload)=>handleMutation({
        resourceUrl: `student/aep/list`,
        
        method: "DELETE",
        queryParams: { ...payload }
    
      })

export const AepResObj={
    aep_list: AepList,
    aep_student_activity: AepStudentActivity,
    aep_student_assignment_activity_list: AepStudentAssignedActivityList,
    aep_student_assign_activity: AepStudentAssignActivity,
    aep_student_activity_filter: AepStudentActivityFilter,
    aep_student_activity_delete: AepStudentActivityDelete,
}