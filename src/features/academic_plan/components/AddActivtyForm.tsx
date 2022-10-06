import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import moment from "moment";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { AepResObj } from "@/features/api";

interface AddActivityFormProps {
  isAddActive: () => void;
  studentId: string;
}

interface ResponseVal {
  id: number;
  created_by: CreatedBy;
  action_map_activity: any[];
  activity_name: string;
  activity_type: string;
  subject: string;
  location_type: string;
  country_activity: null | string;
  country_residence: string;
  country_citizenship: string;
  grade_range: number[];
  age_range: number[];
  application_requirement: string;
  registration_open: Date;
  application_deadline: Date;
  activity_start_date: Date;
  activity_end_date: Date;
  remarks: string;
  url: null | string;
  is_active: boolean;
  is_deleted: boolean;
  created_at: Date;
  updated_at: Date;
}

interface CreatedBy {
  id: number;
  username: string;
  email: string;
  date_joined: Date;
  last_login: Date;
  last_seen: Date;
  profile_image: null;
  is_email_verified: boolean;
  is_admin: boolean;
  is_super_admin: boolean;
  is_active: boolean;
  is_staff: boolean;
  is_superuser: boolean;
  acc_showTour: boolean;
  is_student: boolean;
  is_account_manager: boolean;
  password_verification: boolean;
  last_update: Date;
}

interface FormValues {
  activity_status: string;
  activity_subject: string;
}

export function AddActivityForm({
  isAddActive,
  studentId,
}: AddActivityFormProps) {
  const [mutateParams, setMutateParams] = useState({
    mutateFunc: AepResObj.aep_student_assign_activity,
    action: "add",
  });
  const [activityData, setActivityData] = useState([]);

  const { register, handleSubmit } = useForm<FormValues>();

  const queryClient = useQueryClient();
  const { mutate } = useMutation(mutateParams.mutateFunc, {
    onSuccess: (res: ResponseVal) => {
      setTimeout(() => {
        if (mutateParams.action === "add")
          queryClient.invalidateQueries("assigned-student-activity");
        else setActivityData(res);
      }, 1000);
    },
  });

  const addDataInTable = (activity_id: string, student_id: string) => {
    const mutateObj = {
      activity_id,
      student_id,
    };

    setMutateParams({
      mutateFunc: AepResObj.aep_student_assign_activity,
      action: "add",
    });

    setTimeout(() => {
      mutate(mutateObj);
    });
  };

  const filterActivity = (filterParams: FormValues) => {
    const mutateObj = {
      student_id: studentId,
      ...filterParams,
    };

    setMutateParams({
      mutateFunc: AepResObj.aep_student_activity_filter,
      action: "filter",
    });
    setTimeout(() => {
      mutate(mutateObj);
    }, 1000);
  };

  const { data, isSuccess } = useQuery(["assigned-student-activity"], () =>
    AepResObj.aep_student_assignment_activity_list(studentId),
  );

  useEffect(() => {
    if (isSuccess) setActivityData(data);
  }, [data]);

  return (
    <div className="mt-10 h-[90vh] w-[70%] rounded-lg border-2 bg-white pb-10">
      <div className="ml-20 flex h-[10vh] w-[80%] items-center justify-around">
        <div
          className="rounded-l-2 flex h-[5vh] w-[50px] cursor-pointer items-center justify-center shadow-lg"
          onClick={isAddActive}
        >
          <img alt="back-icon" src="/images/backArrow.png" />
        </div>
        <h1 className="ml-3 text-3xl font-bold text-cyan-500">
          Add activity to Academic Enrichment Plan (Student)
        </h1>
      </div>

      <div className="mt-8 flex h-[8vh] w-full justify-between">
        <div className="w-[70%] pl-5">
          <span className="text-md font-bold">Active Status</span>
          <select
            {...register("activity_status")}
            className="relative left-3 h-[5vh] w-[60%] rounded-md bg-[#EEEE] outline-none"
          >
            <option>Select Type</option>
            <option>Exam</option>
          </select>
        </div>

        <div className="w-[70%]">
          <span className="text-md font-bold">Activity Subject</span>
          <select
            {...register("activity_subject")}
            className="relative left-3 h-[5vh] w-[60%] rounded-md bg-[#EEEE] outline-none"
          >
            <option>Select Subject</option>
            <option>Maths</option>
            <option>Olympiad</option>
          </select>
        </div>
      </div>
      <button
        className="mx-auto mt-4 block h-[6vh] w-[15%] rounded-lg bg-cyan-500 text-white"
        type="button"
        onClick={handleSubmit(filterActivity)}
      >
        Submit
      </button>

      <div className="mx-auto mt-10 flex h-[6vh] w-[100%] items-center justify-around rounded-md bg-[#3AB0FB52] pr-4 text-[0.7rem] font-medium text-[#5F5F5F]">
        <p>Activity name</p>
        <p>Type</p>
        <p>Subject</p>
        <p>Country of activity</p>
        <p>Application requirments</p>
        <p>Application deadline</p>
        <p>Activity start date</p>
        <p>Remarks</p>
        <p>Add to AEP</p>
      </div>

      <div className="mt-4 h-[40vh] overflow-y-scroll">
        <table className="relative mx-auto -mt-1 w-[100%] break-all border-solid font-sans text-[0.7rem]   font-medium text-[#344054]">
          <tbody className="overflow">
            {activityData &&
              activityData.map((item, index) => (
                <tr key={index} className="h-[6vh]">
                  <td className="w-[5.3%] text-center">
                    {item && item?.activity_name} Exam
                  </td>
                  <td className=" w-[5%] text-center">
                    {item && item?.activity_type}
                  </td>
                  <td className="w-[3%] text-center">
                    {item && item?.subject}
                  </td>
                  <td className="w-[8%] text-center">
                    {item && item?.country_residence}
                  </td>
                  <td className="w-[7%] text-center">
                    {item && item?.application_requirement}
                  </td>
                  <td className="w-[8%] text-center">
                    {moment(item && item?.application_deadline).format(
                      "YYYY-MM-DD",
                    )}
                  </td>
                  <td className="w-[7%] text-center">
                    {moment(item && item?.activity_start_date).format(
                      "YYYY-MM-DD",
                    )}
                  </td>
                  <td className="w-[5%] pl-1">
                    <input
                      className="mx-auto h-[4vh] w-full break-all rounded-md bg-cyan-300"
                      name="remarks"
                      type="text"
                    />
                  </td>
                  <td className="w-[5%] text-center">
                    <button
                      className="h-[4vh] w-[80%] rounded-lg bg-[#3AB0FB] text-white hover:bg-blue-500"
                      type="button"
                      onClick={() => addDataInTable(item.id, studentId)}
                    >
                      Add
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
