import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Home.css";

function Home() {
  return (
    <Row>
      <Col
        md={6}
        className="d-flex flex-direction-column align-items-center justify-content-center"
      >
        <div>
          <h1>Link with fashionistas</h1>
          <p>Linking You With Like Minded Divas</p>
          <LinkContainer to="/chat">
            <Button
              className="button"
              variant="success"
              style={{ backgroundColor: "#6757fd !important" }}
            >
              Get Started <i className="fa-solid fa-venus"></i>
            </Button>
          </LinkContainer>
        </div>
      </Col>
      <Col md={6} className="home__bg"></Col>
    </Row>
  );
}

export default Home;
