import Link from "next/link";

import { Button } from "@/shared/components";

export function ResetPasswordSuccessForm(){

    return <div className="bg-white w-96 h-auto p-6 rounded-lg shadow-lg relative left-40 z-10 mt-40">
      <h1 className="text-center text-[#0ea5e9] text-4xl font-bold mb-4">PIPPAMS</h1>
      <h1 className="text-center text-2xl font-bold mb-12">Password Reset</h1>
 
      <div className="mb-20">
        <div className="text-center font-sans w-52 mx-auto font-bold text-2xl">You have successfully reset your password.</div>
      </div>
      <div className="mx-auto mb-28 flex justify-center">
        <Link href="/">
          <Button className="bg-[#0ea5e9] text-white font-bold py-2 rounded w-[80%]">Next</Button>
        </Link>
      </div>
    
    </div>
}

