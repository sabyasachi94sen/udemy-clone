
import { useState } from "react"

import {ActionMapStepForm} from "@/features/activitydb"


interface ActionMapFormProps{
    onClick1: ()=>void
}


export function ActionMapForm({onClick1}: ActionMapFormProps){

const [backBlurAddStep,setBackBlurOnAddStep]=useState(false)
const [backBlurEditStep,setBackBlurOnEditStep]=useState(false)
const [storeStepData,setStoreStepData]=useState({action: "",days: ""})
const [count,setCount]=useState(0)
const [stepDataId,setStepDataId]=useState("")
const [activityName,setActivityName]=useState("")
const [storeMapData,setMapData]=useState({
  before_register:[],
  after_register: [],
  before_deadline: [],
  after_deadline: [],
  before_activity:[]
})

const backgroundBlurOnAddStep=(activity_name)=>{
    setBackBlurOnAddStep(backBlurAddStep=>!backBlurAddStep)
    setActivityName(activity_name)
}


const backgroundBlurOnEditStep=(val,activity_name)=>{
    setBackBlurOnEditStep(backBlurEditStep=>!backBlurEditStep)
    setActivityName(activity_name)
    setStepDataId(val)
}

const submitStepData=(activity_name)=>{

    setBackBlurOnAddStep(backBlurAddStep=>!backBlurAddStep)
    if(activity_name=="before_register"){
        const tempObj=storeMapData;
        tempObj.before_register.push(storeStepData);
        setMapData(tempObj)
    }
    else if(activityName=="after_register"){
        const tempObj=storeMapData;
        tempObj.after_register.push(storeStepData);
        setMapData(tempObj)
    }
    else if(activity_name=="before_deadline"){
        const tempObj=storeMapData;
        tempObj.before_deadline.push(storeStepData);
        setMapData(tempObj)
    }
    else if(activity_name=="after_deadline"){
        const tempObj=storeMapData;
        tempObj.after_deadline.push(storeStepData);
        setMapData(tempObj)
    }
    else if(activity_name=="before_activity"){
        const tempObj=storeMapData;
        tempObj.before_activity.push(storeStepData);
        setMapData(tempObj)
    }
}


const editStepData=(activity_name)=>{
    setBackBlurOnEditStep(backBlurAddStep=>!backBlurAddStep)
    if(activity_name=="before_register"){
        const tempObj=storeMapData;
        tempObj.before_register[stepDataId]=storeStepData;
        setMapData(tempObj)
    }
    else if(activityName=="after_register"){
        const tempObj=storeMapData;
        tempObj.after_register[stepDataId]=storeStepData;
        setMapData(tempObj)
    }
    else if(activity_name=="before_deadline"){
        const tempObj=storeMapData;
        tempObj.before_deadline[stepDataId]=storeStepData;
        setMapData(tempObj)
    }
    
    else if(activity_name=="after_deadline"){
        const tempObj=storeMapData;
        tempObj.after_deadline[stepDataId]=storeStepData;
        setMapData(tempObj)
    }
    
    else if(activity_name=="before_activity"){
        const tempObj=storeMapData;
        tempObj.before_activity[stepDataId]=storeStepData;
        setMapData(tempObj)
    }
    
}





const deleteStepData=(index,activity_name)=>{
     if(activity_name=="before_register"){
        const tempObj=storeMapData;
        tempObj.before_register.splice(index,1)
        setMapData(tempObj)
        setCount(count+1)
     }
     else if(activity_name=="after_register"){
        const tempObj=storeMapData;
        tempObj.after_register.splice(index,1)
        setMapData(tempObj)
        setCount(count+1)
     } else if(activity_name=="before_deadline"){
        const tempObj=storeMapData;
        tempObj.before_deadline.splice(index,1)
        setMapData(tempObj)
        setCount(count+1)
     } else if(activity_name=="after_deadline"){
        const tempObj=storeMapData;
        tempObj.after_deadline.splice(index,1)
        setMapData(tempObj)
        setCount(count+1)
     } else if(activity_name=="before_activity"){
        const tempObj=storeMapData;
        tempObj.before_activity.splice(index,1)
        setMapData(tempObj)
        setCount(count+1)
     }
}



const stepDataOnChange=(e)=>{
    
  
   setStoreStepData({...storeStepData,[e.target.name]: e.target.value})
}





    return (
     <>
     <div className={`w-[50%] h-[90vh] rounded-lg bg-white border-2 overflow-y-scroll mx-auto -mt-[150vh] relative z-10 ${!backBlurAddStep && !backBlurEditStep?``: `opacity-[0.7]`} `} >
        <div className="w-[90%] h-[10vh] mx-auto flex justify-around items-center">
            <div onClick={onClick1} className="w-[50px] shadow-lg rounded-l-2 h-[5vh] flex items-center justify-center cursor-pointer" >
                <img alt="back-icon" src="/images/backArrow.png"/>
             </div>
          <h1 className="text-3xl text-[#3AB0FB] font-bold ml-3 relative right-11">View or update Action Map</h1>
      </div>
        <h1 className="text-[#6F6F6F] text-2xl font-bold text-center">Activity Name: Math Exam</h1>
        <div className="w-[90%] mx-auto h-auto  rounded-lg mt-10 bg-[#F2F0F0]">
             <div className="flex justify-between pl-10 pr-10 h-[10vh] items-center w-[100%]">
                 <h1  className="text-[#6F6F6F] text-2xl font-bold text-center">Before registration open </h1>
                 <button onClick={()=>backgroundBlurOnAddStep("before_register")} className="bg-cyan-500 rounded-md w-[20%] h-[6vh] text-[18px] text-center flex justify-center items-center text-white hover:bg-blue-600">Add step&nbsp; <img alt="plus-icon" src="/images/plus.png" /> </button>
              </div>
        
          {storeMapData.before_register.map((item,index)=>{
            return <div className="flex w-full h-[8vh]  mt-2">
                <div className="flex w-[69%] h-[7vh] text-xl items-center justify-around">
                <p>Action: <span className="font-bold">{item.action}</span></p>
                <p>Number of days: <span className="font-bold">{item.days}</span></p>
                </div>
                <div className="flex w-[30%] items-center justify-around h-[7vh]">
                <button onClick={()=>backgroundBlurOnEditStep(index,"before_register")} className="bg-cyan-500 rounded-md w-[40%] h-[5vh] text-[18px] text-center flex justify-center items-center text-white hover:bg-blue-600">Edit </button>
                <button onClick={()=>deleteStepData(index,"before_register")}className="bg-[#6F6F6F] rounded-md w-[40%] h-[5vh] text-[18px] text-center flex justify-center items-center text-white hover:bg-blue-600">Delete </button>
             </div>
                  
            </div>
          })}
          
        </div>


        <div className="w-[90%] mx-auto h-auto  rounded-lg mt-10 bg-[#F2F0F0]">
             <div className="flex justify-between pl-10 pr-10 h-[10vh] items-center w-[100%]">
               
                    <h1  className="text-[#6F6F6F] text-2xl font-bold text-center"> After registration open</h1>
                    <button onClick={()=>backgroundBlurOnAddStep("after_register")} className="bg-cyan-500 rounded-md w-[20%] h-[6vh] text-[18px] text-center flex justify-center items-center text-white hover:bg-blue-600">Add step&nbsp; <img alt="plus-icon" src="/images/plus.png" /> </button>
              </div>

              {storeMapData.after_register.map((item,index)=>{
            return <div className="flex w-full h-[8vh]  mt-2">
                <div className="flex w-[69%] h-[7vh] text-xl justify-around items-center justify-between">
                <p>Action: <span className="font-bold">{item.action}</span></p>
                <p>Number of days: <span className="font-bold">{item.days}</span></p>
                </div>
                <div className="flex w-[30%] items-center justify-around h-[7vh]">
                <button onClick={()=>backgroundBlurOnEditStep(index,"after_register")} className="bg-cyan-500 rounded-md w-[40%] h-[5vh] text-[18px] text-center flex justify-center items-center text-white hover:bg-blue-600">Edit </button>
                <button onClick={()=>deleteStepData(index,"after_register")} className="bg-[#6F6F6F] rounded-md w-[40%] h-[5vh] text-[18px] text-center flex justify-center items-center text-white hover:bg-blue-600">Delete </button>
             </div>
                  
            </div>
          })}
           
        </div>

         
        <div className="w-[90%] mx-auto h-auto  rounded-lg mt-10 bg-[#F2F0F0]">
        <div className="flex justify-between pl-10 pr-10 h-[10vh] items-center w-[100%] mx-auto ">
           <h1  className="text-[#6F6F6F] text-2xl font-bold text-center">Before application deadline</h1>
           <button onClick={()=>backgroundBlurOnAddStep("before_deadline")} className="bg-cyan-500 rounded-md w-[20%] h-[6vh] text-[18px] text-center flex justify-center items-center text-white hover:bg-blue-600">Add step&nbsp; <img alt="plus-icon" src="/images/plus.png" /> </button>
        </div>
        {storeMapData.before_deadline.map((item,index)=>{
            return <div className="flex w-full h-[8vh] mt-2">
                <div className="flex w-[69%] h-[7vh] text-xl justify-around items-center justify-between">
                <p>Action: <span className="font-bold">{item.action}</span></p>
                <p>Number of days: <span className="font-bold">{item.days}</span></p>
                </div>
                <div className="flex w-[30%] items-center justify-around h-[7vh]">
                <button onClick={()=>backgroundBlurOnEditStep(index,"before_deadline")} className="bg-cyan-500 rounded-md w-[40%] h-[5vh] text-[18px] text-center flex justify-center items-center text-white hover:bg-blue-600">Edit </button>
                <button onClick={()=>deleteStepData(index,"before_deadline")} className="bg-[#6F6F6F] rounded-md w-[40%] h-[5vh] text-[18px] text-center flex justify-center items-center text-white hover:bg-blue-600">Delete </button>
             </div>
                  
            </div>
          })}
        </div>


       <div className="w-[90%] mx-auto h-auto pl-10 pr-10 rounded-lg mt-10 bg-[#F2F0F0]">
        <div className="flex justify-between h-[10vh] items-center w-[100%] mx-auto ">
           <h1  className="text-[#6F6F6F] text-2xl font-bold text-center">After application deadline  </h1>
           <button onClick={()=>backgroundBlurOnAddStep("after_deadline")} className="bg-cyan-500 rounded-md w-[20%] h-[6vh] text-[18px] text-center flex justify-center items-center text-white hover:bg-blue-600">Add step&nbsp; <img alt="plus-icon" src="/images/plus.png" /> </button>
        </div>
        {storeMapData.after_deadline.map((item,index)=>{
            return <div className="flex w-full h-[8vh] mt-2">
                <div className="flex w-[69%] h-[7vh] text-xl justify-around items-center justify-between">
                <p>Action: <span className="font-bold">{item.action}</span></p>
                <p>Number of days: <span className="font-bold">{item.days}</span></p>
                </div>
                <div className="flex w-[30%] items-center justify-around h-[7vh]">
                <button onClick={()=>backgroundBlurOnEditStep(index,"after_deadline")} className="bg-cyan-500 rounded-md w-[40%] h-[5vh] text-[18px] text-center flex justify-center items-center text-white hover:bg-blue-600">Edit </button>
                <button onClick={()=>deleteStepData(index,"after_deadline")}className="bg-[#6F6F6F] rounded-md w-[40%] h-[5vh] text-[18px] text-center flex justify-center items-center text-white hover:bg-blue-600">Delete </button>
             </div>
                  
            </div>
          })}
        </div>
      

      <div className="w-[90%] mx-auto h-auto  rounded-lg mt-10 bg-[#F2F0F0]">

        <div className="flex justify-between pl-10 pr-10 h-[10vh] items-center w-[100%] mx-auto">
           <h1  className="text-[#6F6F6F] text-2xl font-bold text-center">Before activity start date  </h1>
           <button  onClick={()=>backgroundBlurOnAddStep("before_activity")} className="bg-cyan-500 rounded-md w-[20%] h-[6vh] text-[18px] text-center flex justify-center items-center text-white hover:bg-blue-600">Add step&nbsp; <img alt="plus-icon" src="/images/plus.png" /> </button>
        </div>
        {storeMapData.before_activity.map((item,index)=>{
            return <div className="flex w-full h-[8vh]  mt-2">
                <div className="flex w-[69%] h-[7vh] text-xl justify-around items-center justify-between">
                <p>Action: <span className="font-bold">{item.action}</span></p>
                <p>Number of days: <span className="font-bold">{item.days}</span></p>
                </div>
                <div className="flex w-[30%] items-center justify-around h-[7vh]">
                <button onClick={()=>backgroundBlurOnEditStep(index,"before_activity")} className="bg-cyan-500 rounded-md w-[40%] h-[5vh] text-[18px] text-center flex justify-center items-center text-white hover:bg-blue-600">Edit </button>
                <button onClick={()=>deleteStepData(index,"before_activity")} className="bg-[#6F6F6F] rounded-md w-[40%] h-[5vh] text-[18px] text-center flex justify-center items-center text-white hover:bg-blue-600">Delete </button>
             </div>
                  
            </div>
          })}
        </div>


        </div>

        {backBlurAddStep || backBlurEditStep?
        <div className="w-full h-[160vh] -mt-[100vh] pt-32 z-20 relative flex justify-center ">
        <ActionMapStepForm onClick1={backBlurAddStep?backgroundBlurOnAddStep: backgroundBlurOnEditStep} onChange={stepDataOnChange} onClick2={backBlurAddStep?submitStepData: editStepData}  activity={activityName} header={backBlurAddStep?"Add Action Map Step" : "Edit Action Map Step"}/>
        </div>: ""}

      
     
     </>
    )
}