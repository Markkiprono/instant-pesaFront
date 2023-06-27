import React, { useState } from "react";
import { FormControl, Input, InputLabel } from "@mui/material";
import {
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormWrapper,
  Text,
} from "./authElements";
const ForgotPassword = ({ onLogin }) => {
  const [email, setEmail] = useState("");

  return (
    <>
      <FormWrapper>
        <FormContent>
          <Form action="#">
            <FormH1>Change Password</FormH1>{" "}
            <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
              <InputLabel htmlFor="filled-email">Email</InputLabel>
              <Input
                required
                id="filled-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormButton type="submit">Send Recovery Token</FormButton>
            <Text onClick={onLogin}>Already changed my details? Login</Text>
          </Form>
        </FormContent>
      </FormWrapper>
    </>
  );
};

export default ForgotPassword;
