 import { Button } from "@/shared/components"
 

 interface CreateSuperAdminFormProps{
    onClick1: ()=>void;
    onClick2: ()=>void;
    onClick3: ()=>void;
    title: string
 }
 
 
 export  function CreateSuperAdminForm({ onClick1,onClick2 ,onClick3,title}: CreateSuperAdminFormProps){

    return (
      <div className="w-[40%] h-auto rounded-xl bg-[#FDFEFF] border-2 top-[5vh] right-[10vw] mx-auto -mt-[140vh] left-[2vw] relative z-10">
        <div className="w-[90%] h-[10vh] mx-auto flex justify-around items-center">
          <div className="w-[50px] shadow-lg rounded-l-2 h-[5vh] flex items-center justify-center cursor-pointer" onClick={onClick1}>
            <img alt="back-icon" src="/images/backArrow.png"/>
          </div>
          <h1 className="text-3xl text-[#3AB0FB] font-bold ml-3">{title}</h1>
        </div>
        <div className="w-[90%] h-[20vh] p-2 mx-auto leading-7 font-bold ml-10 text-[1rem] font-sans text-[#344054]">
          <div className="mt-2 flex">
            <span>Name</span>
            <input className="bg-[#EEEE] rounded-md w-[85%] h-[5vh] relative ml-10" name="name" type="text" onChange={onClick3} /><br />
          </div>

          <div className="mt-8 flex">
            <span>Email</span>
            <input className="bg-[#EEEE] rounded-md w-[85%] h-[5vh] relative ml-11" name="email" type="email" onChange={onClick3} /><br />
          </div>

        </div>
        <div className="mx-auto w-28 mt-2 mb-10">
          <Button className="w-28 h-12 bg-[#3AB0FB" onClick={onClick2} >Save</Button>
        </div>

      </div>
    )
}
