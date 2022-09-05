import Link from "next/link";
import { useState } from "react";

import { Button } from "@/shared/components";

export function ResetPasswordReqForm(){

    const [formData,setFormData]=useState({ password: "",confirmPassword: "" })

     const storeFormData=(e)=>{
      setFormData({ ...formData,[e.target.name]: e.target.value })
  }





    return <div className="bg-white w-96 h-auto p-6 rounded-lg shadow-lg relative left-[70px] z-10 mt-36">
      <h1 className="text-center text-[#0ea5e9] text-4xl font-bold mb-4">PIPPAMS</h1>
      <h1 className="text-center text-2xl font-bold mb-6">Password Reset</h1>
 
      <div className="mb-6">
        <label className="text-lg font-medium text-gray-900 dark:text-gray-300" htmlFor="password">Enter your new password</label>
        <input className="w-full py-2 bg-gray-200 text-gray-500 px-1 rounded outline-none mb-4"  name="password" placeholder="•••••••••" type="password" onChange={storeFormData}/>
        
        <label className="text-lg font-medium text-gray-900 dark:text-gray-300" >Confirm the password</label>
        <input className="w-full py-2 bg-gray-200 text-gray-500 px-1 rounded outline-none mb-4"  name="confirmPassword" placeholder="•••••••••" type="password"  onChange={storeFormData}/>
      </div>
        
      <div className="mx-auto mb-24 flex justify-center">
        <Link href="/reset-password-success">
          <Button className="bg-cyan-400 text-white font-bold py-2 rounded w-[80%]">Submit</Button>
        </Link>
      </div>
    
    </div>
}

