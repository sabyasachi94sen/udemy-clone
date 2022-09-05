import { Button } from "@/shared/components"


interface DeleteSuperAdminRoleProps{
 
    onClick1: ()=>void;
    onClick2: ()=>void


}
 export function DeleteSuperAdminRole({onClick1,onClick2}: DeleteSuperAdminRoleProps){

    return (
        <div className="w-[30%] h-[32vh] rounded-2xl border-2 mx-auto bg-[#FDFEFF] -mt-[100vh] z-10 relative">
            
            <h1 className="text-4xl text-[#3AB0FB] font-bold mr-16 text-center mt-9 ml-10">Delete Super admin</h1>
            <div className="w-[88%] mx-auto mt-5 text-black text-center font-bold text-xl">
             <h4>Are you sure ? </h4>
             <h4>This will permanently delete the super admin from the</h4>
             <h4>database.</h4>
             </div>
          
           <div className="flex justify-around items-center mt-10 w-[60%] mx-auto">
 
          <Button  className="w-[40%] h-[5.7vh] bg-cyan-500" onClick={onClick2}>Delete</Button>
          <div className="w-[40%] h-[5.7vh] border-4 border-[#ADA7A7] rounded-md box-border">
          <Button  className="w-[100%] h-[5vh] rounded-md bg-yellow-50 text-[#ADA7A7] hover:bg-slate-100" onClick={onClick1}>Cancel</Button>
          </div>
           </div>
        
        </div>
    )
}