import React from "react";
import { BudgetIcon, Input, InputContainer, LocationIcon, PropertyIcon, PropertySearchContainer, SearchButton, SearchHeader } from "./StyledSearchContainer";
import { MdLocationOn } from "react-icons/md";
import { BsHouseFill } from "react-icons/bs";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

const SearchContainer = () => {
  return (
    <PropertySearchContainer>
      <SearchHeader>Search for available Properties</SearchHeader>
      <InputContainer>
      <div style={{position:"relative"}}>
         <Input type="text" placeholder="Location"/>
         <LocationIcon><MdLocationOn /></LocationIcon>
      </div>
      <div style={{position:"relative"}}> 
        <Input type="text"  placeholder="Property"/>
        <PropertyIcon><BsHouseFill /></PropertyIcon>
      </div>
      <div style={{position:"relative"}}> 
        <Input type="text" placeholder="Budget"/>
        <BudgetIcon><RiMoneyDollarCircleFill /></BudgetIcon>
      </div>
        <SearchButton>Search</SearchButton>
      </InputContainer>
    </PropertySearchContainer>
  );
};

export default SearchContainer;
