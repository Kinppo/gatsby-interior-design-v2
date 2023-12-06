import React from "react";
import Button from "./elements/Button";
import styled from "styled-components";
const Container = styled.div`
  background: #fff;
  position: absolute;
  color: #212529;
  text-align: left;
  padding: 0 60px;
  transition: all 1s;
  .content {
    transition: all 0.5s;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
  }
  .content2 {
    transform: translateY(-150%);
  }
  h3 {
    font-size: 36px;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }
  h5 {
    color: #9f8575;
    background-color: rgb(255, 243, 227);
    padding: 5px 7px;
    margin-bottom: 15px;
    display: inline-block;
    font-weight: 600;
    font-size: 16px;
  }
  h6 {
    margin-bottom: 1em;
    font-size: 20px;
    line-height: 30px;
    color: #363636;
    text-align: justify;
  }
  p {
    font-size: 16px;
    line-height: 28px;
    color: #363636;
    text-align: justify;
  }
  @media only screen and (max-width: 1200px) {
    h6 {
      font-size: 16px;
    }
    p {
      font-size: 14px;
    }
  }
  @media only screen and (max-width: 1000px) {
    p {
      display: none;
    }
    padding: 0 20px;
  }
  @media only screen and (max-width: 790px) {
    padding: 0 5px;
  }
`;
function InfoSection({ content, scrollState }) {
  return (
    <Container
      style={
        content === 0 && scrollState
          ? { height: "0%", transition: "all 1s" }
          : { height: "100%", transition: "all 1s", transitionDelay: "1s" }
      }
    >
      <div
        className="content content1"
        style={
          content === 1 && content !== 0
            ? {
                opacity: "1",
                transition: "all 1.5s",
                transitionDelay: "1s",
              }
            : {}
        }
      >
        <h3>KITCHENS</h3>
        <h5>Stunning Natural Stone Kitchens</h5>
        <h6>
          Elevate your culinary haven with our bespoke kitchen interior design
          service. We specialize in creating functional and aesthetically
          pleasing kitchen spaces that seamlessly blend modern design with
          practicality. From personalized cabinetry and innovative storage
          solutions to carefully curated color schemes, our team transforms
          kitchens into stylish, efficient, and inviting spaces that cater to
          your unique lifestyle and culinary preferences.
        </h6>
        <p>
          Unleash the potential of your kitchen with our expert interior design.
          From sleek cabinetry to innovative layouts, our service combines style
          and efficiency for a culinary space that reflects your taste and
          enhances functionality.
        </p>
        <Button>View all kitchens</Button>
      </div>
      <div
        className="content content2"
        style={
          content === 2 && content !== 0
            ? {
                opacity: "1",
                transition: "all 0.5s",
                transitionDelay: "1s",
              }
            : {}
        }
      >
        <h3>BATHROOMS</h3>
        <h5>Stunning Natural Stone bathrooms</h5>
        <h6>
          Indulge in the luxury of a thoughtfully designed bathroom sanctuary
          with our expert interior design service. We focus on crafting
          bathrooms that harmonize functionality with elegance, offering
          tailored solutions for optimal space utilization. From contemporary
          fixtures to spa-inspired elements, our designs combine sophistication
          and comfort, providing a rejuvenating retreat within the confines of
          your home. Discover the perfect balance of style and practicality in
          our bespoke bathroom interior designs.
        </h6>
        <p>
          Experience luxury at its finest with our bathroom interior design.
          From chic fixtures to space-maximizing layouts, we create a spa-like
          retreat tailored to your style, bringing opulence and comfort
          seamlessly into your home.
        </p>
        <Button>View all bathrooms</Button>
      </div>
    </Container>
  );
}

export default InfoSection;
