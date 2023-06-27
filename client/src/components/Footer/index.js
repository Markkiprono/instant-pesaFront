import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElement";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> Resources </FooterLinkTitle>
              <FooterLink>Help</FooterLink>
              <FooterLink>Events</FooterLink>
              <FooterLink>Live Support</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Company</FooterLinkTitle>
              <FooterLink>About us</FooterLink>
              <FooterLink>Customers</FooterLink>
              <FooterLink>Community</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle> Location </FooterLinkTitle>
              <FooterLink>0710109009</FooterLink>
              <FooterLink>instantpesakenya1@gmail.com</FooterLink>
              <FooterLink>www.instant-pesa.com</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              <SocialIcons />
              INSTANT-PESA
            </SocialLogo>

            <WebsiteRights>
              INSTANT-PESA © {new Date().getFullYear()} All Rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/profile.php?id=100063914747365&mibextid=ZbWKwL"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/sir_jose_jose"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://youtube.com/@josefxandlifestyle5877"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="https://t.me/instant_pesa"
                target="_blank"
                aria-label="Telegram"
              >
                <FaTelegram />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.tiktok.com/@sir_jose_jose?_t=8YPnAEJoGrG&_r=1"
                target="_blank"
                aria-label="Tiktok"
              >
                <FaTiktok />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
