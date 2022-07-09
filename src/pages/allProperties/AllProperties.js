import React from "react";
import useFetchApi from "../../API/fetchApi";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/header/Header";
import { NavContainer } from "../../components/header/StyledHeader";
import { AllPropertiesContainer, AllPropertiesWrapper, AllPropertiesCard, PropertyImageContainer, PropertyDescriptionContainer} from "./StyledAllProperties";

const AllProperties = () => {
  return (
    <>
    <NavContainer>
     <Header />
    </NavContainer>
    <AllPropertiesWrapper>
      <AllPropertiesContainer>
        <AllPropertiesCard>
         <PropertyImageContainer>
         </PropertyImageContainer>
         <PropertyDescriptionContainer>
          </PropertyDescriptionContainer>
        </AllPropertiesCard>
        <AllPropertiesCard>
         <PropertyImageContainer>
         </PropertyImageContainer>
        </AllPropertiesCard>
        <AllPropertiesCard>
         <PropertyImageContainer>
         </PropertyImageContainer>
        </AllPropertiesCard>
        <AllPropertiesCard>
         <PropertyImageContainer>

         </PropertyImageContainer>
        </AllPropertiesCard>
        <AllPropertiesCard>
         <PropertyImageContainer>

         </PropertyImageContainer>
        </AllPropertiesCard>
        <AllPropertiesCard>
         <PropertyImageContainer>

         </PropertyImageContainer>
        </AllPropertiesCard>
        <AllPropertiesCard>
         <PropertyImageContainer>

         </PropertyImageContainer>
        </AllPropertiesCard>
        <AllPropertiesCard>
         <PropertyImageContainer>

         </PropertyImageContainer>
        </AllPropertiesCard>
        <AllPropertiesCard>
         <PropertyImageContainer>

         </PropertyImageContainer>
        </AllPropertiesCard>
      </AllPropertiesContainer>
    </AllPropertiesWrapper>
    <Footer />
    </>
  );
};

export default AllProperties;
