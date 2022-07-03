import React from "react";
import {
  Header,
  Icon,
  ImageContainer,
  Img,
  P,
  ServiceCard,
  ServiceCardContainer,
  ServiceHeader,
  ServicesBody,
  ServicesContainer,
} from "./StyledServices";
import { BsBank } from "react-icons/bs";
import { HiOutlineReceiptTax } from "react-icons/hi";
import { RiTodoFill } from "react-icons/ri"
import { MdOutlineRealEstateAgent } from "react-icons/md"

const Services = () => {
  return (
    <ServicesBody>
      <ImageContainer>
        <Img src="../../../images/house.jpg" alt="" />
      </ImageContainer>
      <ServicesContainer>
        <ServiceHeader>Services</ServiceHeader>
        <ServiceCardContainer>
        <ServiceCard>
          <Icon><BsBank /></Icon>
          <Header>Mortgage</Header>
          <P>To relieve you of overwhelming financial distress, we offer housing loans of various categories
           with fair repayment agreement. We have relationship with reputable financial institutions who aree
           always ready to assist you when you need a plan.
          </P>
        </ServiceCard>
        <ServiceCard>
        <Icon><HiOutlineReceiptTax /></Icon>
          <Header>Tax Management</Header>
          <P>
            Our estating plans are well packaged to subsidize tax payments in a way to satisfy legal requirements in
            a fair alignment with your income. Qualified financial advocates are available to help enlighten you
            more on tax evaluation. 
          </P>

        </ServiceCard>
        <ServiceCard>
        <Icon><RiTodoFill /></Icon>
          <Header>Budgeting</Header>
          <P>
            We have functional financial agencies who are experienced in making financial and calculative decisions,
            making estimations and fiancial plans with proportionality based on your income.
          </P>

        </ServiceCard>
        <ServiceCard>
        <Icon><MdOutlineRealEstateAgent /></Icon>
          <Header>Real Estate Agency</Header>
          <P>
            With hundreds of qualified and well-trained agents, we make our clients comfortable and substantially
            informed when they need an apartment for any purpose. Also, we have availabl links for and buying and selling
            of real estate properties.
          </P>

        </ServiceCard>
        </ServiceCardContainer>
      </ServicesContainer>
    </ServicesBody>
  );
};

export default Services;
