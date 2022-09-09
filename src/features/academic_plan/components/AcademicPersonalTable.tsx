import {AddActivityForm} from "@/features/academic_plan"
import { useState } from "react"

interface AcademicPersonalTableProps{
  onClick1: ()=>void;
  onClick2: ()=>void
  activityData: {}[]
}

export function AcademicPersonalTable({onClick1,onClick2,activityData}: AcademicPersonalTableProps){

 

    return (
       
       <>
      <div className="w-[90%] h-screen rounded-md -mt-44 z-0 relative">
        <div>
          <div className="w-[55%] h-[10vh] flex justify-around items-center ml-16">
             <div className="w-[50px] shadow-lg rounded-l-2 h-[5vh] flex items-center justify-center cursor-pointer">
               <img alt="back-icon" src="/images/backArrow.png"/>
             </div>
          <h1 className="text-3xl font-bold ml-3">Academic Enrichment Plan (student)</h1>
          </div>
        <div className="w-[80%] h-[6vh] mt-6 z-0 ml-20">
          <div className="w-[90%] h-[6vh] flex items-center rounded-md pl-4 bg-gray-50">
            <input className="w-[90%] h-[6vh] bg-gray-50 pl-7 placeholder-gray-600 bg-white outline-none" name="search" placeholder="Search the staff member here"  type="text"/>
            <img alt="search-icon" className="ml-8 w-[1.5vw] h-[3.5vh]" src="/images/searchBlue.png" />
            </div>
        </div>


        <div className="w-[100%] h-[7vh] flex items-center ml-20 mt-10">
             <p className="text-xl font-bold">Student name: <span className="text-xl font-medium">Rishav</span></p>
             <div className="w-[60%] h-[7vh] flex justify-around ml-2 text-white
             ">
                <button className="w-[46%] h-[6vh] bg-cyan-500 rounded-md">View implementation status</button>
                <button className="w-[46%] h-[6vh] bg-cyan-500 rounded-md" onClick={onClick1}>Update academic enrichment plan</button>
             </div>
        </div>
        <div className="bg-[#3AB0FB52] h-[6vh] w-[95%] mt-10 mx-auto rounded-md text-[#5F5F5F] font-medium text-[1rem] flex justify-around items-center">
          <p>Activity name</p>
          <p>Type</p>
          <p>Subject</p>
          <p>Country of Activity</p>
          <p>Application of requirements</p>
          <p>Application deadline</p>
          <p>Activity start date</p>
          <p>Complete</p>
          <p>Delete</p>
          </div>

        
        <div className={`h-[60vh] overflow-y-scroll mt-4`}>
          <table className="border-solid w-[95%] mx-auto relative left-2 font-sans font-bold text-[0.9rem] -mt-1  bg-gray-50 text-[#344054] break-all">
          <tbody className="overflow">
          </tbody>
          {activityData.map((item,index)=>{
            return <tr key={index} className="h-[6vh]">
              <td className="w-[10%]">{item.subject} exam</td>
              <td className="w-[6%] text-center">{item.type}</td>
              <td className="w-[10%] pl-2">{item.subject}</td>
              <td className="w-[16%]">New Delhi</td>
              <td className="w-[16%]">Essay,Fee</td>
              <td className="w-[13%] text-center">21/08/2022</td>
              <td className="w-[15%] text-center">21/09/2022</td>
              <td className="w-[10%]">
                <label className="block text-gray-500 font-bold text w-[100%] pl-8 mt-2" >
             <input className="leading-tight h-[5vh] w-[50%] relative top-[2px] relative" id="complete-task" name="complete" type="checkbox" />
  
           </label></td>
           <td className="w-[10%] h-[5vh] cursor-pointer"><img alt="delete-icon" onClick={()=>onClick2(activityData,index)} src="/images/delete.png" className="block mx-auto"/></td>
            </tr>
          })}
            
          
        
          </table>
          </div>
        
        </div>
       
       
        </div>

        
        
</>
    )
}