import { Container, Grid } from "semantic-ui-react";
import Tag from "../components/Tag";
import Opener from "../components/Opener";
import Summary from "../components/Summary";
import MeatPotatoes from "../components/MeatPotatoes";
import Foothold from "../components/Foothold";
import test from "../images/test.gif";
import portscan from "../images/portscan.png";
import meta1 from "../images/meta1.png";
import meta2 from "../images/meta2.png";
import meta3 from "../images/meta3.png";
import meta35 from "../images/meta35.png";

import meta4 from "../images/meta4.png";
import meta5 from "../images/meta5.png";
import meta6 from "../images/meta6.png";
import meta7 from "../images/meta7.png";

function Log4J() {
  return(
  <Container class="testing" centered style={{ marginTop: "20px" }}>
    <Grid centered>
      <Grid.Column centered>
        <Tag CVEscore="Developing Cyber-Resilient Systems" label="A Systems Security Engineering Approach " />
        <Opener problemContent="Meterpreter is an advanced payload that provides interactive access to a compromised system. Meterpreter supports running commands on a remote target, including uploading/downloading files and pivoting. "  />
        <Summary summary="Once an attacker gains initial entry into a system, the compromised machine can be used to send additional web traffic through - allowing previously inaccessible machines to be reached." />
        <Summary summary="An initial foothold could be gained through a web application running in a docker container or through an exposed port on a Windows machine. This system will become the attack launchpad for other systems in the network." />
  
        <MeatPotatoes
          number="1"
          solutionStep="The application may be vulnerable to a remote code execution exploit which impacts Laravel applications using debug mode with Laravel versions before 8.4.2, which use ignite as a developer dependency."
          solutionImage={meta1}
          moreInfo="
          We can use Metasploit to verify if the application is vulnerable to this exploit.The opened shell will be a basic cmd/unix/reverse_bash shell. We can see this by running the sessions command and viewing the currently active sessions:          "
        />
        <MeatPotatoes
          number="2"
          solutionStep="RCE"
          solutionImage={meta2}
          moreInfo="The highlighted portion shows we have gained access and are now authenticated as www-data. Using meterpreter, we can background the session to switch back to MSFconsole or continue interacting with it."
        />
        <MeatPotatoes
          number="3"
          solutionStep="Adding Routes"
          moreInfo= "We can also see, due to the presence of the /.dockerenv file, that we are in a docker container. By default, Docker chooses a hard-coded IP to represent the host machine. We will also add that to our routing table for later scanning:"

          solutionImage={meta3}
        />
        <MeatPotatoes
          number="4"
          solutionStep="Schema Dump"
          solutionImage={meta35}
          moreInfo="With the previously discovered database credentials and the routing table configured, we can start to run Metasploit modules that target Postgres. Starting with a schema dump, followed by running queries to select information out of the database:"
        />
        <MeatPotatoes
          number="5"
          solutionStep="Prepare netcat listener"
          solutionImage={meta4}
          moreInfo="Nuff said."
        />
        <MeatPotatoes
          number="6"
          solutionStep="Trigger the exploit and fire the JNDI syntax"
          solutionImage={meta6}
          moreInfo="You have now received initial access and command-and-control on a vanilla, freshly installed Apache Solr instance. This is just one example of many, many vulnerable applications affected by this log4j vulnerability."
        />
        <MeatPotatoes
          number="7"
          solutionStep="I have gained"
          solutionImage={meta7}
          moreInfo="Now that you have gained a reverse shell connection on the victim machine, you can continue to take any action you might like."
        />
    
      </Grid.Column>
    </Grid>
  </Container>
)
}

export default Log4J;
