import { AiOutlineAreaChart } from "react-icons/ai";
import { FaBath, FaBed } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import useFetchApi from "../../API/fetchApi";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/header/Header";
import { NavContainer } from "../../components/header/StyledHeader";
import { GeographyCont, Icons, Img, LocationInfo, LocationInfoContainer, LocDetailsContainer, PriceHeader } from "../../components/properties/StyledProperties";
import { AllPropertiesContainer, AllPropertiesWrapper, AllPropertiesCard, PropertyImageContainer, PropertyDescriptionContainer} from "./StyledAllProperties";

const AllProperties = () => {
  const [propertiesData] = useFetchApi()
  return (
    <>
    <NavContainer variant="secondary">
     <Header />
    </NavContainer>
    <AllPropertiesWrapper>
      <AllPropertiesContainer>
       {propertiesData &&
        propertiesData.hits &&
        propertiesData.hits.splice(0,12).map((property) => {
          return (
            <AllPropertiesCard key={property.id}>
              <PropertyImageContainer>
                <Img
                  src={property.coverPhoto.url}
                  height={500}
                  width={500}
                  alt="images"
                /> </PropertyImageContainer>
              <PropertyDescriptionContainer>
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
                      <MdLocationOn styles={{ padding: "0" }} />
                    </Icons>
                    {property.location.map((locationName) => {
                      return (
                        <div
                          key={locationName.id}
                          style={{ fontSize: "0.8rem", display: "flex" }}
                        >
                          <p style={{ whiteSpace: "no-wrap" }}>
                            {locationName.level === 2 && locationName.name}
                          </p>
                        </div>
                      );
                    })}
                  </LocDetailsContainer>
                  <LocationInfoContainer>
                    <LocationInfo>
                      <Icons>{<FaBed />}</Icons>
                      {property.rooms} bed
                    </LocationInfo>
                    <LocationInfo>
                      <Icons>{<FaBath />}</Icons>
                      {property.baths} bath
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
              </PropertyDescriptionContainer>
            </AllPropertiesCard>
          );
        })}
      </AllPropertiesContainer>
    </AllPropertiesWrapper>
    <Footer />
    </>
  );
};

export default AllProperties;
