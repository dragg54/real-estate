import React from 'react'
import { Icons, IconsContainer, Logo, LogoContainer, NavContainer, NavElements, NavList } from './StyledHeader'
import { FaSearch } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'

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
    </IconsContainer>
    </NavContainer>
  )
}

export default Header