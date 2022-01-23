import React, { useState } from "react";
import { Card, ButtonGroup, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThList, faGripHorizontal } from "@fortawesome/free-solid-svg-icons";
import GamesContext from "./GamesContext";
import { useDispatch, useSelector } from "react-redux";
import { setListView } from "../../../redux/actions";
import Pagination from "./Pagination";

export default function ListResults() {
  const dispatch = useDispatch();
  const isListView = useSelector((state) => state.isListView);
  const games = useSelector((state) => state.games);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = games.slice(indexOfFirstPost, indexOfLastPost);

  function paginate(e, pageNumber){
    e.preventDefault();
    setCurrentPage(pageNumber);
  }

  return (
    <Card className="p-4">
      <Row className="justify-content-between align-items-center mb-3">
        <Col lg={8}>
          <Card.Title className="mb-0">List</Card.Title>
        </Col>
        <Col lg={4} className="d-flex justify-content-end">
          <ButtonGroup aria-label="List switch">
            <Button
              variant={isListView ? "primary" : "outline-primary"}
              className="custom-btn"
              onClick={() => dispatch(setListView(true))}
            >
              <FontAwesomeIcon size="sm" icon={faThList} />
            </Button>
            <Button
              className="custom-btn"
              variant={isListView ? "outline-primary" : "primary"}
              onClick={() => dispatch(setListView(false))}
            >
              <FontAwesomeIcon size="sm" icon={faGripHorizontal} />
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
      <Row>
        <GamesContext posts={currentPosts}/>
      </Row>
      <Row>
        <Col lg={12}>
          <Pagination postsPerPage={postsPerPage} totalPosts={games.length} paginate={paginate}/>
        </Col>
      </Row>
    </Card>
  );
}
