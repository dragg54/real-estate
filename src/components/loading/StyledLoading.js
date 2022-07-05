import styled from "styled-components"
import { keyframes } from "styled-components"


export const Rotate = keyframes`
    0%{
        transform:rotate(0deg)
    }

    100%{
        transform:rotate(360deg)
    }
`

export const LoadingWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: 50%;
    position: fixed;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
`
export const LoadingContainer = styled.div`
    height: 100px;
    width: 100px;
    border-radius: 50%;
    animation-name: ${Rotate};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-delay: 0s;
    border: 15px solid #B1B1B1;
    border-top: 15px solid #000C66
`

export const LoadingEl = styled.div`
    height:20px;
    width: 20px;
    border-radius: 50%;
    background-color: purple;

`
