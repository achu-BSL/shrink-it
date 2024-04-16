"use client";
import Input from "../../../components/Input";
import Link from "next/link";

import { useRegisterForm } from "../../../hooks/useRegisterForm";

const Register = () => {
  const { submitHandler } = useRegisterForm();

  return (
    <>
      <div className="z-10 flex flex-col  h-[400px] w-[300px] bg-white/90 rounded-e-xl rounded-ss-2xl">
        <div className="self-end h-10 w-[80%] bg-primary rounded-s-2xl"></div>
        <div>
          <div className="py-5">
            <h1 className="text-center text-lg font-lora">Register</h1>
          </div>
          <form onSubmit={submitHandler}>
            <div className="flex flex-col gap-2 px-3">
              <Input label="Username" type="text" />
              <Input label="Password" type="password" />
              <Input label="Confirm-Password" type="password" />
              <button className="border-2 border-[#4ecdc4] py-1 hover:bg-primary rounded-md hover:text-white">
                Register
              </button>
            </div>
          </form>
        </div>
        <div className="flex-1 flex items-center justify-center font-poppins">
          <p>
            Already have account?{" "}
            <Link className="text-blue-600 font-lora" href="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
