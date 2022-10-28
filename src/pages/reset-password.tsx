

import { ResetPasswordForm } from "@/features/auth";



function ResetPassword() {
  


  return (
    <main className="bg-white-100 flex h-screen items-center justify-between bg-[#3ab0fb]">
    
    <div className="relative w-[50%] h-[100vh] bg-[#012060] flex items-center justify-center">
    <img src="/images/ESSAI.png" className="w-[20%] h-[80vh]"/>
      </div>

      <div className="w-[50%] flex justify-center">
      <ResetPasswordForm />
      </div>
     

     
    
    </main>
  );
}

export default ResetPassword;
ResetPassword.isPublicRoute = true;
