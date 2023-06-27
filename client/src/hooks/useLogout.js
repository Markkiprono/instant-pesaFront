import { useAuthContext } from "./useAuthContext";

import { useLocation, useNavigate } from "react-router-dom";
export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/Academy";
  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    navigate(from, { replace: true });
  };
  return { logout };
};
