

import { LoginForm } from "@/features/auth";





export default function LoginPage() {
  return (
      <>
    <img src="/images/home-page.png" className="w-[100%] z-0" alt="home_page" />
    <div className="z-2 relative mt-[-125vh] ml-[65%]">
      <LoginForm />
      </div>
      </>
     
  );
}

LoginPage.isPublicRoute = true;