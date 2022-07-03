import styled from "styled-components"

export const HeroContainer = styled.div`
    padding: 0px 140px 0px 140px;
    overflow:hidden;
    position: relative;
    height: 80%;

    @media(max-width: 1200px){
        padding: 22px 130px 0px 130px;
    }
    @media(max-width: 900px){
        padding: 16px 80px 0px 80px
    }
    @media(max-width: 768px){
        padding: 16px 30px 0px 30px
    }
    @media(max-width: 600px){
        padding: 3px 15px 0px 15px
    }
`

export const HeroWrapper = styled.div`
    height: 800px;
    width:100%;
    background: linear-gradient(#68BBE3, #003060);
    padding:0px;
    position: relative;
    margin-bottom: 200px;


    @media(max-width: 600px){
       height: 670px
    }

`

export const BackgroundImgContainer = styled.div`
    height: 100%;
    width: 100%;
    background-image: url("../../../images/hero-image.png");
    position: absolute;
    background-repeat: no-repeat;
    z-index: 0;
   background-position: right bottom;
   background-size: 1000px;

   @media(max-width: 600px){
    background-size: 700px;
    background-position: bottom;
    margin-top: 40px;
   }
    `

export const HeroSection = styled.div`
    width:100%;
    display: flex;

    @media(max-width: 900px){
        margin-bottom: -30px;
    }
    @media(max-width: 600px){
       position:  relative;
       margin-top:-20px
    }

`
export const HeroSubSection = styled.div`
    width: 470px;
    height: 580px;
    margin-top: 180px;

    @media(max-width: 1200px){
        margin-top: 150px;
        height: 604px;
        width:400px
    }
    
    @media(max-width: 900px){
        width:300px
    }

    @media(max-width: 768px){
        width:250px
    }

    @media(max-width: 600px){
      height: 650px;
      width:100px
    }

    
`

export const HeroCaption = styled.h1`
    font-size: 3rem;
    color: #fff;
    line-height: 57px;

    @media(max-width: 1200px){
        width: 400px;
        height:70px;
    
    }
    
    @media(max-width: 600px){
        width: 350px;
        position: absolute;
    }

    
`

export const HeroSubCaption = styled.h4`
    font-size: 1rem;
    color:rgb(173,216,230);
    margin-top: 20px;

    @media(max-width: 1200px){
        margin-top: 105px
    }

    @media(max-width: 900px){
        margin-top: 110px;
    }

    @media(max-width: 768px){
        width: 350px;
        height:50px;
        margin-bottom: 60px;
    }
    @media(max-width: 600px){
        width: 300px;
        margin-top: 175px;
        position: absolute;
        z-index:15
        
    }

`

export const PrimaryButton = styled.button`
    padding: 12px 20px;
    font-size: 0.8rem;
    background-color: #E34234;
    box-shadow: 1px 1px 1px red;
    color: 	rgb(173,216,230);
    border: none;
    border-radius: 7px;

    @media(max-width: 600px){
        font-size: 0.6rem;
        white-space: nowrap;
    }
`

export const SecondaryButton = styled.button`
    border: none;
    font-size: 0.8rem;
    color:	rgb(173,216,230);
    background-color: transparent;
    display: flex;
    align-items: center;
    white-space: no-wrap;
   
`

export const ButtonContainer = styled.div`
    width: 220px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;

    @media(max-width: 600px){
        position: absolute;
        z-index: 2;
        margin-top:265px
    }
`
export const HeroImageContainer = styled.div`
    object-fit: contain;
    margin-right: -450px;
    align-self: flex-end;
    position: relative;

    @media(max-width: 900px){
        width: 400px;
        justify-self: flex-end;
    }

    @media(max-width: 600px){
       position: absolute;
       right:500px
    }

    `

    export const Img = styled.img`
        user-select: none;
        -drag:none;
        @media(max-width: 600px){
            width: 500px;
            height: 600px;
        }
    `
   