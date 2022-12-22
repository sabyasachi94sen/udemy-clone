import { LoginForm } from "@/features/auth";

export default function Login() {
  return (
    <>
   
      <div className="flex items-center justify-center bg-gradient-to-tr from-pink-500 to-white h-[100vh]">
        <LoginForm/>
      </div>
    </>
  );
}

Login.isPublicRoute = true;
