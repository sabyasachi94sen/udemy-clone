import { SignUpForm } from "@/features/auth";

export default function SignUp() {
  return (
    <>
   
      <div className="flex items-center justify-center bg-gradient-to-r from-pink-500 h-[100vh]">
        <SignUpForm/>
      </div>
    </>
  );
}

SignUp.isPublicRoute = true;
