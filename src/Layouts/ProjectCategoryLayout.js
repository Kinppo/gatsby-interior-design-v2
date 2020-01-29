import React, { useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import ProjectCard from "../components/ProjectCard"
import CustomFooter from "../components/CustomFooter"
import Style from "../style/style"
const Container = styled.div`
  width: 100%;
  color: #333;
  font-family: "Montserrat", sans-serif;
  .content {
    max-width: 1700px;
    margin: auto;
    margin-top: 120vh;
  }
  .portfolio-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-bottom: 15em;
  }
  .title {
    color: #fff;
  }
  h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 700;
    font-family: "Montserrat", sans-serif;
  }
  h6 {
    text-align: center;
    font-size: 6px;
    margin-bottom: 5em;
    font-weight: 600;
    color: #fff;
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
  .card-wrapper {
    min-width: 330px;
    width: 30vw;
    height: 380px;
    margin: 4em 2em;
  }
  .bg {
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
    /* background-size: 2252px 947px; */
  }
  .hidden-item {
    position: absolute;
    top: 50px;
  }
  @media only screen and (max-width: 500px) {
    h1 {
      font-size: 48px;
    }
  }
`

function ProjectCategoryLayout({ data }) {
  useEffect(() => {
    var currentWidth = document.querySelector(".bg").offsetWidth
    var currentHeight = document.querySelector(".bg").offsetHeight
    var availableHeight = window.innerHeight
    var availableWidth = window.innerWidth
    var scaleX = availableWidth / currentWidth
    var scaleY = availableHeight / currentHeight
    var translationX = Math.round((availableWidth - currentWidth * scaleX) / 2)
    var translationY = Math.round(
      (availableHeight - currentHeight * scaleY) / 2
    )
    document.querySelector(`.bg`).style.margin = "0"
    document.querySelector(`.bg`).style.position = "absolute"
    document.querySelector(`.bg`).style.transform =
      "translate(" +
      translationX +
      "px, " +
      translationY +
      "px) scale(" +
      scaleX +
      ", " +
      scaleY +
      ")"
    document.querySelector(`.bg`).style.bottom = "0"
    document.querySelector(`.bg`).style.right = "0"
    document.querySelector(`.bg`).style.backgroundSize = "cover"
    document.querySelector(`.bg`).style.backgroundPosition = "center"
    setTimeout(() => {
      document
        .querySelector(`.hidden-item`)
        .scrollIntoView({ block: "start", behavior: "smooth" })
    }, 800)
  })
  return (
    <div className="warapper">
      <Container>
        <div
          className="bg"
          style={{
            background: ` linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${require("../assets/img/" +
              data.allSanityProject.edges[0].node.categories[0].title
                .toLowerCase()
                .replace(" ", "") +
              ".jpg")})`,
          }}
        >
          <h6 className="hidden-item"></h6>
          <h1
            className="title"
            data-sal="slide-up"
            data-sal-duration="1300"
            data-sal-delay="300"
            data-sal-easing="ease"
          >
            {data.allSanityProject.edges[0].node.categories[0].title} Projects
          </h1>
          <h6
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-delay="300"
            data-sal-easing="ease"
            className="h6"
          >
            Our best work
          </h6>
        </div>
        <div className="content">
          <div className="portfolio-cards">
            {data.allSanityProject.edges.map(({ node }) => (
              <Link to={node.slug.current} key={node.title}>
                <div className="card-wrapper">
                  <ProjectCard
                    img={node.mainImage}
                    title={node.title}
                    type="Photo"
                    use={true}
                  />
                </div>
              </Link>
            ))}
          </div>
          <Style />
        </div>
      </Container>
      <CustomFooter />
    </div>
  )
}

export default ProjectCategoryLayout
