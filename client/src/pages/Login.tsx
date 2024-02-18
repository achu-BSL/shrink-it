import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { FormEvent } from "react";
import { useUserStore } from "../store/useUserStore";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();

  const updateUser = useUserStore((state) => state.updateUser);

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const formData = new FormData(form);
    const body = {
      username: formData.get("username"),
      password: formData.get("password"),
    };

    const res = await fetch("http://192.168.49.2:31500/api/user/login", {
      method: "POST",
      body: JSON.stringify(body),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      form.reset();
      const {
        token,
        user: { username },
      } = (await res.json()) as { token: string; user: { username: string } };
      updateUser({ token, username });

      toast.success("Login Successfully");
      navigate("/");
    } else {
      let msg = "OPPS Something Went Wrong!";
      if (res.status === 400) {
        msg = "Invalid Username or Password";
      }
      toast.error(msg);
    }
  };

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
            <Link className="text-blue-600" to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
