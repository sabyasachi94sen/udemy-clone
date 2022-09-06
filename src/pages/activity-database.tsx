

import {MenuBar,Navbar} from "@/features/home"
import {activityinfo,activitypersonalinfo,ActivityDataBaseTable,ActivityDataBasePersonalTable,ActivityDataBaseForm} from "@/features/activitydb"

import { Button } from "@/shared/components"
import { useState } from "react";



function Activity(){


const [isTable,setIsTable]=useState(false)
const [addBackBlur,setAddBackBlur]=useState(false)
const [editBackBlur,setEditBackBlur]=useState(false)
const [adminDataOnChange,setAdminDataOnChange]=useState({})


const isActivityTable=()=>{
  setIsTable(isTable=>!isTable)

}


const setBackgroundBlurOnAdd=()=>{
  setAddBackBlur(addBackBlur=>!addBackBlur)
    
}

const setBackgroundBlurOnEdit=()=>{
  setEditBackBlur(editBackBlur=>!editBackBlur)
}


const setDataOnChange=(e)=>{
  

}
  


    return (
     <>
       
      <div className={(!addBackBlur && !editBackBlur)? `bg-white` : `opacity-[0.2]`}>
        
        <Navbar />
        <div className="flex items-center z-0">
          <MenuBar />
          {!isTable?<ActivityDataBaseTable activityData={activityinfo} onClick={isActivityTable} />   
         : <ActivityDataBasePersonalTable activityData={activitypersonalinfo} onClick1={setBackgroundBlurOnAdd} onClick2={setBackgroundBlurOnEdit}/>}  
        </div>
       
      </div> 

      {addBackBlur?
      <ActivityDataBaseForm onClick1={setBackgroundBlurOnAdd} name="Add an activity to the database" />: ""}

     {editBackBlur?
      <ActivityDataBaseForm onClick1={setBackgroundBlurOnEdit}  name="Edit an activity to the database" />: ""}
     
      </>

   
    
      
        
    )
}


export default Activity;
Activity.isPublicRoute=true