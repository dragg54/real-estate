import React from "react";
import { DescriptionContainer, ImageContainer, PropertyCard, PropertyContainer, PropertyHeader, PropertyWrapper } from "./StyledProperties";

const Properties = () => {
  return (
    <PropertyWrapper>
      <PropertyHeader>Our Available Homes</PropertyHeader>
      <PropertyContainer>
        <PropertyCard>
          <ImageContainer>rge</ImageContainer>
          <DescriptionContainer>gge</DescriptionContainer>
        </PropertyCard>
        <PropertyCard>
          <ImageContainer>ege</ImageContainer>
          <DescriptionContainer>eey</DescriptionContainer>
        </PropertyCard>
        <PropertyCard>
          <ImageContainer>yey</ImageContainer>
          <DescriptionContainer>he5y</DescriptionContainer>
        </PropertyCard>
      </PropertyContainer>
    </PropertyWrapper>
  );
};

export default Properties;
