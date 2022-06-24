import React from 'react'
import { Icons, IconsContainer, Logo, LogoContainer, MenuIcon, NavContainer, NavElements, NavList } from './StyledHeader'
import { FaSearch } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'
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
        <p style={{fontSize: "1rem", whiteSpace:"nowrap"}}>MY ACCOUNT</p>
        <Icons><BsFillPersonFill /></Icons>
        <Icons><FaSearch /></Icons>
        <MenuIcon><FiMenu/></MenuIcon>
    </IconsContainer>
    </NavContainer>
  )
}

export default Header