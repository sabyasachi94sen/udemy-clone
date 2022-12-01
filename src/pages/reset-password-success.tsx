import { ResetPasswordSuccessForm } from "@/features/auth";
import { getLocalStorage } from "@/features/helpers";
import router from "next/router";
import { useEffect } from "react";

function ResetPasswordSuccess() {
  return (
    <>
      <img
        src="/images/home-page.png"
        className="z-0 w-[100%] h-[105vh]"
        alt="home_page"
      />
      <div className="z-2 relative -mt-[100vh] h-[100vh] flex justify-center items-center ml-[60%]">
        <ResetPasswordSuccessForm />
      </div>
    </>
  );
}

export default ResetPasswordSuccess;
ResetPasswordSuccess.isPublicRoute = true;
