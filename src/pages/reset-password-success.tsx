

import { ResetPasswordSuccessForm } from "@/features/auth";
import { getLocalStorage } from "@/features/helpers";
import router from "next/router";
import { useEffect } from "react";

function ResetPasswordSuccess() {



  return (
    <main className="bg-white-100 flex h-screen items-center justify-between bg-[#0EA5A9]">
  
  <div className="relative w-[50%] h-[100vh] bg-[#012060] flex items-center justify-center">
   <img src="/images/ESSAI.png" className="w-[20%] h-[80vh]"/>
      </div>
      <ResetPasswordSuccessForm />
     

    </main>
  );
}

export default ResetPasswordSuccess;
ResetPasswordSuccess.isPublicRoute = true;
