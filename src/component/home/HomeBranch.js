import React from "react";
import { Col, Row } from "react-bootstrap";
import ListResults from "./list/ListResults";
import Filter from "./filter/Filter";

export default function HomeBranch() {
  return (
    <>
      <Row>
        <Col lg={12}>
          <h1 className="mb-4 text-center">Football Results</h1>
        </Col>
      </Row>
      <Row>
        <Col lg={3} className="mb-3">
          <Filter />
        </Col>
        <Col lg={9}>
          <ListResults/>
        </Col>
      </Row>
    </>
  );
}
