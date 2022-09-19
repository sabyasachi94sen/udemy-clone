import { Button, Select } from "@/shared/components";
import { ActiveStatus } from "@/features/ui";
import { useState } from "react";
import {AdminResObj} from "@/features/api"
import {useForm} from "react-hook-form"

interface EditAdminFormProps {
  handleEditBlur: () => void;
  handleEditSubmit: () => void;
  handleOnChange: () => void;
  title: string;
  header: string;
  adminId: number
}

interface FormValues{
  name: string;
  email: string;
}

export function EditAdminForm({
  handleEditBlur,
  handleEditSubmit,
  handleOnChange,
  title,
  header,
  adminId
}: EditAdminFormProps) {
  const [isStatus, setIsStatus] = useState(false);

  const checkStatus = (e) => {
    if (e.target.value == "Yes") setIsStatus((isStatus) => !isStatus);
  };

  const confirmStatus = () => {
    setIsStatus((isStatus) => !isStatus);
  };


  const {handleSubmit,register}=useForm<FormValues>()




  return (
    <>
      <div
        className={`z-10 h-[180vh] w-full ${
          !isStatus ? `` : `opacity-[0.4]`
        } relative -mt-[180vh] pt-[40vh]`}
      >
        <div
          className={`relative z-20 mx-auto h-auto w-[40%] rounded-xl border-2 bg-[#FDFEFF]`}
        >
          <div className="mx-auto ml-4 flex h-[10vh] w-[100%] items-center justify-around">
            <div
              className="rounded-l-2 ml-3 flex h-[5vh] w-[50px] cursor-pointer items-center justify-center shadow-lg"
              onClick={handleEditBlur}
            >
              <img alt="back-icon" src="/images/backArrow.png" />
            </div>
            <h1 className="mr-16 text-3xl font-bold text-[#3AB0FB]">{title}</h1>
          </div>
          <div className="mx-auto h-[20vh] w-[82%] p-2 font-sans font-bold leading-7">
            <div className="mt-2 flex">
              <span className="text-[#344054]">Name</span>
              <input
                className="text-small relative left-8 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3 font-medium"
               
                type="text"
                placeholder="Morgan Henderson"
                {...register("name")}
              />
              <br />
            </div>

            <div className="mt-16 flex">
              <span className="text-[#344054]">Email</span>
              <input
                className="text-small relative left-9 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3 font-medium"
                name="email"
                type="email"
                placeholder="morgan@essai.com"
                {...register("email")}
              />
              <br />
            </div>

            <div className="mt-16">
              <span className="text-[#344054]">Active Status</span>
              <select
                className="text-small relative left-3 h-[5vh]  w-[35%] rounded-md bg-[#EEEE] font-medium text-gray-400 outline-none"
                onChange={checkStatus}
                name="status"
              >
                <option> Select Status</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            <div className="mt-16">
              <span className="text-[#344054]">Change Role</span>
              <select
                className="text-small font-small relative left-3 h-[5vh] w-[35%] rounded-md bg-[#EEEE] font-medium text-gray-400 outline-none"
                {...register("role")}
           
              >
                <option>Change Role</option>
                <option>Admin</option>
                <option>Super Admin</option>
                <option>Account Manager</option>
              </select>
            </div>
          </div>
          <div className="mx-auto mt-64 mb-10 w-28">
            <button
              className="h-12 w-28 rounded-lg bg-[#3AB0FB] text-white hover:bg-blue-500"
              onClick={handleSubmit(handleEditSubmit)}
            >
              Save
            </button>
          </div>
        </div>
      </div>
      {isStatus ? (
        <ActiveStatus onClick1={confirmStatus} header={header} />
      ) : null}
    </>
  );
}
