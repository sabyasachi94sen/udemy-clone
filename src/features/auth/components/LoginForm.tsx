import Link from "next/link"
import { useState } from "react";

import { Button } from "@/shared/components";

export function LoginForm(){
   

  const [formData,setFormData]=useState({ email: "",password: "" })
     

  const storeFormData=(e)=>{
      setFormData({ ...formData,[e.target.name]: e.target.value })

   
  }
   
   return <form>
        
     <div className="bg-white w-[60%] h-auto p-6 rounded-lg shadow-lg relative left-[16vw] z-10">
       <h1 className="text-center text-[#0ea5e9] text-3xl font-bold mb-4">PIPPAMS</h1>
       <h1 className="text-center text-xl font-bold mb-6">Login</h1>
       <label className="text-md font-medium text-gray-900 dark:text-gray-300">Email</label>
       <input className="w-full py-2 bg-gray-200 text-gray-500 px-1 rounded outline-none mb-4"  name="email" placeholder="Email" type="email" onChange={storeFormData} />
        
       <label className="text-md font-medium text-gray-900 dark:text-gray-300" >Password</label>
       <input className="w-full py-2 bg-gray-200 text-gray-500 px-1 rounded outline-none mb-4"  name="password" placeholder="•••••••••" type="password" onChange={storeFormData} />
    
       <div className="mb-6 flex justify-between h-7">
         <div>
           <label className="block text-gray-500 font-bold text" >
             <input className="ml-2 leading-tight h-4 w-4 top-[2px] relative" id="remember" name="remember" type="checkbox" />
             <span className="text-sm ml-2">Remember me</span>
           </label>
         </div>
         <Link href="/reset-password"><p className="text-[#0ea5e9] font-sans cursor-pointer text-sm">Forgot password?</p></Link>
          
       </div>
                                
       <div className="mx-auto mb-[5vh] flex justify-center">
         <Link href="/home"><Button className="text-white bg-cyan-400 font-bold py-2 rounded w-[80%]">Login</Button></Link>
       </div>
     </div>

   </form>
}




