

import { ResetPasswordForm } from "@/features/auth";
import router from "next/router";
import { useEffect } from "react";
import { getLocalStorage } from "@/features/helpers";

function ResetPassword() {
  


  return (
    <main className="bg-white-100 flex h-screen items-center justify-evenly">
      <div className="absolute top-0 left-0">
        <img
          alt="bottom-wave-img"
          className="h-[12vh] w-[70%]"
          src="/images/bottomwave.png"
        />
      </div>
      <div className="relative lg:left-32 xl:left-32 2xl:left-20">
        <img
          alt="essai-img"
          className="h-[70vh] w-[100%]"
          src="/images/ESSAI.png"
        />
      </div>
      <ResetPasswordForm />
      <div className="absolute bottom-0 left-0 w-[30%] rotate-180">
        <img
          alt="top-wave-img"
          className="h-[12vh] w-[100%]"
          src="/images/topwave.png"
        />
      </div>

      <div className="absolute bottom-0 right-0">
        <img
          alt="tilted-wave-img"
          className="h-[25vh] w-[100%]"
          src="/images/tiltedwave.png"
        />
      </div>
    </main>
  );
}

export default ResetPassword;
ResetPassword.isPublicRoute = true;
