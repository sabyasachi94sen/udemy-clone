import Image from "next/future/image";

import { LoginForm } from "@/features/auth";

import bottomwave from "../../public/images/bottomwave.png";
import ESSAI from "../../public/images/ESSAI.png";
import tiltedwave from "../../public/images/tiltedwave.png";
import topwave from "../../public/images/topwave.png";

export default function LoginPage() {
  return (
    <main className="bg-white-100 flex h-screen items-center justify-evenly">
      <div className="absolute top-0 left-0">
        <Image
          alt="bottom-wave-img"
          className="h-[12vh] w-[70%]"
          src={bottomwave}
        />
      </div>
      <div className="relative lg:left-32 xl:left-32 2xl:left-20">
        <Image alt="essai-img" className="h-[70vh] w-[100%]" src={ESSAI} />
      </div>

      <LoginForm />

      <div className="absolute bottom-0 left-0 w-[30%] rotate-180">
        <Image alt="top-wave-img" className="h-[12vh] w-[100%]" src={topwave} />
      </div>

      <div className="absolute bottom-0 right-0">
        <Image
          alt="tilted-wave-img"
          className="h-[25vh] w-[100%]"
          src={tiltedwave}
        />
      </div>
    </main>
  );
}

LoginPage.isPublicRoute = true;