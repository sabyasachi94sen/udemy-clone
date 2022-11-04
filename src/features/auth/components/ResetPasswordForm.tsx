import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import { PasswordResetObj } from "@/features/api";

interface FormValues {
  email: string;
}

interface ResponseVal {
  message: string;
}

interface PayLoad {
  email: string;
}

interface ErrorVal {
  data: {
    email: string;
  };
}

export function ResetPasswordForm() {
  const { register, handleSubmit } = useForm<FormValues>();
  const router = useRouter();

  const { mutate } = useMutation(PasswordResetObj.verify_email, {
    onSuccess: (res: ResponseVal, email: PayLoad) => {
      
   
    
      toast.success(res.message)
      setTimeout(() => {
        router.push({
          pathname: "/reset-password-otp",
          query: {
            email: email.email,
          },
        });
      }, 1000);
    },

    onError: (err: ErrorVal) => {
      
      toast.error(err.data.email)
     
    },
  });

  const handleEmail = (email: PayLoad) => {
    mutate(email);
  };

  return (
    <div className="relative z-10 h-auto w-[24rem] rounded-lg bg-white p-6 py-12 shadow-lg border-4 border-[#012060]">
      <form onSubmit={handleSubmit(handleEmail)}>
        <h1 className="mb-4 text-center font-bold text-[#0ea5e9] lg:text-3xl xl:text-4xl 2xl:text-3xl">
          PIPPAMS
        </h1>
        <h1 className="mb-6 text-center font-bold lg:text-xl xl:text-2xl 2xl:text-xl">
          Password Reset
        </h1>
        <div className="mb-12">
          <p className="mb-4 font-sans font-medium lg:text-sm xl:text-xl 2xl:text-sm">
            Enter your registered email address to receive a code for a password
            reset, sent to that email address
          </p>
          <input
            required
            className="mb-4 w-full rounded bg-gray-200 py-2 px-1 text-gray-500 outline-none xl:h-[7vh]"
            placeholder="morgan@essai.com"
            type="email"
            {...register("email")}
          />
        </div>
        <div className="mx-auto flex  justify-center  lg:mb-14 xl:mb-28 2xl:mb-28">
          <input
            className="w-[80%] cursor-pointer rounded bg-[#0ea5e9] py-2 font-bold text-white hover:bg-blue-500 xl:h-[7vh] xl:w-[90%] xl:text-xl 2xl:h-[5vh] 2xl:w-[60%] 2xl:text-sm"
            type="submit"
            value="Next"
          />
        </div>
      </form>
    </div>
  );
}
