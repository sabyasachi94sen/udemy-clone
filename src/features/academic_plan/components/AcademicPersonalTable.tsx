import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import moment from "moment";
import Link from "next/link";

import { AepResObj } from "@/features/api";
import { GetUserType } from "@/features/helpers";

interface AcademicPersonalTableProps {
  isAddActive: () => void;

  setTable: () => void;
  studentId: string;
  studentName: string;
  activityData: {}[];
}

export function AcademicPersonalTable({
  isAddActive,
  setTable,
  studentId,
  studentName,
  activityData,
}: AcademicPersonalTableProps) {
  const { data } = useQuery(["student-activity"], () =>
    AepResObj.aep_student_activity(studentId),
  );
  const queryClient = useQueryClient();
  const { mutate } = useMutation(AepResObj.aep_student_activity_delete, {
    onSuccess: () => {
      setTimeout(() => {
        queryClient.invalidateQueries("student-activity");
      }, 1000);
    },
  });

  const user = GetUserType();

  const deleteDataInTable = (activity_id: string, student_id: string) => {
    const mutateObj = {
      activity_id,
      student_id,
    };

    mutate(mutateObj);
  };

  return (
    <div className="relative z-0 -mt-44 h-screen w-[90%] rounded-md">
      <div>
        <div className="ml-16 flex h-[10vh] w-[55%] items-center justify-around">
          <div
            className="rounded-l-2 flex h-[5vh] w-[50px] cursor-pointer items-center justify-center shadow-lg"
            onClick={setTable}
          >
            <img alt="back-icon" src="/images/backArrow.png" />
          </div>
          <h1 className="ml-3 text-3xl font-bold">
            Academic Enrichment Plan (student)
          </h1>
        </div>
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

        <div className="ml-20 mt-10 flex h-[7vh] w-[100%] items-center">
          <p className="text-xl font-bold">
            Student name:{" "}
            <span className="text-xl font-medium">{studentName}</span>
          </p>
          <div
            className="ml-2 flex h-[7vh] w-[60%] justify-around text-white
             "
          >
            <Link href="/aep-tracker">
              <button
                className="h-[6vh] w-[46%] rounded-md bg-cyan-500"
                type="button"
              >
                View AEP Status Tracker (student)
              </button>
            </Link>
            <button
              className="h-[6vh] w-[46%] rounded-md bg-cyan-500"
              disabled={user == "super_admin"}
              type="button"
              onClick={isAddActive}
            >
              Update AEP
            </button>
          </div>
        </div>
        {/* <div className="bg-[#3AB0FB52] h-[6vh] w-[95%] mt-10 mx-auto rounded-md text-[#5F5F5F] font-medium text-[1rem] flex justify-around items-center">
          <p>Activity name</p>
          <p>Type</p>
          <p>Subject</p>
          <p>Country of Activity</p>
          <p>Application of requirements</p>
          <p>Application deadline</p>
          <p>Activity start date</p>
          <p>Complete</p>
          <p>Delete</p>
          </div> */}

        <div className="mt-8 h-[60vh] overflow-y-scroll">
          <table className="relative left-2 mx-auto -mt-1 w-[96%] break-all border-solid bg-white text-center font-sans text-[0.9rem] font-bold text-[#344054]">
            <tbody className="overflow">
              <tr className="sticky top-0 mx-auto mb-1 h-[7vh] w-full bg-blue-200  text-center text-[0.9rem] font-medium">
                <td className="rounded-bl-md rounded-tl-md">Activity name</td>
                <td className="">Type</td>
                <td className="">Subject</td>
                <td className="">Country of Activity</td>
                <td className="">Application of requirements</td>
                <td className="">Application deadline</td>
                <td className="">Activity start date</td>
                <td className="">Complete</td>
                <td className="rounded-br-md rounded-tr-md">Delete</td>
              </tr>
              <tr className="sticky top-[7vh] h-[3vh] bg-white">
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
              {data &&
                data.map((item, index) => (
                  <tr key={index} className="h-[6vh] bg-gray-50">
                    <td className="">
                      {item && item?.activity && item.activity?.activity_name}{" "}
                      exam
                    </td>
                    <td className="">
                      {item && item?.activity && item.activity?.activity_type}
                    </td>
                    <td className="">
                      {item && item?.activity && item.activity?.subject}
                    </td>
                    <td className="">
                      {item &&
                        item?.activity &&
                        item.activity?.country_citizenship}
                    </td>
                    <td className="">
                      {item &&
                        item?.activity &&
                        item.activity?.application_requirement}
                    </td>
                    <td className="">
                      {moment(
                        item &&
                          item?.activity &&
                          item.activity?.application_deadline,
                      ).format("YYYY-MM-DD")}
                    </td>
                    <td className="">
                      {moment(
                        item &&
                          item?.activity &&
                          item?.activity?.activity_start_date,
                      ).format("YYYY-MM-DD")}
                    </td>
                    <td className="">
                      <label
                        className="text mt-2 block w-[100%] font-bold text-gray-500"
                        htmlFor="complte-task"
                      >
                        <input
                          className="relative relative top-[2px] h-[5vh] w-[50%] leading-tight"
                          id="complete-task"
                          name="complete"
                          type="checkbox"
                        />
                      </label>
                    </td>
                    <td className="cursor-pointer">
                      <img
                        alt="delete-icon"
                        className="mx-auto block"
                        src="/images/delete.png"
                        onClick={() =>
                          deleteDataInTable(item?.activity?.id, studentId)
                        }
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
