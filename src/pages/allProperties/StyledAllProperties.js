import styled from "styled-components";
import Header from "../../components/header/Header";
import { DescriptionContainer, ImageContainer, PropertyCard } from "../../components/properties/StyledProperties";

export const AllPropertiesWrapper = styled.div`
    height:3400px;
    width: 100%;
    padding:50px;

    @media(max-width: 1200px){
        padding: 30px;
    }

    
    @media(max-width: 780px){
        padding: 20px;
    }

    @media(max-width: 600px){
        height: 6000px;
        padding: 10px
    }
`

export const AllPropertiesContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px;

    @media(max-width: 900px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: 600px){
       display: flex;
       flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const AllPropertiesCard = styled(PropertyCard)`
    width: 100%;
    height: 94%
`

export const PropertyImageContainer = styled(ImageContainer)`
`
export const PropertyDescriptionContainer = styled(DescriptionContainer)`
`

export const AllPropertiesHeader = styled(Header)`
`