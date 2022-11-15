import { Container, Grid, Button } from "semantic-ui-react";
import Tag from "../components/Tag";
import Opener from "../components/Opener";
import Summary from "../components/Summary";
import MeatPotatoes from "../components/MeatPotatoes";
import Foothold from "../components/Foothold";
import test from "../images/test.gif";
import portscan from "../images/portscan.png";
import marshal from "../images/marshal_sec.png";
import java from "../images/java_exploit.png";
import generation from "../images/generation.png";
import hydra from "../images/hydra.jpg";
import wifi2 from "../images/wifi2.png";
import nikto from "../images/nikto.png";
import offensive from "../images/offensive.pdf";


import cve from "../images/cve.png";

import wifi3 from "../images/wifi3.png";
import maybe1 from "../images/maybe1.png";

import maybe2 from "../images/maybe2.png";



import kali from "../images/kali.gif";


function Infiltrate() {
  return(
  <Container class="testing" centered style={{ marginTop: "20px" }}>
    <Grid centered>
      <Grid.Column centered>
        <Tag CVEscore="Pen Testing" label="Exploit Public-Facing Application" />
        <Opener opener="Ode to a Penetration Test" problemContent="Password:l3tm3in " />
        <Summary summary="This was an external test where I wanted to see if perhaps a user was lazy with credentials and I could use a dictionary attack to gain access to the login page and into the proper system." />
        <Summary summary="When attacking any system, it is essential to gather useful information that will help define who, what, when and where." />
        <MeatPotatoes
          number="1"
          solutionStep="Project Overview"
          solutionImage={generation}
          moreInfo="We wanted to define what a user could see outside the organization. There are plenty of unsavory characters on the internet who like to see what's out there to hack just for fun. So, we thought, why not pretend I’m one of them and do some initial reconnaissance and try brute force on some passwords. "
        />
        <MeatPotatoes
          number="2"
          solutionStep="Summary"
          solutionImage={hydra}
          moreInfo="The goal of this test is to identify and exploit vulnerabilities in the system in order to assess the system’s security posture."
        />

        <MeatPotatoes
          number="3"
          solutionStep="Methodology"
          moreInfo="An examination of the administrative interface revealed that it was vulnerable to a XSS scripting attack, which could be exploited to obtain interactive access to the website."

          solutionImage={nikto}
        />
        <MeatPotatoes
          number="4"
          solutionStep="CVE-2020-25213"
          solutionImage={cve}
          moreInfo= "The File Manager (wp-file-manager) plugin before 6.9 for WordPress allows remote attackers to upload and execute arbitrary PHP code because it renames an unsafe example elFinder connector file to have the .php extension. This, for example, allows attackers to run the elFinder upload (or mkfile and put) command to write PHP code into the wp-content/plugins/wp-file-manager/lib/files/ directory. This was exploited in the wild in August and September 2020."

        />

        <Button > <a href="https://drive.google.com/file/d/1gU445U6BVxDQ4xhE2WWdrJrpy-mNaZBX/view" target="blank" class="test"> Read the Full Report Here </a></Button>
      
      </Grid.Column>
    </Grid>
  </Container>
)
}

export default Infiltrate;
