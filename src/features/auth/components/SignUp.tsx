import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import router, { useRouter } from "next/router";
import toast from "react-hot-toast";
import { FaEye, HiArrowRight } from "react-icons/fa";

import { loginObj } from "@/features/api";
import { SetAuthToken, setLocalStorage, SetUserType } from "@/features/helpers";
import { Button, Checkbox, Form, Input } from "@/shared/components";
import { useState } from "react";

type FormValues = {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
};

export function SignUpForm() {
  const router = useRouter();
  const [terms, setTerms] = useState(false);

  const handleSubmit = (data: FormValues) => {
    setLocalStorage("userInfo", JSON.stringify(data));
    if (!terms) toast.error("Please select the terms and condition");
    else router.push("/home");
  };

  return (
    <Form<FormValues> onSubmit={handleSubmit}>
      {({ register }) => (
        <div className="relative z-10 h-auto w-[28rem] rounded-2xl bg-white p-6 py-12">
          <h1 className="mb-4 text-center font-sans text-3xl  font-bold tracking-wide text-black xl:text-3xl 2xl:text-3xl">
            Create account
          </h1>
          <h3 className="text-md mb-6 text-center">
            Already have an account?{" "}
            <Link href={"/login"}>
              <span className="cursor-pointer text-cyan-500 hover:underline">
                Sign in
              </span>
            </Link>
          </h3>
          <div className="space-y-3">
            <Input
              placeholder="Email"
              className="h-[6vh] w-full rounded-xl bg-gray-50 pl-4 text-sm italic"
              type="email"
              {...register("email")}
            />

            <div className="flex h-[6vh] w-full">
              <Input
                className="h-[6vh] w-[100%] rounded-xl bg-gray-50 pl-4 text-sm italic"
                placeholder="First name"
                type="text"
                {...register("first_name")}
                required
              />
              <Input
                className="ml-1 h-[6vh] w-[100%] rounded-xl bg-gray-50 pl-4 text-sm italic"
                placeholder="Last name"
                type="text"
                {...register("last_name")}
                required
              />
            </div>
            <Input
              className="h-[6vh] w-[100%] rounded-xl bg-gray-50 pl-4 text-sm italic"
              placeholder="Password"
              {...register("password")}
              type="password"
              required
            />
            <Input
              className="h-[6vh] w-[100%] rounded-xl bg-gray-50 pl-4 text-sm italic"
              placeholder="Repeat Password"
              {...register("repeat_password")}
              type="password"
              required
            />
          </div>

          <div className="mx-auto mt-3 flex justify-center">
            <Button type="submit" width="full" className="h-[6vh] rounded-xl">
              Sign Up
            </Button>
          </div>
          <div className="my-6 flex">
            <div>
              <Checkbox
                name="terms"
                className="text-sm"
                required
                onClick={(e) => setTerms(e.target.checked)}
              />
            </div>
            <p className="text-sm">
              I have read and agree to the{" "}
              <span className="cursor-pointer text-cyan-500">
                Terms and service
              </span>
            </p>
          </div>
        </div>
      )}
    </Form>
  );
}
