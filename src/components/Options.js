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
      <Card style={{ padding: "20px" }}>
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
             
Burp Suite stands as a software security application employed for conducting penetration tests on web applications. This versatile software is offered in both free and paid versions and is crafted by the company PortSwigger. The suite encompasses a range of tools, including a proxy server (Burp Proxy), an indexing robot (Burp Spider), an intrusion tool (Burp Intruder), a vulnerability scanner (Burp Scanner), and an HTTP repeater (Burp Repeater).
            </span>{" "}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Item.Extra>
            <Label>Proxy Servers</Label>
            <Label>Web Application</Label>
            <Label>Penetration Testing</Label>
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

      <Card style={{ padding: "20px" }}>
        <Image
          src="https://cdn.invicti.com/statics/img/ogimage/clickjacking-attacks.png"
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>Clickjacking</Card.Header>
          <Card.Meta>
            <span className="date">Joined in 2015</span>
          </Card.Meta>
          <Card.Description>
            <span className="cinema">
            Clickjacking is a deceptive method designed to manipulate a user into clicking on an element that differs from their perception, potentially leading to the disclosure of confidential information or granting unauthorized access to their computer. This can occur when interacting with apparently harmless elements, such as web pages.
            </span>{" "}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Item.Content>
            <Item.Extra>
              <Label>Interface Attack</Label>
              <Label> Bait & Switch </Label>
              <Label>Web Application</Label>
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
    <Card.Group itemsPerRow={2} >
    <Card style={{ padding: "20px" }}>
        <Image
          src="https://academy.avast.com/hs-fs/hubfs/New_Avast_Academy/SQL%20injection/What%20is%20a%20SQL%20injection.png?width=660&name=What%20is%20a%20SQL%20injection.png"

          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>SQL Injection</Card.Header>
          <Card.Meta>
            <span className="date">Joined in 2015</span>
          </Card.Meta>
          <Card.Description>
            <span className="cinema">
            SQL injection, commonly referred to as SQLI, is a prevalent method of attack in which malevolent SQL code is employed to manipulate the backend database, enabling unauthorized access to information that was not originally meant to be revealed. Such information could encompass various data, such as sensitive corporate records, user directories, or confidential customer information.
            </span>{" "}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <Item.Content>
      <Item.Extra>
      <Label>Relational Database</Label>
              <Label>Storing Data</Label>
              <Label>Processing Data</Label>
      </Item.Extra>
      <Button
        component={vol}
        href="/SQL"
        to="/SQL"
        color="grey"
        floated="left"
      >
        View Project
        <Icon name="right chevron" />
      </Button>
    </Item.Content>
        </Card.Content>
      </Card>
      <Card style={{ padding: "20px" }}>
        <Image
          src="https://assets.website-files.com/5ff66329429d880392f6cba2/61f251b52a583fa4149b98c0_CSRF%20Preview.jpg"
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>Cross Site Request Forgery</Card.Header>
          <Card.Meta>
            <span className="date">Joined in 2015</span>
          </Card.Meta>
          <Card.Description>
            <span className="cinema">
            CSRF can be executed a number of ways but most browsers are
        equipped to stop the attack way before it starts. Here I'm
        exploring potenial ways a bad actor could use CRSF via token
        validation, samesite cookie restrictions and referer-based
        CSRF defenses.
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
        href="/CRSF"
        to="/CRSF"
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
    </Card.Group>


  );
};

export default Options;

