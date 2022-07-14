import styled from "styled-components"

export const PropertyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 28px 140px 0px 140px;
    max-width: 100%;
    height: 550px;
    margin-bottom: 50px;

    @media(max-width: 1200px){
        padding: 22px 90px 0px 90px;
        overflow: scroll;
    }
    @media(max-width: 900px){
        padding: 35px 50px 0px 35px;
        
   
    }
    @media(max-width: 768px){
        padding: 16px 30px 0px 30px;
        height: 650px;
    }
    @media(max-width: 600px){
        padding: 3px 15px 40px 15px;
        height: 1300px;
        margin-top: -130px;
        overflow: hidden;
        margin-bottom: 0;
    }
`

export const PropertyBody = styled.div`
    @media(max-width: 600px){
        margin-top: -50px
    }
`

export const PropertyHeading = styled.h1`
    font-size: 2.1rem;
    margin-bottom:20px;
    white-space: nowrap;
    padding:0 140px 0px 140px;

    @media(max-width: 1200px){
        padding: 22px 90px 0px 90px;
    }
    @media(max-width: 900px){
        padding: 35px 50px 0px 35px
    }
    @media(max-width: 768px){
        padding: 16px 30px 0px 30px;
    }
    @media(max-width: 600px){
        padding: 3px 15px 40px 15px;
        font-size: 1.6rem;
        margin-bottom: 0
    }
`
export const PropertyContainer= styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding:0;

    @media(max-width: 1200px){
       width:200%;
       overflow: scroll;
        -ms-overflow-style: hidden;
        scrollbar-width: none;

    }

    @media(max-width: 600px){
        width: 100%;
        height: 100%;
        flex-direction: column;
        align-items: center;
        overflow: hidden
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

    @media(max-width: 780px){
        height:60%;
    }

    @media(max-width: 600px){
        height:57%;
    }
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
    margin: 0;

    @media(max-width: 780px){
        height:40%;
    }
    @media(max-width: 600px){
        height:43%;
    }
` 
export const Img = styled.img`
    height: 100%;
    width: 100%
`

export const LocDetailsContainer = styled.div`
    width: 100%;
    display: flex;
    color:rgba(0,0,1,0.5 );
    align-items: center;
    justify-content: flex-start;
    margin-left:-2px
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
    padding: 0;
`

export const LocationInfo = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.8rem;
`

export const LocationInfoContainer =  styled.div`
    display:flex;
    width: 80%;
    justify-content: space-between;

    @media(max-width: 900px){
        width:100%
    }

    @media(max-width: 900px){
        width:80%
    }

`

export const GeographyCont = styled.div`
    display: flex;
    font-size: 0.8rem
`

export const ViewAll = styled.h4`
    color: #003060;
    padding:0 140px 0px 140px;
    text-decoration-style: none;
    &:hover{
        cursor: pointer;
    }

    @media(max-width: 1200px){
        padding: 22px 90px 0px 90px;
    }
    @media(max-width: 900px){
        padding: 35px 50px 0px 35px
    }
    @media(max-width: 768px){
        padding: 16px 30px 0px 30px;
    }
    @media(max-width: 600px){
        padding: 3px 15px 40px 15px;
        margin-bottom: 100px;
        margin-top: -20px
    }

`