

import Image from "next/image";

import { LoginForm } from "@/features/auth";



function LoginPage(){




    return <main className="flex items-center justify-around h-screen bg-white-100">
      <div className="absolute top-0 left-0">
        <Image height={80} src="/images/bottomwave.png"  width={400}  />
      </div>
      <div className="relative right-36">
        <Image height={600} src="/images/ESSAI.png" width={150} />
      </div>
      <LoginForm />
      <div className="absolute bottom-0 rotate-180 left-0">
        <Image height={80}  src="/images/topwave.png" width={400}  />
      </div>

      <div className="absolute bottom-0 right-0">
        <Image height={200} src="/images/tiltedwave.png" width={400} />
      </div>
    </main>
}


export default LoginPage;
LoginPage.isPublicRoute = true;