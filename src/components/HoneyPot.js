import { Container, Grid } from "semantic-ui-react";
import Tag from "../components/Tag";
import MeatPotatoes from "../components/MeatPotatoes";
import ListExampleDivided from "../components/ListExampleDivided";

import honey from "../images/honey.jpg";
import ip from "../images/ip.png";
import vuln from "../images/vuln.png";
import cowrie from "../images/cowrie.jpg";
import input from "../images/input.jpg";




function HoneyPot() {
  return(
  <Container class="testing" centered style={{ marginTop: "20px" }}>
    <Grid>
      <Grid.Column centered>
      <Tag CVEscore="CVE-2018-16763" label="Script Kiddies" />

        <h1> Getting Vulnerable </h1>
        <MeatPotatoes
          number="1"
          solutionStep="What is a TPOT?"
          solutionImage={honey}
          moreInfo="We used Tpot which is a github package allowing us to view who was trying to get some honey from our sweet, sweet honey pot. We sppun up an EC2 instance purposeply vulnerably, referred to in the biz as a honey pot, where we were expecting it to be ravaged. This is normally not what we want to happen, but for malware analysis, this is exactly the strategy we went to implement. With our vulnerable machine deployed, we captured traffic for a set amount of time, and we also deployed our machine in a specific region. I decided to deploy in northern california despite the real desire to deploy somewhere more interesting such as hong kong or singapore. Reason being, everyone wants a piece of the USA so who wouldnt want to get their hands on a honey pot here?"
        />
        <ListExampleDivided />
        <MeatPotatoes
          number="2"
          solutionStep="Analyzing the IP"
          solutionImage={ip}
          moreInfo="Cisco Talos Intelligence Group is one of the largest commercial threat intelligence teams in the world, comprised of world-class researchers, analysts and engineers. These teams are supported by unrivaled telemetry and sophisticated systems to create accurate, rapid and actionable threat intelligence for Cisco customers, products and services. Talos defends Cisco customers against known and emerging threats, discovers new vulnerabilities in common software, and interdicts threats in the wild before they can further harm the internet at large. Talos maintains the official rule sets of Snort.org, ClamAV, and SpamCop, in addition to releasing many open-source research and analysis tools."
        />
        <MeatPotatoes
          number="3"
          solutionStep="Searching the CVE"
          solutionImage={vuln}
          moreInfo="Provides an easy to use web interface to CVE vulnerability data. You can browse for vendors, products and versions and view cve entries, vulnerabilities, related to them. You can view statistics about vendors, products and versions of products. CVE details are displayed in a single, easy to use page, see a sample here."
        />
        <MeatPotatoes
          number="4"
          solutionStep="Cowrie is a medium to high interaction SSH and Telnet honeypot designed to log brute force attacks and the shell interaction performed by the attacker."
          solutionImage={cowrie}
          moreInfo="I'm going to use search sploit to scan for known vulnerabilities and download the file for easy execution."
        />

        <MeatPotatoes
          number="5"
          solutionStep="New machine who this"
          solutionImage={input}
          moreInfo="With the reverse shell established I'm able to browse the files for what I'm looking for. After catting the flag file, I get the keys to the THM kingdom"
        />



      </Grid.Column>
    </Grid>
  </Container>
)
}

export default HoneyPot;
