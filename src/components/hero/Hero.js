import React from "react";
import Header from "../header/Header";
import { FiArrowRight } from "react-icons/fi"
import {
  ButtonContainer,
  HeroCaption,
  HeroContainer,
  HeroImageContainer,
  HeroSection,
  HeroSubCaption,
  HeroSubSection,
  HeroWrapper,
  Img,
  PrimaryButton,
  SecondaryButton,
} from "./StyledHero";

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroContainer>
        <Header />
        <HeroSection>
          <HeroSubSection>
            <HeroCaption>
              We are capable to help you find your  dream home.
            </HeroCaption>
            <HeroSubCaption>
              Making the search for either residential or commercial apartments
              easier than you can ever imagine, at affordable prices.
            </HeroSubCaption>
            <ButtonContainer>
              <PrimaryButton>Contact Us</PrimaryButton>
              <SecondaryButton>Learn More <FiArrowRight style={{color: "#E34234", fontSize:"1.2rem", marginLeft:"2px"}}/></SecondaryButton>
            </ButtonContainer>
          </HeroSubSection>
          <HeroImageContainer>
            <Img src="../../../images/hero-image.png" height={630} alt="" />
          </HeroImageContainer>
        </HeroSection>
      </HeroContainer>
    </HeroWrapper>
  );
};

export default Hero;
