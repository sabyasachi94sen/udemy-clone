
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/shared/components";

export function ResetPasswordForm(){
 
    const [formData,setFormData]=useState({ email: "" })
     

    const storeFormData=(e)=>{
        setFormData({ ...formData,[e.target.name]: e.target.value })
    }
  
  
  

    return <div className="bg-white w-96 h-auto p-6 rounded-lg shadow-lg relative left-40 z-10 mt-36">
      <h1 className="text-center text-[#0ea5e9] text-4xl font-bold mb-4">PIPPAMS</h1>
      <h1 className="text-center text-2xl font-bold mb-6">Password Reset</h1>
      <div className="mb-12">
        <p className="mb-4 font-sans font-medium">Enter your registered email address to receive a code for a password reset, sent to that email address</p> 
        <input className="w-full py-2 bg-gray-200 text-gray-500 px-1 rounded outline-none mb-4"  name="email" placeholder="morgan@essai.com" type="email" onChange={storeFormData} />
      </div>
      <div className="mx-auto mb-28 flex justify-center">
        <Link href="/reset-password-req">
          <Button className="bg-[#0ea5e9] text-white font-bold py-2 rounded w-[80%]">Next</Button>
        </Link>
      </div>
    </div>
}


