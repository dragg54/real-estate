import React from "react";
import Header from "../header/Header";
import { FiArrowRight } from "react-icons/fi";
import {
  BackgroundImgContainer,
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
                  We are capable to help you find your dream home.
                </HeroCaption>
                <HeroSubCaption>
                  Making the search for either residential or commercial
                  apartments easier than you can ever imagine, at affordable
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
              {/* <HeroImageContainer>
                <Img src="../../../images/hero-image.png" height={630} alt="" />
              </HeroImageContainer> */}
            </HeroSection>
          </HeroContainer>
        </div>
        <SearchContainer />
      </HeroWrapper>
    </>
  );
};

export default Hero;
