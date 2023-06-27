import React, { useState } from "react";
import {
  CircularProgress,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Alert
} from "@mui/material";
import {
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormWrapper,
  Text,
} from "./authElements";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useLogin } from "../../hooks/useLogin";
const Login = ({ onSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, loading } = useLogin();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <>
      <FormWrapper>
        <FormContent>
          <Form onSubmit={handleSubmit}>
            {error && <Alert severity="error">Email doesnt Match Password</Alert>}
            <FormH1>Sign in to your account</FormH1>{" "}
            <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
              <InputLabel htmlFor="filled-email">Email</InputLabel>
              <Input
                required
                id="filled-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
              <InputLabel htmlFor="filled-adornment-password">
                Password
              </InputLabel>
              <Input
                required
                id="filled-adornment-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormButton disabled={loading} type="submit">
              Login
            </FormButton>
            <Text onClick={onSignUp}>Don't have an account? Sign Up</Text>{" "}
            {loading && <CircularProgress />}
          </Form>
        </FormContent>
      </FormWrapper>
    </>
  );
};

export default Login;
