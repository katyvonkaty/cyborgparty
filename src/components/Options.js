import React from "react";
import Log4J from "./Log4J";
import Wifi from "./Wifi";
import { Image, Card } from "semantic-ui-react";

import Infiltrate from "./Infiltrate";
import Network from "./Network";
import Volatility from "./Volatility";
import Metasploit from "./Metasploit";
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

import { Button, Icon, Item, Label, Grid } from "semantic-ui-react";

const Options = (props) => {
  return (
    <Card.Group itemsPerRow={2}>
            <Card style={{padding:"20px"}}>
              <Image
                src="https://securityqueens.co.uk/wp-content/uploads/2020/06/burpsuite.png"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>Burpsuite</Card.Header>
                <Card.Meta>
                  <span className="date">Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                  <span className="cinema">
                    Burp Suite is a software security application used for
                    penetration testing of web applications. Both a free and a
                    paid version of the software are available. The software is
                    developed by the company PortSwigger
                  </span>{" "}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
              <Item.Extra>
                  <Label>Web Security</Label>
                  <Label>Vunerable</Label>
                  <Label>HTML</Label>
                </Item.Extra>
                <Button
                  component={vol}
                  href="/Burp"
                  to="/Burp"
                  color="grey"
                  floated="left"
                >
                  View Project
                  <Icon name="right chevron" />
                </Button>
              </Card.Content>
            </Card>


      


        
          <Card style={{padding:"20px"}}>
              <Image
                src="https://cdn.invicti.com/statics/img/ogimage/clickjacking-attacks.png" wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>Clickjacking</Card.Header>
                <Card.Meta>
                  <span className="date">Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                  <span className="cinema">
                  SQL injection (SQLi) is a web security vulnerability that
                  allows an attacker to interfere with the queries that an
                  application makes to its database.
                  </span>{" "}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
              <Item.Content>
                <Item.Extra>
                  <Label>Web Security</Label>
                  <Label>Vunerable</Label>
                  <Label>HTML</Label>
                </Item.Extra>
                <Button
                  component={vol}
                  href="/Click"
                  to="/Click"
                  color="grey"
                  floated="left"
                >
                  View Project
                  <Icon name="right chevron" />
                </Button>
              </Item.Content>
              </Card.Content>
            </Card>
            </Card.Group>
      
      


  );
};

export default Options;
