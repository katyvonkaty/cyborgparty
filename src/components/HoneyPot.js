import { Container, Grid } from "semantic-ui-react";
import Tag from "../components/Tag";
import MeatPotatoes from "../components/MeatPotatoes";
import ListExampleDivided from "../components/ListExampleDivided";

import honey from "../images/honey.jpg";
import ip from "../images/ip.png";
import vuln from "../images/vuln.png";
import cowrie from "../images/cowrie.jpg";
import input from "../images/input.jpg";
import noe from "../images/noe.gif";

function HoneyPot() {
  return (
    <Container class="testing" centered style={{ marginTop: "20px" }}>
      <Grid>
        <Grid.Column centered>
          <Tag CVEscore="The Honey Pot" label="AWS" />

          <h1> Getting Vulnerable </h1>
          <MeatPotatoes
            number="1"
            solutionStep="What is a TPOT?"
            solutionImage={honey}
            moreInfo="We used Tpot which is a github package allowing us to view who was trying to get some honey from our sweet, sweet honey pot. We sppun up an EC2 instance purposeply vulnerably, referred to in the biz as a honey pot, where we were expecting it to be ravaged. This is normally not what we want to happen, but for malware analysis, this is exactly the strategy we went to implement. With our vulnerable machine deployed, we captured traffic for a set amount of time, and we also deployed our machine in a specific region. I decided to deploy in northern california despite the real desire to deploy somewhere more interesting such as hong kong or singapore. Reason being, everyone wants a piece of the USA so who wouldnt want to get their hands on a honey pot here?"
          />
          <ListExampleDivided
            icon="check"
            header="The Big Picture "
            content="This is an overall breakdown of how a vulnerable machine can be taken advantage of. There were over 350k attacks on this IP address. I am a no body - it is important to remember in relative to a company that actually has data, financial or health information. "
          />
          <ListExampleDivided
            icon="check"
            header="Operating Systems & Passwords "
            content="we can see what OS's are most suceptible, attackers by country as well as attacks by port. My favorite would have to be the password and username tagclouds. These are showing what attacks tried in attempts to gain access to the machine"
          />

          <ListExampleDivided
            icon="check"
            header="CVE's"
            content="we also able to see what CVE's were most utilized, thanks to a wonderful open source reporting system, and with this information we can learn more about how to mitigate these risks."
          />
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
          <ListExampleDivided
            icon="check"
            header="CVE-2001-0540"
            content="The focal point of this attack is a memory leak in Terminal servers in Windows NT and Windows 2000 allows remote attackers to cause a denial of service (memory exhaustion) via a large number of malformed Remote Desktop Protocol (RDP) requests to port 3389."
          />
          <MeatPotatoes
            number="4"
            solutionStep="Cowrie is a medium to high interaction SSH and Telnet honeypot designed to log brute force attacks and the shell interaction performed by the attacker."
            solutionImage={cowrie}
            moreInfo="And yes it did work! I wasn't one of the lucky ones who got brute forced or had malware downloaded, but I really wanted it. I didnt have anything too out of the ordinary happen in all actuality. What was most interesting to me was the username and password clouds. That is information that can cause some serious dammage if in the wrongs hands and this is a very clear illustration of how insecure those credentials could be."
          />

          <MeatPotatoes
            number="5"
            solutionStep="Top 10 Hits"
            solutionImage={input}
            moreInfo="Another great feature is being able to distill the top 10 commands tried to be carried out against me. Try again you bad mother. Below is a breakdown of what we could assume was being carried out."
          />
          <ListExampleDivided
            icon="check"
            header="uname -a"
            content="The uname tool is most commonly used to determine the processor architecture, the system hostname and the version of the kernel running on the system. -a, (--all) - When the -a option is used, uname behaves the same as if the -snrvmo options have been given. why would someone want to run this?"
          />
          <ListExampleDivided
            icon="check"
            header="/proc/cpuinfo"
            content=" The file /proc/cpuinfo displays what type of processor your system is running including the number of CPUs present. Here is an example output from cat /proc/cpuinfo of a system."
          />
          <ListExampleDivided
            icon="check"
            header="free -m | grep Mem | awk "
            content="This will report the percentage of memory that's free"
          />

          <MeatPotatoes
            number="6"
            solutionStep="Consciously Uncoupling"
            solutionImage={noe}
            moreInfo="As the great goop once said, we have to uncouple the EC2 (aka termiante it.) Someone could have told me the literal definition of a honeypot, but seeing it with my own eyes helps see how persistent certain attackers can be. It's been real fullstack, thank you"
          />
          <ListExampleDivided
            icon="check"
            header="I am released into the wild."
            content="Footstomp."
          />
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default HoneyPot;
