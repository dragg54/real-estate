import React, { useRef, useEffect, useState } from "react";
import {
  Button,
  ButtonContainer,
  ImageContainer,
  Img,
  Testimonial,
  TestimonialContainer,
  TestimonialContent,
  TestimonialHeader,
  TestimonialsContainer,
  TestimonialWrapper,
  UserName,
} from "./StyledTestimonials";
import { FcNext, FcPrevious } from "react-icons/fc";
import { FaQuoteLeft } from "react-icons/fa"

const Testimonials = () => {
  //carousel
  const [boxIndex, setBoxIndex] = useState(0);
  const box1 = useRef("");
  const box2 = useRef("");
  const box3 = useRef("");

  const boxes = [box1, box2, box3];

  function showContainer(index) {
    for (let box of boxes) {
      if (box === boxes[index]) {
        box.current.style.left = "50%";
        box.current.style.transform = "translate(-50%, 0)";
        box.current.style.opacity = "1";
      } else if (boxes.indexOf(box) < index) {
        box.current.style.transform = "translate(-200%, 0)";
        box.current.style.opacity = "0";
      } else if (boxes.indexOf(box) > index) {
        box.current.style.transform = "translate(200%, 0)";
        box.current.style.opacity = "0";
      }
    }
  }

  useEffect(() => {
    showContainer(boxIndex);
  }, [boxIndex, showContainer]);

  function showNextContainer() {
    if (boxIndex < boxes.length - 1) {
      setBoxIndex(boxIndex + 1);
    }
  }

  function showPrevContainer() {
    if (boxIndex > 0) {
      setBoxIndex(boxIndex - 1);
    }
  }
  console.log(boxIndex);
  return (
    <TestimonialWrapper>
      <TestimonialHeader>What people are saying about us</TestimonialHeader>
      <TestimonialsContainer>
        <TestimonialContainer ref={box1}>
          <TestimonialContent>
            <ImageContainer>
              <Img src="../../../images/user1.jpg" alt="user"></Img>
            </ImageContainer>
            <Testimonial>
              <p>
              <FaQuoteLeft style={{marginRight:"10px", fontSize:"2.5rem"}}/>When I and my family just moved to a new city, Lupal helped when we needed a good home.
              </p>
              <UserName>....Mark Zello</UserName>            </Testimonial>
          </TestimonialContent>
        </TestimonialContainer>
        <TestimonialContainer ref={box2}>
          <TestimonialContent>
            <ImageContainer>
              <Img src="../../../images/user2.jpg" alt="user"></Img>
            </ImageContainer>
            <Testimonial>
              <p>
              <FaQuoteLeft style={{marginRight:"10px", fontSize:"2.5rem"}}/>
                My experience with Lupal was a great one when I needed an apartment.
              </p>
              <UserName>...Wesley Sharon</UserName>
            </Testimonial>
          </TestimonialContent>
        </TestimonialContainer>
        <TestimonialContainer ref={box3}>
          <TestimonialContent>
            <ImageContainer>
              <Img src="../../../images/user3.jpg" alt="user"></Img>
            </ImageContainer>
            <Testimonial>
              <p>
              <FaQuoteLeft style={{marginRight:"10px", fontSize:"2.5rem"}}/>
                All I can say is thank you thank you Lupal for helping me out
                when all I needed was a good home.
              </p>
              <UserName>....Peterson Harry</UserName>
            </Testimonial>
          </TestimonialContent>
        </TestimonialContainer>
      </TestimonialsContainer>
      <ButtonContainer>
        <Button onClick={showPrevContainer}>
          <FcPrevious />
        </Button>
        <Button onClick={showNextContainer}>
          <FcNext />
        </Button>
      </ButtonContainer>
    </TestimonialWrapper>
  );
};

export default Testimonials;
