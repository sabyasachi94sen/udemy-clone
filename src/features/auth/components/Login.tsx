import Link from "next/link";
import router, { useRouter } from "next/router";
import toast from "react-hot-toast";

import { getLocalStorage } from "@/features/helpers";
import { Button, Form, Input } from "@/shared/components";

type FormValues = {
  email: string;
  password: string;
};


const handleSubmit = (data: FormValues) => {
  const userInfo = JSON.parse(getLocalStorage("userInfo"));

  if (userInfo?.email === data?.email && userInfo?.password === data?.password){
    toast.success("Login successful");
    router.push({
      pathname:"/home",
      query: {
        logged:"true"
      }
    })
  }
  else toast.error("Invalid credentials");
};

export function LoginForm() {
  const router = useRouter();

  return (
    <Form<FormValues> onSubmit={handleSubmit}>
      {({ register }) => (
        <div className="relative z-10 h-auto w-[28rem] rounded-2xl bg-white p-6 py-12">
          <h1 className="mb-4 text-center font-sans text-3xl  font-bold tracking-wide text-black xl:text-3xl 2xl:text-3xl">
            Login
          </h1>

          <div className="space-y-3">
            <Input
              className="h-[6vh] w-full rounded-xl bg-gray-50 pl-4 text-sm italic"
              placeholder="Email"
              type="email"
              {...register("email")}
            />

            <Input
              className="mt-5 h-[6vh] w-full rounded-xl bg-gray-50 pl-4 text-sm italic"
              placeholder="Password"
              type="password"
              {...register("password")}
              required
            />
          </div>

          <div className="mx-auto mt-8 flex justify-center">
            <Button className="h-[6vh] rounded-xl" type="submit" width="full">
              Login
            </Button>
          </div>
          <p className="mt-3 text-sm">
            Dont have a account?{" "}
            <Link href="/signup">
              <span className="cursor-pointer text-cyan-500 hover:underline">
                Sign Up
              </span>
            </Link>
          </p>
        </div>
      )}
    </Form>
  );
}
