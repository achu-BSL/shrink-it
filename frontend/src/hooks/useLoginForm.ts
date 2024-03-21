import { useUserStore } from "../store/useUserStore";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

import {
  extractValuesFromFormData,
  loginRequest,
  printResult,
  validate,
} from "../helper/LoginFormHelper";

export const useLoginForm = () => {
  const router = useRouter();

  const updateUser = useUserStore((state) => state.updateUser);

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const { username, password } = extractValuesFromFormData(formData);
    const isValid = validate(username, password);
    if (!isValid) return;
    const res = await loginRequest({ username, password });
    printResult(res);
    if (res.ok) {
      form.reset();
      const {
        token,
        user: { username },
      } = (await res.json()) as { token: string; user: { username: string } };
      updateUser({ token, username });
      router.push("/");
    }
  };

  return {
    submitHandler,
  };
};
