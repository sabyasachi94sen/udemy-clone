import { Button, Select } from "@/shared/components";
import { ActiveStatus } from "@/features/ui";
import { useState } from "react";
import {AdminResObj} from "@/features/api"
import {useForm} from "react-hook-form"

interface EditAdminFormProps {
  handleEditBlur: () => void;
  handleEditSubmit: () => void;

  specificData: object;
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
  specificData,
  title,
  header,
  adminId
}: EditAdminFormProps) {
  const [isStatus, setIsStatus] = useState(false);
  const [activeVal,setActiveVal]=useState(null)

  const checkStatus = (e,flag) => {

    if (e.target.value == "No" || flag==1) {
    setIsStatus((isStatus) => !isStatus);
    }
    if(flag==1){
       setActiveVal("No")
     
    }else{
      setActiveVal("Yes")
    }
  };

  const confirmStatus = (isActive: boolean) => {
       
    setIsStatus((isStatus) => !isStatus);
    
    
    

  };

  const selectOptionsStatus = [
    {
      option: "Select Status",
     
    },
    {
      option: "Yes",
    
    },
    {
      option: "No",
   
    },
  ];

 

  const selectOptionRole=[{
    option: "Admin",
    value: "admin"
  },{
    option: "Super Admin",
    value: "superadmin"
  },{
    option: "Account Manager",
    value: "accountmanager"
  }]


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
               defaultValue={specificData.username}
                type="text"
                placeholder="Morgan Henderson"
                {...register("username")}
              />
              <br />
            </div>

            <div className="mt-16 flex">
              <span className="text-[#344054]">Email</span>
              <input
                className="text-small relative left-9 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3 font-medium"
                defaultValue={specificData.email}
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
                {...register("status")}
                onChange={()=>checkStatus(event,0)}
                
              >
                
                {selectOptionsStatus.map((item,index)=>{
                  return <option key={index} selected={(activeVal=="No" && item.option=="Yes") || (specificData.is_active && item.option=="Yes" && activeVal==null  || !specificData.is_active && item.option=="No" && activeVal==null)?true : false}>{item.option}</option>
                })}
              </select>
            </div>

            <div className="mt-16">
              <span className="text-[#344054]">Change Role</span>
              <select
                className="text-small font-small relative left-3 h-[5vh] w-[35%] rounded-md bg-[#EEEE] font-medium text-gray-400 outline-none"
                {...register("role")}
                
           
              >
                <option>Select Role</option>
                {selectOptionRole.map((item,index)=>{
                  return <option key={index} value={item.value} selected={specificData.is_admin && item.option=="Admin" || specificData.is_super_admin && item.option=="Super Admin" || specificData.is_account_manager && item.option=="Account Manager"?true: false}>{item.option}</option>
                })}
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
        <ActiveStatus handleDeleteSubmit={confirmStatus} confirm={checkStatus} header={header} />
      ) : null}
    </>
  );
}
