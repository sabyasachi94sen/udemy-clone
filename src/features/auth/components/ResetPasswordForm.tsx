
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/shared/components";

export function ResetPasswordForm(){
 
    const [formData,setFormData]=useState({ email: "" })
     

    const storeFormData=(e)=>{
        setFormData({ ...formData,[e.target.name]: e.target.value })
    }
  
    return <div className="bg-white lg:w-[27%] xl:w-[30%]  2xl:w-[21%] h-auto p-6 rounded-lg shadow-lg relative ml-[13.7vw] 2xl:left-[8%] mt-5 z-10">
      <h1 className="text-center text-[#0ea5e9] lg:text-3xl xl:text-4xl 2xl:text-3xl font-bold mb-4">PIPPAMS</h1>
      <h1 className="text-center lg:text-xl xl:text-2xl 2xl:text-xl font-bold mb-6">Password Reset</h1>
      <div className="mb-12">
        <p className="mb-4 font-sans font-medium lg:text-sm xl:text-xl 2xl:text-sm">Enter your registered email address to receive a code for a password reset, sent to that email address</p> 
        <input className="w-full py-2 bg-gray-200 text-gray-500 px-1 rounded outline-none mb-4 xl:h-[7vh]"  name="email" placeholder="morgan@essai.com" type="email" onChange={storeFormData} />
      </div>
      <div className="mx-auto lg:mb-14  xl:mb-28  2xl:mb-28 flex justify-center">
        <Link href="/reset-password-otp">
          <Button className="bg-cyan-400 text-white font-bold py-2 rounded w-[80%] xl:w-[90%] xl:h-[7vh] xl:text-xl 2xl:w-[60%] 2xl:h-[5vh] 2xl:text-sm">Next</Button>
        </Link>
      </div>
    </div>
}


