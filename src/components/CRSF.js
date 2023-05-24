import { Container, Grid } from "semantic-ui-react";
import Tag from "./Tag";
import Opener from "./Opener";
import Summary from "./Summary";



function CRSF() {
  return(
  <Container class="testing" centered style={{ marginTop: "20px" }}>
    <Grid centered>
      <Grid.Column centered>
        <Tag CVEscore="Developing Cyber-Resilient Systems" label="A Systems Security Engineering Approach " />
        <Opener problemContent="Meterpreter is an advanced payload that provides interactive access to a compromised system. Meterpreter supports running commands on a remote target, including uploading/downloading files and pivoting. "  />
        <Summary summary="Once an attacker gains initial entry into a system, the compromised machine can be used to send additional web traffic through - allowing previously inaccessible machines to be reached." />
        <Summary summary="An initial foothold could be gained through a web application running in a docker container or through an exposed port on a Windows machine. This system will become the attack launchpad for other systems in the network." />
  
       hi 
      
      </Grid.Column>
    </Grid>
  </Container>
)
}

export default CRSF;
