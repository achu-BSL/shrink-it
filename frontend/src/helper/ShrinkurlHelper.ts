import toast from "react-hot-toast";
import { validateUrl } from "../utils/validate";

export const fetchShrinkUrls = (token: string) => {
  return fetch(`${process.env.NEXT_PUBLIC_SERVER}/shrinkurl/`, {
    headers: {
      authorization: token,
    },
  });
};

export const validate = (url: string) => {
  const isValid = validateUrl(url);
  if (!isValid) {
    toast.error("Invalid URL");
  }
  return isValid;
};

export const createShrinkurlRequest = (token: string, actualUrl: string) => {
  return fetch(`${process.env.NEXT_PUBLIC_SERVER}/shrinkurl/`, {
    method: "POST",
    headers: {
      authorization: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ actualUrl }),
  });
};
