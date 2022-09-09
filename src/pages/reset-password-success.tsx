import Image from "next/image";

import { ResetPasswordSuccessForm } from "@/features/auth";


function ResetPasswordSuccess(){

    // return <main className="flex items-center justify-evenly h-screen bg-white-100">
    //   <div className="absolute top-0 left-0">
    //     <Image height={80} src="/images/bottomwave.png"  width={400}  />
    //   </div>
    //   <div className="relative left-[1.75vw]">
    //     <Image height={500} src="/images/ESSAI.png" width={100} />
    //   </div>
    //   <ResetPasswordSuccessForm />
    //   <div className="absolute bottom-0 rotate-180 left-0">
    //     <Image height={80}  src="/images/topwave.png" width={400}  />
    //   </div>

    //   <div className="absolute bottom-0 right-0">
    //     <Image height={200} src="/images/tiltedwave.png" width={400} />
    //   </div>
    // </main>

    return <main className="flex items-center justify-evenly h-screen bg-white-100">
      <div className="absolute top-0 left-0">
        <img src="/images/bottomwave.png" className="w-[70%] h-[12vh]" />
       
      </div>
      <div className="relative lg:left-32 xl:left-32 2xl:left-[6.99%]">
       
        <img src="/images/ESSAI.png" className="w-[100%] h-[70vh]" />
      </div>
      <ResetPasswordSuccessForm />
      <div className="absolute bottom-0 rotate-180 left-0 w-[30%]">
       
        <img src="/images/topwave.png" className="w-[100%] h-[12vh]" />
      </div>

      <div className="absolute bottom-0 right-0">
        
        <img src="/images/tiltedwave.png" className="w-[100%] h-[25vh]" />
      </div>
    </main>
}



export default ResetPasswordSuccess;
ResetPasswordSuccess.isPublicRoute = true;