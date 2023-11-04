import React from "react";
import Log4J from "./Log4J";
import Wifi from "./Wifi";
import { Image, Card } from "semantic-ui-react";
import Infiltrate from "./Infiltrate";
import Network from "./Network";
import Volatility from "./Volatility";
import Metasploit from "./Metasploit";
import Me from "./Me";

import CRSF from "./CRSF";
import SQL from "./SQL";
import Click from "./Click";
import NewList from "./NewList";
import Burp from "./Burpsuite";
import honey from "../images/honey.png";
import physical from "../images/physical.jpg";
import vol from "../images/vol.jpg";
import meta7 from "../images/meta.jpg";
import one from "../images/1four.jpg";

import wifi from "../images/wifi.gif";
import SQL1 from "../images/SQL.png";

import generation from "../images/generation.png";

import Blog from "./Blog";
import ContainerFluid from "./ContainerFluid";

import { Container, Button, Icon, Item, Label, Grid } from "semantic-ui-react";

const Options = (props) => {
  return (
    <>
      <ContainerFluid />
      <Container>
        <Grid columns="equal">
          <h4 style={{marginTop:"40px"}}> Thoughts & Experiments<hr></hr> </h4>
          <Grid ui centered grid style={{ textAlign: "left", padding: "30px" }}>
            <Grid.Column mobile={16} tablet={8} computer={5}>
              <Image src="https://assets.website-files.com/5ff66329429d880392f6cba2/61f251b52a583fa4149b98c0_CSRF%20Preview.jpg" />

              <h3>Cross Site Request Forgery</h3>
              <Item.Extra style={{ marginBottom: "20px" }}>
                <Label>Interface Attack</Label>
                <Label> Bait & Switch </Label>
                <Label>Web Application</Label>
              </Item.Extra>
              <p>
                {" "}
                CSRF can be executed a number of ways but most browsers are
                equipped to stop the attack way before it starts. Here I'm
                exploring potenial...
              </p>
              <Button
                component={vol}
                href="/CRSF"
                to="/CRSF"
                color="grey"
                floated="left"
              >
                {" "}
                Read More{" "}
              </Button>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={5}>
              <Image src="https://academy.avast.com/hs-fs/hubfs/New_Avast_Academy/SQL%20injection/What%20is%20a%20SQL%20injection.png?width=660&name=What%20is%20a%20SQL%20injection.png" />
              <h3> SQL Injection</h3>
              <Item.Extra style={{ marginBottom: "20px" }}>
                <Label>Relational Data</Label>
                <Label>Processing Data</Label>
              </Item.Extra>
              <p>
                {" "}
                SQL injection, commonly referred to as SQLI, is a prevalent
                method of attack in which malevolent SQL code is employed to
                manipulate the backend database, enabling unauthorized...
              </p>

              <Button
                component={vol}
                href="/SQL"
                to="/SQL"
                color="grey"
                floated="left"
              >
                {" "}
                Read More{" "}
              </Button>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={5}>
              <Image src="https://cdn.invicti.com/statics/img/ogimage/clickjacking-attacks.png" />

              <h3> Clickjacking</h3>
              <Item.Extra style={{ marginBottom: "20px" }}>
                <Label>Interface Attack</Label>
                <Label> Bait & Switch </Label>
                <Label>Web Application</Label>
              </Item.Extra>
              <p>
                Clickjacking is a deceptive method designed to manipulate a user
                into clicking on an element that differs from their perception,
                potentially...
              </p>

              <Button
                component={vol}
                href="/Click"
                to="/Click"
                color="grey"
                floated="left"
              > Read More </Button>
            </Grid.Column>
            </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Options;
