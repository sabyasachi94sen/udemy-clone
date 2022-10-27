

import { LoginForm } from "@/features/auth";





export default function LoginPage() {
  return (
    <main className="bg-white-100 flex h-screen items-center justify-between bg-[#0EA5A9]">
    
      <div className="relative w-[50%] h-[100vh] bg-[#012060] flex items-center justify-center">
      <img src="/images/ESSAI.png" className="w-[20%] h-[80vh]"/>
      </div>

      <LoginForm />

     

      
    </main>
  );
}

LoginPage.isPublicRoute = true;