

import { useState } from "react";

import { AccountManagerTable } from "@/features/account_manger"
import { admininfo,CreateSuperAdminForm,EditAdminForm } from "@/features/admin"
import { MenuBar,Navbar } from "@/features/home"
import { ActiveStatus,personaldata,PersonalTable } from "@/features/ui"



function AccountManager(){

const [backgroundBlurAddAdmin,setBackGroundBlurAddAdmin]=useState(false)
const [backgroundBlurEditAdmin,setBackGroundBlurEditAdmin]=useState(false)
const [isTable,setIsTable]=useState(false)
const [backgroundBlurDeleteAdmin,setBackGroundBlurDeleteAdmin]=useState(false)
const [adminData,setAdminData]=useState(admininfo)
const [adminDataId,setAdminDataId]=useState("")
const [adminDataOnChange,setAdminDataOnChange]=useState({ name: "",email: "",update: "02/11/2022",status: "Inactive",student: 90,performance: "Metrics", })

const addAdminBackBlur=()=>{
    
  setBackGroundBlurAddAdmin(backgroundBlurAddAdmin=>!backgroundBlurAddAdmin)
}

const editAdminBackBlur=(id)=>{
  setBackGroundBlurEditAdmin(backgroundBlurEditAdmin=>!backgroundBlurEditAdmin)

  setAdminDataId(id)
}


const deleteAdminBackBlur=(id)=>{
  setBackGroundBlurDeleteAdmin(backgroundBlurDeleteAdmin=>!backgroundBlurDeleteAdmin)

  setAdminDataId(id)
}


const submitAdminData=()=>{

  setBackGroundBlurAddAdmin(backgroundBlurAddAdmin=>!backgroundBlurAddAdmin)
  const tempArr=adminData;

  tempArr.push(adminDataOnChange)
  setAdminData(tempArr)
       
  
}


const submitEditData=()=>{
  setBackGroundBlurEditAdmin(backgroundBlurEditAdmin=>!backgroundBlurEditAdmin)
  const tempArr=adminData;

  tempArr[adminDataId]=adminDataOnChange;
}

const submitDeleteData=()=>{

  setBackGroundBlurDeleteAdmin(backgroundBlurDeleteAdmin=>!backgroundBlurDeleteAdmin)
  const tempArr=adminData;

  tempArr.splice(adminDataId,1)
  setAdminData(tempArr)

}

const setDataOnChange=(e)=>{
  if(backgroundBlurAddAdmin)
   setAdminDataOnChange({ ...adminDataOnChange, status: "Inactive" ,id: adminData[adminData.length-1].id+1,[e.target.name]: e.target.value })
   else if(backgroundBlurEditAdmin)
   setAdminDataOnChange({ ...adminDataOnChange,id: adminDataId,[e.target.name]: e.target.value })

}
const isTableCheck=()=>{
  setIsTable(isTable=>!isTable)
}

  


    return (
      <>
       
        <div className={(!backgroundBlurAddAdmin && !backgroundBlurEditAdmin && !backgroundBlurDeleteAdmin)? `bg-white` : `opacity-[0.2]`}>
        
          <Navbar />
          <div className="flex items-center z-0">
            <MenuBar />
            {!isTable?
              <AccountManagerTable adminData={adminData} name="Essai Account Manager Roaster" onClick1={addAdminBackBlur} onClick2={editAdminBackBlur} onClick3={deleteAdminBackBlur} onClick4={isTableCheck} />
          : <PersonalTable adminData={personaldata} title1="Essai Account Manager Details" title2="Account Manager" onClick1={isTableCheck}/>}
          </div>
       
        </div> 
        {backgroundBlurAddAdmin?
             
          <CreateSuperAdminForm title="Create an Account Manager Role" onClick1={addAdminBackBlur} onClick2={submitAdminData} onClick3={setDataOnChange}/>
            : null}

        {backgroundBlurEditAdmin?
             
          <EditAdminForm header="Are you sure you want to make this account manager  inactive?" title="Edit an Account Manager role" onClick1={editAdminBackBlur} onClick2={submitEditData} onClick3={setDataOnChange}/>: null}

        {backgroundBlurDeleteAdmin?
           
          <ActiveStatus header="Are you sure you want to delete activity" onClick1={deleteAdminBackBlur}/>:  null}
             
      </>

   
    
      
        
    )
}


export default AccountManager;
AccountManager.isPublicRoute=true