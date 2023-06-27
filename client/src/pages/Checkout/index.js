import { AppBar, Button, Toolbar } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckoutContainer,
  CheckoutHeader,
  CheckoutPageContainer,
  HeaderBlock,
  HeaderBlock1,
} from "./CheckoutElements";
import Online from "./Online";
import Physical from "./Physical";
const Checkout = () => {
  const [active, setActive] = useState("online");

  const physicalActive = () => {
    setActive("physical");
  };

  const onlineActive = () => {
    setActive("online");
  };
  return (
    <>
      <AppBar
        position="static"
        style={{ background: "inherit", boxShadow: "none" }}
      >
        <Toolbar>
          <Button
            style={{ background: "#01BF71", color: "white" }}
            component={Link}
            to="/Academy"
          >
            Go Back
          </Button>
        </Toolbar>
      </AppBar>
      <CheckoutContainer>
        <CheckoutHeader>
          <HeaderBlock1 active={active} onClick={physicalActive}>
            Physical
          </HeaderBlock1>
          <HeaderBlock active={active} onClick={onlineActive}>
            Online
          </HeaderBlock>
        </CheckoutHeader>
        <CheckoutPageContainer>
          {active === "online" ? <Online /> : <Physical />}
        </CheckoutPageContainer>
      </CheckoutContainer>
    </>
  );
};

export default Checkout;
