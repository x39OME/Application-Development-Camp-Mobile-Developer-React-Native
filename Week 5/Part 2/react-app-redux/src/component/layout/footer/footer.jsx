import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
  import './footer.css'
export default function MainFooter() {
  return (
    <Container fluid className="main-footer-container">
    <Row className="justify-content-center">
      <Col xs={6} className="main-footer-col"> MainFooter </Col>
    </Row>
  </Container>
  )
}
