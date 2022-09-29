import { Button, Select } from "@/shared/components";
import { ActiveStatus } from "@/features/ui";
import { useState } from "react";
import {useForm} from "react-hook-form"

interface EditSuperAdminFormProps {
  handleEditBlur: () => void;
  handleEditSubmit: () => void;
  specificData: object;
  title:string;
  header: string;
}

interface FormValues{
  name: string,
  email: string,
  status: string
}

const selectOptionsStatus = [
  {
    option: "Select Status",
    value: null,
   
  },
  {
    option: "Active",
    value: "active",
  
  },
  {
    option: "Inactive",
    value: "inactive",
 
  },
];

export function EditSuperAdminForm({
  handleEditBlur,
  handleEditSubmit,
  specificData,
  title,
  header,
}: EditSuperAdminFormProps) {
  const [isStatus, setIsStatus] = useState(false);
  const [activeVal,setActiveVal]=useState(null)

  const checkStatus = (e,flag) => {
    if (e.target.value == "Inactive" || flag==1) setIsStatus((isStatus) => !isStatus);

    if(flag==1)
    setActiveVal("No")
    else
    setActiveVal("Yes")
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
        <div className="relative z-20 mx-auto h-[60vh] w-[41%] rounded-xl border-2  bg-[#FDFEFF]">
          <div className="mx-auto flex h-[10vh] w-[100%] items-center justify-around">
            <div
              className="rounded-l-2 relative lg:right-[1%] 2xl:right-0 flex h-[5vh] w-[50px] cursor-pointer items-center justify-center shadow-lg"
              onClick={handleEditBlur}
              
            >
              <img alt="back-icon" src="/images/backArrow.png" />
            </div>
            <h1 className="mr-16 2xl:text-4xl lg:text-[1.9rem] relative lg:right-[4%] 2xl:right-0 font-bold text-[#3AB0FB]">
              {title}
            </h1>
          </div>
          <div className="mx-auto h-[20vh] w-[82%] p-2 font-sans text-[0.9rem]  font-bold leading-7 text-[#344054]">
            <div className="mt-2">
              <span>Name</span>
              <input
                className="text-small relative left-8 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3 font-medium"
                
                type="text"
                placeholder="Morgan Henderson"
                {...register("username")}
                defaultValue={specificData.username}
                
              />
              <br />
            </div>

            <div className="mt-16">
              <span>Email</span>
              <input
                className="text-small relative left-9 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3 font-medium"
               
                type="email"
                placeholder="morgan@essai.com"
                {...register("email")}
                defaultValue={specificData.email}
              />
              <br />
            </div>

            <div className="mt-16">
              <span>Active Status</span>
              <select
                className="text-small relative left-3 h-[5vh] w-[35%] rounded-md bg-[#EEEE] font-medium text-gray-400 outline-none"
                 {...register("status")}
                 onChange={()=>checkStatus(event,0)}
              >
                {selectOptionsStatus.map((item, i) => {
                  return <option key={i} value={item.value} selected={(activeVal=="No" && item.option=="Active")||(specificData.is_active && item.option=="Active" && activeVal==null  || !specificData.is_active && item.option=="Inactive" && activeVal==null) ?true : false}>{item.option}</option>;
                
                })}
              </select>
            </div>
          </div>
          <div className="mx-auto mt-36 w-28">
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
        <ActiveStatus handleDeleteSubmit={confirmStatus} confirm={checkStatus} header={header} />
      ) : (
        ""
      )}
    </>
  );
}
