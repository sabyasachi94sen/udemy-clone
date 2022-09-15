import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { PasswordResetObj } from "@/features/api";
import { Button } from "@/shared/components";

interface FormValues {
  otp: number;
}

export function ResetPasswordOTPForm() {
  const { register, handleSubmit } = useForm<FormValues>();
  const router = useRouter();

  const handleOTP = (otp: object) => {
    const { email } = router.query;
    const response = PasswordResetObj.verify_otp(email as string, otp);

    response
      .then((res) => {
        toast.success(
          res.data.message,
          {
            position: toast.POSITION.TOP_CENTER,
          },
          
        );
        setTimeout(() => {
          router.push({
            pathname: "/reset-password-req",
            query: {
              email,
            },
          });
        }, 1000);
      })
      .catch((err) => {
        toast.error(
          err.response.data.Otp,
          {
            position: toast.POSITION.TOP_CENTER,
          },
        
        );
      });
  };

  return (
    <div className="relative z-10 ml-[16.5vw] mt-[3vh] h-auto w-[21%] rounded-lg bg-white p-6 shadow-lg 2xl:left-[7%]">
      <h1 className="mb-4 text-center text-3xl font-bold text-[#0ea5e9]">
        PIPPAMS
      </h1>
      <h1 className="mb-6 text-center text-xl font-bold">Password Reset</h1>
      <div className="mb-12">
        <p className="mb-4 font-sans font-medium">
          Enter the code you received in your registered email address
        </p>
        <input
          className="mb-4 w-full rounded bg-gray-200 py-2 px-1 text-gray-500 outline-none"
          placeholder="336699"
          type="number"
          {...register("otp")}
        />
      </div>
      <div className="mx-auto flex justify-center 2xl:mb-32">
        <Button
          className="w-[80%] rounded bg-cyan-400 py-2 font-bold text-white"
          onClick={handleSubmit(handleOTP)}
        >
          Next
        </Button>
      </div>
      <ToastContainer
        autoClose={2000} />
    </div>
  );
}
