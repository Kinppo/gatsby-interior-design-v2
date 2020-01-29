import React, { useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Style from "../style/style"
import { Carousel } from "react-bootstrap"
import Header from "../components/Header"
import Image from "gatsby-image"
const Container = styled.div`
  color: #333;
  font-family: "Montserrat", sans-serif;
  .header-wrapper {
    position: absolute;
    top: 0;
    z-index: 2;
    right: 2em;
  }
  .showcase {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-width: 330px;
    width: 30vw;
    height: 380px;
    margin: 4em 0em;
    transform-origin: right bottom;
    transition: 0.7s;
    z-index: -1;
    color: #fff;
    max-width: 2000px;
    max-height: 100vh;
    z-index: -1;
    text-align: center;
    transition: all 1s;
  }
  h1 {
    text-transform: uppercase;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    font-family: "Montserrat", sans-serif;
  }
  h6 {
    text-align: center;
    font-size: 6px;
    margin-bottom: 5em;
    font-weight: 600;
  }
  h2 {
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    font-weight: 700;
    text-transform: capitalize;
  }
  .next-project-link {
    text-align: center;
    margin: 15em 0em 8em 0em;
    p {
      font-size: 14px;
      font-weight: 600;
    }
    h1 {
      font-size: 64px;
      color: #fff;
      transition: all 0.4s;
      line-height: 1;
      -webkit-text-stroke: 2px #333;
      &:hover {
        color: #333;
      }
    }
  }
  .description {
    margin: auto;
    margin-top: 120vh;
    max-width: 700px;
    padding: 10em 0em;
    h2 {
      padding-left: 1.5em;
    }
    p {
      margin-top: 2.5em;
      text-align: justify;
      line-height: 2;
      padding: 0em 1em;
    }
  }
  a {
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }
  .carousel-item {
    box-sizing: border-box;
  }
  .carousel {
    margin: auto;
    max-width: 1600px;
    padding: 0em 1em;
    box-sizing: border-box;
  }
  .carousel-img {
    border-radius: 2px;
    height: 40vw;
    width: calc(33.33% - 1em);
    margin: 0em 0.5em;
  }
  .carousel-indicators {
    bottom: -3em;
  }
  .carousel-indicators li {
    width: 10px;
    height: 10px;
    border-radius: 100px;
    border: none;
    background: #333;
  }
  .carousel-2,
  .carousel-3 {
    display: none;
  }
  .carousel-flex {
    display: flex;
  }
  .hidden-item {
    position: absolute;
    top: 50px;
  }
  @media only screen and (max-width: 1000px) {
    .carousel-1 {
      display: none;
    }
    .carousel-2 {
      display: block;
    }
    .carousel-img {
      width: calc(50% - 1em);
      height: 65vw;
    }
  }
  @media only screen and (max-width: 580px) {
    h1 {
      font-size: 48px;
    }
    .carousel-2 {
      display: none;
    }
    .carousel-3 {
      display: block;
    }
    .carousel-img {
      width: calc(100% - 1em);
      height: 110vw;
    }
  }
`

export default function ProjectLayout({ data }) {
  useEffect(() => {
    var currentWidth = document.querySelector(".showcase").offsetWidth
    var currentHeight = document.querySelector(".showcase").offsetHeight
    var availableHeight = window.innerHeight
    var availableWidth = window.innerWidth
    var scaleX = availableWidth / currentWidth
    var scaleY = availableHeight / currentHeight
    var translationX = Math.round((availableWidth - currentWidth * scaleX) / 2)
    var translationY = Math.round(
      (availableHeight - currentHeight * scaleY) / 2
    )
    document.querySelector(`.showcase`).style.margin = "0"
    document.querySelector(`.showcase`).style.position = "absolute"
    document.querySelector(`.showcase`).style.transform =
      "translate(" +
      translationX +
      "px, " +
      translationY +
      "px) scale(" +
      scaleX +
      ", " +
      scaleY +
      ")"
    document.querySelector(`.showcase`).style.bottom = "0"
    document.querySelector(`.showcase`).style.right = "0"
    document.querySelector(`.showcase`).style.backgroundSize = "cover"
    document.querySelector(`.showcase`).style.backgroundPosition = "center"
    setTimeout(() => {
      document
        .querySelector(`.hidden-item`)
        .scrollIntoView({ block: "start", behavior: "smooth" })
    }, 1100)
  })

  const handleBg = e => {
    if (-e.nativeEvent.offsetX > -90) {
      document.querySelector(".showcase").style.backgroundPositionX =
        -e.nativeEvent.offsetX + "px"
    }
  }
  return (
    <Container>
      <div className="header-wrapper">
        <Header color="#FFF" action={true} />
      </div>
      <div
        className="showcase"
        onMouseMove={handleBg}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${data.sanityProject.mainImage.asset.fixed.src})`,
        }}
      >
        <h6 className="hidden-item"></h6>
        <h1>{data.sanityProject.title}</h1>
        <p>Explore more</p>
      </div>
      <div className="description">
        <h2>{data.sanityProject.descriptionTitle}</h2>
        <p>{data.sanityProject.description}</p>
      </div>
      <div className="img-carousel">
        <Carousel controls={false} interval={8000} className="carousel-1">
          <Carousel.Item>
            <div className="carousel-flex">
              <Image
                fluid={data.sanityProject.image1.asset.fluid}
                alt="title"
                className="carousel-img"
              />
              <Image
                fluid={data.sanityProject.image2.asset.fluid}
                alt="title"
                className="carousel-img"
              />
              <Image
                fluid={data.sanityProject.image3.asset.fluid}
                alt="title"
                className="carousel-img"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-flex">
              <Image
                fluid={data.sanityProject.image4.asset.fluid}
                alt="title"
                className="carousel-img"
              />
              <Image
                fluid={data.sanityProject.image5.asset.fluid}
                alt="title"
                className="carousel-img"
              />
              <Image
                fluid={data.sanityProject.image6.asset.fluid}
                alt="title"
                className="carousel-img"
              />
            </div>
          </Carousel.Item>
        </Carousel>
        <Carousel controls={false} interval={8000} className="carousel-2">
          <Carousel.Item>
            <div className="carousel-flex">
              <Image
                fluid={data.sanityProject.image1.asset.fluid}
                alt="title"
                className="carousel-img"
              />
              <Image
                fluid={data.sanityProject.image2.asset.fluid}
                alt="title"
                className="carousel-img"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-flex">
              <Image
                fluid={data.sanityProject.image3.asset.fluid}
                alt="title"
                className="carousel-img"
              />
              <Image
                fluid={data.sanityProject.image4.asset.fluid}
                alt="title"
                className="carousel-img"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-flex">
              <Image
                fluid={data.sanityProject.image5.asset.fluid}
                alt="title"
                className="carousel-img"
              />
              <Image
                fluid={data.sanityProject.image6.asset.fluid}
                alt="title"
                className="carousel-img"
              />
            </div>
          </Carousel.Item>
        </Carousel>
        <Carousel controls={false} interval={8000} className="carousel-3">
          <Carousel.Item>
            <div className="carousel-flex">
              <Image
                fluid={data.sanityProject.image1.asset.fluid}
                alt="title"
                className="carousel-img"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-flex">
              <Image
                fluid={data.sanityProject.image2.asset.fluid}
                alt="title"
                className="carousel-img"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-flex">
              <Image
                fluid={data.sanityProject.image3.asset.fluid}
                alt="title"
                className="carousel-img"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-flex">
              <Image
                fluid={data.sanityProject.image4.asset.fluid}
                alt="title"
                className="carousel-img"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-flex">
              <Image
                fluid={data.sanityProject.image5.asset.fluid}
                alt="title"
                className="carousel-img"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-flex">
              <Image
                fluid={data.sanityProject.image6.asset.fluid}
                alt="title"
                className="carousel-img"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      {data.allSanityProject.edges[0] ? (
        <div className="next-project-link">
          <p>Next Project</p>
          <Link to={data.allSanityProject.edges[0].next.slug.current}>
            <h1 className="next-project">
              {data.allSanityProject.edges[0].next.title}
            </h1>
          </Link>
        </div>
      ) : (
        ""
      )}

      <Style />
    </Container>
  )
}
