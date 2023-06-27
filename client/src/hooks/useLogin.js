import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "../api/axios";


export const useLogin = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    await axios
      .post("/api/v1/user/login", { email, password })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        setLoading(false);
        dispatch({ type: "LOGIN", payload: res });
        window.location.href = "/Academy";
      })
      .catch((err) => {
        setError(true);
        console.log(err);
        setLoading(false);
      });
  };
  return { login, loading, error };
};
