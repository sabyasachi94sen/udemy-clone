import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import { loginObj } from "@/features/api";
import { SetAuthToken, SetUserType } from "@/features/helpers";
import { Button, Checkbox, Input } from "@/shared/components";
import { useBackendErrors } from "@/shared/hooks/use-backend-errors";
import { setToken } from "@/shared/utils";

interface FormValues {
  email: string;
  password: string;
}

export function LoginForm() {
  const router = useRouter();
  const { displayErrorMessages } = useBackendErrors();
  const { register, handleSubmit } = useForm<FormValues>();

  // TODO: add types
  const loginMutation = useMutation(loginObj.login, {
    onSuccess: (data) => {
      setToken("auth", res.data.token);
      setToken("userType", res.data.user_type);

      // todo: to be removed
      SetAuthToken(res.data.token);
      SetUserType(res.data.user_type);

      router.push({ pathname: "/home" });
    },

    onError: (error) => {
      displayErrorMessages(error);
    },
  });

  // const handleLogin = (loginCreds: object) => {
  //   const response = loginObj.login(loginCreds);

  //   response
  //     .then((res) => {
  //       if (res.status === 200) {
  //         SetAuthToken(res.data.token);
  //         SetUserType(res.data.user_type);
  //         toast.success("Login Successful", {
  //           position: toast.POSITION.TOP_CENTER,
  //         });
  //         setTimeout(() => {}, 1000);
  //       }
  //     })
  //     .catch((err) => {
  //       toast.error(err.response.data.errorMessage, {
  //         position: toast.POSITION.TOP_CENTER,
  //       });
  //       toast.error(err.response.data.errorType, {
  //         position: toast.POSITION.TOP_CENTER,
  //       });
  //     });
  // };

  const onSubmit = (data) => {
    loginMutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className=" relative z-10 h-auto w-[24rem] rounded-lg bg-white p-6 py-12  shadow-lg lg:left-[35%] xl:left-[45%] 2xl:left-[60%]">
        <h1 className="mb-4 text-center text-3xl font-bold  tracking-wide text-primary xl:text-3xl 2xl:text-3xl">
          PIPPAMS
        </h1>
        <h1 className="mb-6 text-center text-xl font-bold">Login</h1>
        <div className="space-y-3">
          <Input
            label="Email"
            {...register("email")}
            // TODO: to be used with form vadlidation library
            // isInvalid
            // showErrorIcon
            // invalidText="Invalid email"
          />
          <Input label="Password" {...register("password")} type="password" />
        </div>
        {/* <label
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
        </label> */}

        {/* <label
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
        </label> */}

        <div className="my-6 flex items-center justify-between">
          <div>
            <Checkbox label="Remember me" />
            {/* <label
              className="text block font-bold text-neutral"
              htmlFor="remember"
            >
              <input
                className="relative top-[2px] ml-2 h-4 w-4 leading-tight"
                id="remember"
                name="remember"
                type="checkbox"
              />
              <span className="ml-2 text-sm">Remember me</span>
            </label> */}
          </div>
          <Link href={{ pathname: "/reset-password" }}>
            <p className="cursor-pointer font-sans text-sm text-primary">
              Forgot password?
            </p>
          </Link>
        </div>

        <div className="mx-auto flex justify-center">
          <Button isLoading={loginMutation.isLoading} type="submit">
            Login
          </Button>
          {/* <input
            className="w-[80%] cursor-pointer rounded bg-[#0ea5e9 py-2 font-bold text-white hover:bg-blue-500"
            type="submit"
            value="Login"
          /> */}
        </div>
      </div>
    </form>
  );
}
