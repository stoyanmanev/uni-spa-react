import React from "react";
import { Container } from "react-bootstrap";

export default function GameListItem(props) {
  return (
    <div className="teaser-box">
      <div className="teaser">
        <a href={props.res.matchviewUrl} rel="noopener" target="_blank">
          <figure className="object-fit">
            <img
              className="game-poster"
              src={props.res.thumbnail}
              alt={props.res.title}
            />
          </figure>
          <Container className="info">
            <span className="title">{props.res.title}</span>
          </Container>
        </a>
      </div>
    </div>
  );
}
