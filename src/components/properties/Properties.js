import React from "react";
import {
  DescriptionContainer,
  GeographyCont,
  Icons,
  ImageContainer,
  Img,
  LocationInfo,
  LocationInfoContainer,
  LocDetailsContainer,
  PriceHeader,
  PropertyCard,
  PropertyContainer,
  PropertyHeader,
  PropertyWrapper,
} from "./StyledProperties";

import { FaBed, FaBath } from "react-icons/fa";
import { AiOutlineAreaChart } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";

const Properties = ({ propertiesData }) => {
  console.log(propertiesData);
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
                  <div
                    style={{
                      display: "flex",
                      height: "100%",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <LocDetailsContainer>
                      <Icons>
                        <MdLocationOn />
                      </Icons>
                      {property.location.map((locationName) => {
                        return (
                          <div
                            key={locationName.id}
                            style={{ fontSize: "0.8rem", display: "flex" }}
                          >
                            <p style={{ whiteSpace: "no-wrap" }}>
                              {locationName.level == 2 && locationName.name}
                            </p>
                          </div>
                        );
                      })}
                    </LocDetailsContainer>
                    {/*  <p>
                      {property.title.length > 40
                        ? property.title.substring(0, 35) + "..."
                        : property.title}
                      </p> */}
                    <LocationInfoContainer>
                      <LocationInfo>
                        <Icons>{<FaBed />}</Icons>
                        {property.rooms} beds
                      </LocationInfo>
                      <LocationInfo>
                        <Icons>{<FaBath />}</Icons>
                        {property.baths} baths
                      </LocationInfo>
                      <LocationInfo>
                        <Icons>{<AiOutlineAreaChart />}</Icons>
                        {property.baths * 1000} sqft
                      </LocationInfo>
                    </LocationInfoContainer>
                    <PriceHeader>${property.price / 10}/mo</PriceHeader>
                    <GeographyCont>
                      lat {+property.geography.lat.toFixed(3)} | lng{" "}
                      {+property.geography.lng.toFixed(3)}
                    </GeographyCont>
                  </div>
                </DescriptionContainer>
              </PropertyCard>
            );
          })}
      </PropertyContainer>
    </PropertyWrapper>
  );
};

export default Properties;
