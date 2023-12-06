import React, { Component } from "react";
import Landingpage from "../components/Landingpage";
import MyCarousel from "../components/MyCarousel";
import styled from "styled-components";
import InfoSection from "../components/InfoSection";
import Button from "../components/elements/Button";
import Footer from "../components/Footer";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img_mobilehome_pillar_01.svg";
import img5 from "../assets/img/img_mobilehome_pillar_02.svg";
import img6 from "../assets/img/img_mobilehome_pillar_03.svg";

const Container = styled.div`
  transition: all 1s;
  transition-delay: 1.3s;
  position: absolute;
  top: 0%;
  width: 100%;
  height: 100vh;
  .section {
    height: 100%;
    width: 100%;
  }
  .row {
    height: 100%;
    display: grid;
    grid-template-columns: 66.66% 33.33%;
  }
  .carousel {
    height: 100%;
  }
  .left-content {
    position: absolute;
    transition: all 1s;
    transition-delay: 1s;
    height: 100%;
  }
  .section {
    padding: 0 !important;
  }
  .info {
    height: 100%;
  }
  .mobile {
    display: none;
  }
  @media only screen and (max-width: 766px) {
    .desktop {
      display: none;
    }
    .mobile {
      display: block;
    }
  }
  .mobile-image {
    width: 100%;
    height: 98vw;
  }
  .content-text {
    margin: 2em;
    color: #212529;
    text-align: left;
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
  }
  .showcase-text {
    background: #fff3e3;
    padding: 10%;
    color: #333;
    h3 {
      font-size: 20px;
      text-transform: uppercase;
    }
  }
  .flex-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1em 0em;
  }
  .mobile-icon {
    margin-right: 3em;
  }
`;
export default class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    this.state = { content: 0, type: "down", scrollState: 1 };
    this.handleKey = this.handleKey.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleScrool = this.handleScrool.bind(this);
    this.updateSrollState = this.updateSrollState.bind(this);
    this.resetState = this.resetState.bind(this);
  }
  resetState() {
    this.setState({
      content: 0,
      type: "down",
    });
  }
  handleState() {
    this.setState({
      content: this.state.content + 1,
      type: "down",
    });
  }
  handleKey(event) {
    if (event.keyCode === 40 && this.state.scrollState) {
      if (this.state.content !== 3) {
        this.setState({ content: this.state.content + 1, type: "down" });
      }
    } else if (event.keyCode === 38 && this.state.scrollState) {
      if (this.state.content !== 0) {
        this.setState({ content: this.state.content - 1, type: "up" });
      }
    }
  }
  handleScrool(event) {
    if (event.deltaY === 100 && this.state.scrollState) {
      if (this.state.content !== 3) {
        this.setState({ content: this.state.content + 1, type: "down" });
      }
    } else if (event.deltaY === -100 && this.state.scrollState) {
      if (this.state.content !== 0) {
        this.setState({ content: this.state.content - 1, type: "up" });
      }
    }
  }
  updateSrollState() {
    if (window.innerWidth <= 766) {
      this.setState({ scrollState: 0 });
    } else {
      this.setState({ scrollState: 1 });
    }
  }
  componentDidMount() {
    this.updateSrollState();
    document.addEventListener("keydown", this.handleKey, false);
    window.addEventListener("resize", this.updateSrollState.bind(this));
  }
  componentWillUnmount() {}
  render() {
    return (
      <Container
        onWheel={this.handleScrool}
        content={this.state.content}
        className="container-fluid"
        style={
          this.state.content !== 0 && this.state.scrollState
            ? {
                transition: "all 1s",
                marginTop: "8vh",
                marginLeft: "1vw",
                marginRight: "1vw",
                width: "98vw",
                height: "90vh",
              }
            : {}
        }
      >
        <div className="row desktop">
          <div className="section left-section">
            <Landingpage
              content={this.state.content}
              type={this.state.type}
              setContent={this.handleState}
            />
          </div>
          <div className="section right-section">
            <InfoSection
              className="left-content info"
              content={this.state.content}
              scrollState={this.state.scrollState}
            />
            <MyCarousel
              className="left-content carousel"
              content={this.state.content}
              type={this.state.type}
            />
          </div>
        </div>
        <div className="mobile">
          <img src={img1} alt="showcase 1" className="mobile-image" />
          <div className="showcase-text">
            <div className="flex-container">
              <img src={img4} alt="icon1" className="mobile-icon" />
              <div className="inner-flex">
                <h3>Nordic design</h3>
                <p>
                  Combining the centuries-old shingle technology with modern
                  knowledge and craftwork.
                </p>
              </div>
            </div>
            <div className="flex-container">
              <img src={img5} alt="icon1" className="mobile-icon" />
              <div className="inner-flex">
                <h3>NATURAL MATERIALS</h3>
                <p>
                  Combining the centuries-old shingle technology with modern
                  knowledge and craftwork.
                </p>
              </div>
            </div>
            <div className="flex-container">
              <img src={img6} alt="icon1" className="mobile-icon" />
              <div className="inner-flex">
                <h3>HANDCRAFTED PRODUCTS</h3>
                <p>
                  Combining the centuries-old shingle technology with modern
                  knowledge and craftwork.
                </p>
              </div>
            </div>
          </div>
          <img src={img2} alt="showcase 2" className="mobile-image" />
          <div className="content-text content-text1">
            <h3>KITCHENS</h3>
            <h5>Stunning Natural Stone Kitchens</h5>
            <h6>
              Elevate your culinary haven with our bespoke kitchen interior
              design service. We specialize in creating functional and
              aesthetically pleasing kitchen spaces that seamlessly blend modern
              design with practicality. From personalized cabinetry and
              innovative storage solutions to carefully curated color schemes,
              our team transforms kitchens into stylish, efficient, and inviting
              spaces that cater to your unique lifestyle and culinary
              preferences.
            </h6>
            <p>
              Unleash the potential of your kitchen with our expert interior
              design. From sleek cabinetry to innovative layouts, our service
              combines style and efficiency for a culinary space that reflects
              your taste and enhances functionality.
            </p>
            <Button>View all kitchens</Button>
          </div>
          <img src={img3} alt="showcase 3" className="mobile-image" />
          <div className="content-text content-text2">
            <h3>BATHROOMS</h3>
            <h5>Stunning Natural Stone bathrooms</h5>
            <h6>
              Indulge in the luxury of a thoughtfully designed bathroom
              sanctuary with our expert interior design service. We focus on
              crafting bathrooms that harmonize functionality with elegance,
              offering tailored solutions for optimal space utilization. From
              contemporary fixtures to spa-inspired elements, our designs
              combine sophistication and comfort, providing a rejuvenating
              retreat within the confines of your home. Discover the perfect
              balance of style and practicality in our bespoke bathroom interior
              designs.
            </h6>
            <p>
              Experience luxury at its finest with our bathroom interior design.
              From chic fixtures to space-maximizing layouts, we create a
              spa-like retreat tailored to your style, bringing opulence and
              comfort seamlessly into your home.
            </p>
            <Button>View all bathrooms</Button>
          </div>
        </div>
        <Footer
          className="footer-section"
          content={this.state.content}
          scrollState={this.state.scrollState}
          changeSection={this.props.changeSection}
          resetState={this.resetState}
        />
      </Container>
    );
  }
}
