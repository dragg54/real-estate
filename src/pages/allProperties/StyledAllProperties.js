import styled from "styled-components";
import Header from "../../components/header/Header";
import { NavContainer } from "../../components/header/StyledHeader";
import { DescriptionContainer, ImageContainer, PropertyCard } from "../../components/properties/StyledProperties";

export const AllPropertiesWrapper = styled.div`
    background-color: yellow;
    height:1500px;
    width: 100%;
    padding:50px;

    @media(max-width: 1200px){
        padding: 30px;
    }

    
    @media(max-width: 780px){
        padding: 20px;
    }

    @media(max-width: 600px){
        height: 4200px;
    }
`

export const AllPropertiesContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;

    @media(max-width: 900px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: 600px){
       display: flex;
       flex-direction: column;
        align-items: center;
    }
`

export const AllPropertiesCard = styled(PropertyCard)`
    background-color: blue;
    width: 100%;
    height: 100%
`

export const PropertyImageContainer = styled(ImageContainer)`
    background-color: green;
`
export const PropertyDescriptionContainer = styled(DescriptionContainer)`
    background-color: purple;
`

export const AllPropertiesHeader = styled(Header)`
    background-color: blue
`