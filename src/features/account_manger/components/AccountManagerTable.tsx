import { Button } from "@/shared/components";

interface AccountManagerTableProps {
  handleAddBlur: () => void;
  handleEditBlur: () => void;
  handleDeleteBlur: () => void;
  tableCheck: () => void;
  adminData: {}[];
  name: string;
}

export function AccountManagerTable({
  handleAddBlur,
  handleEditBlur,
  handleDeleteBlur,
  tableCheck,
  adminData,
  name,
}: AccountManagerTableProps) {
  return (
    <div className="relative -mt-44 h-screen w-[90%] rounded-md bg-white">
      <div>
        <h1 className="z-0 ml-[6.5%] font-sans text-4xl font-bold text-black">
          {name}
        </h1>
        <div className="relative right-[0.5%] z-0 mt-6 flex h-[6vh] w-[100%] items-center justify-around">
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
          <button
            className="flex h-[6vh] w-[7%] items-center justify-center rounded-md bg-cyan-500 text-center text-[18px] text-white hover:bg-blue-600"
            onClick={handleAddBlur}
          >
            Add&nbsp; <img alt="plus-icon" src="/images/plus.png" />{" "}
          </button>
        </div>

        {/* <div className="bg-[#3AB0FB52] h-[6vh] w-[87%] mt-10 mx-auto rounded-md text-[#5F5F5F] font-medium text-[1rem] flex justify-around items-center">
              <p>Name</p>
              
              <p>Last Update</p>
              <p>Active status</p>
              <p>Students</p>
              <p>Performance</p>
              <p>Edit</p>
              <p>Delete</p>
                
            </div> */}

        <div
          className={`${
            adminData.length > 10 ? `h-[60vh]` : `h-auto`
          } mt-8 overflow-y-scroll`}
        >
          <table className="relative left-2 mx-auto -mt-1 w-[88%]  break-all border-solid bg-gray-50 text-center font-sans  text-[0.9rem] font-bold text-[#344054]">
            <tbody className="overflow">
              <tr className="sticky top-0 mx-auto h-[7vh] w-full bg-blue-200  text-center text-[1rem] font-medium opacity-[1]">
                <td className="rounded-bl-lg rounded-tl-lg"> Name</td>
                <td className="">Last Update</td>
                <td className="">Active Status</td>
                <td className="">Students</td>
                <td className="">Performance</td>

                <td className="">Edit</td>
                <td className="rounded-br-lg rounded-tr-lg">Delete</td>
              </tr>
              <tr className="sticky top-[7vh] h-[4vh] bg-white">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              {adminData.map((val, index) => (
                <tr className="border-b-[1.5px] border-gray-50 border-b-[#EDEDED]">
                  <td
                    className="h-[7vh]  cursor-pointer hover:underline"
                    onClick={tableCheck}
                  >
                    {val.name}
                  </td>

                  <td className="h-[7vh]">{val.update}</td>
                  {val.status == "Active" ? (
                    <td className="h-[7vh] text-[#20A464]">{val.status}</td>
                  ) : (
                    <td className="h-[7vh]">{val.status}</td>
                  )}
                  <td className="h-[7vh]">{val.student}</td>
                  <td className="h-[7vh]">{val.performance}</td>
                  <td className="h-[7vh] cursor-pointer">
                    <img
                      className="mx-auto block"
                      alt="edit-icon"
                      src="/images/edit.png"
                      onClick={() => handleEditBlur(index)}
                    />
                  </td>
                  <td className="h-[7vh] cursor-pointer">
                    <img
                      className="mx-auto block"
                      alt="delete-icon"
                      src="/images/delete.png"
                      onClick={() => handleDeleteBlur(index)}
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
