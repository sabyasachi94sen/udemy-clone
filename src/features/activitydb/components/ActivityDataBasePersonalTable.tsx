import { Button } from "@/shared/components"

interface ActivityDataBasePersonalTableProps{
    activityData : {}[];
    onClick1: ()=>void;
    onClick2: ()=>void
}

export function ActivityDataBasePersonalTable({activityData,onClick1,onClick2}: ActivityDataBasePersonalTableProps){

    return (
        <div className="w-[90%] h-screen rounded-md bg-white -mt-44">
       
        <div>
         <h1 className="text-black font-bold text-4xl font-sans ml-24 relative right-12 z-0">Essai Activity Database</h1>
         <div className="w-[100%] h-[6vh] flex items-center justify-around mt-6 z-0">
           <div className="w-[76%] h-[6vh] flex items-center rounded-md pl-4 bg-gray-50">
             <input className="w-[90%] h-[6vh] bg-gray-50 pl-7 placeholder-gray-600 bg-white outline-none" name="search" placeholder="Search the staff member here"  type="text"/>
            
             <img alt="search-icon" className="ml-8 w-[1.5vw] h-[3.5vh]" src="/images/searchBlue.png" />
            
           </div>
           <Button className="bg-cyan-500 rounder-md w-[7%] h-[6vh] text-[18px]" onClick={onClick1}>Add&nbsp; <img alt="plus-icon" src="/images/plus.png" /> </Button>
         </div>

         <div className="bg-[#3AB0FB52] h-[6vh] w-[93%] mt-10 mx-auto rounded-md text-[#5F5F5F] font-medium text-[1rem] flex justify-around items-center">
           <p>Application Deadline</p>
           <p>Activity Start Date</p>
           <p>Activity End Date</p>
           <p>Application requirements</p>
           <p>URL</p>
           <p>Active Status</p>
           <p>See action map</p>
           <p>Edit</p>
           <p>Delete</p>
             
         </div>

         
         <div className={`${activityData.length>10 ?`h-[60vh]`: `h-auto`} overflow-y-scroll mt-4`}>
           <table className="border-solid w-[95%] mx-auto relative left-2 font-sans font-bold text-[0.9rem] -mt-1  bg-gray-50 text-[#344054] break-all">
       
             <tbody className="overflow">
               {activityData.map((val,index)=><tr className="border-b-[1.5px] border-b-[#EDEDED] border-gray-50">
               <td className="w-[17%] h-[7vh] pl-12">{val.deadline}</td>
                 <td className="w-[15%] h-[7vh] pl-6">{val.start_date}</td>
               <td className="w-[14%] h-[7vh]">{val.end_date}</td>
                  <td className="w-[14%] h-[7vh] pl-6">{val.requirement}</td>
                 <td className="w-[9%] h-[7vh] pl-8">{val.url}</td>
                 <td className="w-[9%] h-[7vh]">{val.status}</td>
                 <td className="w-[9%] h-[7vh]"><Button className="w-[90%] h-[6vh] rounded-md" >See action maps</Button></td>
                 <td className="w-[8%] h-[7vh] cursor-pointer pl-9"><img alt="edit-icon" src="/images/edit.png"  onClick={onClick2}/></td>
                    <td className="w-[14%] h-[7vh] cursor-pointer"><img alt="delete-icon" src="/images/delete.png"/></td>

               </tr>)}
             </tbody>
           
             
           
         
           </table>
           </div>
         
         </div>
         </div>
    )
}