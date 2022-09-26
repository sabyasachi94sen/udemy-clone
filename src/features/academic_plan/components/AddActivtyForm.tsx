import { useState } from "react";

import { Button, SelectDynamic } from "@/shared/components";

interface AddActivityFormProps {
  onClick1: () => void;
  onClick2: () => void;
  activeData: {}[];
}

export function AddActivityForm({
  onClick1,
  onClick2,
  activeData,
}: AddActivityFormProps) {
  const [storeActivityData, setStoreActivityData] = useState({
    type: "",
    subject: "",
  });
  const [activityTableData, setActivityTableData] = useState([]);
  const [count, setCount] = useState(0);

  const submitActivity = () => {
    const tempArr = activityTableData;

    tempArr.push(storeActivityData);
    setActivityTableData(tempArr);
    setCount(count + 1);
  };

  const setDataOnChange = (e) => {
    setStoreActivityData({
      ...storeActivityData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="">
      {/* <div className="items-centers justify-arounds flex h-[10vh] w-[80%]">
        <div
          className="rounded-l-2 flex h-[5vh] w-[50px] cursor-pointer items-center justify-center shadow-lg"
          onClick={onClick2}
        >
          <img alt="back-icon" src="/images/backArrow.png" />
        </div>
        <h1 className="ml-3 text-3xl font-bold text-cyan-500">
          Add activity to Academic Enrichment Plan (Student)
        </h1>

      </div> */}

      <div className="flex w-full items-end justify-between">
        <div className="flex gap-6">
          <div className="w-72">
            <SelectDynamic
              label="Active Status"
              options={[{ value: "Exam", label: "Exam" }]}
              onChange={() => {}}
            />
          </div>
          <div className="w-72">
            <SelectDynamic
              label="Activity Subject"
              options={[
                { value: "Maths", label: "Maths" },
                { value: "Physics", label: "Physics" },
              ]}
              onChange={() => {}}
            />
          </div>
          {/* <span className="text-md font-bold">Active Status</span>
          <select
            className="relative left-3 h-[5vh] w-[60%] rounded-md bg-[#EEEE] outline-none"
            name="type"
            onChange={setDataOnChange}
          >
            <option> Select Type</option>
            <option>Exam</option>
          </select> */}
        </div>

        {/* <div className="w-[70%]">
          <span className="text-md font-bold">Activity Subject</span>
          <select
            className="relative left-3 h-[5vh] w-[60%] rounded-md bg-[#EEEE] outline-none"
            name="subject"
            onChange={setDataOnChange}
          >
            <option> Select Subject</option>
            <option>Maths</option>
            <option>Physics</option>
          </select>
        </div> */}
        <Button width="max">Submit</Button>
      </div>
      {/* <button
        className="mx-auto mt-4 block h-[6vh] w-[15%] rounded-lg bg-cyan-500 text-white"
        onClick={submitActivity}
      >
        Submit
      </button> */}

      <div className="mt-4 flex min-w-full flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-scroll border-b border-gray-200 shadow sm:rounded-lg">
              <table className="w-max min-w-full divide-y divide-gray-200 overflow-scroll">
                <thead className="overflow-x-scroll bg-gray-50">
                  <tr>
                    <th
                      className="w-max px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                      scope="col"
                    >
                      Activity name
                    </th>
                    <th
                      className="w-max px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                      scope="col"
                    >
                      Type
                    </th>
                    <th
                      className="w-max px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                      scope="col"
                    >
                      Subject
                    </th>
                    <th
                      className="w-max px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                      scope="col"
                    >
                      Country of activity
                    </th>
                    <th
                      className="w-max px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                      scope="col"
                    >
                      Application requirments
                    </th>
                    <th
                      className=" w-max px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                      scope="col"
                    >
                      Application deadline
                    </th>
                    <th
                      className="w-max px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                      scope="col"
                    >
                      Activity start date
                    </th>
                    <th
                      className=" w-max px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                      scope="col"
                    >
                      Remarks
                    </th>
                    <th
                      className="w-max px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                      scope="col"
                    >
                      Add to AEP
                    </th>
                  </tr>
                </thead>
                <tbody />
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* // <div className="mt-4 h-[40vh] overflow-y-scroll">
      //   <table className="relative mx-auto -mt-1 w-[100%] break-all border-solid font-sans text-[0.7rem]   font-medium text-[#344054]">
      //     <tbody className="overflow">
      //       {activityTableData.map((item, index) => (
      //         <tr key={index} className="h-[6vh]">
      //           <td className="w-[5.3%] text-center">{item.subject} Exam</td>
      //           <td className=" w-[5%] text-center">{item.type}</td>
      //           <td className="w-[3%] text-center">{item.subject}</td>
      //           <td className="w-[8%] text-center">Agra,India</td>
      //           <td className="w-[7%] text-center">Fee,form</td>
      //           <td className="w-[8%] text-center">20/01/2022</td>
      //           <td className="w-[7%] text-center">21/02/2022</td>
      //           <td className="w-[5%] pl-1">
      //             <input
      //               className="mx-auto h-[4vh] w-full break-all rounded-md bg-cyan-300"
      //               name="remarks"
      //               type="text"
      //             />
      //           </td>
      //           <td className="w-[5%] text-center">
      //             <button
      //               className="h-[4vh] w-[80%] rounded-lg bg-[#3AB0FB] text-white hover:bg-blue-500"
      //               onClick={() => onClick1(activityTableData, index)}
      //             >
      //               Add
      //             </button>
      //           </td>
      //         </tr>
      //       ))}
      //     </tbody>
      //   </table>
      // </div> */}
    </div>
  );
}
