import React from 'react'
import { Jumbotron, Row, Col, Image, Badge } from 'react-bootstrap'
import Styles from './../styles/variables.json'
import BigGlyf from './../BigGlyf'

function BoldWords ({ text }) {
  return <span style={{ color: Styles.$blue }}>{text}</span>
}

function Introduction () {
  return (
    <>
      <Jumbotron>
        <Row>
          <Col md={3} style={{ textAlign: 'center' }}>
            <Image src='/static/images/bitmoji.jpg' style={{ maxWidth: '100%' }} />
          </Col>

          <Col md={9}>
            <Row>
              <Col md={12}>
                <h1>Evan Tahler</h1>
                <br />
                <h4>I use my <BoldWords text='Product Management' />, <BoldWords text='Software Engineering' />, and <BoldWords text='Leadership' /> skills to help build a team capable of creating world-class Digital Consumer Products.</h4>
              </Col>
            </Row>

            <div style={{ padding: 30 }} />

            <Row>
              <Col md={4} style={{ textAlign: 'center' }}>
                <a target='_blank' href='https://twitter.com/evantahler'><BigGlyf name='twitter' /><br /> <Badge variant='secondary'>@evantahler</Badge></a>
              </Col>
              <Col md={4} style={{ textAlign: 'center' }}>
                <a target='_blank' href='https://linkedin.com/in/evantahler'><BigGlyf name='linkedin' /><br /> <Badge variant='secondary'>@evantahler</Badge></a>
              </Col>
              <Col md={4} style={{ textAlign: 'center' }}>
                <a target='_blank' href='mailto:evan@evantahler.com'><BigGlyf name='inbox' /><br /><Badge variant='secondary'>evan@evantahler.com</Badge></a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Jumbotron>
    </>
  )
}

export default Introduction
