import React from "react";
import {
  DescriptionContainer,
  ImageContainer,
  Img,
  LocDetailsContainer,
  PriceHeader,
  PropertyCard,
  PropertyContainer,
  PropertyHeader,
  PropertyWrapper,
} from "./StyledProperties";

const Properties = ({ propertiesData }) => {
  return (
    <PropertyWrapper>
      <PropertyHeader>Our Available Homes</PropertyHeader>
      <PropertyContainer>
        {propertiesData &&
          propertiesData.hits &&
          propertiesData.hits.splice(0, 3).map((property) => {
            console.log(property);
            return (
              <PropertyCard key={property.id} s>
                <ImageContainer>
                  <Img
                    src={property.coverPhoto.url}
                    height={500}
                    width={500}
                    alt="images"
                  />
                </ImageContainer>
                <DescriptionContainer>
                  <LocDetailsContainer>
                   {/*  {property.location.map((locationName) => {
                      return <p key={locationName.id} style={{fontSize:"1rem"}}>{locationName.name}</p>;
                    })} */}
                    <p>{property.title.length>40? property.title.substring(0,35)+ "...": property.title}</p>
                  </LocDetailsContainer>
                    <PriceHeader>${property.price / 10}/mo</PriceHeader>
                </DescriptionContainer>
              </PropertyCard>
            );
          })}
      </PropertyContainer>
    </PropertyWrapper>
  );
};

export default Properties;
