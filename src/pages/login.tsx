import { LoginForm } from "@/features/auth";

export default function LoginPage() {
  return (
    <>
      <img
        src="/images/home-page.png"
        className="z-0 w-[100%]"
        alt="home_page"
      />
      <div className="z-2 relative mt-[-125vh] ml-[65%]">
        <LoginForm />
      </div>
    </>
  );
}

LoginPage.isPublicRoute = true;
