import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

import { StudentResObj } from "@/features/api";
import { Button } from "@/shared/components";

interface StudentFormProps {
  handleBackBlur: () => void;
  handleForm: () => void;
  title: string;
}

interface FormValues {
  student_name: string;
  email: string;
  phone_number: string;
  date_of_birth: string;
  current_grade: string;
  country_of_boarding_school: string;
  country_of_citizenship: string;
  country_of_permanent_residence: string;
  city_of_permanent_residence: string;
  is_active: string;
  account_manager: string;
}

export function StudentForm({
  handleBackBlur,
  handleForm,
  title,
}: StudentFormProps) {
  const { register, handleSubmit } = useForm<FormValues>();

  const { data } = useQuery(["manager_list"], () =>
    StudentResObj.manager_list(),
  );

  return (
    <div className="relative z-10 mx-auto -mt-[150vh] h-auto w-[90%] rounded-xl border-2 bg-[#FDFEFF]">
      <div
        className="relative top-6 left-8 flex w-[61%] justify-between"
        onClick={handleBackBlur}
      >
        <div className="rounded-l-2 flex h-[5vh] w-[50px] cursor-pointer items-center justify-center shadow-lg">
          <img alt="back-icon" src="/images/backArrow.png" />
        </div>
        <h1 className="text-center text-4xl font-bold text-[#3AB0FB]">
          {title}
        </h1>
      </div>

      <div className="mt-20">
        <div className="relative mt-10 flex h-[12vh] w-[90%] justify-between">
          <div className="flex w-[45%] flex-col items-start text-lg font-bold">
            <p className="ml-8">Name</p>
            <input
              className="text-small relative left-8 mt-4 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3 font-medium"
              placeholder="Student name"
              type="text"
              {...register("student_name")}
            />
          </div>
          <div className="flex w-[30%] flex-col items-start text-lg font-bold">
            <p className="ml-8">Date of Birth</p>
            <input
              className="text-small relative left-8 mt-4 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3 text-xl font-bold font-medium"
              placeholder="Date of Birth"
              type="date"
              {...register("date_of_birth")}
            />
          </div>

          <div className="ml-20 flex w-[30%] flex-col items-start text-lg font-bold">
            <p className="ml-8">Grade at Enrollment</p>
            <input
              className="text-small relative left-8 mt-4 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3 font-medium"
              placeholder="Grade"
              type="number"
              {...register("current_grade")}
            />
          </div>
        </div>
      </div>

      <div>
        <div className="relative mt-10 flex h-[12vh] w-[90%] justify-between">
          <div className="flex w-[45%] flex-col items-start text-lg font-bold">
            <p className="ml-8">Country of Permanent Residence</p>
            <select
              className="text-small relative left-8 mt-4 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3 font-medium"
              {...register("country_of_residence")}
            >
              <option>Select Country</option>
              <option>India</option>
            </select>
          </div>
          <div className="flex w-[30%] flex-col items-start text-lg font-bold">
            <p className="ml-8">City of Permanent Residence</p>
            <input
              className="text-small relative left-8 mt-4 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3 text-xl font-bold font-medium"
              {...register("city_of_residence")}
              type="text"
            />
          </div>

          <div className="ml-20 flex w-[30%] flex-col items-start text-lg font-bold">
            <p className="ml-8">Country of Citizenship</p>
            <select
              className="text-small relative left-8 mt-4 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3 font-medium"
              {...register("country_of_citizenship")}
            >
              <option>Select Country</option>
              <option>India</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <div className="relative mt-10 flex h-[12vh] w-[95%] justify-between">
          <div className="flex w-[55%] flex-col items-start text-lg font-bold">
            <p className="ml-8">Assisgned Account Manager</p>
            <select
              className="text-small relative left-8 mt-4 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3 font-medium"
              {...register("account_manager")}
            >
              <option>Select account manager</option>
              {data &&
                data?.data.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item && item?.username}
                  </option>
                ))}
            </select>
          </div>
          <div className="flex w-[37%] flex-col items-start text-lg font-bold">
            <p className="ml-8">Active Status</p>
            <select
              {...register("is_active")}
              className="text-small relative left-8 mt-4 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3 font-medium"
            >
              <option>Select Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          <div className="relative ml-28 flex h-[24vh] w-[42%] flex-col items-start text-[1rem] font-bold">
            <p className="ml-2">
              If attends boarding school in a country other than permanent
              residence
            </p>
            <select
              className="relative left-3 mt-4 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3 text-[1.1rem] font-medium"
              {...register("country_of_boarding_school")}
            >
              <option>Select Country of Boarding School</option>
              <option>India</option>
            </select>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-7 h-[20vh] w-[50%] text-center text-lg font-bold">
        <p>Remarks</p>
        <textarea className="mx-auto mt-4 h-[15vh] w-[90%] bg-[#EEEEEE]" />
      </div>
      <div className="mx-auto mt-8 mb-10 w-[8%] font-bold">
        <Button
          className="h-[6vh] w-[100%] rounded-md"
          onClick={handleSubmit(handleForm)}
        >
          Save
        </Button>
      </div>
    </div>
  );
}
