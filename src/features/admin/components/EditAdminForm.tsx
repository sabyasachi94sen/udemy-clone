import { Button, Select } from "@/shared/components"
import {ActiveStatus} from "@/features/ui"
import {useState} from "react"


interface EditAdminFormProps{
  onClick1: ()=>void;
  onClick2: ()=>void;
  onClick3: ()=>void;
  title: string;
  header: string
}

export function EditAdminForm({onClick1,onClick2,onClick3,title,header}: EditAdminFormProps){

 
  const [isStatus,setIsStatus]=useState(false)

  const checkStatus=(e)=>{
    if(e.target.value=="Yes")
    setIsStatus(isStatus=>!isStatus)
  }

  const confirmStatus=()=>{
    setIsStatus(isStatus=>!isStatus)
  }

    return (
      <>
      <div className={`w-full h-[180vh] z-10 ${!isStatus? ``: `opacity-[0.4]`} relative -mt-[180vh] pt-[40vh]`}>
    <div className={`w-[40%] h-auto rounded-xl bg-[#FDFEFF] border-2 relative z-20 mx-auto`}>
        <div className="w-[100%] h-[10vh] mx-auto flex justify-around items-center ml-4">
          <div className="w-[50px] shadow-lg rounded-l-2 h-[5vh] ml-3 flex items-center justify-center cursor-pointer" onClick={onClick1} >
            <img alt="back-icon" src="/images/backArrow.png"/>
          </div>
          <h1 className="text-3xl text-[#3AB0FB] font-bold mr-16">{title}</h1>
        </div>
        <div className="w-[82%] h-[20vh] p-2 mx-auto leading-7 font-bold font-sans">
          <div className="mt-2 flex">
            <span className="text-[#344054]">Name</span>
            <input className="bg-[#EEEE] rounded-md w-[90%] h-[5vh] relative left-8 text-small font-medium pl-3" name="name" type="text" placeholder="Morgan Henderson" onChange={onClick3}/><br />
          </div>

          <div className="mt-16 flex">
            <span className="text-[#344054]">Email</span>
            <input className="bg-[#EEEE] rounded-md w-[90%] h-[5vh] relative left-9 text-small font-medium pl-3" name="email" type="email" placeholder="morgan@essai.com" onChange={onClick3} /><br />
          </div>

          <div className="mt-16">
            <span className="text-[#344054]">Active Status</span>
             <select className="bg-[#EEEE] rounded-md w-[35%] h-[5vh]  text-gray-400 text-small font-medium relative left-3 outline-none" onChange={checkStatus} name="status">
                <option> Select Status</option>
                <option>Yes</option>
                <option>No</option>
             </select>
          </div>

          <div className="mt-16">
            <span className="text-[#344054]">Change Role</span>
             <select className="bg-[#EEEE] rounded-md w-[35%] h-[5vh] text-gray-400 text-small font-medium relative left-3 outline-none font-small" onChange={onClick3} name="status">
                <option>Change Role</option>
               
             </select>
          </div>

        </div>
        <div className="mx-auto w-28 mt-64 mb-10">

          <button className="w-28 h-12 bg-[#3AB0FB] rounded-lg text-white hover:bg-blue-500" onClick={onClick2}>Save</button>
        </div>

      </div>
      </div>
      {isStatus?
      
      <ActiveStatus onClick1={confirmStatus} header={header} /> : null}
      </>
    )
}