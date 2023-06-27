import React, { useState } from "react";
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  Img,
  ImgWrap,
} from "./SigninElements";
import { Column2 } from "../components/InfoSection/InfoElements";
import Login from "../components/Auth/Login";
import { Link } from "react-router-dom";
import SignUp from "../components/Auth/SignUp";
import { AppBar, Button, Toolbar } from "@mui/material";
const Signin = () => {
  const [auth, setAuth] = useState("Login");
  const onSignUp = () => {
    setAuth("Sign Up");
  };
  const onLogin = () => {
    setAuth("Login");
  };
  return (
    <>
      {" "}
      <AppBar position="static" style={{ background: "#6D9798" }}>
        <Toolbar>
          <Button style={{ color: "white" }} component={Link} to="/Academy">
            Go Back
          </Button>
        </Toolbar>
      </AppBar>
      <HeroContainer>
        <HeroH1>Authentication</HeroH1>
        <HeroContent>
          <Column2>
            <ImgWrap>
              <Img src={require("../asset/auth.svg").default} alt="alt" />
            </ImgWrap>
          </Column2>
          <div>
            {auth === "Login" && <Login onSignUp={onSignUp} />}
            {auth === "Sign Up" && <SignUp onLogin={onLogin} />}
          </div>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default Signin;
