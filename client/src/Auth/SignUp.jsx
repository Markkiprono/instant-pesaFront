import React, { useState } from "react";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  CircularProgress,
  Alert,
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
import { useSignup } from "../../hooks/useSignup";

const SignUp = ({ onLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { signup, error, loading, errorMsg } = useSignup();
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, name, password);
  };

  return (
    <>
      <FormWrapper>
        <FormContent>
          <Form onSubmit={handleSubmit}>
            {loading && <CircularProgress />}
            {error && <Alert severity="error">{errorMsg}</Alert>}
            <FormH1>Create a new account</FormH1>{" "}
            <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
              <InputLabel htmlFor="filled-name">Full Name</InputLabel>
              <Input
                required
                id="filled-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
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
            <Text onClick={onLogin}>Already Have an Account? Sign in</Text>
          </Form>
        </FormContent>
      </FormWrapper>
    </>
  );
};

export default SignUp;
