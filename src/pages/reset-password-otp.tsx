import { ResetPasswordOTPForm } from "@/features/auth";

function ResetPasswordOTP() {
  return (
    <>
      <img
        src="/images/home-page.png"
        className="z-0 w-[100%] h-[105vh]"
        alt="home_page"
      />
      <div className="z-2 relative h-[100vh] -mt-[100vh] flex items-center justify-between ml-[70%]">
        <ResetPasswordOTPForm />
      </div>
    </>
  );
}

export default ResetPasswordOTP;
ResetPasswordOTP.isPublicRoute = true;
