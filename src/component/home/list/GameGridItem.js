import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function GameGridItem(props) {
  return (
    <div className="teaser-box">
      <div className="teaser">
        <Row>
          <Col lg={4}>
            <figure className="object-fit">
              <img
                className="game-poster"
                src={props.res.thumbnail}
                alt={props.res.title}
              />
            </figure>
          </Col>
          <Col lg={4}>
            <Container className="d-flex h-100 align-items-center justify-content-center flex-column">
              <span className="d-block title text-center">
                {props.res.title}
              </span>
              <span className="d-block competition text-center">
                {props.res.competition}
              </span>
              <span className="d-block date text-center">{props.res.date}</span>
            </Container>
          </Col>
          <Col lg={4}>
            <a href={props.res.matchviewUrl} rel="noopener" target="_blank">
              <Button className="view-popup-btn">
                <FontAwesomeIcon icon={faPlay} />
              </Button>
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
}
