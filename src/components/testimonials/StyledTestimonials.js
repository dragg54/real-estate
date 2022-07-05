import styled from "styled-components";

export const TestimonialsContainer = styled.div`
  height: 600px;
  width: 100%;
  background-color: #D9E4EC;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  position: relative;
  overflow: hidden;

  @media (max-width: 780px) {
    padding: 20px;
  }


  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const TestimonialWrapper = styled.div`
  height: 600px;
  width: 100%;
  background-color: #D9E4EC;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
  overflow: hidden;
  justify-content: center;

  @media (max-width: 1200px) {
    margin-top: 80px;
  }

  @media (max-width: 900px) {
    margin-top: 0px;
  }

  @media (max-width: 780px) {
    height: 500px;
    padding: 10px;
  }

  @media(max-width: 600px){
    margin-top: 40px;
  }

  @media (max-width: 480px) {
    height: 400px;
    padding: 30px 10px;
  }
`;

export const TestimonialHeader = styled.h1`
  color:  #003060;

  @media (max-width: 600px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const TestimonialContainer = styled.div`
  height: 80%;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  transition-duration: 1s;
  padding: 30px;

  @media (max-width: 780px) {
    padding: 0;
  }
`;

export const ImageContainer = styled.div`
  object-fit: contain;
  width: 200px;
  height: 200px;
  box-shadow: 2px 2px 2px gray;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;

  @media (max-width: 480px) {
    height: 150px;
  }
`;

export const Img = styled.img`
  width: 500px;
  height: 300px;

  @media (max-width: 480px) {
    height: 200px;
    width: 170px;
  }
`;
export const TestimonialContent = styled.div`
  display: flex;
  width: 65%;
  justify-content: space-between;
  color: #003060;

  @media (max-width: 1200px) {
    width: 85%;
  }

  @media (max-width: 900px) {
    width: 95%;
  }

  @media (max-width: 480px) {
    margin-top: 30px;
    width: 100%;
  }
`;

export const Testimonial = styled.p`
  font-size: 1.5rem;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 900px) {
    font-size: 1.3rem;
  }

  @media (max-width: 780px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const ButtonContainer = styled.div`
  width: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Button = styled.button`
  color: #003060;
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
`;

export const UserName = styled.p`
  font-size: 1.8rem;
  color: #003060;
  font-family: "The Nautigal";
  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;
