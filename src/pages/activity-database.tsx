

import {MenuBar,Navbar} from "@/features/home"
import {ActionMapForm,ActionMapStepForm,activityinfo,activitypersonalinfo,ActivityDataBaseTable,ActivityDataBaseForm,ActivityDataBasePersonalTable} from "@/features/activitydb"

import { Button } from "@/shared/components"
import { useState } from "react";



function Activity(){


const [isTable,setIsTable]=useState(false)
const [isMap,setIsMap]=useState(false)
const [addBackBlur,setAddBackBlur]=useState(false)
const [editBackBlur,setEditBackBlur]=useState(false)




const isActivityTable=()=>{
  setIsTable(isTable=>!isTable)

}


const setBackgroundBlurOnMap=()=>{
  setIsMap(isMap=>!isMap)
} 


const setBackgroundBlurOnAdd=()=>{
  setAddBackBlur(addBackBlur=>!addBackBlur)
    
}

const setBackgroundBlurOnEdit=()=>{
  setEditBackBlur(editBackBlur=>!editBackBlur)
}





  


    return (
     <>
       
      <div className={(!addBackBlur && !editBackBlur && !isMap)? `bg-white` : `opacity-[0.2]`}>
        
        <Navbar />
        <div className="flex items-center z-0">
          <MenuBar />
          {!isTable?<ActivityDataBaseTable activityData={activityinfo} onClick={isActivityTable} />   
         : <ActivityDataBasePersonalTable activityData={activitypersonalinfo} onClick1={setBackgroundBlurOnAdd} onClick2={setBackgroundBlurOnEdit} onClick3={setBackgroundBlurOnMap} />}  
        </div>
       
      </div> 

      {addBackBlur?
      <ActivityDataBaseForm onClick1={setBackgroundBlurOnAdd} name="Add an activity to the database" />: ""}

     {editBackBlur?
      <ActivityDataBaseForm onClick1={setBackgroundBlurOnEdit}  name="Edit an activity to the database" />: ""}
    
     {isMap?
 <ActionMapForm onClick1={setBackgroundBlurOnMap}/> : ""}



      </>

   
    
      
        
    )
}


export default Activity;
Activity.isPublicRoute=true