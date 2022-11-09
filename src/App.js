import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  Container,
  Grid,
} from "semantic-ui-react";

import MenuDefault from "./components/Menu";
import HoneyPot from "./components/HoneyPot";
import Log4J from "./components/Log4J";
import Home from "./components/Home";
import Evernote from "./components/Evernote";
import SearchSploit from "./components/SearchSploit";
import Blog from "./components/Blog";
import Options from "./components/Options";
import Wifi from "./components/Wifi";


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
                <Route  path="/evernote" element={<Evernote />} />
                <Route  path="/SearchSploit" element={<SearchSploit />} />
                <Route  path="/HoneyPot" element={<HoneyPot />} />
                <Route  path="/blog" element={<Blog />} />
                <Route  path="/Wifi" element={<Wifi />} />

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
