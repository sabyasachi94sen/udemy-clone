
import moment from "moment"

interface StatusTableFormProps{

    openStatusTable: ()=>void;
    assigned_activity: {}[];
    name: string
}



export function StatusTableForm({ openStatusTable,assigned_activity,name }: StatusTableFormProps){

  console.log(assigned_activity)

    return (
      <div className="w-[70%] h-[90vh] bg-white border-2 rounded-lg mt-10 pb-10">
        <div className="w-[55%] h-[10vh] flex justify-around items-center ml-20">
          <div className="w-[50px] shadow-lg rounded-l-2 h-[5vh] flex items-center justify-center cursor-pointer" onClick={openStatusTable}>
            <img alt="back-icon" src="/images/backArrow.png"/>
          </div>
          <h1 className="text-3xl font-bold ml-[8.5%] text-cyan-500">AEP implementation status table</h1>
        </div>
             

        <h1 className="text-[#6F6F6F] font-bold text-[1.5rem] ml-[19%] mt-5">Student: {name}</h1>

        <div className="bg-[#3AB0FB52] h-[6vh] w-[100%] mt-10 mx-auto rounded-md text-[#5F5F5F] font-medium text-[0.7rem] flex justify-around items-center pr-4">
          <p className="relative right-[0.4%]">Activity name</p>
          <p className="relative right-[0.8%]">Type</p>
          <p className="relative 2xl:right-[2.5%] xl:right-[1.6%] lg:right-[1.3%]">Subject</p>
          <p className="relative 2xl:right-[2.5%] xl:right-[1.2%] lg:right-[1%]">Action Map</p>
          <p className="relative left-[0.5%]">Target date for the steps</p>
          <p>Complete</p>
          
          <p>Remarks</p>

          
        </div>

        
        <div className="h-[40vh] mt-4 overflow-y-scroll">
          <table className="border-solid w-[100%] mx-auto relative font-sans font-medium text-[0.7rem] -mt-1   text-[#344054] break-all">
            <tbody className="overflow">
              {assigned_activity && assigned_activity.map((item,index)=><tr key={index} className="h-[6vh]">
                <td className="w-[5.3%] text-center">{item && item?.activity?.activity_name}</td>
                <td className=" w-[5%] text-center">{item && item?.activity?.activity_type}</td>
                <td className="w-[3%] text-center">{item && item?.activity?.subject}</td>
                <td className="w-[8%] text-center">{item && item?.activity_plan_assigned[0]?.action_map?.action}</td>
                <td className="w-[7%] text-center">{moment(item && item?.activity_plan_assigned[0]?.action_map?.created_at).add(item && item?.activity_plan_assigned[0]?.action_map?.deadline_days,"days").format("YYYY-MM-DD")}</td>
                  
                <td className="w-[5%] pl-1"> <label className="block text-gray-500 font-bold text w-[100%] mt-2" >
                  <input disabled className="leading-tight h-[5vh] w-[50%] mx-auto" defaultChecked={item && item?.activity_plan_assigned[0]?.is_completed} id="complete-task" name="complete" type="checkbox" />
  
                </label></td>
                <td className="w-[5%] text-center"><input  disabled className="w-[80%] h-[4vh] text-white bg-blue-300 rounded-lg" name="remarks" type="text" /></td>
              </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    )
}