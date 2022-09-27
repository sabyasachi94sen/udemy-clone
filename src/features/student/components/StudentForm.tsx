import { useForm } from "react-hook-form";
import { useQuery } from "react-query"

import { StudentResObj } from "@/features/api"
import { Button } from "@/shared/components";

interface StudentFormProps {
  handleBackBlur: () => void;
  handleForm: () => void;
  individualStudentData: object;
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

const activeOptions=[{
  option: "Active",
  value: "active"
},{
  option: "Inactive",
  value: "inactive"
}]

export function StudentForm({
  handleBackBlur,
  handleForm,
  individualStudentData,
  title,
}: StudentFormProps) {
  const { register, handleSubmit } = useForm<FormValues>();

  const { data }=useQuery(["manager_list"],()=> StudentResObj.manager_list())




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
              defaultValue={title!="Add a student to the roster"?individualStudentData?.student_name: null}
              disabled={title=="View a student to the roster"}
            />
          </div>
          <div className="flex w-[30%] flex-col items-start text-lg font-bold">
            <p className="ml-8">Date of Birth</p>
            <input
              className="text-small relative left-8 mt-4 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3 text-xl font-bold font-medium"
              placeholder="Date of Birth"
              type="date"
              {...register("date_of_birth")}
              defaultValue={title!="Add a student to the roster"?individualStudentData?.date_of_birth: null}
              disabled={title=="View a student to the roster"}
            />
          </div>

          <div className="ml-20 flex w-[30%] flex-col items-start text-lg font-bold">
            <p className="ml-8">Grade at Enrollment</p>
            <input
              className="text-small relative left-8 mt-4 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3 font-medium"
              placeholder="Grade"
              type="number"
              {...register("current_grade")}
              defaultValue={title!="Add a student to the roster"?individualStudentData?.current_grade: null}
              disabled={title=="View a student to the roster"}
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
              disabled={title=="View a student to the roster"}
             
            >
              <option>Select Country</option>
              <option selected={title!="Add a student to the roster"}>India</option>
            </select>
          </div>
          <div className="flex w-[30%] flex-col items-start text-lg font-bold">
            <p className="ml-8">City of Permanent Residence</p>
            <input
              className="text-small relative left-8 mt-4 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3 text-xl font-bold font-medium"
              {...register("city_of_residence")}
              defaultValue={title!="Add a student to the roster"?individualStudentData?.student_city_residence[0]?.city_of_residence: null}
              disabled={title=="View a student to the roster"}
              type="text"
            />
          </div>

          <div className="ml-20 flex w-[30%] flex-col items-start text-lg font-bold">
            <p className="ml-8">Country of Citizenship</p>
            <select
              className="text-small relative left-8 mt-4 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3 font-medium"
              {...register("country_of_citizenship")}
              disabled={title=="View a student to the roster"}
            >
              <option>Select Country</option>
              <option selected={title!="Add a student to the roster"}>India</option>
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
              disabled={title=="View a student to the roster"}
              
            >
              <option>Select account manager</option>
              {data && data.map((item,index)=><option key={index} selected={!!(title!="Add a student to the roster" && individualStudentData?.student_assignment[0]?.account_manager?.username==item?.username)} value={item.id}>{item && item?.username}</option>)}
            </select>
          </div>
          <div className="flex w-[37%] flex-col items-start text-lg font-bold">
            <p className="ml-8">Active Status</p>
            <select
              {...register("is_active")}
              className="text-small relative left-8 mt-4 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3 font-medium"
              disabled={title=="View a student to the roster"}

            >
              <option>Select Status</option>
              {activeOptions.map((item,index)=><option key={index} selected={!!(title!="Add a student to the roster" && ((individualStudentData?.is_active && item.value=="active") || (!individualStudentData?.is_active && item.value=="inactive")))} value={item.value}>{item.option}</option>)}
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
              disabled={title=="View a student to the roster"}
            >
              <option>Select Country of Boarding School</option>
              <option selected={title!="Add a student to the roster"}>India</option>
            </select>
          </div>
        </div>
      </div>

      <div className="relative mt-10 flex h-[12vh] w-[70%] justify-between">
        <div className="flex w-[80%] flex-col items-start text-lg font-bold">
          <p className="ml-8">Email</p>
          <input
            className="text-small relative left-8 mt-4 h-[5vh] w-[93%] rounded-md bg-[#EEEE] pl-3 font-medium"
            placeholder="Email"
            type="email"
            {...register("email")}
            defaultValue={title!="Add a student to the roster"?individualStudentData?.student_assignment[0]?.account_manager.email:null}
            disabled={title=="View a student to the roster"}
            />
        </div>
        <div className="flex w-[80%] flex-col items-start text-lg font-bold">
          <p className="ml-8">Phone Number</p>
          <input
            className="text-small relative left-8 mt-4 h-[5vh] w-[65%] rounded-md bg-[#EEEE] pl-3 text-xl font-bold font-medium"
            placeholder="Phone Number"
            type="tel"
            {...register("phone_number")}
            defaultValue={title!="Add a student to the roster"?individualStudentData?.phone_number:null}
            disabled={title=="View a student to the roster"}

          
            />
        </div>
      </div>







      <div className="mx-auto mt-7 h-[20vh] w-[50%] text-center text-lg font-bold">
        <p>Remarks</p>
        <textarea className="mx-auto mt-4 h-[15vh] w-[90%] bg-[#EEEEEE]" defaultValue={individualStudentData?.remarks} disabled={title=="View a student to the roster"}/>
      </div>
      <div className="mx-auto mt-8 mb-10 w-[8%] font-bold">
        {title!=="View a student to the roster"?
          <Button
            className="h-[6vh] w-[100%] rounded-md"
            onClick={handleSubmit(handleForm)}
        >
            Save
          </Button>: null}
      </div>
    </div>
  );
}
