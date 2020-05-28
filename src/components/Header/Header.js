import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import styled from 'styled-components'
// import { compose, space, border, flexbox, layout } from 'styled-system'

const HeaderOuter = styled.div`
    position: relative;
`
const HeaderInner = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
    background-color: #ffffff;
    z-index: 4;
`

const HeaderMain = styled.div`
    display: flex;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
`

const HeaderCol = styled.div`
    flex: 1 0 auto;
    display: flex;
    align-items: center;
`

const authenticatedOptions = (
  <Fragment>
    <Nav.Link href="#change-password">Change Password</Nav.Link>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <Nav.Link href="#/">Home</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg="primary" variant="dark" expand="md">
    <Navbar.Brand href="#">
      blog-client
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbar-text mr-2">Welcome, Helly</span>}
        { alwaysOptions }
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
