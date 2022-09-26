import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query"
import { toast, ToastContainer } from "react-toastify";

import { PasswordResetObj } from "@/features/api";

import "react-toastify/dist/ReactToastify.css";

interface FormValues {
  password: string;
  confirm_password: string;
}



interface ResponseVal{
  password: string
}


interface ErrorVal{
  data: {
    password: string
  }
}

export function ResetPasswordReqForm() {
  const { register, handleSubmit } = useForm<FormValues>();
  const router = useRouter();
  const { email } = router.query;

  const { mutate } =useMutation(PasswordResetObj.confirm_password,{
    onSuccess: (res: ResponseVal)=>{
      toast.success(res.password, {
        position: toast.POSITION.TOP_CENTER,
      });
      setTimeout(() => {
        router.push({
          pathname: "/reset-password-success",
        });
      }, 1000);
    },

    onError:(err: ErrorVal)=>{
      toast.error(err.data.password, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  })

 
  const handleConfirmPassword = (password: FormValues) => {
   
  const mutateObj={
    email,
    ...password
  }
  

  mutate(mutateObj)

  };

  return (
    <div className="relative z-10 ml-[2vw] h-auto w-[21%] rounded-lg bg-white  p-6 shadow-lg 2xl:left-[11%]">
      <form onSubmit={handleSubmit(handleConfirmPassword)}>
        <h1 className="mb-4 text-center text-3xl font-bold text-[#0ea5e9]">
          PIPPAMS
        </h1>
        <h1 className="mb-6 text-center text-xl font-bold">Password Reset</h1>

        <div className="mb-6">
          <label
            className="text-lg font-medium text-gray-900 dark:text-gray-300"
            htmlFor="password"
          >
            Enter your new password
            <input
              required
              className="mb-4 w-full rounded bg-gray-200 py-2 px-1 text-gray-500 outline-none"
              id="password"
              placeholder="•••••••••"
              type="password"
              {...register("password")}
            />
          </label>

          <label
            className="text-lg font-medium text-gray-900 dark:text-gray-300"
            htmlFor="confirm_password"
          >
            Confirm the password
            <input
              required
              className="mb-4 w-full rounded bg-gray-200 py-2 px-1 text-gray-500 outline-none"
              id="confirm_password"
              placeholder="•••••••••"
              type="password"
              {...register("confirm_password")}
            />
          </label>
        </div>

        <div className="mx-auto mb-16 flex justify-center">
          <input
            className="w-[80%] cursor-pointer rounded bg-[#0ea5e9] py-2 font-bold text-white hover:bg-blue-500 2xl:mb-16"
            type="submit"
            value="Submit"
          />
        </div>
        <ToastContainer autoClose={2000} />
      </form>
    </div>
  );
}
