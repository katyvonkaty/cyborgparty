import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import {
  Container,
  Divider,
  Grid,
  Image,
  Segment,
  Button,
} from "semantic-ui-react";

import MenuDefault from "./components/Menu";
import Log4J from "./components/Log4J";
import Home from "./components/Home";

import Blog from "./components/Blog";
import Options from "./components/Options";

function App() {
  return (
    <div className="App">
      <Router>
        <MenuDefault />
        <Container centered style={{ marginTop: "50px" }}>
          <Grid centered>
            <Grid.Column centered width={10}>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route  path="/log4j" element={<Log4J />} />
                <Route  path="/blog" element={<Blog />} />
              </Routes>
              <Options />

            </Grid.Column>
          </Grid>
        </Container>
      </Router>
    </div>
  );
}

export default App;
