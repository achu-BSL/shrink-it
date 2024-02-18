import { Navigate } from "react-router-dom";
import { useUserStore } from "../store/useUserStore";

interface AuthRouteProps {
  child: React.ReactNode;
}

export const AuthRoute: React.FC<AuthRouteProps> = ({ child }) => {
  const user = useUserStore((state) => state.user);
  return user ? <Navigate to="/" /> : child;
};
