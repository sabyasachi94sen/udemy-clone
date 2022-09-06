import { Button } from "@/shared/components"



interface ActivityDataBaseTableProps{
  activityData: {}[];
  onClick:()=>void
}

  

export function ActivityDataBaseTable({activityData,onClick}: ActivityDataBaseTableProps){


 

    return (

        <div className="w-[90%] h-screen rounded-md bg-white -mt-44">
       
           <div>
            <h1 className="text-black font-bold text-4xl font-sans ml-24 relative right-12 z-0">Essai Activity Database</h1>
            <div className="w-[100%] h-[6vh] flex items-center justify-around mt-6 z-0">
              <div className="w-[76%] h-[6vh] flex items-center rounded-md pl-4 bg-gray-50">
                <input className="w-[90%] h-[6vh] bg-gray-50 pl-7 placeholder-gray-600 bg-white outline-none" name="search" placeholder="Search the staff member here"  type="text"/>
               
                <img alt="search-icon" className="ml-8 w-[1.5vw] h-[3.5vh]" src="/images/searchBlue.png" />
               
              </div>
              <Button className="bg-cyan-500 rounder-md w-[7%] h-[6vh] text-[18px]">Add&nbsp; <img alt="plus-icon" src="/images/plus.png" /> </Button>
            </div>

            <div className="bg-[#3AB0FB52] h-[6vh] w-[93%] mt-10 mx-auto rounded-md text-[#5F5F5F] font-medium text-[1rem] flex justify-around items-center">
              <p>Activity name</p>
              <p>Type</p>
              <p>Subject</p>
              <p>Activity Country</p>
              <p>Registration Open Date</p>
              <p>Application Deadline</p>
              <p>Activity Start Date</p>
              <p>Activity End Date</p>
                
            </div>

            
            <div  className={`${activityData.length>10 ?`h-[60vh]`: `h-auto`} overflow-y-scroll mt-4`}>
              <table className="border-solid w-[95%] mx-auto relative left-2 font-sans font-bold text-[0.9rem] -mt-1  bg-gray-50 text-[#344054] break-all">
          
                <tbody className="overflow">
                  {activityData.map((val,index)=><tr className="border-b-[1.5px] border-b-[#EDEDED] border-gray-50">
                  <td className="w-[7%] h-[7vh] cursor-pointer pl-7" onClick={onClick}>{val.name}</td>
                    <td className="w-[3%] h-[7vh] pl-2 ">{val.type}</td>
                    <td className="w-[6%] h-[7vh] pl-4">{val.subject}</td>
                     <td className="w-[7%] h-[7vh]">{val.country}</td>
                    <td className="w-[10%] h-[7vh] pl-5">{val.register_date}</td>
                    <td className="w-[7%] h-[7vh] pl-5">{val.application_date}</td>
                    <td className="w-[7%] h-[7vh] pl-12">{val.start_date}</td>
                    <td className="w-[10%] h-[7vh] pl-20">{val.end_date}</td>

                  </tr>)}
                </tbody>
              
                
              
            
              </table>
              </div>
            
            </div>
            </div>
            
            
    )
}