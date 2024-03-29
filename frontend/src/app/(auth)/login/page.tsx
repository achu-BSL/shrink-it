"use client"

import Link from "next/link";
import Input from "../../../components/Input";
import { useLoginForm } from "../../../hooks/useLoginForm";

const Login = () => {
  const { submitHandler } = useLoginForm();

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-200 ">
      <div className="flex flex-col  h-[400px] w-[300px] bg-white rounded-e-xl rounded-ss-2xl">
        <div className="h-10 w-[80%] bg-primary rounded-ss-2xl rounded-e-2xl"></div>
        <div>
          <div className="py-5">
            <h1 className="text-center text-lg">Login</h1>
          </div>
          <form onSubmit={submitHandler}>
            <div className="flex flex-col gap-2 px-3">
              <Input label="Username" type="text" />
              <Input label="Password" type="password" />
              <button className="border-2 border-[#4ecdc4] py-1 hover:bg-primary rounded-md">
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <p>
            Dont have account?{" "}
            <Link className="text-blue-600" href="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
