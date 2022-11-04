import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import { PasswordResetObj } from "@/features/api";
import { useEffect } from "react";

interface FormValues {
  otp: string;
}

interface mutateVal {
  email: string;
  otp: string | undefined;
}

interface ResponseVal {
  message: string;
}

interface ErrorVal {
  data: {
    Otp: string;
  };
}

export function ResetPasswordOTPForm() {
  const { register, handleSubmit } = useForm<FormValues>();
  const router = useRouter();

  const { mutate } = useMutation(PasswordResetObj.verify_otp, {
    onSuccess: (res: ResponseVal, mutateObj: mutateVal) => {
      toast.success(res.message)
      setTimeout(() => {
        router.push({
          pathname: "/reset-password-req",
          query: {
            email: mutateObj.email,
          },
        });
      }, 1000);
    },

    onError: (err: ErrorVal) => {
     
      toast.error(err.data.Otp)
    },
  });
  const handleOTP = (otp: FormValues) => {

    

    const { email } = router.query;
   

    const mutateObj = {
      email,
      ...otp,
    };

    mutate(mutateObj);
  };

  useEffect(()=>{
    
    // const {email}=router.query;
    // if(email==null)
    // router.push("/login")

  },[])

  return (
    <div className="relative z-10 h-[60vh] w-[24rem] rounded-lg bg-white p-6 py-12 shadow-lg border-4 border-[#012060]">
      <form onSubmit={handleSubmit(handleOTP)}>
        <h1 className="mb-4 text-center text-3xl font-bold text-[#0ea5e9]">
          PIPPAMS
        </h1>
        <h1 className="mb-6 text-center text-xl font-bold">Password Reset</h1>
        <div className="mb-12">
          <p className="mb-4 font-sans font-medium">
            Enter the code you received in your registered email address
          </p>
          <input
            required
            className="mb-4 w-full rounded bg-gray-200 py-2 px-1 text-gray-500 outline-none"
            placeholder="336699"
            type="number"
            {...register("otp")}
          />
        </div>
        <div className="mx-auto flex justify-center 2xl:mb-32">
          <input
            className="w-[80%] cursor-pointer rounded bg-[#0ea5e9] py-2 font-bold text-white hover:bg-blue-500"
            type="submit"
            value="Next"
          />
        </div>
      </form>
    </div>
  );
}
