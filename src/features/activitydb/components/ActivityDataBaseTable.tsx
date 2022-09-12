import { Button } from "@/shared/components"



interface ActivityDataBaseTableProps{
  activityData: {}[];
  onClick:()=>void
}

  

export function ActivityDataBaseTable({activityData,onClick}: ActivityDataBaseTableProps){


 

    return (

        <div className="w-[90%] h-screen rounded-md bg-white -mt-44">
       
           <div>
            <h1 className="text-black font-bold text-4xl font-sans ml-[3%] relative z-0">Essai Activity Database</h1>
            <div className="w-[100%] h-[6vh] flex items-center justify-around mt-6 z-0 relative right-[1.3%]">
              <div className="w-[76%] h-[6vh] flex items-center rounded-md pl-4 bg-gray-50">
                <input className="w-[90%] h-[6vh] bg-gray-50 pl-7 placeholder-gray-600 bg-white outline-none" name="search" placeholder="Search the staff member here"  type="text"/>
               
                <img alt="search-icon" className="ml-8 w-[1.5vw] h-[3.5vh]" src="/images/searchBlue.png" />
               
              </div>
              <button className="bg-cyan-500 rounded-md w-[7%] h-[6vh] xl:text-[0.8rem] 2xl:text-[1rem] text-center flex justify-center items-center text-white hover:bg-blue-600">Add&nbsp; <img alt="plus-icon" src="/images/plus.png" /> </button>
            </div>

            {/* <div className="bg-[#3AB0FB52] h-[6vh] w-[93%] mt-10 mx-auto rounded-md text-[#5F5F5F] font-medium text-[1rem] flex justify-around items-center">
              <p>Activity name</p>
              <p>Type</p>
              <p>Subject</p>
              <p>Activity Country</p>
              <p>Registration Open Date</p>
              <p>Application Deadline</p>
              <p>Activity Start Date</p>
              <p>Activity End Date</p>
                
            </div> */}


            
            <div  className={`${activityData.length>10 ?`h-[60vh]`: `h-auto`} overflow-y-scroll mt-8`}>
              <table className="border-solid w-[95%] text-center mx-auto relative left-2 font-sans font-bold text-[0.9rem] -mt-1  bg-gray-50 text-[#344054] break-all">
              <tbody className="overflow">
              <tr className="text-center w-full font-bold  xl:text-[0.7rem]  2xl:text-[0.85rem] mx-auto h-[7vh]  bg-blue-200 opacity-[1] sticky top-0">
                   
                   <td className="rounded-bl-lg rounded-tl-lg">Activity name</td>
                   <td className="">Type</td>
                   <td className="">Subject</td>
                   <td className="">Activity Country</td>
                   <td className="">Registration Open Date</td>
                   <td className="">Application Deadline</td>
                   <td className="">Activity Start Date</td>
                   <td className="rounded-br-lg rounded-tr-lg">Activity End Date</td>
                 
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
                </tr>
               
                  {activityData.map((val,index)=><tr className="border-b-[1.5px] border-b-[#EDEDED] border-gray-50">
                  <td className="h-[7vh] cursor-pointer" onClick={onClick}>{val.name}</td>
                    <td className="h-[7vh]">{val.type}</td>
                    <td className="h-[7vh]">{val.subject}</td>
                     <td className="h-[7vh]">{val.country}</td>
                    <td className="h-[7vh]">{val.register_date}</td>
                    <td className="h-[7vh]">{val.application_date}</td>
                    <td className="h-[7vh]">{val.start_date}</td>
                    <td className="h-[7vh]">{val.end_date}</td>

                  </tr>)}
                </tbody>
              
                
              
            
              </table>
              </div>
            
            </div>
            </div>
            
            
    )
}