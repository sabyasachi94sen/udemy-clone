import { Button, Select } from "@/shared/components"
import {ActiveStatus} from "@/features/ui"
import {useState} from "react"

interface EditSuperAdminFormProps{
  onClick1: ()=>void;
  onClick2: ()=>void;
  onClick3: ()=>void;
  header: string;
}

export function EditSuperAdminForm({onClick1,onClick2,onClick3,header}: EditSuperAdminFormProps){


  
  const [isStatus,setIsStatus]=useState(false)

  const checkStatus=(e)=>{
    if(e.target.value=="Yes")
    setIsStatus(isStatus=>!isStatus)
  }

  const confirmStatus=()=>{
    setIsStatus(isStatus=>!isStatus)
  }


  console.log("isStatus")
  console.log(isStatus)
    return (

      <>
      <div className={`w-full h-[180vh] z-10 ${!isStatus? ``: `opacity-[0.4]`} relative -mt-[180vh] pt-[40vh]`}>
    <div className="w-[34%] h-[60vh] rounded-xl bg-[#FDFEFF] border-2 relative z-20  mx-auto">
        <div className="w-[100%] h-[10vh] mx-auto flex justify-around items-center ml-8">
          <div className="w-[50px] shadow-lg rounded-l-2 h-[5vh] ml-3 flex items-center justify-center cursor-pointer" onClick={onClick1} >
            <img alt="back-icon" src="/images/backArrow.png"/>
          </div>
          <h1 className="text-3xl text-[#3AB0FB] font-bold mr-16">Edit an Super Admin role</h1>
        </div>
        <div className="w-[82%] h-[20vh] p-2 mx-auto leading-7 font-bold  text-[0.9rem] font-sans text-[#344054]">
          <div className="mt-2">
            <span>Name</span>
            <input className="bg-[#EEEE] rounded-md w-[90%] h-[5vh] relative left-8 text-small font-medium pl-3" name="name" type="text" placeholder="Morgan Henderson" onChange={onClick3}/><br />
          </div>

          <div className="mt-16">
            <span>Email</span>
            <input className="bg-[#EEEE] rounded-md w-[90%] h-[5vh] relative left-9 text-small font-medium pl-3" name="email" type="email" placeholder="morgan@essai.com" onChange={onClick3} /><br />
          </div>

          <div className="mt-16">
            <span>Active Status</span>
             <select className="bg-[#EEEE] rounded-md w-[35%] h-[5vh] relative left-3 outline-none" onChange={checkStatus} name="status">
                <option> Select Status</option>
                <option>Yes</option>
                <option>No</option>
             </select>
          </div>

        </div>
        <div className="mx-auto w-28 mt-36">
      
          <button className="w-28 h-12 bg-[#3AB0FB] rounded-lg text-white hover:bg-blue-500" onClick={onClick2}>Save</button>
        </div>

      </div>
      </div>
      {isStatus?
      <ActiveStatus onClick1={confirmStatus} header={header} />: ""}
      </>
    )
}