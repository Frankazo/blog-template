import React, { Fragment } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
// import styled from 'styled-components'

const Home = () => {
  return (
    <Fragment>
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
      </Jumbotron>
    </Fragment>
  )
}

export default Home