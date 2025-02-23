import { Container, Grid } from "semantic-ui-react";
import Tag from "../components/Tag";
import Opener from "../components/Opener";
import Summary from "../components/Summary";
import MeatPotatoes from "../components/MeatPotatoes";
import Foothold from "../components/Foothold";
import vol from "../images/vol.jpg";
import build from "../images/build.png";
import reader from "../images/reader.png";
import explorer from "../images/explorer.png";
import matrix1 from "../images/matrix1.png";
import matrix2 from "../images/matrix2.png";
import wanna from "../images/wanna.png";
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


function Volatility() {
  return(
  <Container class="testing" centered style={{ marginTop: "20px" }}>
    <Grid centered>
      <Grid.Column centered>
        <Tag CVEscore="Volatility" label="Extracting Digital Artifacts" />
        <Opener opener="Memory Forensics" problemContent="Practical Investigations " />
        <Summary summary="The framework is intended to introduce people to the techniques and complexities associated with extracting digital artifacts from volatile memory samples and provide a platform for further work into this exciting area of research." />
        <MeatPotatoes
          number="1"
          solutionStep="What is the build version of the host machine in Case 001?"
          solutionImage={build}
          moreInfo="Volatility is built off of multiple plugins working together to obtain information from the memory dump. In this instance, the command windows.info will give us the info we need."
        />
        <MeatPotatoes
          number="2"
          solutionStep="What process can be considered suspicious in Case 001?          "
          solutionImage={reader}
          moreInfo="Some malware, typically rootkits, will, in an attempt to hide their processes, unlink itself from the list. By unlinking themselves from the list you will no longer see their processes when using pslist. To combat this evasion technique, we can use psscan; this technique of listing processes will locate processes by finding data structures that match _EPROCESS.
          "
        />

        <MeatPotatoes
          number="3"
          solutionStep="What is the parent process of the suspicious process in Case 001?          "
          moreInfo="windows.cmd          "

          solutionImage={explorer}
        />
        <MeatPotatoes
          number="4"
          solutionStep="What user-agent was employed by the adversary in Case 001?          "
          solutionImage={matrix1}

        />
        <MeatPotatoes
           number="4.5"
           solutionStep="Nothing to see here just entering the matrix          "
          solutionImage={matrix2}
        />
        <MeatPotatoes
          number="5"
          solutionStep="WannaCry"
          solutionImage={wanna}
          moreInfo= "What is the suspicious parent process PID connected to the decryptor in Case 002? From our current information, what malware is present on the system in Case 002? We got a live one! Hello Wanna cry, wanna play?
 "
          
        />
        <Summary summary = "The WannaCry ransomware attack was a global epidemic that took place in May 2017." />
        <Summary summary = "This ransomware attack spread through computers operating Microsoft Windows. User’s files were held hostage, and a Bitcoin ransom was demanded for their return." />
        <Summary summary = " The WannaCry ransomware attack hit around 230,000 computers globally.

" />

{/* 

        <MeatPotatoes
          number="7"
          solutionStep="Start airodump-ng to collect authentication handshake"
          solutionImage={maybe2}
          moreInfo="The purpose of this step is to run airodump-ng to capture the 4-way authentication handshake for the AP we are interested in."
        />
        <MeatPotatoes
          number="8"
          solutionStep="Use aireplay-ng to deauthenticate the wireless client"
          solutionImage={wifi6}
          moreInfo="This step sends a message to the wireless client saying that that it is no longer associated with the AP. The wireless client will then hopefully reauthenticate with the AP. The reauthentication is what generates the 4-way authentication handshake we are interested in collecting. This is what we use to break the WPA/WPA2 pre-shared key."
        />
        <MeatPotatoes
          number="9"
          solutionImage={wifi7}
          solutionStep="Traffic capture over wireshark"
        /> 
       
            <MeatPotatoes
          number="9"
          solutionImage={wifigif}
          solutionStep= "./getpasswd"
          moreInfo= "Now at this point, aircrack-ng will start attempting to crack the pre-shared key. Depending on the speed of your CPU and the size of the dictionary, this could take a long time, even days.

          Here is what successfully cracking the pre-shared key looks like:"/>
        <Foothold foothold={obama} /> */}
      </Grid.Column>
    </Grid>
  </Container>
)
}

export default Volatility;
