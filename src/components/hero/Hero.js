import React from "react";
import Header from "../header/Header";
import { FiArrowRight } from "react-icons/fi";
import {
  BackgroundImgContainer,
  ButtonContainer,
  HeroCaption,
  HeroContainer,
  HeroSection,
  HeroSubCaption,
  HeroSubSection,
  HeroWrapper,
  PrimaryButton,
  SecondaryButton,
} from "./StyledHero";
import SearchContainer from "../searchContainer/SearchContainer"

const Hero = () => {
  return (
    <>
      <HeroWrapper>
        <div styles={{height:"100%", width:"100%", position:"relative", overflowX:"hidden", backgroundColor:"yellow"}}>
            <BackgroundImgContainer/>
          <HeroContainer>
            <Header />
            <HeroSection>
              <HeroSubSection>
                <HeroCaption>
                  Let's get you your dream home
                </HeroCaption>
                <HeroSubCaption>
                  We provide residential and commercial
                  apartments at affordable
                  prices.
                </HeroSubCaption>
                <ButtonContainer>
                  <PrimaryButton>Contact Us</PrimaryButton>
                  <SecondaryButton>
                    Learn More{" "}
                    <FiArrowRight
                      style={{
                        color: "#E34234",
                        fontSize: "1.2rem",
                        marginLeft: "2px",
                      }}
                    />
                  </SecondaryButton>
                </ButtonContainer>
              </HeroSubSection>
            </HeroSection>
          </HeroContainer>
        </div>
        <SearchContainer />
      </HeroWrapper>
    </>
  );
};

export default Hero;
