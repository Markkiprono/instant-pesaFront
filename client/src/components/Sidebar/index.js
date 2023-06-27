import React from "react";
import { FcGraduationCap } from "react-icons/fc";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarLinkR,
  SidebarMenu,
  SidebarWrapper,
} from "./SidebarElement";

const Sidebar = ({ toggle, isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {" "}
          <SidebarLink to="/" onClick={toggle}>
            Instant Pesa
          </SidebarLink>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLinkR to="Academy" onClick={toggle}>
            Trading Academy <FcGraduationCap />
          </SidebarLinkR>
          <SidebarLink to="Contact" onClick={toggle}>
            Contact
          </SidebarLink>
          <SidebarLink to="about" onClick={toggle}>
            Downloads
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
