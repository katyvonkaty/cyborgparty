import { Container, Grid } from "semantic-ui-react";
import Tag from "../components/Tag";
import MeatPotatoes from "../components/MeatPotatoes";
import Summary from "../components/Summary";

import internet from "../images/internet.jpg";
import physical from "../images/physical.jpg";

import search2 from "../images/search2.jpg";
import search3 from "../images/search3.jpg";
import search4 from "../images/search4.jpg";
import search5 from "../images/search5.jpg";




function Network() {
  return(
  <Container class="testing" centered style={{ marginTop: "20px" }}>
    <Grid centered>
      <Grid.Column centered>

        <h1> Virtual What? </h1>
        <MeatPotatoes
          number="1"
          solutionStep="What is a Virtual Box?"
          moreInfo="VirtualBox can connect virtual machines together to emulate a network of computers and network appliances such as routers or servers. VirtualBox works on the major computing platforms: Windows, MacOS, and Linux."
        />

<MeatPotatoes
          number="1.5"
          solutionStep="Virtual network vs physical network"
          moreInfo="A physical network is connected using physical gears (routers, switches and other hardware); this your wifi home network. The physical internet is provided by the ISP and connected to your home router - an all hosts connected are either wired or wireless. Virtual networking is a virtualized version of physical networking. The physical network is managed using hardware, the virtual network is managed with software.
          "
        />

        <MeatPotatoes
          number="2"
          solutionStep="What type of network options are available on a virtual box? "
        />
        <Summary summary= "Network Address Translation:this networking is used when guest machine require internet connection. Guest machine can access all the things which are accessible by Host machine.But no other machines including Host can’t access the guest."/>
        <Summary summary= "Bridged networking – use this one when you require a separate IP address for your virtual machine." />
        <Summary summary=" Internal networking – This networking will be used when you want to establish a separate network for your virtual machines (Running in single host). But host is excluded in this network." />
        <Summary summary="Host-only networking – In this networking, host and guest can communicate. No other machines in 
        network can access guest machine." />
        <Summary summary="NAT with Port-forwarding – Use when you want other machines to access guest machine without  
                assigning a separate IP address to Guest. And guest machine wants access to outside." />

    
        <MeatPotatoes
          number="3"
          solutionStep="Running the script and establishing a stable shell"
          solutionImage={physical}
          moreInfo="A physical network is connected using physical gears (routers, switches and other hardware); this your wifi home network. The physical internet is provided by the ISP and connected to your home router - an all hosts connected are either wired or wireless."/>
        />

        <MeatPotatoes
          number="4"
          solutionStep="Virtualized Network"
          solutionImage={internet}
          moreInfo="Virtual networking is a virtualized version of physical networking. The physical network is managed using hardware, the virtual network is managed with software."/>
    />
        <MeatPotatoes
          number="5"
          solutionStep="Knock knock, its me the hacker"
          solutionImage={search5}
          moreInfo="With the reverse shell established I'm able to browse the files for what I'm looking for. After catting the flag file, I get the keys to the THM kingdom."
        />



      </Grid.Column>
    </Grid>
  </Container>
)
}

export default Network;
