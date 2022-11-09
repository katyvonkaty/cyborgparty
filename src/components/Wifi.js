import { Container, Grid } from "semantic-ui-react";
import Tag from "../components/Tag";
import Opener from "../components/Opener";
import Summary from "../components/Summary";
import MeatPotatoes from "../components/MeatPotatoes";
import Foothold from "../components/Foothold";
import test from "../images/test.gif";
import portscan from "../images/portscan.png";
import marshal from "../images/marshal_sec.png";
import java from "../images/java_exploit.png";
import wifi from "../images/wifi.png";
import wifi1 from "../images/wifi1.png";
import wifi2 from "../images/wifi2.png";
import wifigif from "../images/wifi.gif";

import wifi3 from "../images/wifi3.png";
import maybe1 from "../images/maybe1.png";

import maybe2 from "../images/maybe2.png";

import wifi4 from "../images/wifi4.png";
import wifi5 from "../images/wifi5.png";
import wifi6 from "../images/wifi6.png";
import wifi7 from "../images/wifi7.png";
import wifi8 from "../images/wifi8.png";
import obama from "../images/obama.gif";

import kali from "../images/kali.gif";


function Wifi() {
  return(
  <Container class="testing" centered style={{ marginTop: "20px" }}>
    <Grid centered>
      <Grid.Column centered>
        <Tag CVEscore="AirCrack NG" label="Kali Linux" />
        <Opener opener="Release the WIFI" problemContent="WIFI " />
        <Summary summary="The application present on this target specifically uses ports that may not be immediately noticed by nmap. For the whole picture perspective, scan all ports via nmap and the -p- flag" />
        <Summary summary="The format of the usual syntax that takes advantage of this looks like so:" />
        <MeatPotatoes
          number="1"
          solutionStep="This target machine is running Apache Solr 8.11.0, one example of software that is known to include this vulnerable log4j package."
          solutionImage={wifi1}
          moreInfo="For the sake of showcasing this vulnerability, the application runs on Java 1.8.0_181. You may already know the general payload to abuse this log4j vulnerability.."
        />
        <MeatPotatoes
          number="2"
          solutionStep="Compile and execute the marshal sec utility & starting LDAP server"
          solutionImage={wifi2}
          moreInfo="With the marshalsec utility built, we can start an LDAP referral server to direct connections to our secondary HTTP server (which we will prepare in just a moment)."
        />

        <MeatPotatoes
          number="3"
          solutionStep="Create java payload (no experience necessary!)"
          moreInfo="For this payload, you can see we will execute a command on the target, specifically nc -e /bin/bash to call back to our our attacker machine"

          solutionImage={wifi3}
        />
        <MeatPotatoes
          number="4"
          solutionStep="Serve exploit on HTTP server"
          solutionImage={kali}
          moreInfo="Your payload is created and compiled, it is hosted with an HTTP server in one terminal, your LDAP referral server is up and waiting in another terminal -- next prepare a netcat listener to catch your reverse shell in yet another new terminal window."
        />
        <MeatPotatoes
          number="5"
          solutionStep="Prepare netcat listener"
          solutionImage={wifi5}
          moreInfo="Nuff said."
        />
        <MeatPotatoes
          number="6"
          solutionStep="Trigger the exploit and fire the JNDI syntax"
          solutionImage={wifi}
          moreInfo="You have now received initial access and command-and-control on a vanilla, freshly installed Apache Solr instance. This is just one example of many, many vulnerable applications affected by this log4j vulnerability."
        />
           <MeatPotatoes
    
          solutionImage={maybe1}
        />
        <MeatPotatoes
          number="7"
          solutionStep="I have gained"
          solutionImage={maybe2}
          moreInfo="Now that you have gained a reverse shell connection on the victim machine, you can continue to take any action you might like."
        />
        <MeatPotatoes
          number="8"
          solutionStep="Here you can see my activity in the log file!"
          solutionImage={wifi6}
          moreInfo="Running amok in the logs."
        />
        <MeatPotatoes
          number="9"
          solutionImage={wifi7}
          solutionStep="Proof of concept"
        />
       
            <MeatPotatoes
          number="9"
          solutionImage={wifigif}
          solutionStep="Proof of concept"
        />
        <Foothold foothold={obama} />
      </Grid.Column>
    </Grid>
  </Container>
)
}

export default Wifi;
