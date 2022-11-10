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
        <Summary summary="The objective is to capture the WPA/WPA2 authentication handshake and then use aircrack-ng to crack the pre-shared key." />
        <Summary summary="This can be done either actively or passively. “Actively” means you will accelerate the process by deauthenticating an existing wireless client. “Passively” means you simply wait for a wireless client to authenticate to the WPA/WPA2 network. The advantage of passive is that you don't actually need injection capability and thus the Windows version of aircrack-ng can be used." />
        <MeatPotatoes
          number="1"
          solutionStep="Start the wireless interface in monitor mode."
          solutionImage={wifi1}
          moreInfo="The purpose of this step is to put your card into what is called monitor mode. Monitor mode is the mode whereby your card can listen to every packet in the air. Normally your card will only “hear” packets addressed to you. By hearing every packet, we can later capture the WPA/WPA2 4-way handshake. As well, it will allow us to optionally deauthenticate a wireless client in a later step."
        />
        <MeatPotatoes
          number="2"
          solutionStep="The system will respond"
          solutionImage={wifi2}
          moreInfo="With the marshalsec utility built, we can start an LDAP referral server to direct connections to our secondary HTTP server (which we will prepare in just a moment)."
        />

        <MeatPotatoes
          number="3"
          solutionStep="Interfaces"
          moreInfo="The presence of a [phy0] tag at the end of the driver name is an indicator for mac80211, so the Broadcom card is using a mac80211 driver. Note that mac80211 is supported only since aircrack-ng v1.0-rc1, and it won't work with v0.9.1. Both entries of the Atheros card show “madwifi-ng” as the driver - follow the madwifi-ng-specific steps to set up the Atheros card. Finally, the Ralink shows neither of these indicators, so it is using an ieee80211 driver - see the generic instructions for setting it up. "

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
