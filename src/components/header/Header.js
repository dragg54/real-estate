import React from 'react'
import {IconsContainer, Logo, LogoContainer, MenuIcon, NavContainer, NavElements, NavList } from './StyledHeader'
import { FiMenu } from "react-icons/fi"

const Header = () => {
  return (
    <NavContainer>
    <LogoContainer>
        <Logo>
            <span style={{fontSize:'0.95rem'}}>THE</span> LUPAL GROUP
        </Logo>
    </LogoContainer>
    <NavElements>
        <NavList>
            Home
        </NavList>
        <NavList>
            About
        </NavList>
        <NavList>
            Properties
        </NavList>
        <NavList>
            Blog
        </NavList>
    </NavElements>
    <IconsContainer>
        <MenuIcon><FiMenu/></MenuIcon>
    </IconsContainer>
    </NavContainer>
  )
}

export default Header