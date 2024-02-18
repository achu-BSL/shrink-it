import { FormEvent } from "react";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    const formData = new FormData(e.currentTarget);
    const body = {
      username: formData.get("username"),
      password: formData.get("password"),
    };

    const res = await fetch("http://192.168.49.2:31500/api/user/register", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      toast.success("Register successfully");
      navigate("/login");
    } else {
      let msg = "OOPS Something went wrong!";
      if (res.status === 400) {
        msg = "Username already taken";
      }

      toast.error(msg);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-200 ">
      <div className="flex flex-col  h-[400px] w-[300px] bg-white rounded-e-xl rounded-ss-2xl">
        <div className="self-end h-10 w-[80%] bg-primary rounded-s-2xl"></div>
        <div>
          <div className="py-5">
            <h1 className="text-center text-lg">Register</h1>
          </div>
          <form onSubmit={submitHandler}>
            <div className="flex flex-col gap-2 px-3">
              <Input label="Username" type="text" />
              <Input label="Password" type="password" />
              <Input label="Confirm-Password" type="password" />
              <button className="border-2 border-[#4ecdc4] py-1 hover:bg-primary rounded-md">
                Register
              </button>
            </div>
          </form>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <p>
            Already have account?{" "}
            <Link className="text-blue-600" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
