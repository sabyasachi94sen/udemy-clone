interface AcademicTableProps {
  academicData: {}[];
  setTable: () => void;
}

export function AcademicTable({ academicData, setTable }: AcademicTableProps) {
  return (
    <div className="-mt-44 h-screen w-[90%] rounded-md">
      <div>
        <h1 className="relative right-4 z-0 ml-24 font-sans text-4xl font-bold text-black">
          Essai Academic Enrichment Plan Summary
        </h1>
        <div className="z-0 mt-6 ml-20 h-[6vh] w-[80%]">
          <div className="flex h-[6vh] w-[90%] items-center rounded-md bg-gray-50 pl-4">
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

        {/*
        <div className="bg-[#3AB0FB52] h-[6vh] w-[87%] mt-10 mx-auto rounded-md text-[#5F5F5F] font-medium text-[1rem] flex justify-around items-center">
          <p>Name</p>
          <p>Date of Birth</p>
          <p>Country of Residence</p>
          <p>Account Manager</p>
          <p>Active Status</p>

        </div> */}

        <div
          className={`${
            academicData && academicData?.length > 10 ? `h-[60vh]` : `h-auto`
          } mt-8 overflow-y-scroll`}
        >
          <table className="relative left-2 mx-auto -mt-1 w-[88%] break-all border-solid text-center font-sans text-[0.9rem]   font-bold text-[#344054]">
            <tbody className="overflow">
              <tr className="sticky top-0 mx-auto h-[7vh] w-full bg-blue-200  text-center text-[1rem] font-medium">
                <td className="rounded-bl-md rounded-tl-md">Name</td>
                <td className="">Date of Birth</td>
                <td className="">Country of residence</td>
                <td className="">Account manager</td>
                <td className="rounded-br-md rounded-tr-md">Active Status</td>
              </tr>
              <tr className="sticky top-[7vh] h-[3vh] bg-white">
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>

              {academicData &&
                academicData.map((val, index) => (
                  <tr
                    key={index}
                    className="border-b-[1.5px] border-gray-50 border-b-[#EDEDED] bg-gray-50"
                  >
                    <td
                      className="h-[7vh] cursor-pointer text-center"
                      onClick={() =>
                        setTable(
                          val && val?.student && val.student?.id,
                          val && val?.student && val.student?.student_name,
                        )
                      }
                    >
                      {val && val?.student && val.student?.student_name}
                    </td>
                    <td className="h-[7vh]">
                      {val && val?.student && val.student?.date_of_birth}
                    </td>
                    <td className="h-[7vh]">
                      {val &&
                        val?.student &&
                        val.student?.country_of_citizenship}
                    </td>
                    <td className="h-[7vh] text-center">
                      {val &&
                        val?.account_manager &&
                        val.account_manager.username}
                    </td>

                    {val && val.is_active ? (
                      <td className="h-[7vh]  text-center text-[#20A464]">
                        Active
                      </td>
                    ) : (
                      <td className="h-[7vh] text-center">Inactive</td>
                    )}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
