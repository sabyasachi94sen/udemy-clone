 import { useState } from "react"
 

 interface ActiveStatusProps{
   handleDeleteSubmit: ()=>void;
   confirm: ()=>void;
    header: string
 }
 
 export function ActiveStatus({handleDeleteSubmit,confirm,header}: ActiveStatusProps){


    const [isStatus,setIsStatus]=useState(false)
    const [isDelete,setIsDelete]=useState(true)

    const checkIsStatus=(selectedVal: string)=>{
        setIsStatus(!isStatus)
        if(selectedVal==="Yes")
        setIsDelete(true)
        else {
        setIsDelete(false)
        confirm(event,1)
        }

    }

  
    return(
        <div className="w-[84%] h-auto bg-white border-2 rounded-xl font-sans pb-10 pt-5 relative z-20 mx-auto -mt-[135vh] border-[#3AB0FB]">
            <h1 className="text-5xl text-center text-[#3AB0FB] font-bold">{header}</h1>
            <div className="flex mx-auto w-[15%] h-[5vh] text-center border-2 border-[#3AB0FB] mt-8 mb-2">
                <button className={!isStatus?`bg-[#3AB0FB] w-[50%] text-white`: `bg-white w-[50%] text-[#344054]`} onClick={()=>checkIsStatus("Yes")}>Yes</button>
                <button className={!isStatus?`w-[50%] text-[#344054] bg-white`: `w-[50%] bg-[#3AB0FB] text-white`} onClick={()=>checkIsStatus("No")}>No</button>
           
            </div>
            <h4 className="text-center font-bold text-xl mt-6 mb-4">Reason for deleting</h4>
            <textarea name="status" className="block w-[50%] h-[20vh] mx-auto bg-[#EEEEEE]" ></textarea>
            <div>

            </div>
            <button className="bg-[#3AB0FB] text-center w-[10%] h-[5vh] mx-auto block mt-6 rounded-md text-white" onClick={()=>handleDeleteSubmit(isDelete)}>Ok</button>

        </div>
    )
}