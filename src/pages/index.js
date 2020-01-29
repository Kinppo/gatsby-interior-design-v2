import React, { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.css"
import "../style/main.scss"
import Seo from "../components/seo"
import Header from "../components/Header"
import DefaultLayout from "../Layouts/DefaultLayout"
import styled from "styled-components"
import PortfolioLayout from "../Layouts/PortfolioLayout"
import AboutLayout from "../Layouts/AboutLayout"
import ContactLayout from "../Layouts/ContactLayout"
import disableBrowserBackButton from "disable-browser-back-navigation"

const Container = styled.div`
  .flexbox {
    display: flex;
    flex-direction: row;
    width: 200vw;
  }
  .flex-item {
    transition: all 1.5s ease-in-out;
  }
  .flex-item-1 {
    height: 100vh;
    overflow: scroll;
    -ms-overflow-style: none;
  }
  .flex-item-1::-webkit-scrollbar {
    display: none;
  }
`

export default function IndexPage() {
  const [section, setSection] = useState(0)
  const changeSection = value => {
    setSection(value)
  }
  useEffect(() => {
    if (window.innerWidth <= 766) {
      console.log(window.innerWidth)
      document.querySelector(".flex-item-0").style.display = "none"
      document.querySelector(".flex-item-1").style.display = "none"
      document.querySelector(".flex-item-2").style.display = "none"
      document.querySelector(".flex-item-3").style.display = "none"
      document.querySelector(`.flex-item-${section}`).style.display = "block"
    } else {
      document.querySelector(".flex-item-0").style.display = "block"
      document.querySelector(".flex-item-1").style.display = "block"
      document.querySelector(".flex-item-2").style.display = "block"
      document.querySelector(".flex-item-3").style.display = "block"
    }
  })
  return (
    <Container>
      <Seo title="Home" />
      <div className="flexbox">
        <div
          className="flex-item flex-item-0"
          style={
            section === 0
              ? {
                  transition: "all 1.5s",
                  width: "100vw",
                }
              : section >= 0
              ? {
                  transform: `translateX(-100vw)`,
                  transition: "all 1.5s",
                  width: "0vw",
                }
              : {
                  transform: `translateX(100vw)`,
                  transition: "all 1.5s",
                  width: "0vw",
                }
          }
        >
          <Header changeSection={changeSection} />
          <DefaultLayout changeSection={changeSection} />
        </div>
        <div
          className="flex-item  flex-item-1"
          style={
            section === 1
              ? {
                  transform: "translateX(0%)",
                  transition: "all 1.5",
                  width: "100vw",
                  opacity: "1",
                }
              : section > 0
              ? {
                  transform: `translateX(-200vw)`,
                  transition: "all 1.5",
                  width: "0vw",
                  opacity: "0",
                }
              : {
                  transform: `translateX(100vw)`,
                  transition: "all 1.5",
                  width: "0vw",
                  opacity: "0",
                }
          }
        >
          <Header changeSection={changeSection} />
          <PortfolioLayout />
        </div>
        <div
          className="flex-item flex-item-2"
          style={
            section === 2
              ? {
                  transform: "translateX(0vw)",
                  transition: "all 1.5",
                  width: "100vw",
                  opacity: "1",
                }
              : section > 1
              ? {
                  transform: `translateX(-200vw)`,
                  transition: "all 1.5s",
                  width: "0vw",
                  opacity: "0",
                }
              : {
                  transform: `translateX(100vw)`,
                  transition: "all 1.5s",
                  width: "0vw",
                  opacity: "0",
                }
          }
        >
          <Header changeSection={changeSection} />
          <AboutLayout />
        </div>
        <div
          className="flex-item flex-item-3"
          style={
            section === 3
              ? {
                  transform: "translateX(0vw)",
                  transition: "all 1.5s",
                  width: "100vw",
                }
              : section > 2
              ? {
                  transform: `translateX(-200vw)`,
                  transition: "all 1.5s",
                  width: "0vw",
                }
              : {
                  transform: `translateX(100vw)`,
                  transition: "all 1.5s",
                  width: "0vw",
                }
          }
        >
          <Header changeSection={changeSection} />
          <ContactLayout />
        </div>
      </div>
    </Container>
  )
}
