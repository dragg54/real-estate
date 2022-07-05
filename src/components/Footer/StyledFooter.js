import styled from "styled-components"

export const FooterContainer = styled.div`
    height: 500px;
    width: 100%;
    background-image: url('../../../images/footer-img.jpg');
    background-size: contain;
    background-position: center;
    position: relative;
    background-repeat: no-repeat;

    
    @media(max-width: 600px){
       height: 960px;
       background-size: cover;

    }
`

export const FooterCover = styled.div`
    height: 100%;
    width: 100%;
    position:absolute;
    background-color:#050A30;
    opacity: 0.8;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 50px;
    color: #fff;
    line-height: 37px;
    white-space: nowrap;

    @media(max-width: 1200px){
        padding:30px 20px;
        line-height: 34px;
    }

    @media(max-width: 900px){
        font-size: 0.7rem;
        line-height: 30px;
    }

    @media(max-width: 600px){
        flex-direction: column;

    }
`

export const SocialMediaContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 45%;
    justify-content: space-between;

    
    @media(max-width: 900px){
        height: 40%;
    }

    
    @media(max-width: 600px){
       height: 20%
    }
`

export const CompanyLogo = styled.div`
    font-size: 2.2rem;
    display: flex;
    align-items: center;

    
    @media(max-width: 900px){
        font-size: 1.6rem;
    }

    
    @media(max-width: 780px){
        font-size: 1rem;
    }
`
export const SocialMediaLogo = styled.div`
    display: flex;
    width: 40%;
    justify-content: space-between;

    
    @media(max-width: 900px){
      width: 30%
    }
`
