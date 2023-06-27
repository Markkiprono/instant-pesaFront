import React from "react";
import {
  HeroBg,
  HeroContainer,
  HeroContent,
  HeroP,
} from "../HeroSection/HeroElements";
import { useAuthContext } from "../../hooks/useAuthContext";
import { HeroH3 } from "./OffersNavElements";

const OffersSection = () => {
  const { user } = useAuthContext();
  return (
    <HeroContainer>
      <HeroBg></HeroBg>
      <HeroContent>
        <div>
          <HeroH3>
            Would you love to learn how to trade manually on your own?
          </HeroH3>
          <HeroP>
            This is then the place for you "{user.user.name}". Welcome to our
            trading academy, here you will be able to learn binary options
            trading.
          </HeroP>
        </div>
      </HeroContent>
    </HeroContainer>
  );
};

export default OffersSection;
