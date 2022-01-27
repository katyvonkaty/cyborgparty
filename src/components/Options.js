import React from "react";
import Log4J from "./Log4J";
import Blog from "./Blog";

import { Button, Icon, Image, Item, Label } from "semantic-ui-react";

const Options = (props) => {
  return (
    <Item.Group divided style={{ marginTop: "80px" }}>
    <h3> Recent Projects</h3>
      <Item>
        <Item.Image
          src="https://cyberport-katiejordan.vercel.app/static/media/portscan.82a51357d70e1f018581.png"
          rounded
        />
        <Item.Content>
          <Item.Header as="a">Log4J Walk Through</Item.Header>
          <Item.Meta>
            <span className="cinema">
Stepping through the methodologies of gaining root on an application by exploting the Log4J vulnerability.            </span>
          </Item.Meta>
          <Item.Extra>
            <Label>Linux</Label>
            <Label>NMAP</Label>

            <Label icon="globe" content="Java" />
          </Item.Extra>

          <Button
            component={Log4J}
            href="/Log4J"
            to="/Log4J"
            color="teal"

            floated="right"
          >
            View Project
            <Icon name="right chevron" />

          </Button>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image
          src="https://cdn.dribbble.com/users/2064103/screenshots/17226024/media/4c2123a837229d709d2351cd04e7f121.png?compress=1&resize=1600x1200&vertical=top"
          rounded
        />
        <Item.Content>
          <Item.Header as="a">Modern Shodan</Item.Header>
          <Item.Meta>
            <span className="cinema">
            React based web app focused on a more modern shodan interface, and focusing on the handshake process.
            </span>
          </Item.Meta>
          <Item.Extra>
            <Label>React</Label>
            <Label>Passive Recon</Label>

            <Label>Networking</Label>
            <Label>DNS</Label>
          </Item.Extra>
          <Button
            component={Blog}
            href="https://shodan-katiejordan.vercel.app/"
            target="_blank"
            to="/Blog"
            color="teal"
            floated="right"
          >
          View Project
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
          <Item.Header as="a">StarSnob</Item.Header>
          <Item.Meta>
            <span className="cinema">
              Utilziing the Yelp API to help deliver snobby restaurant goers the most specific answers based on their query.
            </span>
          </Item.Meta>
          <Item.Extra>
            <Label>React</Label>
            <Label>JavaScript</Label>

            <Label> Data </Label>
            <Label> API </Label>
          </Item.Extra>
          <Button
            component={Blog}
            href="https://starsnob.vercel.app/"
            target="_blank"
            color="teal"
            floated="right"
          >
            View Project
            <Icon name="right chevron" />

          </Button>
        </Item.Content>
      </Item>


      <Item>
        <Item.Image
          src="https://katiejordan.vercel.app/static/media/roar.35a2a37c.jpg"
          rounded
        />
        <Item.Content>
          <Item.Header as="a">TickerTok</Item.Header>
          <Item.Meta>
            <span className="cinema">
              Visually and verbally solving CTF challenges
            </span>
          </Item.Meta>
          <Item.Extra>
          <Label>React</Label>
          <Label>JavaScript</Label>

          <Label> Data </Label>
          <Label> API </Label>
          </Item.Extra>
          <Button
            component={Blog}
            href="https://tickertok.vercel.app/"
          target="_blank"
          color="teal"
            floated="right"
          >
          View Project
            <Icon name="right chevron" />

          </Button>
        </Item.Content>
      </Item>
    </Item.Group>

  );
};

export default Options;
