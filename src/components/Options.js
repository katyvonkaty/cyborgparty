import React from "react";
import Log4J from "./Log4J";
import HoneyPot from "./HoneyPot";
import honey from "../images/honey.png";


import Blog from "./Blog";

import { Button, Icon, Item, Label } from "semantic-ui-react";

const Options = (props) => {
  return (
    <Item.Group divided style={{ marginTop: "80px" }}>
      <h3> Recent Projects</h3>
      <Item>
        <Item.Image
          src={honey}
          rounded
        />
        <Item.Content>
          <Item.Header as="a">Le Honey Pot </Item.Header>
          <Item.Meta>
            <span className="cinema">
              They appear to be an easy entry point into a network to distract attackers from looking at other parts of the system. They are a deliberate hole in the security of the system that can be attacked without causing harm. They allow IT teams to gather valuable intelligence on hackers who are attempting to gain access to their networks.{" "}
            </span>
          </Item.Meta>
          <Item.Extra>
            <Label>AWS</Label>
            <Label>EC2</Label>
            <Label content="HoneyPot" />

            <Label content="Java" />
          </Item.Extra>

          <Button
            component={Log4J}
            href="HoneyPot"
            to="/HoneyPot"
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
          src="https://cyberport-katiejordan.vercel.app/static/media/portscan.82a51357d70e1f018581.png"
          rounded
        />
        <Item.Content>
          <Item.Header as="a">Log4J Walk Through</Item.Header>
          <Item.Meta>
            <span className="cinema">
              Stepping through the methodologies of gaining root on an
              application by exploting the Log4J vulnerability.{" "}
            </span>
          </Item.Meta>
          <Item.Extra>
            <Label>Linux</Label>
            <Label>NMAP</Label>
            <Label content="LDAP" />

            <Label content="Java" />
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
          src="https://i0.wp.com/4.bp.blogspot.com/-clNpcTBtdIs/W9PszzUnxQI/AAAAAAAAa3Q/qtnsNsp9iu8tQqDdO48JNWxxKhCar6xlACLcBGAs/s1600/10.png?ssl=1"
          rounded
        />
        <Item.Content>
          <Item.Header as="a">SearchSploit</Item.Header>
          <Item.Meta>
            Acme Corp has recently set up a new blog. Their developer team have
            asked for a security audit to be performed before they create and
            publish articles to the public. It is your task to perform a
            security audit on the blog; looking for and abusing any
            vulnerabilities that you find.{" "}
          </Item.Meta>
          <Item.Extra>
            <Label>MSFConsole</Label>
            <Label>CVE</Label>
            <Label>Reverse Shell</Label>
            <Label>SearchSploit</Label>
          </Item.Extra>

          <Button
            component={Log4J}
            href="/SearchSploit"
            to="/SearchSploit"
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
          src="https://cyberport-katiejordan.vercel.app/static/media/one.b0d6b6db6149bd77387a.jpg"
          rounded
        />
        <Item.Content>
          <Item.Header as="a">NS Lookup</Item.Header>
          <Item.Meta>
            <span className="cinema">
              Reverse engineering a malicous attacker trying to access top
              secret information from my evernote account.{" "}
            </span>
          </Item.Meta>
          <Item.Extra>
            <Label>NS Lookup</Label>
            <Label>Domains</Label>
            <Label>Passive Recon</Label>
            <Label>Phishing</Label>
          </Item.Extra>

          <Button
            component={Log4J}
            href="/Evernote"
            to="/Evernote"
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
              React based web app focused on a more modern shodan interface, and
              focusing on the handshake process.
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
          src="https://media.istockphoto.com/vectors/roman-citizens-man-and-woman-vector-id1218894295?k=20&m=1218894295&s=612x612&w=0&h=mGKwWPRkqoTIUzskgOfOPGzNOfcKO6T61qC3a4YcESc="
          rounded
        />
        <Item.Content>
          <Item.Header as="a">Ceasar Cipher</Item.Header>
          <Item.Meta>
            <span className="cinema">
              Gaining a better understanding of basic encryption techniques
              using the ceasar cipher to encrypt and decrypt text.
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
            href="https://ceasar-fawn.vercel.app/"
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
          src="https://katiejordan.vercel.app/static/media/star.b6b0d419.png"
          rounded
        />
        <Item.Content>
          <Item.Header as="a">StarSnob</Item.Header>
          <Item.Meta>
            <span className="cinema">
              Utilziing the Yelp API to help deliver snobby restaurant goers the
              most specific answers based on their query.
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
              The unoffical sister app to TikTok - TikerTok focuses on the stock
              markets daily ticker. Get it?! Tell me you get it... Stylistically
              ripped off from Robinhood.
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
