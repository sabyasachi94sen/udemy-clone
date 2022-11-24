import { ResetPasswordForm } from "@/features/auth";

function ResetPassword() {
  return (
    <>
      <img
        src="/images/home-page.png"
        className="z-0 w-[100%] h-[100vh]"
        alt="home_page"
      />
      <div className="z-2 relative h-[100vh] -mt-[100vh] pr-[5%] pt-[5%]">
        <ResetPasswordForm />
      </div>
    </>
  );
}

export default ResetPassword;
ResetPassword.isPublicRoute = true;
