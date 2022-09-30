import moment from "moment";
import { SyntheticEvent, useEffect,useState } from "react";
import { useMutation } from "react-query"

import { AepTrackerObj } from "@/features/api";

interface AEPTableProps{
    aepData: {}[];
    openStatusTable : ()=>void
}

interface FormValues{
  remarks: string
}



export function AEPTable({ aepData,openStatusTable  }: AEPTableProps){
   

  
  const [ remarks,setRemarks]=useState({ remarks: "" })
  const [storeAepData,setStoreAepData]=useState([])
  
  const { mutate }=useMutation(AepTrackerObj.activity_complete_check,{
    onSuccess: ()=>{
        window.location.href="/aep-tracker"
    },

    onError: ()=>{
      
    }
  })


  const searchStaff=(e:SyntheticEvent)=>{
    const staffName=e.target.value;
     const filterStaff=aepData.filter((item) => {
       if(item.student_name.includes(staffName))
       return item;
     })
     

     setStoreAepData(filterStaff)
 }
   

  useEffect(()=>{
     
      
    if(aepData!=undefined){
    var filterData=aepData.sort((x1,x2)=>x1.date_of_birth-x2.date_of_birth)
    }
    console.log(filterData)
     setStoreAepData(aepData)
  },[aepData])




  const handleRemarks=(e:SyntheticEvent)=>{
      
    setRemarks({ ...remarks,[e.target.name]: e.target.value })
  }

  const isComplete=(is_completed:boolean,plan_id: string)=>{

  
        
     const mutateObj={
      ...remarks,
        plan_id,
        is_completed,
     }

     mutate(mutateObj)
  }

  



    return (
      <div className="w-[90%] h-screen rounded-md bg-white -mt-44">
       
        <div>
          <h1 className="text-black font-bold text-4xl font-sans ml-[3%] relative z-0">AEP Status Tracker</h1>
          <div className="w-[90%] h-[6vh] flex mt-6 z-0 ml-[3%]">
            <div className="w-[76%] h-[6vh] flex items-center rounded-md pl-4 bg-gray-50">
              <input className="w-[90%] h-[6vh] bg-gray-50 pl-7 placeholder-gray-600 bg-white outline-none"name="search" placeholder="Search the staff member here" type="text"  onChange={searchStaff}/>
           
              <img alt="search-icon" className="ml-8 w-[1.5vw] h-[3.5vh]" src="/images/searchBlue.png" />
           
            </div>
          
          </div>

      

        
          <div  className={`${storeAepData && storeAepData?.length>10 ?`h-[60vh]`: `h-auto`} overflow-y-scroll mt-8`}>
            <table className="border-solid w-[95%] text-center mx-auto relative left-2 font-sans font-bold text-[0.9rem] -mt-1  bg-gray-50 text-[#344054] break-all">
              <tbody className="overflow">
                <tr className="text-center w-full font-bold  xl:text-[0.7rem]  2xl:text-[0.85rem] mx-auto h-[7vh]  bg-blue-200 opacity-[1] sticky top-0">
               
                  <td className="rounded-bl-lg rounded-tl-lg">Student name</td>
                  <td className="">Activity name</td>
                  <td className="">Type</td>
                  <td className="">Subject</td>
                  <td className="">Task</td>
                  <td className="">Target date</td>
                  <td className="">Status</td>
                  <td className="">Complete</td>
                  <td className="rounded-br-lg rounded-tr-lg">Remarks</td>
             
                </tr>
                <tr className="bg-white h-[4vh] sticky top-[7vh]">
                  <td  />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                </tr>
           
                {storeAepData && storeAepData.map((val,index)=><tr key={index} className="border-b-[1.5px] border-b-[#EDEDED] border-gray-50">
                  <td className="h-[7vh] cursor-pointer hover:underline" onClick={()=>openStatusTable(val && val?.student_name,val && val?.activity_assigned_student)}>{val && val?.student_name}</td>
                  <td className="h-[7vh]">{val && val?.activity_assigned_student[0]?.activity?.activity_name }</td>
                  <td className="h-[7vh]">{val && val?.activity_assigned_student[0]?.activity?.activity_type}</td>
                  <td className="h-[7vh]">{val && val?.activity_assigned_student[0]?.activity?.subject}</td>
                  <td className="h-[7vh]">{val && val?.activity_assigned_student[0]?.activity_plan_assigned[0]?.action_map?.action}</td>
                  <td className="h-[7vh]">{moment(val && val?.activity_assigned_student[0]?.activity_plan_assigned[0]?.action_map?.created_at).add(val && val?.activity_assigned_student[0]?.activity_plan_assigned[0]?.action_map?.deadline_days,"days").format("YYYY-MM-DD")}</td>
                  <td><div className={`w-[15px] h-[15px] rounded-[50%] ${val && val?.activity_assigned_student[0]?.activity_plan_assigned[0]?.is_completed?`bg-gray-500`:`bg-[#BD4E4E]`} mx-auto`} /></td>
                  <td className="">
                    <label className="block text-gray-500 font-bold text w-[100%] mt-2" >
                      <input className="leading-tight h-[5vh] w-[50%] top-[2px]" defaultChecked={val && val?.activity_assigned_student[0]?.activity_plan_assigned[0]?.is_completed} disabled={val && val?.activity_assigned_student[0]?.activity_plan_assigned[0]?.is_completed} id="complete-task" name="complete" type="checkbox" onClick={()=>isComplete(val && !val?.activity_assigned_student[0]?.activity_plan_assigned[0]?.is_completed,val && val?.activity_assigned_student[0]?.activity_plan_assigned[0]?.id)}/>
  
                    </label></td>
                  <td><input className="w-[50%] h-[5vh] rounded-lg bg-blue-300" name="remarks" type="text" onChange={handleRemarks}/></td>

                </tr>)}
              </tbody>
          
            
          
        
            </table>
          </div>
        
        </div>
      </div>
    )
}