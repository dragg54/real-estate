import styled from "styled-components"

export const PropertyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 28px 140px 0px 140px;
    max-width: 100%;
    height: 700px;
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
        height: 1550px;
        margin-top: -49px;
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
    height: 100%;
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
   box-shadow: 1px 1px 2px #747474;
   color:rgba(0,0,1,0.5 );

   @media(max-width: 600px){
        width: 100%;
        height: 32%;
    }

`
export const ImageContainer = styled.div`
    width: 100%;
    height:65%;
    object-fit: contain;
    display: flex;
    justify-content:center;
    align-items: center;
    overflow: hidden;
`
export const DescriptionContainer=styled.div`
    width:100%;
    height:35%;
    background-color: #fff;
    box-sizing: border-box;
    padding: 15px 19px 34px 19px;
    display: flex;
    flex-direction: column;
    justify-items: space-between;
    margin: 0
` 
export const Img = styled.img`
    height: 100%;
    width: 100%
`

export const LocDetailsContainer = styled.div`
    width: 100%;
    display: flex;
    color:rgba(0,0,1,0.5 );
    font-size: 0.5rem;
    align-items: center;
`

export const PriceHeader = styled.h4`
    font-size: 1.7rem;
    margin: 0;
    color: #000
    
`
export const Icons = styled.li`
    font-size: 1rem;
    margin-right: 3px;
    list-style: none;
`

export const LocationInfo = styled.div`
    display: flex;
    align-items: center;
`

export const LocationInfoContainer =  styled.div`
    display:flex;
    width: 80%;
    justify-content: space-between;

    @media(max-width: 600px){
        width:90%
    }

`

export const GeographyCont = styled.div`
    display: flex;
`