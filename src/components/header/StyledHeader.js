import styled from 'styled-components'

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`

export const Logo = styled.p`
    font-size: 1.2rem;
    width: 50px;
    color: #fff;
    font-family: Staatliches;

`

export const NavContainer = styled.div`
    max-height:100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff
`

export const NavElements = styled.ul`
    display: flex;
    list-style: none;
    justify-content: space-between;
    width: 450px;

    @media(max-width: 768px){
        display: none
    }
  
`

export const NavList = styled.li`
    font-size: 1.3rem;
`

export const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 165px;

    @media(max-width: 768px){
        justify-content: flex-end;
        width: 90px;
    }

    @media(max-width: 600px){
        justify-content: flex-end;
    }

`

export const Icons = styled.p`
    font-size: 1.4rem;
`

export const MenuIcon = styled.p`
    display: none;
    font-size: 1.5rem;

    @media(max-width: 768px){
        display: block;
        margin-left: 12px;
    }
`