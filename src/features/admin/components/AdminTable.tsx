import moment from "moment"
import { SyntheticEvent, useEffect, useState } from "react";

interface AdminTableProps {
  handleAddBlur: () => void;
  handleEditBlur: () => void;
  handleDeleteBlur: () => void;
  tableCheck: () => void;
  adminData: {}[];
  name: string;
}

export function AdminTable({
  handleAddBlur,
  handleEditBlur,
  handleDeleteBlur,
  tableCheck,
  adminData,
  name,
}: AdminTableProps) {


  const [storeAdminData,setStoreAdminData]=useState([])
  const searchStaff=(e:SyntheticEvent)=>{
     const staffName=e.target.value;
      const filterStaff=adminData.filter((item) => {
        if(item.username.includes(staffName))
        return item;
      })
      

      setStoreAdminData(filterStaff)
  }
    
  useEffect(()=>{
      setStoreAdminData(adminData)
  },[adminData])


  return (
    <div className="-mt-44 h-screen w-[90%] rounded-md bg-white">
      <div>
        <h1 className="relative z-0 ml-[6.5%] font-sans text-4xl font-bold text-black">
          {name}
        </h1>
        <div className="z-0 mt-6 flex h-[6vh] w-[100%] items-center justify-around">
          <div className="relative right-[0.5%] flex h-[6vh] w-[65%] items-center rounded-md bg-gray-50 pl-4">
            <input
              className="h-[6vh] w-[90%] bg-gray-50  bg-white placeholder-gray-600 outline-none"
              name="search"
              placeholder="Search the staff member here"
              type="text"
              onChange={searchStaff}
            />

            <img
              alt="search-icon"
              className="ml-8 h-[3.5vh] w-[1.5vw]"
              src="/images/searchBlue.png"
            />
          </div>
          <button
            className="flex h-[6vh] w-[7%] items-center justify-center rounded-md bg-cyan-500 text-center text-white hover:bg-blue-600 xl:text-[0.8rem] 2xl:text-[1rem]"
            onClick={handleAddBlur}
          >
            Add&nbsp; <img alt="plus-icon" src="/images/plus.png" />{" "}
          </button>
        </div>

        {/* <div className="bg-[#3AB0FB52] h-[6vh] w-[87%] mt-10 mx-auto rounded-md text-[#5F5F5F] font-medium text-[1rem] flex justify-around items-center">
              <p>Name</p>
              <p>Email</p>
              <p className="relative left-4">Last Update</p>
              <p>Active status</p>
              <p>Students</p>
              <p>Performance</p>
              <p className="relative left-2">Edit</p>
              <p>Delete</p>
                
            </div> */}

        <div
          className={`${
            storeAdminData && storeAdminData?.length > 10 ? `h-[60vh]` : `h-auto`
          } mt-8 overflow-y-scroll`}
        >
          <table className="relative left-2 mx-auto -mt-1 w-[88%] break-all border-solid text-center font-sans text-[0.9rem]   font-bold text-[#344054]">
            <tbody className="overflow bg-white">
              <tr className="sticky top-0 mx-auto h-[7vh] w-full bg-blue-200  text-center text-[1rem] font-medium opacity-[1]">
                <td className="rounded-bl-lg rounded-tl-lg"> Name</td>
                <td className="">Email</td>
                <td className="">Last update</td>
                <td className="">Active Status</td>
                {name != "Essai Super Admin Roster" ? (
                  <>
                    <td className="">Students</td>
                    <td className=""> Performance</td>
                  </>
                ) : (
                  null
                )}
                <td className="">Edit</td>
                <td className="rounded-br-lg rounded-tr-lg">Delete</td>
              </tr>
              <tr className="sticky top-[7vh] h-[4vh] bg-white">
                <td />
                <td />
                <td />
                <td />
                {name != "Essai Super Admin Roster" ? (
                  <>
                    <td />
                    <td />
                  </>
                ) : (
                  null
                )}

                <td />
                <td />
              </tr>

              {storeAdminData &&
                storeAdminData.map((val, index) => (
                  <tr
                    key={index}
                    className="border-b-[1.5px] border-gray-50 border-b-[#EDEDED] bg-gray-50"
                  >
                    <td
                      className={`h-[7vh] ${
                        name == `Essai Super Admin Roster`
                          ? ``
                          : `cursor-pointer hover:underline`
                      } `}
                      onClick={()=>tableCheck(val && val?.id)}
                    >
                      {val && val?.username}
                    </td>
                    <td className="h-[7vh]">{val && val?.email}</td>
                    <td className="h-[7vh]">{val && val?.last_update?moment(val && val?.last_update).format("YYYY-MM-DD"): null}</td>
                    {val && val?.is_active ? (
                      <td className="h-[7vh] text-[#20A464]">Active</td>
                    ) : (
                      <td className="h-[7vh]">Inactive</td>
                    )}

                    {name != "Essai Super Admin Roster" ? (
                      <>
                        <td className="h-[7vh]">{Math.floor(Math.random()*5)}</td>
                        <td className="h-[7vh]">Metrics</td>
                      </>
                    ) : (
                      null
                    )}

                    <td className="h-[7vh] cursor-pointer">
                      <img
                        alt="edit-icon"
                        className="mx-auto block"
                        src="/images/edit.png"
                        onClick={() => handleEditBlur(val && val?.id,val)}
                      />
                    </td>
                    <td className="h-[7vh] cursor-pointer">
                      <img
                        alt="delete-icon"
                        className="mx-auto block"
                        src="/images/delete.png"
                        onClick={() => handleDeleteBlur(val && val?.id)}
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

// comment
