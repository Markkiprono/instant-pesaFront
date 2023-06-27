import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "../api/axios";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, name, password) => {
    if (password.length < 6) {
      setError(true);
      setLoading(false);
      setErrorMsg("Password must be at least 6 characters long");
      return;
    }
    setLoading(true);
    setError(null);

    await axios
      .post("/api/v1/user/register", { email, name, password })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        setLoading(false);
        dispatch({ type: "LOGIN", payload: res });
        window.location.href = "/Academy";
      })
      .catch((err) => {
        setError(true);
        console.log(err);
        if (err.response.status === 500) {
          setErrorMsg("Seems Like The Email already exists");
        }
        if (err.response.status === 503) {
          setErrorMsg("something went wrong please try again later");
        }

        setLoading(false);
      });
  };
  return { signup, loading, error, errorMsg };
};
