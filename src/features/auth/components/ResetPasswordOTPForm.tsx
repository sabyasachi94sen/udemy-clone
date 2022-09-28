import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { PasswordResetObj } from "@/features/api";

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
      toast.success(res.message, {
        position: toast.POSITION.TOP_CENTER,
      });
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
      toast.error(err.data.Otp, {
        position: toast.POSITION.TOP_CENTER,
      });
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

  return (
    <div className="relative z-10 ml-[16.5vw] mt-[3vh] h-auto w-[21%] rounded-lg bg-white p-6 shadow-lg 2xl:left-[7%]">
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
