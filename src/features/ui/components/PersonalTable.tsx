import moment from "moment"
import { useEffect ,memo} from "react";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";


interface PersonalTable {
  tableCheck: () => void;
  title1: string;
  title2: string;
  adminData: {}[];
  activityData: {}[];
}

export function PersonalTable ({
  tableCheck,
  adminData,
  title1,
  title2,
  activityData
}: PersonalTable) {

  const checkActivityData=()=>{

  
  }
  useEffect(()=>{
    checkActivityData()
  },[])


  return (
    <>
      
      <div className="-mt-44 h-screen w-[90%] rounded-md bg-white">
        <div>
          <div
            className={`flex h-[10vh] w-[45%] items-center justify-around ${
              title1 ==`Essai Admin Details` ? `ml-[3%]` : `ml-[6%]`
            }`}
          >
            <div
              className="rounded-l-2 flex h-[5vh] w-[50px] cursor-pointer items-center justify-center shadow-lg"
              onClick={()=>tableCheck(null)}
            >
              <img alt="back-icon" src="/images/backArrow.png" />
            </div>
            <h1 className="ml-3 text-3xl font-bold">{title1}</h1>
          </div>
          <div
            className={`z-0 mt-6 flex h-[6vh] w-[100%] items-center pl-[7%]`}
          >
            <div className="flex h-[6vh] w-[65%] items-center rounded-md bg-gray-50 pl-4">
              <input
                className="h-[6vh] w-[90%] bg-gray-50 bg-white pl-7 placeholder-gray-600 outline-none"
                name="search"
                placeholder="Search the staff member here"
                type="text"
              />

              <img
                alt="search-icon"
                className="ml-8 h-[3.5vh] w-[1.5vw]"
                src="/images/searchBlue.png"
              />
            </div>
          </div>

          <h1 className="mt-8 ml-20 text-xl font-bold text-[#5F5F5F] ">
            {title2} : {activityData && activityData[0]?.username}
          </h1>

          {/* <div className="bg-[#3AB0FB52] h-[6vh] w-[87%] mt-10 mx-auto rounded-md text-[#5F5F5F] font-medium text-[1rem] flex justify-around items-center">
          <p>Student name</p>
          <p>Activities in AEP</p>
          <p>Last update</p>
          <p>Completion status</p>
            
        </div> */}

          <div
            className={`${
             activityData && activityData?.length > 10 ? `h-[60vh]` : `h-auto`
            } mt-8 overflow-y-scroll`}
          >
            
            <table className="relative left-2 mx-auto -mt-1 w-[88%] break-all border-solid bg-gray-50 text-center font-sans  text-[0.9rem] font-bold text-[#344054]">
              <tbody className="overflow">
                <tr className="sticky top-0 mx-auto h-[7vh] w-full bg-blue-200  text-center text-[1rem] font-medium opacity-[1]">
                  <td className="rounded-bl-lg rounded-tl-lg">Student name</td>
                  <td className="">Activities in AEP</td>
                  <td className="">Last Update</td>

                  <td className="rounded-br-lg rounded-tr-lg">
                    Completion status
                  </td>
                </tr>
                <tr className="sticky top-[7vh] h-[4vh] bg-white">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

                {activityData && activityData.map((val, index) => (
                  <tr key={index} className="border-b-[1.5px] border-gray-50 border-b-[#EDEDED]">
                    <td className="h-[6vh] w-[25%]">{val && val?.username}</td>
                    <td className="h-[6vh] w-[25%]">{val && val?.activity_count}</td>
                    <td className="h-[6vh] w-[25%]">{moment(val && val?.last_update).format("YYYY-MM-DD")}</td>
                    <td className="h-[6vh] w-[25%]">
                      <div className="flex items-center justify-center text-[#3AB0FB]">
                        <span>45%</span>
                        <div className="ml-3 h-[2vh] w-[35%] rounded-full bg-gray-200 dark:bg-gray-700">
                          <div className="h-[2vh] w-[45%] rounded-full bg-[#3AB0FB] p-0.5 text-center text-xs font-medium leading-none text-blue-100"></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
      </div>

    </>
  );
}
