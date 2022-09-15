

interface ActivityDataBaseTableProps {
  activityData: {}[];
  onClick: () => void;
}

export function ActivityDataBaseTable({
  activityData,
  onClick,
}: ActivityDataBaseTableProps) {
  return (
    <div className="-mt-44 h-screen w-[90%] rounded-md bg-white">
      <div>
        <h1 className="relative z-0 ml-[3%] font-sans text-4xl font-bold text-black">
          Essai Activity Database
        </h1>
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
          <button className="flex h-[6vh] w-[7%] items-center justify-center rounded-md bg-cyan-500 text-center text-white hover:bg-blue-600 xl:text-[0.8rem] 2xl:text-[1rem]">
            Add&nbsp; <img alt="plus-icon" src="/images/plus.png" />{" "}
          </button>
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

        <div
          className={`${
            activityData.length > 10 ? `h-[60vh]` : `h-auto`
          } mt-8 overflow-y-scroll`}
        >
          <table className="relative left-2 mx-auto -mt-1 w-[95%] break-all border-solid bg-gray-50 text-center font-sans  text-[0.9rem] font-bold text-[#344054]">
            <tbody className="overflow">
              <tr className="sticky top-0 mx-auto  h-[7vh]  w-full bg-blue-200 text-center font-bold opacity-[1] xl:text-[0.7rem] 2xl:text-[0.85rem]">
                <td className="rounded-bl-lg rounded-tl-lg">Activity name</td>
                <td className="">Type</td>
                <td className="">Subject</td>
                <td className="">Activity Country</td>
                <td className="">Registration Open Date</td>
                <td className="">Application Deadline</td>
                <td className="">Activity Start Date</td>
                <td className="rounded-br-lg rounded-tr-lg">
                  Activity End Date
                </td>
              </tr>
              <tr className="sticky top-[7vh] h-[4vh] bg-white">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              {activityData.map((val, index) => (
                <tr key={index} className="border-b-[1.5px] border-gray-50 border-b-[#EDEDED]">
                  <td className="h-[7vh] cursor-pointer" onClick={onClick}>
                    {val.name}
                  </td>
                  <td className="h-[7vh]">{val.type}</td>
                  <td className="h-[7vh]">{val.subject}</td>
                  <td className="h-[7vh]">{val.country}</td>
                  <td className="h-[7vh]">{val.register_date}</td>
                  <td className="h-[7vh]">{val.application_date}</td>
                  <td className="h-[7vh]">{val.start_date}</td>
                  <td className="h-[7vh]">{val.end_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
