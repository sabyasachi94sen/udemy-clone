import Login from "@/features/home/components/loginComp";
import essai from "@/images/ESSAI.png"
import bottomwave from "@/images/bottomwave.png"
import topwave from "@/images/topwave.png";
import tiltedwave from "@/images/tiltedwave.png"
import Image from "next/image";
import { title } from "process";
import React, { useState } from "react";
import ResetPassword from "@/features/home/components/resetPasswordComp";
import { any,number } from "zod";
import { useRouter } from "next/router";
import { useEffect } from "react";

function LoginPage(){




    return <>
 
        
   <main className="flex items-center justify-around h-screen bg-white-100">
       <div className="absolute top-0 left-0">
          <Image src={bottomwave} />
       </div>
       <div className="relative right-36">
         <Image src={essai} height={700} />
        </div>
       <Login />
       <div className="absolute bottom-0 rotate-180 left-0">
        <Image src={topwave} />
       </div>

       <div className="absolute bottom-0 right-0">
        <Image src={tiltedwave} />
       </div>
       </main>
    
    </>
}


export default LoginPage;
LoginPage.isPublicRoute = true;