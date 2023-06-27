import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import {
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavLogo,
} from "../Navbar/NavbarELements";

const TradingNav = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const { user } = useAuthContext();
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/">Back To Home</NavLogo>
          {user ? (
            <NavBtn>
              <NavBtnLink to="/Academy/Offers">
                Welcome {user.user.name}
              </NavBtnLink>
            </NavBtn>
          ) : (
            <NavBtn>
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
          )}
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default TradingNav;
