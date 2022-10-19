import { ResetPasswordReqForm } from "@/features/auth";


function ResetPasswordReq() {

 
  return (
    <main className="bg-white-100 flex h-screen items-center justify-between">
   
   <div className="relative w-[50%] h-[100vh] bg-[#012060] flex items-center justify-center">
   <img src="/images/ESSAI.png" className="w-[20%] h-[80vh]"/>
      </div>
      <ResetPasswordReqForm />
     

     
       
    </main>
  );
}

export default ResetPasswordReq;
ResetPasswordReq.isPublicRoute = true;
