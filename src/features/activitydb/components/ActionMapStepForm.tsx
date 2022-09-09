import { Button } from "@/shared/components"
 
interface ActionMapStepFormProps{
    onClick1: ()=>void;
    onClick2: ()=>void;
    
    onChange: ()=>void;
    activity: string;
    header:string
}
 
 export function ActionMapStepForm({onClick1,onClick2,onChange,activity,header}:ActionMapStepFormProps){
    return (
        <>
        <div className="w-[45%] h-[70vh] bg-white pb-20 border-2 rounded-xl relative z-30">
        <div className="w-[70%] h-[10vh] ml-3 flex justify-around items-center">
          <div className="w-[50px] shadow-lg rounded-l-2 h-[5vh] flex items-center justify-center cursor-pointer" onClick={onClick1} >
            <img alt="back-icon" src="/images/backArrow.png"/>
          </div>
          <h1 className="text-3xl text-[#3AB0FB] font-bold ml-3">{header}</h1>
    </div>
    <h1 className="text-[#6F6F6F] text-3xl font-bold text-center mt-4 mr-48">Math Exam</h1>
    <h1 className="text-[#6F6F6F] text-3xl font-bold text-center m-6">Before registration open </h1>
        <div className="w-[70%] mx-auto">
        <div className="mt-16 flex items-center">
            <span className="text-lg font-bold text-[#344054]">Action</span>
            <input className="bg-[#EEEE] rounded-md w-[85%] h-[5vh] relative ml-10" name="action" type="text" onChange={onChange}/><br />
          </div>
          <div className="mt-14 flex items-center">
            <span className="text-lg font-bold text-[#344054]">Enter number of days</span>
            <input className="bg-[#EEEE] rounded-md w-[30%] h-[6vh] relative ml-10" name="days" type="number" onChange={onChange}/><br />
          </div>


        </div>
        <div className="mx-auto w-28 mt-12">
            
          <Button className="w-28 h-12 bg-[#3AB0FB" onClick={()=>onClick2(activity)}>Save</Button>
      
        </div>
        </div>
        </>
    )
}