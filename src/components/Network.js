import { Container, Grid } from "semantic-ui-react";
import Tag from "../components/Tag";
import MeatPotatoes from "../components/MeatPotatoes";
import Summary from "../components/Summary";

import internet from "../images/internet.jpg";
import physical from "../images/physical.jpg";

import ping from "../images/ping.png";
import ping1 from "../images/ping2.png";
import nat from "../images/nat.jpg";
import nat2 from "../images/nat2.jpg";

import search3 from "../images/search3.jpg";
import search4 from "../images/search4.jpg";
import search5 from "../images/search5.jpg";




function Network() {
  return(
  <Container class="testing" centered style={{ marginTop: "20px" }}>
    <Grid centered>
      <Grid.Column centered>

        <h1> Virtual Reality </h1>
        <MeatPotatoes
          number="1"
          solutionStep="What is a Virtual Box?"
          moreInfo="VirtualBox can connect virtual machines together to emulate a network of computers and network appliances such as routers or servers. VirtualBox works on the major computing platforms: Windows, MacOS, and Linux."
        />



        <MeatPotatoes
          number="2"
          solutionStep="What type of network options are available on a virtual box? "
        />
        <Summary summary= "Network Address Translation - used when the guest machine requires internet connection. Guest machine can access all the things which are accessible by Host machine, but no other machines including host can access the guest."/>
        <Summary summary= "Bridged networking – use this one when you require a separate IP address for your virtual machine." />
        <Summary summary=" Internal networking –  used when you want to establish a separate network for your virtual machines (Running in single host). But host is excluded in this network." />
        <Summary summary="Host-only networking – host and guest can communicate; no other machines in 
        network can access guest machine." />
        <Summary summary="NAT with Port-forwarding – when you want other machines to access guest machine without  
                assigning a separate IP address to Guest, and guest machine wants access to outside." />

    
        <MeatPotatoes
          number="3"
          solutionStep="Physical Network"
          solutionImage={physical}
          moreInfo="A physical network is connected using physical gears (routers, switches and other hardware); this your wifi home network. The physical internet is provided by the ISP and connected to your home router - an all hosts connected are either wired or wireless."/>
    

        <MeatPotatoes
          number="4"
          solutionStep="Virtualized Network"
          solutionImage={internet}
          moreInfo="Virtual networking is a virtualized version of physical networking. The physical network is managed using hardware, the virtual network is managed with software."/>
    
        <MeatPotatoes
          number="5"
          solutionStep="Bridged Adapter"
          solutionImage={ping}
          moreInfo="The bridged adapter allows me 3 IP addresses. I can ping all the machines on the network and also reach outside the network to the internet. When a guest is using such a new software interface, it looks to the host system as though the guest were physically connected to the interface using a network cable. The host can send data to the guest through that interface and receive data from it. This means that you can set up routing or bridging between the guest and the rest of your network."
        />


<MeatPotatoes
          number="5"
          solutionStep="NAT Network"
          solutionImage={nat}
          moreInfo="Network Address Translation (NAT) is the simplest way of accessing an external network from a virtual machine. Usually, it does not require any configuration on the host network and guest system. For this reason, it is the default networking mode in Oracle VM VirtualBox.

          A virtual machine with NAT enabled acts much like a real computer that connects to the Internet through a router. The router, in this case, is the Oracle VM VirtualBox networking engine, which maps traffic from and to the virtual machine transparently. In Oracle VM VirtualBox this router is placed between each virtual machine and the host. This separation maximizes security since by default virtual machines cannot talk to each other."
        />


<MeatPotatoes
          number="5"
          solutionStep="Internal Network"
          solutionImage={nat2}

          moreInfo="Internal networking is similar to bridged networking -- the VM can directly communicate with the outside world. However, the outside world is limited to other VM's on the same host which connect to the same internal network. Even though technically, everything that can be done using internal networking can also be done using bridged networking, there are security advantages with internal networking. In bridged networking mode, all traffic goes through a physical interface of the host system. It is therefore possible to attach a packet sniffer such as Wireshark to the host interface and log all traffic that goes over it. If, for any reason, you prefer two or more VMs on the same machine to communicate privately, hiding their data from both the host system and the user, bridged networking therefore is not an option."
        />

<MeatPotatoes
          number="6"
          solutionStep="Improving Network Performance"
       
        />
  <Summary summary="Whenever possible use the virtio network adapter. Otherwise, use one of the Intel PRO/1000 adapters." />
  <Summary summary="Use a Bridged attachment instead of NAT." />
  <Summary summary=" Make sure segmentation offloading is enabled in the guest OS. Usually it will be enabled by default. You can check and modify offloading settings using the ethtool command on Linux guests." />


      </Grid.Column>
    </Grid>
  </Container>
)
}

export default Network;
