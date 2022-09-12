
import {MenuBar,Navbar } from "@/features/home"
import {studentinfo,StudentForm,StudentTable} from "@/features/student"
import {DeleteSuperAdminForm} from "@/features/admin"
import { Button } from "@/shared/components"
import { useState } from "react";

function StudentRoaster(){
   
const [backgroundBlurAddStudent,setBackGroundBlurAddStudent]=useState(false)
const [backgroundBlurEditStudent,setBackGroundBlurEditStudent]=useState(false)
const [backgroundBlurDeleteStudent,setBackGroundBlurDeleteStudent]=useState(false)
const [studentData,setStudentData]=useState(studentinfo)
const [studentDataId,setStudentDataId]=useState("")
const [studentDataOnChange,setStudentDataOnChange]=useState({name: "",email: "",update: "02/11/2022",status: "Inactive",student: 90,performance: "Metrics", })

const addStudentBackBlur=()=>{
    
  setBackGroundBlurAddStudent(backgroundBlurAddStudent=>!backgroundBlurAddStudent)
}

const editStudentBackBlur=(id)=>{
  setBackGroundBlurEditStudent(backgroundBlurEditStudent=>!backgroundBlurEditStudent)

  setStudentDataId(id)
}


const deleteStudentBackBlur=(id)=>{
  setBackGroundBlurDeleteStudent(backgroundBlurDeleteStudent=>!backgroundBlurDeleteStudent)

  setStudentDataId(id)
}


const submitStudentData=()=>{

  setBackGroundBlurAddStudent(backgroundBlurAddStudent=>!backgroundBlurAddStudent)
  const tempArr=studentData;
  tempArr.push(studentDataOnChange)
  setStudentData(tempArr)
       
  
}


const submitEditData=()=>{
  setBackGroundBlurEditStudent(backgroundBlurEditStudent=>!backgroundBlurEditStudent)
  const tempArr=studentData;
  tempArr[studentDataId]=studentDataOnChange;
}

const submitDeleteData=()=>{

  setBackGroundBlurDeleteStudent(backgroundBlurDeleteStudent=>!backgroundBlurDeleteStudent)
  const tempArr=studentData;
  tempArr.splice(studentDataId,1)
  setStudentData(tempArr)

}

const setDataOnChange=(e)=>{
  if(backgroundBlurAddStudent)
   setStudentOnChange({...studentDataOnChange, status: "Inactive" ,id: studentData[studentData.length-1].id+1,[e.target.name]: e.target.value})
   else if(backgroundBlurEditStudent)
   setStudentDataOnChange({...studentDataOnChange,id: studentDataId,[e.target.name]: e.target.value})

}
  


    return (
     <>
       
     <div className={(!backgroundBlurAddStudent && !backgroundBlurEditStudent && !backgroundBlurDeleteStudent)? `bg-white` : `opacity-[0.2]`}>
        
        <Navbar />
        <div className="flex items-center z-0">
          <MenuBar />
          <StudentTable onClick1={addStudentBackBlur} onClick2={editStudentBackBlur} onClick3={deleteStudentBackBlur} studentData={studentData} name="Essai Student Roster" />
     
        </div>
       
      </div> 
      {backgroundBlurAddStudent?
             
    <StudentForm onClick1={addStudentBackBlur} title="Add a student to the roster" />: ""}

            {backgroundBlurEditStudent?
             
          <StudentForm onClick1={editStudentBackBlur}  title="Update a student to the roster"/> : ""}
          
        {backgroundBlurDeleteStudent?
             <DeleteSuperAdminForm onClick1={deleteStudentBackBlur} onClick2={submitDeleteData}  title1="Delete Student" title2="This will permanently delete the student from the" />: ""} 
             {/* <AddStudent /> */}
     

        </>
    )
}


export default StudentRoaster;
StudentRoaster.isPublicRoute=true