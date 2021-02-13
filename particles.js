import React from 'react'
import Jumbotron from '../../components/Jumbotron';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
 .description {
    padding-left: 15px;
    padding-right: 200px;
  }
`


function particles() {
  return (
    <React.Fragment>
      <Styles>
        <Jumbotron initial_title="Particle Simulator" 
                  main_title=''
                  overlay="default_overlay"
                  overlay2="projects_overlay" />
        <Container fluid='sm'>
          <Row>
            <Col className='description'>
              <p>
                This is a simple particle simulator I wrote while teaching myself javascript basics. Click and drag the mouse around
                for a gravity-like effect.
              </p>
            </Col>
          </Row>
          <Row>
            <ul>
              <li> <a href='https://github.com/nshamszadeh/p5js-particles'>GitHub</a>  </li>
              <li> <a href='https://editor.p5js.org/nshamszadeh/present/eDnzGqMm7'>Demo</a> </li>
            </ul>
          </Row>
        </Container>
      </Styles>
    </React.Fragment>
  )
}

export default particles
