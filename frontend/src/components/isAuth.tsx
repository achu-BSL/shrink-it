"use client";

import { useRouter } from "next/navigation";
import { useUserStore } from "../store/useUserStore";

export const isAuth = (Component: any) => {
  return function IsAuth() {
    const router = useRouter();
    const user = useUserStore((state) => state.user);
    if (!user) {
      router.replace("/login");
      return null;
    }
    return <Component />;
  };
};
