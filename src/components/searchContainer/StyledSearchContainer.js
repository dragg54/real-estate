import styled from "styled-components";
import { PrimaryButton } from "../hero/StyledHero";

export const PropertySearchContainer = styled.div`
display: flex;
max-width:90%;
max-height: 200px;
display: flex;
flex-direction: column;
justify-content: space-around;
position: absolute;
left: 50%; 
transform: translate(-50%, 50%);
bottom: 0;
padding: 15px 40px 40px 40px;
border-radius: 8px;
box-shadow: 2px 2px 2px gray;
background-color: #fff;

@media(max-width: 600px){
    max-width: 95%;
    padding: 20px 10px;
    transform: translate(-50%, 135%);
}

` 
export const SearchHeader = styled.h2`
    margin-bottom:40px;
    @media(max-width:600px){
        font-size: 1.2rem;
        margin-bottom: 20px;
    }
    @media(max-width:480px){
        font-size: 0.8rem;
    }
`
export const InputContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

`
export const Input = styled.input`
    width: 200px;
    height:40px;
    padding:5px 10px;
    border-radius: 6px;
    margin-right: 10px;
    outline: none;
    border: 1px solid gray;

    @media(max-width: 768px){
        width:100px;
        height: 30px
    }

    @media(max-width: 600px){
        width:70px;
        height: 30px;
        font-size: 0.7rem;
    }

    @media(max-width: 600px){
        width:70px;
        height: 30px;
        padding:0 5px;
  
    }

    @media(max-width: 480px){
        width:60px;
        height: 30px
    }
`

export const SearchButton = styled(PrimaryButton)`
    width: 200px;
    height:50px;
    padding:5px 10px;
    border-radius: 6px;
    outline: none;

    @media(max-width: 768px){
        width:100px;
        height: 40px
    }

    @media(max-width: 600px){
        width:70px;
        height: 30px;
        font-size: 0.7rem;
    }

    @media(max-width: 480px){
        width:70px;
        height: 30px
    }
    `

    export const LocationIcon = styled.div`
        position: absolute;
        top: 20%;
        font-size: 1.5rem;
        right: 15px;
        color:rgba(0,0,1,0.5 );

        @media(max-width: 480px){
            font-size: 1rem;
            right: 12px
        }
    `

    export const PropertyIcon = styled(LocationIcon)`

    `
    export const BudgetIcon = styled(LocationIcon)`
    `
