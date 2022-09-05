import Image from "next/image";

import { ResetPasswordSuccessForm } from "@/features/auth";


function ResetPasswordSuccess(){

    return <main className="flex items-center justify-evenly h-screen bg-white-100">
      <div className="absolute top-0 left-0">
        <Image height={80} src="/images/bottomwave.png"  width={400}  />
      </div>
      <div className="relative left-[1.75vw]">
        <Image height={500} src="/images/ESSAI.png" width={100} />
      </div>
      <ResetPasswordSuccessForm />
      <div className="absolute bottom-0 rotate-180 left-0">
        <Image height={80}  src="/images/topwave.png" width={400}  />
      </div>

      <div className="absolute bottom-0 right-0">
        <Image height={200} src="/images/tiltedwave.png" width={400} />
      </div>
    </main>
}



export default ResetPasswordSuccess;
ResetPasswordSuccess.isPublicRoute = true;