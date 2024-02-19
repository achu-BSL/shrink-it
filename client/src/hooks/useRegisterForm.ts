import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import {
  getValueFromFormData,
  registerRequest,
  showResult,
  validate,
} from "../helper/RegisterFormHelper";

export const useRegisterForm = () => {
  const navigate = useNavigate();

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const { username, password, confirmPassword } =
      getValueFromFormData(formData);

    if (!validate(username, password, confirmPassword)) return;

    const body = {
      username,
      password,
    };

    const res = await registerRequest(body);
    showResult(res);

    if (res.ok) navigate("/login");
  };

  return { submitHandler };
};
