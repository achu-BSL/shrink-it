import {
  validateConfirmPassword,
  validatePassword,
  validateUsername,
} from "../utils/validate";
import toast from "react-hot-toast";

export const validate = (
  username: string,
  password: string,
  confirmPassword: string
) => {
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

  const confirmPasswordValidate = validateConfirmPassword(
    password,
    confirmPassword
  );
  if (confirmPasswordValidate instanceof Error) {
    valid = false;
    toast.error(confirmPasswordValidate.message);
  }

  return valid;
};

export const getValueFromFormData = (formData: FormData) => {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  return { username, password, confirmPassword };
};

export const registerRequest = (body: {
  username: string;
  password: string;
}) => {
  return fetch("http://192.168.49.2:31500/api/user/register", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const showResult = (res: Response) => {
  if (res.ok) {
    toast.success("Register successfully");
  } else {
    let msg = "OOPS Something went wrong!";
    if (res.status === 400) {
      msg = "Username already taken";
    }

    toast.error(msg);
  }
};
