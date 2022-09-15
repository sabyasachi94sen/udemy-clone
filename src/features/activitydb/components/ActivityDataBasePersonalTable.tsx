import { Button } from "@/shared/components";

interface ActivityDataBasePersonalTableProps {
  activityData: {}[];
  onClick1: () => void;
  onClick2: () => void;
  onClick3: () => void;
  onClick4: ()=> void;
  onClick5: ()=>void;
}

export function ActivityDataBasePersonalTable({
  activityData,
  onClick1,
  onClick2,
  onClick3,
  onClick4,
  onClick5,
}: ActivityDataBasePersonalTableProps) {
  return (
    <div className="-mt-44 h-screen w-[90%] rounded-md bg-white">
      <div>
        <div className={`w-[45%] h-[10vh] flex justify-around items-center`}>
          <div className="w-[50px] shadow-lg rounded-l-2 h-[5vh] flex items-center justify-center cursor-pointer" onClick={onClick5}>
            <img alt="back-icon" src="/images/backArrow.png"/>
          </div>
          <h1 className="text-3xl font-bold ml-3">Essai Activity Database</h1>
        </div>
       
     
        
        <div className="relative right-[1.3%] z-0 mt-6 flex h-[6vh] w-[100%] items-center justify-around">
          <div className="flex h-[6vh] w-[76%] items-center rounded-md bg-gray-50 pl-4">
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
          <button
            className="flex h-[6vh] w-[7%] items-center justify-center rounded-md bg-cyan-500 text-center text-[18px] text-white hover:bg-blue-600"
            onClick={onClick1}
          >
            Add&nbsp; <img alt="plus-icon" src="/images/plus.png" />{" "}
          </button>
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

        <div
          className={`${
            activityData.length > 10 ? `h-[60vh]` : `h-auto`
          } mt-8 overflow-y-scroll`}
        >
          <table className="relative left-2 mx-auto -mt-1 w-[95%] break-all border-solid bg-gray-50 text-center font-sans  text-[0.9rem] font-bold text-[#344054]">
            <tbody className="overflow">
              <tr className="sticky top-0 mx-auto  h-[7vh]  w-full bg-blue-200 text-center  font-bold opacity-[1] xl:text-[0.65rem] 2xl:text-[0.8rem]">
                <td className="rounded-bl-lg rounded-tl-lg">
                  Application Deadline
                </td>
                <td className="">Activity Start Date</td>
                <td className="">Activity End Date</td>
                <td className="">Application requirements</td>
                <td className="">URL</td>
                <td className="">Active Status</td>
                <td className="">See action map</td>
                <td className="">Edit</td>
                <td className="rounded-br-lg rounded-tr-lg">Delete</td>
              </tr>
              <tr className="sticky top-[7vh] h-[4vh] bg-white">
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>

              {activityData.map((val, index) => (
                <tr key={index} className="border-b-[1.5px] border-gray-50 border-b-[#EDEDED]">
                  <td className="h-[7vh]">{val.deadline}</td>
                  <td className="h-[7vh]">{val.start_date}</td>
                  <td className="h-[7vh]">{val.end_date}</td>
                  <td className="h-[7vh]">{val.requirement}</td>
                  <td className="h-[7vh]">{val.url}</td>
                  <td className="h-[7vh]">{val.status}</td>
                  <td className="h-[7vh]">
                    <Button
                      className="h-[6vh] w-[90%] rounded-md xl:text-[0.6rem] 2xl:text-[0.8rem]"
                      onClick={onClick3}
                    >
                      See action maps
                    </Button>
                  </td>
                  <td className="h-[7vh] cursor-pointer">
                    <img
                      alt="edit-icon"
                      className="mx-auto"
                      src="/images/edit.png"
                      onClick={onClick2}
                    />
                  </td>
                  <td className="h-[7vh] cursor-pointer">
                    <img
                      alt="delete-icon"
                      className="mx-auto"
                      src="/images/delete.png"
                      onClick={onClick4}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
