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
      setToken("auth", data.data.token);
      setToken("userType", data.data.user_type);

      // todo: to be removed
      SetAuthToken(data.data.token);
      SetUserType(data.data.user_type);

      router.push({ pathname: "/home" });
    },

    onError: (error) => {
      displayErrorMessages(error);
    },
  });

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

        <div className="my-6 flex items-center justify-between">
          <div>
            <Checkbox label="Remember me" />
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
        </div>
      </div>
    </form>
  );
}
