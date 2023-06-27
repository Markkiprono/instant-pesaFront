import React, { useState } from "react";
import { Button } from "../ButtonElement";
import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH3,
  HeroP,
  VideoBg,
} from "../HeroSection/HeroElements";
import { useAuthContext } from "../../hooks/useAuthContext";
const TradingHeroSec = () => {
  const [hover, setHover] = useState(false);
  const { user } = useAuthContext();
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg
            src={require("../../Video/video2.mp4")}
            autoPlay
            loop
            muted
            type="video/mp4"
          />
        </HeroBg>
        <HeroContent>
          <div>
            <HeroH3>Welcome to trading Academy</HeroH3>
            <HeroP>
              since 2015 we have been trading binary options. Over the years we
              have learn numerous trading styles and in this platform you will
              have an opportunity to learn what it takes to be GOAT in binary
              options trading.
            </HeroP>
            {user ? (
              <HeroBtnWrapper>
                <Button
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                  primary="true"
                  dark="true"
                  to="/Academy/Offers"
                >
                  Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
              </HeroBtnWrapper>
            ) : (
              <HeroBtnWrapper>
                <Button
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                  primary="true"
                  dark="true"
                  to="/signin"
                >
                  Let's Begin {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
              </HeroBtnWrapper>
            )}
          </div>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default TradingHeroSec;
