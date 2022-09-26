import {AddActivityForm} from "@/features/academic_plan"
import { useState } from "react"

interface AcademicPersonalTableProps{
  isAddActive: ()=>void;
  deleteDataInTable: ()=>void;
  setTable: ()=>void;
  activityData: {}[]
}

export function AcademicPersonalTable({isAddActive,deleteDataInTable,setTable,activityData}: AcademicPersonalTableProps){

 

    return (
       
       <>
      <div className="w-[90%] h-screen rounded-md -mt-44 z-0 relative">
        <div>
          <div className="w-[55%] h-[10vh] flex justify-around items-center ml-16">
             <div className="w-[50px] shadow-lg rounded-l-2 h-[5vh] flex items-center justify-center cursor-pointer" onClick={setTable}>
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
                <button className="w-[46%] h-[6vh] bg-cyan-500 rounded-md">View AEP Status Tracker (student)</button>
                <button className="w-[46%] h-[6vh] bg-cyan-500 rounded-md" onClick={isAddActive}>Update AEP</button>
             </div>
        </div>
        {/* <div className="bg-[#3AB0FB52] h-[6vh] w-[95%] mt-10 mx-auto rounded-md text-[#5F5F5F] font-medium text-[1rem] flex justify-around items-center">
          <p>Activity name</p>
          <p>Type</p>
          <p>Subject</p>
          <p>Country of Activity</p>
          <p>Application of requirements</p>
          <p>Application deadline</p>
          <p>Activity start date</p>
          <p>Complete</p>
          <p>Delete</p>
          </div> */}

        
        <div className={`h-[60vh] overflow-y-scroll mt-8`}>
          <table className="border-solid w-[96%] text-center bg-white mx-auto relative left-2 font-sans font-bold text-[0.9rem] -mt-1 text-[#344054] break-all">
          <tbody className="overflow">
            <tr className="text-center w-full font-medium text-[0.9rem] mx-auto h-[7vh] mb-1  bg-blue-200 sticky top-0">
          <td className="rounded-bl-md rounded-tl-md">Activity name</td>
                   <td className="">Type</td>
                   <td className="">Subject</td>
                   <td className="">Country of Activity</td>
                   <td className="">Application of requirements</td>
                   <td className="">Application deadline</td>
                   <td className="">Activity start date</td>
                   <td className="">Complete</td>
                   <td className="rounded-br-md rounded-tr-md">Delete</td>
                  
                   
                 
               </tr>
                <tr className="bg-white h-[3vh] sticky top-[7vh]">
                   <td ></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   
                </tr> 
          {activityData.map((item,index)=>{
            return <tr key={index} className="h-[6vh] bg-gray-50">
              <td className="">{item.subject} exam</td>
              <td className="">{item.type}</td>
              <td className="">{item.subject}</td>
              <td className="">New Delhi</td>
              <td className="">Essay,Fee</td>
              <td className="">21/08/2022</td>
              <td className="">21/09/2022</td>
              <td className="">
                <label className="block text-gray-500 font-bold text w-[100%] mt-2" >
             <input className="leading-tight h-[5vh] w-[50%] relative top-[2px] relative" id="complete-task" name="complete" type="checkbox" />
  
           </label></td>
           <td className="cursor-pointer"><img alt="delete-icon" onClick={()=>deleteDataInTable(activityData,index)} src="/images/delete.png" className="block mx-auto"/></td>
            </tr>
          })}
            
            </tbody>
        
          </table>
          </div>
        
        </div>
       
       
        </div>

        
        
</>
    )
}