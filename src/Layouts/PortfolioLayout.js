import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import img1 from "../assets/img/img11.jpg"
import img2 from "../assets/img/img10.jpg"
import img3 from "../assets/img/img12.jpg"
import img4 from "../assets/img/img13.jpg"
import img5 from "../assets/img/img14.jpg"
import CustomFooter from "../components/CustomFooter"
const Container = styled.div`
  width: 100%;
  color: #333;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 10em;
  .portfolio-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 80%;
    margin: auto;
  }
  .title {
    margin-top: 3em;
  }
  h1 {
    text-transform: uppercase;
    text-align: center;
    font-size: 64px;
    font-weight: 700;
    font-family: "Montserrat", sans-serif;
  }
  h6 {
    text-align: center;
    font-size: 14px;
    margin-bottom: 5em;
    font-weight: 600;
  }
  .about-link {
    text-align: center;
    margin: 8em 0em;
    p {
      font-size: 14px;
      font-weight: 600;
    }
    h1 {
      color: #fff;
      transition: all 0.4s;
      line-height: 1;
      -webkit-text-stroke: 2px #333;
      &:hover {
        color: #333;
      }
    }
  }
  a {
    color: #333;
    text-decoration: none;
    &:hover {
      color: #333;
    }
  }
  button {
    background: transparent;
  }
  .portfolio-title {
    display: flex;
    margin-top: -2em;
    margin-left: 2em;
    hr {
      background: #777;
      color: #777;
      width: 1.4em;
      margin: 0.5em 1.2em 0em 1.2em;
    }
    h4 {
      text-transform: uppercase;
      font-size: 16px;
      font-weight: 700;
    }
    p {
      font-size: 14px;
      color: #777;
      line-height: 16px;
    }
  }
  .wrap {
    height: 16px;
    overflow: hidden;
  }
  .old,
  .new {
    transition: transform 0.2s linear;
  }
  .portfolio-card:hover .old {
    transform: translateY(-1.2em);
  }
  .portfolio-card:hover .new {
    transform: translateY(-2.4em);
  }
  .card-btn {
    min-width: 330px;
    width: 30vw;
    height: 380px;
    margin: 4em 0em;
    transition: all 0.8s;
    transform-origin: left bottom;
    background-size: cover;
  }
  .card-btn-1 {
    background-image: url(${img1});
  }
  .card-btn-2 {
    background-image: url(${img2});
  }
  .card-btn-3 {
    background-image: url(${img3});
  }
  .card-btn-4 {
    background-image: url(${img4});
  }
  .card-btn-5 {
    background-image: url(${img5});
  }
  @media only screen and (max-width: 500px) {
    h1 {
      font-size: 48px;
    }
  }
`
export default function PortfolioLayout() {
  return (
    <div className="warapper">
      <Container className="myContainer">
        <h1 className="title">PORTFOLIO</h1>
        <h6>Our best work</h6>
        <div className="portfolio-cards">
          <div className="portfolio-card">
            <Link to="./kitchen">
              <button className="card-btn card-btn-1"></button>
            </Link>
            <div className="portfolio-title">
              <h4>Kitchens</h4>
              <hr />
              <div className="wrap">
                <p className="old">Photo</p>
                <p className="new">View Case</p>
              </div>
            </div>
          </div>
          <div className="portfolio-card">
            <Link to="./bathroom">
              <button className="card-btn card-btn-2"></button>
            </Link>
            <div className="portfolio-title">
              <h4>Bathrooms</h4>
              <hr />
              <div className="wrap">
                <p className="old">Photo</p>
                <p className="new">View Case</p>
              </div>
            </div>
          </div>
          <div className="portfolio-card">
            <Link to="./bedroom">
              <button className="card-btn card-btn-3"></button>
            </Link>
            <div className="portfolio-title">
              <h4>Bedrooms</h4>
              <hr />
              <div className="wrap">
                <p className="old">Design</p>
                <p className="new">View Case</p>
              </div>
            </div>
          </div>
          <div className="portfolio-card">
            <Link to="./living-room">
              <button className="card-btn card-btn-4"></button>
            </Link>
            <div className="portfolio-title">
              <h4>Living rooms</h4>
              <hr />
              <div className="wrap">
                <p className="old">Photo</p>
                <p className="new">View Case</p>
              </div>
            </div>
          </div>
          <div className="portfolio-card">
            <Link to="./dining-room">
              <button className="card-btn card-btn-5"></button>
            </Link>
            <div className="portfolio-title">
              <h4>Dining rooms</h4>
              <hr />
              <div className="wrap">
                <p className="old">Design</p>
                <p className="new">View Case</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <CustomFooter />
    </div>
  )
}
