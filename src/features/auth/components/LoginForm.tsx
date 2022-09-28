import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { toast, ToastContainer } from "react-toastify";

import { loginObj } from "@/features/api";
import { SetAuthToken, SetUserType, StoreLoginCreds } from "@/features/helpers";
import { useAuth } from "@/shared/stores/auth.context";
import "react-toastify/dist/ReactToastify.css";

interface FormValues {
  email: string;
  password: string;
}

interface ResponseVal {
  token: string;
  user_id: number;
  email: string;
  password_verification: boolean;
  user_type: string;
}

interface ErrorVal {
  data: {
    errorType: string;
    errorMessage: string;
  };
}

export function LoginForm() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormValues>();
  const { refetchAuthUser } = useAuth();

  const { mutate } = useMutation(loginObj.login, {
    onSuccess: (res: ResponseVal, loginCreds: FormValues) => {
      StoreLoginCreds(loginCreds);
      SetAuthToken(res.token);
      SetUserType(res.user_type);
      refetchAuthUser();
      toast.success("Login Successful", {
        position: toast.POSITION.TOP_CENTER,
      });
      setTimeout(() => {
        router.push("/home");
      }, 1000);
    },

    onError: (err: ErrorVal) => {
      toast.error(err && err?.data && err.data?.errorMessage, {
        position: toast.POSITION.TOP_CENTER,
      });
      toast.error(err && err?.data && err.data?.errorType, {
        position: toast.POSITION.TOP_CENTER,
      });
    },
  });
  const handleLogin = (loginCreds: FormValues) => {
    mutate(loginCreds);
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <div className="relative z-10 h-auto w-[60%] rounded-lg bg-white p-6 shadow-lg lg:left-[35%]  xl:left-[45%] 2xl:left-[60%]">
        <h1 className="lg: mb-4 text-center text-3xl font-bold  text-[#0ea5e9] xl:text-3xl 2xl:text-3xl">
          PIPPAMS
        </h1>
        <h1 className="mb-6 text-center text-xl font-bold ">Login</h1>
        <label
          className="text-md font-medium text-gray-900 dark:text-gray-300"
          htmlFor="email"
        >
          Email
          <input
            required
            className="mb-4 w-full rounded bg-gray-200 py-2 px-1 text-gray-500 outline-none"
            id="email"
            placeholder="Email"
            type="email"
            {...register("email")}
          />
        </label>

        <label
          className="text-md font-medium text-gray-900 dark:text-gray-300"
          htmlFor="password"
        >
          Password
          <input
            required
            className="mb-4 w-full rounded bg-gray-200 py-2 px-1 text-gray-500 outline-none"
            id="password"
            placeholder="•••••••••"
            type="password"
            {...register("password")}
          />
        </label>

        <div className="mb-6 flex h-7 justify-between">
          <div>
            <label
              className="text block font-bold text-gray-500"
              htmlFor="remember"
            >
              <input
                className="relative top-[2px] ml-2 h-4 w-4 leading-tight"
                id="remember"
                name="remember"
                type="checkbox"
              />
              <span className="ml-2 text-sm">Remember me</span>
            </label>
          </div>
          <Link href="/reset-password">
            <p className="cursor-pointer font-sans text-sm text-[#0ea5e9]">
              Forgot password?
            </p>
          </Link>
        </div>

        <div className="mx-auto flex justify-center lg:mb-[8vh] xl:mb-[18vh] 2xl:mb-[16vh]">
          <input
            className="w-[80%] cursor-pointer rounded bg-[#0ea5e9] py-2 font-bold text-white hover:bg-blue-500"
            type="submit"
            value="Login"
          />
        </div>
        <ToastContainer autoClose={2000} />
      </div>
    </form>
  );
}
