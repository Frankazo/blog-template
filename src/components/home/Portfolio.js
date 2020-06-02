import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'

export const FeaturePostWrapper = styled.div`
    padding-top: 60px;
    padding-bottom: 47px;
`

export const FeaturePostSlideWrap = styled.div`
    border-bottom: 1px solid blue;
    padding-bottom: 54px;
`

const FeaturePostArea = (props) => {
  return (
    <FeaturePostWrapper id="feature-post">
      <Container>
        <Row>
          <Col lg={12}>
            <div>
              <h4>Portfolio</h4>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <FeaturePostSlideWrap>
              <div>
                {/* {blogs.map(blog => (
                  <div className="item" key={blog.node.fields.slug}>
                    <Blog
                      content={{
                        ...blog.node.fields,
                        ...blog.node.frontmatter,
                        title: truncateString(blog.node.frontmatter.title, 35)
                      }}
                    />
                  </div>
                ))} */}
                <img src={require('../../author-2.jpg')} alt='Author Image'/>
                <img src={require('../../author-2.jpg')} alt='Author Image'/>
                <img src={require('../../author-2.jpg')} alt='Author Image'/>
                <img src={require('../../author-2.jpg')} alt='Author Image'/>
              </div>
            </FeaturePostSlideWrap>
          </Col>
        </Row>
      </Container>
    </FeaturePostWrapper>
  )
}

export default FeaturePostArea
