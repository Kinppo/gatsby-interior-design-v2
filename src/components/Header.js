import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Hamburger from "./elements/Hamburger"
import SideBar from "./SideBar"
const Container = styled.div`
  ul {
    margin: 2em 2em 0em 0em;
  }
  .nav-item,
  .hamburger-item,
  .open-sideBar {
    z-index: 4;
  }
  .nav-link {
    background: transparent;
    color: ${props => (props.color ? props.color : "#836755")};
    padding: 0px;
    font-size: 18px;
    margin: 0em 2em;
    border-bottom: 1px solid transparent;
    transition: all 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    transition-property: all;
    transition-duration: 0.4s;
    transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    transition-delay: 0s;
    transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    &:hover {
      border-bottom: 1px solid #b89b89;
    }
  }
  .hamburger-item {
    display: none;
  }
  .open-sideBar {
    background: transparent;
    outline: none;
    border: none;
  }
  a {
    &:hover {
      border-bottom: none;
    }
  }
  @media only screen and (max-width: 650px) {
    .hamburger-item {
      display: block;
    }
    .nav-item {
      display: none;
    }
  }
`

const Header = ({ color, changeSection, action }) => {
  const [SideBarIsActive, toggleSideBar] = useState(false)
  const openSideBar = () => {
    toggleSideBar(true)
  }
  return (
    <Container className="container-fluid header" color={color}>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          {!action ? (
            <button
              className="nav-link active"
              onClick={() => changeSection(0)}
            >
              Home
            </button>
          ) : (
            <Link to="/" className="nav-link">
              Home
            </Link>
          )}
        </li>
        <li className="nav-item">
          {!action ? (
            <button
              className="nav-link active"
              onClick={() => changeSection(1)}
            >
              Works
            </button>
          ) : (
            <Link to="/" className="nav-link">
              Works
            </Link>
          )}
        </li>
        <li className="nav-item">
          {!action ? (
            <button
              className="nav-link active"
              onClick={() => changeSection(2)}
            >
              About
            </button>
          ) : (
            <Link to="/" className="nav-link">
              About
            </Link>
          )}
        </li>
        <li className="nav-item">
          {!action ? (
            <button
              className="nav-link active"
              onClick={() => changeSection(3)}
            >
              Contact
            </button>
          ) : (
            <Link to="/" className="nav-link">
              Contact
            </Link>
          )}
        </li>
        <li className="hamburger-item">
          <button className="open-sideBar" onClick={() => openSideBar()}>
            <Hamburger />
          </button>
        </li>
      </ul>
      <SideBar
        toggleSideBar={toggleSideBar}
        SideBarIsActive={SideBarIsActive}
        changeSection={changeSection}
        action={action}
      />
    </Container>
  )
}

export default Header
