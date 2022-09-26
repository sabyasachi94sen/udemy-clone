import { HiSearch } from "react-icons/hi";

import { Input } from "@/shared/components";

interface AcademicTableProps {
  academicData: {}[];
  onClick1: () => void;
}

export function AcademicTable({ academicData }: AcademicTableProps) {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="font-sans text-3xl font-bold">
            Essai Academic Enrichment Plan Summary
          </h1>
          <div className="mt-8">
            <Input
              leftAddOn={<HiSearch />}
              placeholder="Search the staff member here"
            />
          </div>
        </div>
        {/* <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            type="button"
          >

          </button>
        </div> */}
      </div>
      <div className="mt-4 flex w-full flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                      scope="col"
                    >
                      Name
                    </th>
                    <th
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                      scope="col"
                    >
                      Date of Birth
                    </th>
                    <th
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                      scope="col"
                    >
                      Country of residence
                    </th>
                    <th
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                      scope="col"
                    >
                      Account manager
                    </th>
                    <th
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                      scope="col"
                    >
                      Active Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {academicData.map((person, personIdx) => (
                    <tr
                      key={person.name}
                      className={
                        personIdx % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }
                    >
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {person.dob}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {person.country}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {person.manager}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                          {person.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export function AcademicTable({ academicData, onClick1 }: AcademicTableProps) {
//   return (
//     <div className="h-screen w-[90%] rounded-md">
//       <div>
//         <h1 className="font-sans text-4xl font-bold">
//           Essai Academic Enrichment Plan Summary
//         </h1>
//         <div className="z-0 mt-6 h-[6vh] w-[80%]">
//           <div className="">
//             <Input
//               leftAddOn={<HiSearch />}
//               placeholder="Search the staff member here"
//             />
//           </div>
//         </div>

//         {/*
//         <div className="bg-[#3AB0FB52] h-[6vh] w-[87%] mt-10 mx-auto rounded-md text-[#5F5F5F] font-medium text-[1rem] flex justify-around items-center">
//           <p>Name</p>
//           <p>Date of Birth</p>
//           <p>Country of Residence</p>
//           <p>Account Manager</p>
//           <p>Active Status</p>

//         </div> */}

//         <div
//           className={`${
//             academicData.length > 10 ? `h-[60vh]` : `h-auto`
//           } mt-8 min-w-full overflow-y-scroll`}
//         >
//           <table className="-mt-1 break-all border-solid text-center font-sans text-[0.9rem]   font-bold text-[#344054]">
//             <tbody className="overflow">
//               <tr className="sticky top-0 mx-auto h-[7vh] w-full bg-blue-200  text-center text-[1rem] font-medium">
//                 <td className="rounded-tr-md rounded-tl-md">Name</td>
//                 <td className="">Date of Birth</td>
//                 <td className="">Country of residence</td>
//                 <td className="">Account manager</td>
//                 <td className="">Active Status</td>
//               </tr>
//               {/* <tr className="sticky top-[7vh] h-[3vh] bg-white">
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//               </tr> */}

//               {academicData.map((val, index) => (
//                 <tr className="border-b-[1.5px] border-gray-50 border-b-[#EDEDED] bg-gray-50">
//                   <td
//                     className="h-[7vh] cursor-pointer text-center"
//                     onClick={onClick1}
//                   >
//                     {val.name}
//                   </td>
//                   <td className="h-[7vh]">{val.dob}</td>
//                   <td className="h-[7vh]">{val.country}</td>
//                   <td className="h-[7vh] text-center">{val.manager}</td>

//                   {val.status == "Active" ? (
//                     <td className="h-[7vh]  text-center text-[#20A464]">
//                       {val.status}
//                     </td>
//                   ) : (
//                     <td className="h-[7vh] text-center">{val.status}</td>
//                   )}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }
