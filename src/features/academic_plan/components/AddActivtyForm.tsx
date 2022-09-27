import { useState } from "react";
import { useForm } from "react-hook-form"
import { useMutation ,useQuery,useQueryClient } from "react-query";
import moment from "moment"
import { AepResObj } from "@/features/api";

interface AddActivityFormProps{

  isAddActive: ()=>void;
  studentId: string;

}

interface FormValues{
  activity_status: string;
  activity_subject: string;
}
   

export function AddActivityForm({ isAddActive,studentId }: AddActivityFormProps){

    const [mutateParams,setMutateParams]=useState({ mutateFunc: AepResObj.aep_student_assign_activity })
   

    
    const submitActivity=(filterParams: FormValues )=>{



      const mutateObj={
        student_id: studentId,
        ...filterParams
      }
     
          setMutateParams({ mutateFunc: AepResObj.aep_student_activity_filter })
          setTimeout(()=>{
            mutate(mutateObj)
          },1000)
        

    }

   
    const { data }=useQuery(["assigned-student-activity"],()=>AepResObj.aep_student_assignment_activity_list(studentId))
    const { register,handleSubmit }=useForm<FormValues>()
   


  const queryClient=useQueryClient()
  const { mutate }=useMutation(mutateParams.mutateFunc,{
    onSuccess: ()=>{
      
       queryClient.invalidateQueries("assigned-student-activity")
    }
  })




  const addDataInTable = (activity_id: string,student_id:string) => {

    const mutateObj={
      activity_id,
      student_id
    }

    mutate(mutateObj)
  };


    
    
  
    return (
      <div className="w-[70%] h-[90vh] bg-white border-2 rounded-lg mt-10 pb-10">
        <div className="w-[80%] h-[10vh] flex justify-around items-center ml-20">
          <div className="w-[50px] shadow-lg rounded-l-2 h-[5vh] flex items-center justify-center cursor-pointer" onClick={isAddActive}>
            <img alt="back-icon" src="/images/backArrow.png"/>
          </div>
          <h1 className="text-3xl font-bold ml-3 text-cyan-500">Add activity to Academic Enrichment Plan (Student)</h1>
        </div>
             

        <div className="w-full h-[8vh] flex justify-between mt-8">
          <div className="w-[70%] pl-5">
            <span className="text-md font-bold">Active Status</span>
            <select {...register("activity_status")} className="bg-[#EEEE] rounded-md w-[60%] h-[5vh] relative left-3 outline-none">
              <option>Select Type</option>
              <option>Exam</option>
            </select>
          </div>

          <div className="w-[70%]">
            <span className="text-md font-bold">Activity Subject</span>
            <select {...register("activity_subject")} className="bg-[#EEEE] rounded-md w-[60%] h-[5vh] relative left-3 outline-none">
              <option>Select Subject</option>
              <option>Maths</option>
              <option>Olympiad</option>
            </select>
          </div>

        </div>
        <button className="bg-cyan-500 rounded-lg w-[15%] h-[6vh] mx-auto block mt-4 text-white" type="button" onClick={handleSubmit(submitActivity)}>Submit</button>

        <div className="bg-[#3AB0FB52] h-[6vh] w-[100%] mt-10 mx-auto rounded-md text-[#5F5F5F] font-medium text-[0.7rem] flex justify-around items-center pr-4">
          <p>Activity name</p>
          <p>Type</p>
          <p>Subject</p>
          <p>Country of activity</p>
          <p>Application requirments</p>
          <p>Application deadline</p>
          <p>Activity start date</p>
          <p>Remarks</p>
          <p>Add to AEP</p>
          
        </div>

        
        <div className="h-[40vh] mt-4 overflow-y-scroll">
          <table className="border-solid w-[100%] mx-auto relative font-sans font-medium text-[0.7rem] -mt-1   text-[#344054] break-all">
            <tbody className="overflow">
              {data && data.map((item,index)=><tr key={index} className="h-[6vh]">
                <td className="w-[5.3%] text-center">{item && item?.activity_name} Exam</td>
                <td className=" w-[5%] text-center">{item && item?.activity_type}</td>
                <td className="w-[3%] text-center">{item && item?.subject}</td>
                <td className="w-[8%] text-center">{item && item?.country_residence}</td>
                <td className="w-[7%] text-center">{item && item?.application_requirement}</td>
                <td className="w-[8%] text-center">{moment(item && item?.application_deadline).format("YYYY-MM-DD")}</td>
                <td className="w-[7%] text-center">{moment(item && item?.activity_start_date).format("YYYY-MM-DD")}</td>
                <td className="w-[5%] pl-1"><input className="w-full h-[4vh] break-all mx-auto rounded-md bg-cyan-300" name="remarks" type="text" /></td>
                <td className="w-[5%] text-center"><button className="w-[80%] h-[4vh] text-white hover:bg-blue-500 bg-[#3AB0FB] rounded-lg" type="button" onClick={()=>addDataInTable(item.id,studentId)}>Add</button></td>
              </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    )
}