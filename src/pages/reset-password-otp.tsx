import { ResetPasswordOTPForm } from "@/features/auth";


function ResetPasswordOTP() {
  return (
    <main className="bg-white-100 flex h-screen items-center justify-between bg-[#3ab0fb]">
     
     <div className="relative w-[50%] h-[100vh] bg-[#012060] flex items-center justify-center">
        <img src="/images/ESSAI.png" className="w-[20%] h-[80vh]"/>
      </div>
      <div className="w-[50%] flex justify-center">
      <ResetPasswordOTPForm />
      </div>
      
    </main>
  );
}

export default ResetPasswordOTP;
ResetPasswordOTP.isPublicRoute = true;
