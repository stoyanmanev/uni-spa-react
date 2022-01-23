import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import PersonalInfo from "./PersonalInfo";
import ContactForm from "./ContactForm";

export default function ContactBranch() {
  return (
    <>
      <Row>
        <Col lg={12}>
          <h1 className="mb-5 text-center">Contact</h1>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <PersonalInfo />
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <p className="contact-text">
            If you have questions about my services and offers, you can use the
            following form!
          </p>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Container className="container">
            <ContactForm />
          </Container>
        </Col>
      </Row>
    </>
  );
}
