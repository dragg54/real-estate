import styled from "styled-components"

export const ServicesBody = styled.div`
    height: 2000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width:100%;
    overflow: hidden;
    justify-content: space-between;

    @media(max-width: 1200px){
        height: 2300px
    }

    @media(max-width: 900px){
        height: 2200px
    }


    @media(max-width: 780px){
        height: 2500px
    }
    @media(max-width: 600px){
       height: 2460px;
    }

    @media(max-width: 400px){
       height: 2550px;
    }
`

export const ServicesContainer = styled.div`
    height: 60%;
    width: 100%;
    padding: 28px 100px 20px 100px;
    margin-top: 40px;
    overflow: hidden;

    @media(max-width: 1200px){
        padding: 24px 70px 24px 70px
    }

    @media(max-width: 900px){
        padding: 24px 30px 24px 30px;
        height: 75%;
    }

    @media(max-width: 600px){
     padding: 3px 15px 40px 15px;
    }

    @media(max-width: 480px){
    height:90%
    }

`
export const ServiceCard = styled.div`
    background-color: purple;
    height: 100%;
    box-shadow: 1px 1px 2px #747474;
    padding: 50px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    border-radius: 8px;

    @media(max-width: 600px){
        padding: 45px 25px;
        height: 24%
    }
    `

export const ServiceHeader = styled.h1`
  margin-bottom: 20px;
`

export const ImageContainer = styled.div`
    width: 100%;
    height: 40%;
    overflow: hidden;
    object-fit: contain;
    display: flex;
    justify-content: center;
    align-items: center;


    @media(max-width: 780px){
        height: 20%
    }

    @media(max-width: 480px){
        height: 10%;
    }
`
export const ServiceCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: repeat(2,1fr);
    justify-items: stretch;
    height: 90%;
    grid-gap: 58px;

    @media(max-width: 900px){
        grid-gap: 20px;
    }

    @media(max-width: 780px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    @media(max-width: 600px){
        height: 100%;
        padding: 0 0 0px 0
    }
`

export const Img = styled.img`
    height: 100%;
    width: 100%
`

export const Header = styled.h3`
    text-align: left;
    font-size: 2.5rem;
    color:rgba(0,0,1,0.5 );

    @media(max-width: 480px){
        font-size:1.7rem
    }
`

export const Icon = styled.h4`
    text-align: left;
    font-size: 2.6rem;
    color: #003060
`

export const P = styled.p`
    font-size: 1.3rem;
    margin-top: 30px;
    line-height: 40px;
    color:rgba(0,0,1,0.5 );
    

    @media(max-width: 900px){
        font-size:1rem
    }
`
