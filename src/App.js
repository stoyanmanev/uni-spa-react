import React from "react";
import {Container, Row} from 'react-bootstrap';
import Home from './page/Home';
import Contact from './page/Contact';
import NavBar from "./component/navbar/NavBar";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const routes = [
  {
    path: "/",
    component: <Home />,
    exact: true
  },
  {
    path: "contact",
    component: <Contact />,
  },
]

function App() {

  const getRoutes = () => {
    return routes.map((route, index) => {
      return <Route key={index} exact={route.exact} path={route.path} element={route.component} />
    })
  }

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Container>
          <Row>
          <Routes>
            {getRoutes()}
          </Routes>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
