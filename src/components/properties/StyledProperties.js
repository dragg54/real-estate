import styled from "styled-components"

export const PropertyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 28px 140px 0px 140px;
    max-width: 100%;
    height: 1000px;
    margin-bottom: 100px;

    @media(max-width: 1200px){
        padding: 22px 90px 0px 90px;
    }
    @media(max-width: 900px){
        padding: 35px 50px 0px 35px
    }
    @media(max-width: 768px){
        padding: 16px 30px 0px 30px;
        height: 900px;
    }
    @media(max-width: 600px){
        padding: 3px 15px 40px 15px;
        height: 2200px;
    }
`
export const PropertyHeader = styled.h1`
    font-size: 2.1rem;
    margin-bottom:30px;
    white-space: nowrap;

    @media(max-width: 600px){
        font-size: 1.6rem;
    }
`
export const PropertyContainer= styled.div`
    width: 100%;
    height: 1000px;
    display: flex;
    justify-content: space-between;
    padding:0;

    @media(max-width: 600px){
        height: 100%;
        flex-direction: column;
        align-items: center;
    }

`
export const PropertyCard = styled.div`
   width:32.5%;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content:space-between;
   margin-right:5px;
   background-color: brown;

   @media(max-width: 600px){
        width: 100%;
        height: 33%;
    }

`
export const ImageContainer = styled.div`
    width: 100%;
    height:50%;
    object-fit: contain;
    display: flex;
    justify-content:center;
    align-items: center;
    overflow: hidden;
`
export const DescriptionContainer=styled.div`
    width:100%;
    height:50%;
    background-color: #fff;
    padding:4px 0px;
    box-sizing: border-box;
    padding: 4px 7px;
` 
export const Img = styled.img`
    height: 100%;
    width: 100%
`

export const LocDetailsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color:rgba(0,0,1,0.5 );

`

export const PriceHeader = styled.h4`
    font-size: 1.7rem;
    color:rgba(0,0,1,0.5 );
`