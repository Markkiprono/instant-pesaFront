import React, { useEffect, useState } from "react";
import {
  Img,
  MobileIcon,
  Nav,
  NavAcademy,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./NavbarELements";
import { FcGraduationCap } from "react-icons/fc";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

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

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <Img src={require("../../asset/pesa.png")} alt="logo" />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            {" "}
            <NavItem>
              <NavLinks
                to="/"
                onClick={toggleHome}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Instant Pesa
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavAcademy to="/Academy">
                Trading Academy <FcGraduationCap />
              </NavAcademy>
            </NavItem>
            <NavItem>
              <NavLinks
                to="Contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Contact
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="download"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Downloads
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
