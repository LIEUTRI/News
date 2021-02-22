import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'jquery/dist/jquery.min';
import NewsContent from "./components/NewsContent";
import './App.css';
import Admin from "./components/Admin";

function App() {
    const marginTop = {
        marginTop: "20px"
    };
    return (
        <div className="App">
            <Router >
                <Container>
                    <Row>
                        <Col lg={12} style={marginTop}>
                            <Switch>
                                <Route path="/NewsApp" exact component={Home}/>
                                <Route path="/NewsApp/news/:id" exact component={NewsContent}/>
                                <Route path="/NewsApp/admin" exact component={Admin}/>
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </Router>
        </div>
    );
}

export default App;
