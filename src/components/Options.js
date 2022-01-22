import React from "react";
import { Button, Icon, Image, Item, Label } from "semantic-ui-react";

const paragraph = <Image src="/images/wireframe/short-paragraph.png" />;

const Options = () => (
  <Item.Group divided style={{ marginTop: "80px" }}>
    <Item>
      <Item.Image
        src="https://cdn.dribbble.com/users/2064103/screenshots/17133458/media/4ee80379f310c49b4d5759cc8bbbd5c8.jpg?compress=1&resize=1200x900&vertical=top"
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
        <Button red primary floated="right">
          Buy tickets
          <Icon name="right chevron" />
        </Button>
      </Item.Content>
    </Item>
    <Item>
      <Item.Image
        src="https://cdn.dribbble.com/users/2064103/screenshots/17133458/media/4ee80379f310c49b4d5759cc8bbbd5c8.jpg?compress=1&resize=1200x900&vertical=top"
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
        <Button red primary floated="right">
          Buy tickets
          <Icon name="right chevron" />
        </Button>
      </Item.Content>
    </Item>
    <Item>
      <Item.Image
        src="https://cdn.dribbble.com/users/2064103/screenshots/17133458/media/4ee80379f310c49b4d5759cc8bbbd5c8.jpg?compress=1&resize=1200x900&vertical=top"
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
        <Button red primary floated="right">
          Buy tickets
          <Icon name="right chevron" />
        </Button>
      </Item.Content>
    </Item>
  </Item.Group>
);

export default Options;
