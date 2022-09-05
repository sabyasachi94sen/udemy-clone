

import { admininfo ,MenuBar,Navbar,CreateSuperAdminRole,EditAdminRole,DeleteSuperAdminRole,AdminTable,AddStudent } from "@/features/home"

import { Button } from "@/shared/components"
import { useState } from "react";


function Admin(){

const [backgroundBlurAddAdmin,setBackGroundBlurAddAdmin]=useState(false)
const [backgroundBlurEditAdmin,setBackGroundBlurEditAdmin]=useState(false)
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
  


    return (
     <>
       
      <div className={(!backgroundBlurAddAdmin && !backgroundBlurEditAdmin && !backgroundBlurDeleteAdmin)? `bg-white` : `opacity-[0.2]`}>
        
        <Navbar />
        <div className="flex items-center z-0">
          <MenuBar />
          <AdminTable onClick1={addAdminBackBlur} onClick2={editAdminBackBlur} onClick3={deleteAdminBackBlur} adminData={adminData} name="Essai Admin Roaster" />
     
        </div>
       
      </div> 
      {backgroundBlurAddAdmin?
             
             <CreateSuperAdminRole onClick1={addAdminBackBlur} onClick2={submitAdminData} onClick3={setDataOnChange}/>
            : ""}

            {backgroundBlurEditAdmin?
             
        <EditAdminRole onClick1={editAdminBackBlur} onClick2={submitEditData} onClick3={setDataOnChange}/>: ""}

        {backgroundBlurDeleteAdmin?
             <DeleteSuperAdminRole onClick1={deleteAdminBackBlur} onClick2={submitDeleteData}/>: ""}
             
      </>

   
    
      
        
    )
}


export default Admin;
Admin.isPublicRoute=true