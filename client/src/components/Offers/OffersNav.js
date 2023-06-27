import React, { useEffect, useState } from "react";
import {
  Nav,
  NavbarContainer,
  NavBtn2,
  NavBtnLink,
  NavLogo,
} from "../Navbar/NavbarELements";
import { useLogout } from "../../hooks/useLogout";
const OffersNav = () => {
  const [scrollNav, setScrollNav] = useState(false);

  const { logout } = useLogout();

  const handleClick = () => {
    logout();
  };

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
          <NavLogo to="/"> Home </NavLogo>
          <NavBtn2>
            <NavBtnLink onClick={handleClick}>Logout</NavBtnLink>
          </NavBtn2>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default OffersNav;
