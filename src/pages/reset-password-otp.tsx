import { ResetPasswordOTPForm } from "@/features/auth";


function ResetPasswordOTP() {
  return (
   
    
   <>

<img src="/images/home-page.png" className="w-[100%] z-0" alt="home_page" />
<div className="z-2 relative mt-[-125vh] ml-[65%]">
<ResetPasswordOTPForm />
  </div>
  </>
  );
}

export default ResetPasswordOTP;
ResetPasswordOTP.isPublicRoute = true;
