import React, { useState } from "react";
import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH3,
  HeroP,
} from "./HeroElements";
import { Button, Column2, Img, ImgWrap } from "../InfoSection/InfoElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg></HeroBg>
      <HeroContent>
        <div>
          <HeroH3>Why InstantPesa</HeroH3>
          <HeroP>
            We have been in business for more than 10years, over the years, we
            have worked relentlessly to build a reputation for being fast,safer
            and most reliable E-currency dealer
          </HeroP>
          <HeroBtnWrapper>
            <Button
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
              href="https://play.google.com/store/apps/details?id=com.deriv.instantpesa"
            >
              Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>{" "}
        </div>
        <Column2>
          <ImgWrap>
            <Img src={require("../../asset/svg3.svg").default} alt="alt" />
          </ImgWrap>
        </Column2>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
