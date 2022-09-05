import Image from "next/image";

import { ResetPasswordOTPForm } from "@/features/auth";


function ResetPasswordOTP(){

    return <main className="flex items-center justify-evenly h-screen bg-white-100">
      <div className="absolute top-0 left-0">
        <Image height={80} src="/images/bottomwave.png"  width={400}  />
      </div>
      <div className="relative left-[0.9vw]">
        <Image height={500} src="/images/ESSAI.png" width={100} />
      </div>
      <ResetPasswordOTPForm/>
      <div className="absolute bottom-0 rotate-180 left-0">
        <Image height={80}  src="/images/topwave.png" width={400}  />
      </div>

      <div className="absolute bottom-0 right-0">
        <Image height={200} src="/images/tiltedwave.png" width={400} />
      </div>
    </main>
}



export default ResetPasswordOTP;
ResetPasswordOTP.isPublicRoute = true;