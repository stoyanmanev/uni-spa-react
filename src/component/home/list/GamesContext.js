import React from "react";
import { useSelector } from "react-redux";
import NoResult from "./NoResult";
import { Col } from "react-bootstrap";
import GameListItem from "./GameListItem";
import GameGridItem from "./GameGridItem";

export default function GamesContext(props) {
  const games = props.posts;
  const isListView = useSelector(state => state.isListView);

  function getGamesListItems() {
    return games.map((res, i) => {
      return (
        isListView ? 
        <Col key={i} lg={4} className="mb-3">
            <GameListItem res={res}/>
        </Col>
        :
        <Col key={i} lg={12} className="mb-3">
            <GameGridItem res={res}/>
        </Col>
       
      );
    });
  }

  function renderGames() {
    if (!games.length) {
      return <NoResult />;
    }
    return getGamesListItems();
  }

  return renderGames();
}
