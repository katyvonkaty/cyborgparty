import { Route, Routes, Redirect } from 'react-router-dom';
import { Container, Divider, Grid, Image, Segment } from "semantic-ui-react";
import Info from "./components/Info";
import Tag from "./components/Tag";

import MeatPotatoes from "./components/MeatPotatoes";
import Options from "./components/Options";
import MenuDefault from "./components/Menu";
import Log4J from "./components/Log4J";





function App() {
  return (
    <div className="App">
    <MenuDefault />
      <Container centered style={{ marginTop: "100px" }}>
        <Grid centered>
          <Grid.Column centered width={10}>
          <h1> Hi, I'm Katie Jordan. </h1>
          <h3> I'm a Cyber Security Analyst, Web Developer, Professor, Pastry Chef, Illustrator and Retired Product Designer living in New York City. </h3>
          <Options />

          <Log4J />
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
