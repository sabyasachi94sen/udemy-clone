

import { MenuBar,Navbar} from "@/features/home"
import {CreateSuperAdminForm,DeleteSuperAdminForm,EditAdminForm,admininfo} from "@/features/admin"
import {AccountManagerTable} from "@/features/account_manger"
import {PersonalTable,personaldata} from "@/features/ui"
import { Button } from "@/shared/components"
import { useState } from "react";


function AccountManager(){

const [backgroundBlurAddAdmin,setBackGroundBlurAddAdmin]=useState(false)
const [backgroundBlurEditAdmin,setBackGroundBlurEditAdmin]=useState(false)
const [isTable,setIsTable]=useState(false)
const [backgroundBlurDeleteAdmin,setBackGroundBlurDeleteAdmin]=useState(false)
const [adminData,setAdminData]=useState(admininfo)
const [adminDataId,setAdminDataId]=useState("")
const [adminDataOnChange,setAdminDataOnChange]=useState({name: "",email: "",update: "02/11/2022",status: "Inactive",student: 90,performance: "Metrics", })

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
   setAdminDataOnChange({...adminDataOnChange, status: "Inactive" ,id: adminData[adminData.length-1].id+1,[e.target.name]: e.target.value})
   else if(backgroundBlurEditAdmin)
   setAdminDataOnChange({...adminDataOnChange,id: adminDataId,[e.target.name]: e.target.value})

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
          <AccountManagerTable onClick1={addAdminBackBlur} onClick2={editAdminBackBlur} onClick3={deleteAdminBackBlur} onClick4={isTableCheck} adminData={adminData} name="Essai Account Manager Roaster" />
          : <PersonalTable onClick1={isTableCheck} adminData={personaldata} title1="Essai Account Manager Details" title2="Account Manager"/>}
        </div>
       
      </div> 
      {backgroundBlurAddAdmin?
             
             <CreateSuperAdminForm onClick1={addAdminBackBlur} onClick2={submitAdminData} onClick3={setDataOnChange} title="Create an Account Manager Role"/>
            : ""}

            {backgroundBlurEditAdmin?
             
        <EditAdminForm onClick1={editAdminBackBlur} onClick2={submitEditData} onClick3={setDataOnChange} title="Edit an Account Manager role" header="Are you sure you want to make this account manager  inactive?"/>: ""}

        {backgroundBlurDeleteAdmin?
             <DeleteSuperAdminForm onClick1={deleteAdminBackBlur} onClick2={submitDeleteData} title1="Delete Account Manager"  title2="This will permanently delete the Manager from the"/>: ""}
             
      </>

   
    
      
        
    )
}


export default AccountManager;
AccountManager.isPublicRoute=true