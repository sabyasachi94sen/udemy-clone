import { ResetPasswordReqForm } from "@/features/auth";

function ResetPasswordReq() {
  return (
    <>
      <img
        src="/images/Home.png"
        className="z-0 w-[100%] h-[100vh]"
        alt="home_page"
      />
      <div className="z-2 relative -mt-[100vh] h-[100vh] flex justify-center items-center ml-[60%]">
        <ResetPasswordReqForm />
      </div>
    </>
  );
}

export default ResetPasswordReq;
ResetPasswordReq.isPublicRoute = true;
