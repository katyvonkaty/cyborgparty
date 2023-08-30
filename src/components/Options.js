import React from "react";
import Log4J from "./Log4J";
import Wifi from "./Wifi";
import Infiltrate from "./Infiltrate";
import Network from "./Network"
import Volatility from "./Volatility"
import Metasploit from "./Metasploit"
import CRSF from "./CRSF"
import SQL from "./SQL"
import Click from "./Click"
import NewList from "./NewList"



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
    <Item.Group divided style={{ marginTop: "80px" }}>
      <h3> Deep dives : </h3>
      {/* <NewList /> */}

      <Item spacing={5}>
        <Item.Image
          src={"https://cdn.invicti.com/statics/img/ogimage/clickjacking-attacks.png"}
          rounded
        />
        <Item.Content>
          <Item.Header as="a">Clickjacking</Item.Header>
          <Item.Meta>
            <span className="cinema">

            SQL injection (SQLi) is a web security vulnerability that allows an attacker to interfere with the queries that an application makes to its database.
           </span>
          </Item.Meta>
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
      </Item>



      <Item>
        <Item.Image
          src={"https://academy.avast.com/hs-fs/hubfs/New_Avast_Academy/SQL%20injection/What%20is%20a%20SQL%20injection.png?width=660&name=What%20is%20a%20SQL%20injection.png"}
          rounded
        />
        <Item.Content>
          <Item.Header as="a">SQL Injection</Item.Header>
          <Item.Meta>
            <span className="cinema">

            SQL injection (SQLi) is a web security vulnerability that allows an attacker to interfere with the queries that an application makes to its database.
           </span>
          </Item.Meta>
          <Item.Extra>
            <Label>Web Security</Label>
            <Label>Vunerable</Label>
            <Label>HTML</Label>

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
      </Item>


      
      <Item>
        <Item.Image
          src={"https://assets.website-files.com/5ff66329429d880392f6cba2/61f251b52a583fa4149b98c0_CSRF%20Preview.jpg"}
          rounded
        />
        <Item.Content>
          <Item.Header as="a">Cross Site Request Forgery</Item.Header>
          <Item.Meta>
            <span className="cinema">
            CSRF can be executed a number of ways but most browsers are equipped to stop the attack way before it starts. Here I'm exploring potenial ways a bad actor could use CRSF via token validation, samesite cookie restrictions and referer-based CSRF defenses.
            </span>
          </Item.Meta>
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
      </Item>

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

    </Item.Group>
  );
};

export default Options;
