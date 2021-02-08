import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsContent from "./components/NewsContent";
import InsertData from "./components/InsertData";

function App() {
  const marginTop = {
    marginTop: "20px"
  };
  return (
      <div>
        <Router>
          <Header/>
          <Container>
            <Row>
              <Col lg={12} style={marginTop}>
                <Switch>
                  <Route path="/" exact component={Home}/>
                  <Route path="/news/:id" exact component={NewsContent}/>
                  <Route path="/admin/manager" exact component={InsertData}/>
                </Switch>
              </Col>
            </Row>
          </Container>
          <Footer/>
        </Router>
      </div>
  );
}

export default App;
