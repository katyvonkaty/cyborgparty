/* eslint-disable max-len */

import React from "react";
import {
  Card,
  Container,
  Header,
  Image,
  Item,
  Label,
  Button,
  Divider,
  Form,
  Grid,
  Segment,
} from "semantic-ui-react";

import Burp from "../components/Burpsuite";


const ContainerExampleFluid = () => (
  <div>
    <Container fluid style={{ backgroundColor: "#ffe4e4", padding: "50px" }}>
      <Segment placeholder>
        <Grid columns={2} stackable>
          <Grid.Column style={{ padding: "50px" }}>
            <Item.Group>
              <Item>
                <Item.Content>
                  <Item.Meta>Let's Talk About</Item.Meta>

                  <h2> Burpsuite</h2>
                  <Item.Extra style={{ marginBottom: "20px" }}>
                  <Label>Proxy Servers</Label>
                  <Label>Web Application</Label>
                  <Label>Penetration Testing</Label>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
            <Card.Description>
              <Item.Extra>
                <b>Additional Details</b>
              </Item.Extra>
              <hr />
              <span className="cinema">
                Burp Suite stands as a software security application employed
                for conducting penetration tests on web applications. This
                versatile software is offered in both free and paid versions and
                is crafted by the company PortSwigger. The suite encompasses a
                range of tools...
              </span>{" "}
            </Card.Description>
            <Button
                component={Burp}
                href="/Burp"
                to="/Burp"
                color="grey"
                floated="left"
                style={{ marginTop: "20px;" }}
              >
                {" "}
                Read More{" "}
              </Button> 
          </Grid.Column>

          <Grid.Column
            style={{
              backgroundImage:
                "url(https://cdn.invicti.com/statics/img/ogimage/clickjacking-attacks.png)",
              backgroundSize: "cover",
            }}
          >
            {/* <Image src="https://cdn.invicti.com/statics/img/ogimage/clickjacking-attacks.png"/> */}
          </Grid.Column>
        </Grid>
      </Segment>
    </Container>
  </div>
);

export default ContainerExampleFluid;
