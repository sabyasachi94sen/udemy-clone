import { LoginForm } from "@/features/auth";

export default function LoginPage() {
  return (
    <>
      <img
        src="/images/Home.png"
        className="z-0 w-[100%] h-[100vh]"
        alt="home_page"
      />
      <div className="z-2 relative h-[100vh] -mt-[100vh] flex justify-between items-center ml-[60%]">
        <LoginForm />
      </div>
    </>
  );
}

LoginPage.isPublicRoute = true;
