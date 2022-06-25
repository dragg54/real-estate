import styled from "styled-components"

export const PropertyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 28px 140px 0px 140px;
    max-width: 100%;
    height: 800px;
    background-color: rgba(0,0,255,0.1);
    margin-bottom: 100px;
`
export const PropertyHeader = styled.h1`
    font-size: 2.1rem;
    margin-bottom:30px;
`
export const PropertyContainer= styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: space-between;
    padding:0

`
export const PropertyCard = styled.div`
   width:33%;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content:space-between;
   margin-right:5px;
   background-color: brown;

`
export const ImageContainer = styled.div`
    width: 100%;
    height:50%;
    background-color: purple;
`
export const DescriptionContainer=styled.div`
    width:100%;
    height:50%;
    background-color: brown;
` 
