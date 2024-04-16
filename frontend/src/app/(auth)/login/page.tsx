"use client";

import Link from "next/link";
import Input from "../../../components/Input";
import { useLoginForm } from "../../../hooks/useLoginForm";

const Login = () => {
  const { submitHandler } = useLoginForm();

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-200 ">
      <div className="absolute">
        <div className="absolute md:h-72 sm:h-60 md:w-72 sm:w-60 top-0 -left-4 bg-green-200 rounded-full mix-blend-multiply blur-xl opacity-70 animate-blob"></div>
        <div className="absolute md:h-72 sm:h-60 md:w-72 sm:w-60 top-0 -right-4 bg-blue-200 rounded-full mix-blend-multiply blur-xl opacity-70 animate-blob animation-delay-2000 delay-1000"></div>
        <div className="absolute md:h-72 sm:h-60 md:w-72 sm:w-60 -bottom-8 -left-10 bg-yellow-100 rounded-full mix-blend-multiply blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      <div className="z-10 flex flex-col  h-[400px] w-[300px] bg-white rounded-e-xl rounded-ss-2xl">
        <div className="h-10 w-[80%] bg-primary rounded-ss-2xl rounded-e-2xl"></div>
        <div className="flex-1 flex flex-col">
          <div className="py-5">
            <h1 className="text-center text-lg font-lora font-medium">Login</h1>
          </div>
          <form className="flex-1 flex" onSubmit={submitHandler}>
            <div className="flex-1 flex flex-col justify-evenly gap-2 px-3">
              <div>
                <Input label="Username" type="text" />
                <Input label="Password" type="password" />
              </div>
              <button className=" border-2 border-[#4ecdc4] py-1 hover:bg-primary rounded-md font-poppins hover:text-white">
                Login
              </button>
            </div>
          </form>
        </div>
        <div className=" flex items-center justify-center md:py-8 py-4">
          <p className="font-poppins">
            Dont have account?{" "}
            <Link className="text-blue-600 font-lora" href="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
