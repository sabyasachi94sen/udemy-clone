
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/shared/components";

export function ResetPasswordOTPForm(){
 
    const [formData,setFormData]=useState({ email: "" })
     

    const storeFormData=(e)=>{
        setFormData({ ...formData,[e.target.name]: e.target.value })
    }
  
    return <div className="bg-white w-96 h-auto p-6 rounded-lg shadow-lg relative left-[70px] z-10 mt-36">
      <h1 className="text-center text-[#0ea5e9] text-4xl font-bold mb-4">PIPPAMS</h1>
      <h1 className="text-center text-2xl font-bold mb-6">Password Reset</h1>
      <div className="mb-12">
        <p className="mb-4 font-sans font-medium">Enter the code you received in your registered email address</p> 
        <input className="w-full py-2 bg-gray-200 text-gray-500 px-1 rounded outline-none mb-4"  name="otp" placeholder="336699" type="number" onChange={storeFormData} />
      </div>
      <div className="mx-auto mb-[120px] flex justify-center">
        <Link href="/reset-password-req">
          <Button className="bg-cyan-400 text-white font-bold py-2 rounded w-[80%]">Next</Button>
        </Link>
      </div>
    </div>
}

