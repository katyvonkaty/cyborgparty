import React from "react";
import Log4J from "./Log4J";
import Blog from "./Blog";

import { Button, Icon, Image, Item, Label } from "semantic-ui-react";

const Options = (props) => {
  return (
    <Item.Group divided style={{ marginTop: "80px" }}>
      <Item>
        <Item.Image
          src="https://cyberport-katiejordan.vercel.app/static/media/portscan.82a51357d70e1f018581.png"
          rounded
        />
        <Item.Content>
          <Item.Header as="a">Walk Throughs</Item.Header>
          <Item.Meta>
            <span className="cinema">
              Visually and verbally solving CTF challenges
            </span>
          </Item.Meta>
          <Item.Extra>
            <Label>IMAX</Label>
            <Label icon="globe" content="Additional Languages" />
          </Item.Extra>

          <Button
            component={Log4J}
            href="/Log4J"
            to="/Log4J"
            red
            primary
            floated="right"
          >
            Click me
            <Icon name="right chevron" />

          </Button>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image
          src="https://katiejordan.vercel.app/static/media/star.b6b0d419.png"
          rounded
        />
        <Item.Content>
          <Item.Header as="a">Programming Projects</Item.Header>
          <Item.Meta>
            <span className="cinema">
              Visually and verbally solving CTF challenges
            </span>
          </Item.Meta>
          <Item.Extra>
            <Label>IMAX</Label>
            <Label icon="globe" content="Additional Languages" />
          </Item.Extra>
          <Button
            component={Blog}
            href="/Blog"
            to="/Blog"
            red
            primary
            floated="right"
          >
            Click me
            <Icon name="right chevron" />

          </Button>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image
          src="https://cdn.dribbble.com/users/2064103/screenshots/15021684/media/edfeb5c787a14abaa73064f59a406b72.png?compress=1&resize=1600x1200&vertical=top"
          rounded
        />
        <Item.Content>
          <Item.Header as="a">Design & Illustration</Item.Header>
          <Item.Meta>
            <span className="cinema">
              Visually and verbally solving CTF challenges
            </span>
          </Item.Meta>
          <Item.Extra>
            <Label>IMAX</Label>
            <Label icon="globe" content="Additional Languages" />
          </Item.Extra>
          <Button
            component={Blog}
            href="/Blog"
            to="/Blog"
            red
            primary
            floated="right"
          >
            Click me
            <Icon name="right chevron" />

          </Button>
        </Item.Content>
      </Item>
    </Item.Group>

  );
};

export default Options;
