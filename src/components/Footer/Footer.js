import React from "react";
import { CompanyLogo, FooterContainer, FooterCover, SocialMediaContainer, SocialMediaLogo } from "./StyledFooter";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterCover>
        <SocialMediaContainer>
          <CompanyLogo>
            <img
              src="../../../images/logo.png"
              alt=""
              height={100}
              width={100}
            />
            Lupal Group
          </CompanyLogo>
          <p>Connect With Us</p>
          <SocialMediaLogo>
            <BsFacebook />
            <FaInstagram />
            <FaTwitter />
          </SocialMediaLogo>
          <p>@copyright 2022</p>
        </SocialMediaContainer>
        <ul>
            <h4>Search</h4>
            <li>Properties For Sale</li>
            <li>Properties For Lease</li>
            <li>Auctions</li>
            <li>Businesses</li>
            <li>Find an Agent</li>
        </ul>
        <ul>
            <h4>Products and Services</h4>
            <li>Advertise with us</li>
            <li>Lupal Link</li>
            <li>Help Center</li>
        </ul>
        <ul>
            <h4>Resources</h4>
            <li>Contact Us</li>
            <li>Mobile</li>
            <li>Site Map</li>
            <li>Learn</li>
            <li>Submit Articles</li>
        </ul>
        <ul>
            <h4>Company</h4>
            <li>About Us</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>About Us</li>
            <li>Accessibily Commitment</li>
        </ul>
      </FooterCover>
    </FooterContainer>
  );
};

export default Footer;
