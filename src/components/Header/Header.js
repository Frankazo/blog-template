import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
// import styled from 'styled-components'

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
    <Nav.Link href="#/">HOME</Nav.Link>
    <Nav.Link href="#/Portfolio">PORTFOLIO</Nav.Link>
    <Nav.Link href="#/Blog">BLOG</Nav.Link>
    <Nav.Link href="#/About">ABOUT ME</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar expand="lg">
    <Container>
      <Navbar.Brand style={{ padding: '20px 0 20px 0', marginRight: '250px' }} href="#">
          SOURCE OF LOVE
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          { user && <span className="navbar-text mr-2">Welcome, Helly</span>}
          { alwaysOptions }
          { user ? authenticatedOptions : unauthenticatedOptions }
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="#/">Icons</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Header
