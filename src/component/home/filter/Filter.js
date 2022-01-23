import React, { useEffect } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Name from "./Name";
import League from "./League";
import {getGames, setLoading} from '../../../redux/actions'
import { isLoading } from "../../../redux/reducers";
import Loading from "../../basic/Loading";


export default function Filter() {
  const options = [
    {
      competition: "All"
    },
    {
      competition: "ITALY: Serie A",
    },
    {
      competition: "SPAIN: La Liga",
    },
    {
      competition: "GERMANY: Bundesliga",
    },
    {
      competition: "ENGLAND: Premier League",
    },
  ];

  const loading = useSelector((state) => state.isLoading);

  const dispatch = useDispatch();

  function getSelect(select){
    if(select.value === "All") return undefined;
    return select.value;
  }

  function getInput(input){
    if(input.value === "") return undefined;
    return input.value;
  }

  useEffect(() => {
    fetchGames();
  }, []);

  function filtersOnSubmit(e) {
    e.preventDefault();
    const name = getInput(e.target[0])
    const select = getSelect(e.target[1]);
    fetchGames({title : name, competition : select});
  }

  function fetchGames(props) {
    dispatch(setLoading(true))
    dispatch(getGames({props}))
  }

  if(loading){
    return <Loading />;
  }

  return (
    <Card className="mt-2 mt-md-0">
      <Card.Body>
        <Card.Title className="mb-3">Filters</Card.Title>
        <Form onSubmit={filtersOnSubmit}>
          <Name />
          <Form.Select className="mb-3">
            <League options={options} />
          </Form.Select>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
