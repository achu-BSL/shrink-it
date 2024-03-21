import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  getValueFromFormData,
  registerRequest,
  showResult,
  validate,
} from "../helper/RegisterFormHelper";

export const useRegisterForm = () => {
  const router = useRouter();

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

    if (res.ok) router.push("/login");
  };

  return { submitHandler };
};
