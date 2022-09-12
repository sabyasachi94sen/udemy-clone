import { Button } from "@/shared/components"

interface ActivityDataBasePersonalTableProps{
    activityData : {}[];
    onClick1: ()=>void;
    onClick2: ()=>void;
    onClick3: ()=>void
}

export function ActivityDataBasePersonalTable({activityData,onClick1,onClick2,onClick3}: ActivityDataBasePersonalTableProps){

    return (
        <div className="w-[90%] h-screen rounded-md bg-white -mt-44">
       
        <div>
         <h1 className="text-black font-bold text-4xl font-sans ml-24 relative right-12 z-0">Essai Activity Database</h1>
         <div className="w-[100%] h-[6vh] flex items-center justify-around mt-6 z-0">
           <div className="w-[76%] h-[6vh] flex items-center rounded-md pl-4 bg-gray-50">
             <input className="w-[90%] h-[6vh] bg-gray-50 pl-7 placeholder-gray-600 bg-white outline-none" name="search" placeholder="Search the staff member here"  type="text"/>
            
             <img alt="search-icon" className="ml-8 w-[1.5vw] h-[3.5vh]" src="/images/searchBlue.png" />
            
           </div>
           <button className="bg-cyan-500 rounded-md w-[7%] h-[6vh] text-[18px] text-center flex justify-center items-center text-white hover:bg-blue-600" onClick={onClick1}>Add&nbsp; <img alt="plus-icon" src="/images/plus.png" /> </button>
         </div>

         {/* <div className="bg-[#3AB0FB52] h-[6vh] w-[93%] mt-10 mx-auto rounded-md text-[#5F5F5F] font-medium text-[1rem] flex justify-around items-center">
           <p>Application Deadline</p>
           <p>Activity Start Date</p>
           <p>Activity End Date</p>
           <p>Application requirements</p>
           <p>URL</p>
           <p>Active Status</p>
           <p>See action map</p>
           <p>Edit</p>
           <p>Delete</p>
             
         </div> */}

         
         <div className={`${activityData.length>10 ?`h-[60vh]`: `h-auto`} overflow-y-scroll mt-8`}>
           <table className="border-solid w-[95%] text-center mx-auto relative left-2 font-sans font-bold text-[0.9rem] -mt-1  bg-gray-50 text-[#344054] break-all">
       
           <tbody className="overflow">
              <tr className="text-center w-full font-bold  xl:text-[0.65rem]  2xl:text-[0.8rem] mx-auto h-[7vh]  bg-blue-200 opacity-[1] sticky top-0">
                   
                   <td className="rounded-bl-lg rounded-tl-lg">Application Deadline</td>
                   <td className="">Activity Start Date</td>
                   <td className="">Activity End Date</td>
                   <td className="">Application requirements</td>
                   <td className="">URL</td>
                   <td className="">Active Status</td>
                   <td className="">See action map</td>
                   <td className="">Edit</td>
                   <td className="rounded-br-lg rounded-tr-lg">Delete</td>
                 
               </tr>
               <tr className="bg-white h-[4vh] sticky top-[7vh]">
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
               
            
               {activityData.map((val,index)=><tr className="border-b-[1.5px] border-b-[#EDEDED] border-gray-50">
               <td className="h-[7vh]">{val.deadline}</td>
                 <td className="h-[7vh]">{val.start_date}</td>
               <td className="h-[7vh]">{val.end_date}</td>
                  <td className="h-[7vh]">{val.requirement}</td>
                 <td className="h-[7vh]">{val.url}</td>
                 <td className="h-[7vh]">{val.status}</td>
                 <td className="h-[7vh]"><Button className="w-[90%] h-[6vh] rounded-md 2xl:text-[0.8rem] xl:text-[0.6rem]" onClick={onClick3}>See action maps</Button></td>
                 <td className="h-[7vh] cursor-pointer"><img className="mx-auto" alt="edit-icon" src="/images/edit.png"  onClick={onClick2}/></td>
                    <td className="h-[7vh] cursor-pointer"><img className="mx-auto" alt="delete-icon" src="/images/delete.png"/></td>

               </tr>)}
             </tbody>
           
             
           
         
           </table>
           </div>
         
         </div>
         </div>
    )
}