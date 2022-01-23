import React from "react";
import { Col, Alert, Row } from "react-bootstrap";

export default function PersonalInfo() {
  return (
    <Row>
      <Col lg={4}>
        <Alert className="info-text alert-secondary">
          <div>Stoyan Manev</div>
          <div>Plovdiv, Bulgaria</div>
        </Alert>
      </Col>
      <Col lg={4}>
        <Alert className="info-text alert-secondary">
          <div>Phone:</div>
          <div>
            <a className="phone" href="tel:+359 87 902 2343">
              +359 87 902 2343
            </a>
          </div>
        </Alert>
      </Col>
      <Col lg={4}>
        <Alert className="info-text alert-secondary">
          <div>E-Mail:</div>
          <div>
            <a className="email" href="mailto:stoyan.manev.job@gmail.com">
              stoyan.manev.job@gmail.com
            </a>
          </div>
        </Alert>
      </Col>
    </Row>
  );
}
