interface StatusTableFormProps {
  statusData: {}[];
  onClick: () => void;
  name: string;
}

export function StatusTableForm({
  statusData,
  onClick,
  name,
}: StatusTableFormProps) {
  return (
    <div className="mt-10 h-[90vh] w-[70%] rounded-lg border-2 bg-white pb-10">
      <div className="ml-20 flex h-[10vh] w-[55%] items-center justify-around">
        <div
          className="rounded-l-2 flex h-[5vh] w-[50px] cursor-pointer items-center justify-center shadow-lg"
          onClick={onClick}
        >
          <img alt="back-icon" src="/images/backArrow.png" />
        </div>
        <h1 className="ml-[8.5%] text-3xl font-bold text-cyan-500">
          AEP implementation status table
        </h1>
      </div>

      <h1 className="ml-[19%] mt-5 text-[1.5rem] font-bold text-[#6F6F6F]">
        Student: {name}
      </h1>

      <div className="mx-auto mt-10 flex h-[6vh] w-[100%] items-center justify-around rounded-md bg-[#3AB0FB52] pr-4 text-[0.7rem] font-medium text-[#5F5F5F]">
        <p className="relative right-[0.4%]">Activity name</p>
        <p className="relative right-[0.8%]">Type</p>
        <p className="relative lg:right-[1.3%] xl:right-[1.6%] 2xl:right-[2.5%]">
          Subject
        </p>
        <p className="relative lg:right-[1%] xl:right-[1.2%] 2xl:right-[2.5%]">
          Action Map
        </p>
        <p className="relative left-[0.5%]">Target date for the steps</p>
        <p>Complete</p>

        <p>Remarks</p>
      </div>

      <div className="mt-4 h-[40vh] overflow-y-scroll">
        <table className="relative mx-auto -mt-1 w-[100%] break-all border-solid font-sans text-[0.7rem]   font-medium text-[#344054]">
          <tbody className="overflow">
            {statusData.map((item, index) => (
              <tr key={index} className="h-[6vh]">
                <td className="w-[5.3%] text-center">{item.name}</td>
                <td className=" w-[5%] text-center">{item.type}</td>
                <td className="w-[3%] text-center">{item.subject}</td>
                <td className="w-[8%] text-center">{item.action}</td>
                <td className="w-[7%] text-center">{item.date}</td>

                <td className="w-[5%] pl-1">
                  {" "}
                  <label className="text mt-2 block w-[100%] font-bold text-gray-500">
                    <input
                      className="mx-auto block h-[5vh] w-[50%] leading-tight"
                      id="complete-task"
                      name="complete"
                      type="checkbox"
                    />
                  </label>
                </td>
                <td className="w-[5%] text-center">
                  <input
                    className="h-[4vh] w-[80%] rounded-lg bg-blue-300 text-white hover:bg-blue-500"
                    name="remarks"
                    type="text"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
