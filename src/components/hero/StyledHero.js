import styled from "styled-components"

export const HeroContainer = styled.div`
    padding: 28px 140px 0px 140px;
    overflow:hidden;

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
    background: linear-gradient(#68BBE3, #003060), url("../../../images/hero-image.png");
    padding:0px;
    position: relative;
    margin-bottom: 200px;


    @media(max-width: 600px){
       height: 850px
    }

`

export const HeroSection = styled.div`
    width:100%;
    display: flex;

    @media(max-width: 900px){
        margin-bottom: -30px;
    }
    @media(max-width: 600px){
       position:  relative
    }

`
export const HeroSubSection = styled.div`
    width: 650px;
    height: 580px;
    margin-top: 80px;

    @media(max-width: 1200px){
        margin-top: 50px;
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
      height: 700px;
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
        margin-bottom: 180px;
    
    }
    
    @media(max-width: 600px){
        width: 350px;
        position: absolute;
        z-index: 2;
    }

    
`

export const HeroSubCaption = styled.h4`
    font-size: 1rem;
    color: hsl(240, 100%, 90%);

    @media(max-width: 900px){
        margin-top: -10px;
    }

    @media(max-width: 768px){
        width: 350px;
        height:50px;
        margin-bottom: 60px;
    }
    @media(max-width: 600px){
        width: 300px;
        margin-top: 330px;
        position: absolute;
        z-index:2
        
    }

`

export const PrimaryButton = styled.button`
    padding: 12px 20px;
    font-size: 0.8rem;
    background-color: #E34234;
    box-shadow: 1px 1px 1px red;
    color: hsl(240, 100%, 90%);
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
    color: hsl(240, 100%, 90%);
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

    @media(max-width: 600px){
        position: absolute;
        z-index: 2;
        margin-top:450px
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
   