import { validatePassword, validateUsername } from "../utils/validate";
import toast from "react-hot-toast";

export const validate = (username: string, password: string) => {
  let valid = true;
  const usernameValidate = validateUsername(username);
  if (usernameValidate instanceof Error) {
    valid = false;
    toast.error(usernameValidate.message);
  }

  const passwordValidate = validatePassword(password);
  if (passwordValidate instanceof Error) {
    valid = false;
    toast.error(passwordValidate.message);
  }

  return valid;
};

export const extractValuesFromFormData = (formData: FormData) => {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  return { username, password };
};

export const loginRequest = (body: { username: string; password: string }) => {
  return fetch("http://192.168.49.2:31500/api/user/login", {
    method: "POST",
    body: JSON.stringify(body),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const printResult = (res: Response) => {
  if (res.ok) {
    toast.success("Login Successfully");
  } else {
    let msg = "OPPS Something Went Wrong!";
    if (res.status === 400) {
      msg = "Invalid Username or Password";
    }
    toast.error(msg);
  }
};
