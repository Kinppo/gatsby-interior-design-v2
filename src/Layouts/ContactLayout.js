import React from "react";
import { Container, Col } from "react-bootstrap";
import styled from "styled-components";
import img from "../assets/img/bgc-min.png";
import img1 from "../assets/img/m1-min.png";
import img2 from "../assets/img/m2-min.png";
import img3 from "../assets/img/m3-min.png";
import img4 from "../assets/img/m4-min.png";
import img5 from "../assets/img/m5-min.png";
import img6 from "../assets/img/m6-min.png";
import img7 from "../assets/img/m7-min.png";

const Wrapper = styled.div`
  color: #333;
  margin-top: 2em;
  .contact-left-image {
    height: 88vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${img});
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h6 {
      font-weight: 500;
      margin-top: -3.5em;
      line-height: 1.5;
    }
    h2 {
      font-weight: 500;
      font-size: 3.5rem;
      margin-bottom: 1em;
    }
  }
  .contact-questiontext {
    color: white;
    font-size: 55px;
    z-index: 1;
    width: 80%;
    text-align: center;
  }
  .contact-companyname {
    color: white;
    font-size: 55px;
    z-index: 1;
    width: 80%;
    text-align: center;
    padding-top: 30px;
  }
  .contact-page-address {
    color: white;
    z-index: 1;
    color: white;
    z-index: 1;
    font-weight: 500;
    font-size: 23px;
    text-align: center;
    padding-top: 50px;
  }

  .contact-team-col h1 {
    color: #9f8575;
    font-size: 40px !important;
    line-height: 20px;
    padding-top: 123px;
    text-align: center;
  }
  .member-team-image {
    height: 100px;
    width: 100px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
  }
  .team-div {
    padding: 50px 50px;
  }
  .contact-rank {
    font-size: 23px;
    font-weight: 500;
  }
  .contact-team {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 100px;
  }
  .contact-team-col {
    height: 100vh;
    overflow: scroll;
    -ms-overflow-style: none;
    margin-top: 3%;
  }

  .contact-team-col::-webkit-scrollbar {
    display: none;
  }

  .contact-team p {
    margin-bottom: 0;
  }
  .contact-rank {
    margin-top: 20px;
  }
  @media only screen and (max-width: 766px) {
    .contact-left-image {
      height: 55vh;
      h2 {
        font-size: 24px;
      }
      h6 {
        font-size: 16px;
        margin-top: -3em;
      }
      .contact-team-col {
        margin-top: 0em;
      }
    }
    .contact-intro-img {
      width: 100%;
    }
  }
`;

const ContactLayout = () => {
  return (
    <Wrapper>
      <Container fluid={true} className="p-0 contact-main-container">
        <div className="d-flex flex-wrap contact-main-col-down">
          <Col md={8} className="p-0 contact-intro-img">
            <div className="contact-left-image">
              <div className="contact-questiontext">
                <h2>
                  CONTACT US WITH ANY <br />
                  QUESTIONS
                </h2>
              </div>
              <div className="contact-companyname">
                <h2>
                  CREATIVE WOODWORKDS <br />
                  LTD
                </h2>
              </div>
              <div className="contact-page-address">
                <h6>
                  Naaritsa, 70303 Leie, Kolga-Jaani vald
                  <br /> Viljandi maakond Estonia
                </h6>
              </div>
            </div>
          </Col>
          <Col md={4} sm={12} className="p-0 contact-team-col">
            <h1>Our Team</h1>
            <div className="team-div d-flex flex-wrap  justify-content-between">
              <Col className="contact-team">
                <div
                  className="member-team-image"
                  style={{ backgroundImage: `url(${img1})` }}
                />
                <p className="contact-rank">CEO</p>
                <p className="contact-name">Pete Gord</p>
                <p className="contact-number">+372 5645 7211</p>
                <p className="contact-email">gord@iglucraft.com</p>
              </Col>
              <Col className="contact-team">
                <div
                  className="member-team-image"
                  style={{ backgroundImage: `url(${img2})` }}
                />
                <p className="contact-rank">CTO</p>
                <p className="contact-name">Sondra Kitty</p>
                <p className="contact-number">+372 5645 7211</p>
                <p className="contact-email">kitty@iglucraft.com</p>
              </Col>
              <Col className="contact-team">
                <div
                  className="member-team-image"
                  style={{ backgroundImage: `url(${img3})` }}
                />
                <p
                  className="contact-rank"
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  Interior Designer
                </p>
                <p className="contact-name">Dell Miles</p>
                <p className="contact-number">+372 5645 7211</p>
                <p className="contact-email">miles@iglucraft.com</p>
              </Col>
              <Col className="contact-team">
                <div
                  className="member-team-image"
                  style={{ backgroundImage: `url(${img4})` }}
                />
                <p className="contact-rank">Enginner</p>
                <p className="contact-name">Patricia Kayly</p>
                <p className="contact-number">+372 5645 7211</p>
                <p className="contact-email">kayly@iglucraft.com</p>
              </Col>
              <Col className="contact-team">
                <div
                  className="member-team-image"
                  style={{ backgroundImage: `url(${img5})` }}
                />
                <p className="contact-rank">SALES</p>
                <p className="contact-name">Ramsey Hale</p>
                <p className="contact-number">+372 5645 7211</p>
                <p className="contact-email">hale@iglucraft.com</p>
              </Col>
              <Col className="contact-team">
                <div
                  className="member-team-image"
                  style={{ backgroundImage: `url(${img6})` }}
                />
                <p className="contact-rank">SALES</p>
                <p className="contact-name">Cynthia Gae</p>
                <p className="contact-number">+372 5645 7211</p>
                <p className="contact-email">gae@iglucraft.com</p>
              </Col>
              <Col
                md={12}
                className="contact-team"
                style={{ paddingBottom: "2em" }}
              >
                <div
                  className="member-team-image"
                  style={{ backgroundImage: `url(${img7})` }}
                />
                <p className="contact-rank">Management</p>
                <p className="contact-name">Maarian Toom</p>
                <p className="contact-number">+372 5645 7211</p>
                <p className="contact-email">maarian@iglucraft.com</p>
              </Col>
            </div>
          </Col>
        </div>
      </Container>
    </Wrapper>
  );
};
export default ContactLayout;
