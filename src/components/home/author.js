import React, { Fragment } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10vh;
  justify-content: space-between;
  height: 35vh;
  width: 65vh;
`
const AuthorImg = styled.figure`
  margin-bottom: 10px;
  img{
      border-radius: 50%;
      border: 15px solid #fff;
      box-shadow: -14.142px -14.142px 40px 0px rgb( 255, 255, 255 );
  }
  div{
      border-radius: 50%;
      background-color: rgb( 255, 255, 255 );
  }
`

const Author = () => {
  return (
    <Fragment>
      <Jumbotron
        style={{ padding: '100px 0 100px 0', height: 'auto', backgroundColor: '#d77cde90', display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}
      >
        <AuthorImg>
          <img src={require('../../author-2.jpg')} alt='Author Image'/>
        </AuthorImg>
        <Container>
          <div>
            <h1 style={{ color: '#ffffff', margin: '0' }}>Author Name</h1>
            <p style={{ color: '#ffffff' }}>description</p>
          </div>
          <p style={{ color: '#ffffff' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p style={{ color: '#ffffff' }}>
            icon icon icon icon
          </p>
        </Container>
      </Jumbotron>
    </Fragment>
  )
}

export default Author
