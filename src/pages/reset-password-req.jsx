import { ResetPasswordReqForm } from "@/features/auth";

function ResetPasswordReq() {
  return (
    <>
      <img
        src="/images/home-page.png"
        className="z-0 w-[100%] h-[100vh]"
        alt="home_page"
      />
      <div className="z-2 relative -mt-[100vh] pr-[5%] pt-[5%]">
        <ResetPasswordReqForm />
      </div>
    </>
  );
}

export default ResetPasswordReq;
ResetPasswordReq.isPublicRoute = true;
