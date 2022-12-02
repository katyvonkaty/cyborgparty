import { Container, Grid } from "semantic-ui-react";
import Tag from "../components/Tag";
import Opener from "../components/Opener";
import Summary from "../components/Summary";
import MeatPotatoes from "../components/MeatPotatoes";
import Foothold from "../components/Foothold";
import vol from "../images/vol.jpg";
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


function Volatility() {
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
          moreInfo="At this point, the interface should be ready to use."
        />

        <MeatPotatoes
          number="3"
          solutionStep="Interfaces"
          moreInfo="The presence of a [phy0] tag at the end of the driver name is an indicator for mac80211, so the Broadcom card is using a mac80211 driver. Note that mac80211 is supported only since aircrack-ng v1.0-rc1, and it won't work with v0.9.1. "

          solutionImage={wifi3}
        />
        <MeatPotatoes
          number="4"
          solutionStep="Wireless Clients"
          solutionImage={kali}
          moreInfo="Here what it looks like if a wireless client is connected to the network:

          ."
        />
        <MeatPotatoes
          number="5"
          solutionStep="Natural Selection"
          solutionImage={wifi5}
          moreInfo="Identifying the target."
        />
        <MeatPotatoes
          number="6"
          solutionStep="Command Breakdown"
          solutionImage={maybe1}
          
        />
        <Summary summary = "-c 1 is the channel for the wireless network" />
        <Summary summary = " --bssid D4:76:A0:D4:1A:50 is the access point MAC address. This eliminates extraneous traffic." />
        <Summary summary = "  -w capitolis_hack is the file name prefix for the file which will contain the IVs." />

        <Summary summary =  "wlan0 is the interface name." />


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
        <Foothold foothold={obama} />
      </Grid.Column>
    </Grid>
  </Container>
)
}

export default Volatility;
