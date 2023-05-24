import React from "react";
import Log4J from "./Log4J";
import Wifi from "./Wifi";
import Infiltrate from "./Infiltrate";
import Network from "./Network"
import Volatility from "./Volatility"
import Metasploit from "./Metasploit"
import honey from "../images/honey.png";
import physical from "../images/physical.jpg";
import vol from "../images/vol.jpg";
import meta7 from "../images/meta.jpg";



import wifi from "../images/wifi.gif";
import generation from "../images/generation.png";


import Blog from "./Blog";

import { Button, Icon, Item, Label } from "semantic-ui-react";

const Options = (props) => {
  return (
    <Item.Group divided style={{ marginTop: "80px" }}>
      <h3> Recent Projects</h3>

      <Item>
        <Item.Image
          src={meta7}
          rounded
        />
        <Item.Content>
          <Item.Header as="a">Metasploit</Item.Header>
          <Item.Meta>
            <span className="cinema">
            Using Metasploit modules and Meterpreter to compromise systems, network pivoting, & post exploitation
            </span>
          </Item.Meta>
          <Item.Extra>
            <Label>Meterpreter</Label>
            <Label>Socks Proxy</Label>
            <Label>Postgres</Label>
            <Label content="Docker" />

          </Item.Extra>
          <Button
            component={vol}
            href="/Metasploit"
            to="/Metasploit"
            color="grey"
            floated="left"
          >
            View Project
            <Icon name="right chevron" />
          </Button>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image
          src={vol}
          rounded
        />
        <Item.Content>
          <Item.Header as="a">Memory Forensics</Item.Header>
          <Item.Meta>
            <span className="cinema">
            Volatility is the world's most widely used framework for extracting digital artifacts from volatile memory (RAM) samples.{" "}
            </span>
          </Item.Meta>
          <Item.Extra>
            <Label>Malware</Label>
            <Label>Volatility</Label>
            <Label>Blue team</Label>
            <Label content="Memory Dump" />

          </Item.Extra>
          <Button
            component={vol}
            href="/Volatility"
            to="/Volatility"
            color="grey"
            floated="left"
          >
            View Project
            <Icon name="right chevron" />
          </Button>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image
          src={generation}
          rounded
        />
        <Item.Content>
          <Item.Header as="a">Ode to a Penetration Test</Item.Header>
          <Item.Meta>
            <span className="cinema">
              Do I have what it takes to hack my company? Click the link to find out more.{" "}
            </span>
          </Item.Meta>
          <Item.Extra>
            <Label>Script Kiddie</Label>
            <Label>Burpsuite</Label>
            <Label>Wireshark</Label>
            <Label content="XML Attack" />

            <Label content="Metasploit" />
          </Item.Extra>

          <Button
            component={Wifi}
            href="/Infiltrate"
            to="/Infiltrate"
            color="grey"
            floated="left"
          >
            View Project
            <Icon name="right chevron" />
          </Button>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image
          src={physical}
          rounded
        />
        <Item.Content>
          <Item.Header as="a">Networking in Virtual Box</Item.Header>
          <Item.Meta>
            <span className="cinema">
Setting up a network in virtual box            </span>
          </Item.Meta>
          <Item.Extra>
            <Label>Network Topology</Label>
            <Label>DHCP</Label>
            <Label>DNS</Label>
            <Label>IP Addresses</Label>
         
          </Item.Extra>

          <Button
          component={Network}
            href="/Network"
            to="/Network"
            color="grey"
            floated="left"
          >
            View Project
            <Icon name="right chevron" />
          </Button>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image
          src={wifi}
          rounded
        />
        <Item.Content>
          <Item.Header as="a">Aircrack NG</Item.Header>
          <Item.Meta>
            <span className="cinema">
              Stepping through the methodologies of gaining root on an
              application by exploting the Log4J vulnerability.{" "}
            </span>
          </Item.Meta>
          <Item.Extra>
            <Label>Linux</Label>
            <Label>APT</Label>
            <Label content="Wireless Compromise" />

            <Label content="Network Traffic Flow" />
          </Item.Extra>

          <Button
            component={Wifi}
            href="/Wifi"
            to="/Wifi"
            color="grey"
            floated="left"
          >
            View Project
            <Icon name="right chevron" />
          </Button>
        </Item.Content>
      </Item>



      <Item>
        <Item.Image
          src={honey}
          rounded
        />
        <Item.Content>
          <Item.Header as="a">Le Honey Pot </Item.Header>
          <Item.Meta>
            <span className="cinema">
              Honeypots allow IT teams to gather valuable intelligence on hackers who are attempting to gain access to their networks.{" "}
            </span>
          </Item.Meta>
          <Item.Extra>
            <Label>AWS</Label>
            <Label>EC2</Label>
            <Label content="HoneyPot" />

            <Label content="Cowrie" />
          </Item.Extra>

          <Button
            component={Log4J}
            href="HoneyPot"
            to="/HoneyPot"
            color="grey"
            floated="left"
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
            color="grey"
            floated="left"
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
            color="grey"
            floated="left"
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
            color="grey"
            floated="left"
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
            color="grey"
            floated="left"
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
            color="grey"
            floated="left"
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
            color="grey"
            floated="left"
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
            floated="left"
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
