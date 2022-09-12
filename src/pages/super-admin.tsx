

import { MenuBar,Navbar } from "@/features/home";
import {admininfo,AdminTable,CreateSuperAdminForm,DeleteSuperAdminForm,EditSuperAdminForm} from "@/features/admin"

import { Button } from "@/shared/components"
import { useState } from "react";
import { PersonalTable,personaldata} from "@/features/ui"



function SuperAdmin(){

const [backgroundBlurAddAdmin,setBackGroundBlurAddAdmin]=useState(false)
const [backgroundBlurEditAdmin,setBackGroundBlurEditAdmin]=useState(false)
const [backgroundBlurDeleteAdmin,setBackGroundBlurDeleteAdmin]=useState(false)

const [isTable,setIsTable]=useState(false)
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

const isTableCheck=()=>{
  setIsTable(isTable=>!isTable)
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
  


    return (
     <>
       
      <div className={(!backgroundBlurAddAdmin && !backgroundBlurEditAdmin && !backgroundBlurDeleteAdmin)? `bg-white` : `opacity-[0.2]`}>
        
        <Navbar />
        <div className="flex items-center z-0">
          <MenuBar />
          
          <AdminTable onClick1={addAdminBackBlur} onClick2={editAdminBackBlur} onClick3={deleteAdminBackBlur} onClick4={isTableCheck} adminData={admininfo} name="Essai Super Admin Roster" />
          
        </div>
       
      </div> 
      {backgroundBlurAddAdmin?
             
             <CreateSuperAdminForm onClick1={addAdminBackBlur} onClick2={submitAdminData} onClick3={setDataOnChange} title="Create Super Admin role"/>
            : ""}

            {backgroundBlurEditAdmin?
             
        <EditSuperAdminForm onClick1={editAdminBackBlur} onClick2={submitEditData} onClick3={setDataOnChange} title="Edit an Super Admin role" header="Are you sure you want to make this Super admin inactive?"/>: ""}

        {backgroundBlurDeleteAdmin?
             <DeleteSuperAdminForm onClick1={deleteAdminBackBlur} onClick2={submitDeleteData} title1="Delete Super Admin" title2="This will permanently delete the super admin from the" />: ""}
    


      
      </>

   
    
      
        
    )
}


export default SuperAdmin;
SuperAdmin.isPublicRoute=true