import { Container, Grid } from "semantic-ui-react";
import Summary from "../components/Summary";
import Tag from "../components/Tag";
import Opener from "../components/Opener";



function Burp() {
  return(
  <Container class="testing" centered style={{ marginTop: "20px" }}>
    <Grid centered>
      <Grid.Column centered>
         <Tag CVEscore="Burpppp" label="Hot and New" />
      <Opener opener="Burpsuite"  />
        <Summary summary="Burpsuite is application testing software, its essential is any web penetration test.
            But what is it???
            Java based framework designed to serve as a tool for website penetration. In laymans terms burpsite captures and enables manipulation of HTTP/HTTPS traffic. Esstenially you have the ability to intercept, view and modify web request before they reach the target server." />
        <Summary summary="Burp suite comes in a few different flavors ($-$$$$) and they offer a web academy too. There are several tools apart of brupsuites core features that one should know their way around. Think of it like the 7 dwarfs of security. Proxy, repeater, intruder, decoder, comparer and sequenver. Proxy is the star of the show, enables the interception and modification of requests and responses. Repeater allows for cpaturing, modifying and resending the same reqeust multiple times." />
       
        <Summary summary="   Intruder is used for generally spraying endpoints think brute force or fuzzing.
            The navigation is where you can switch between actions, and when new traffic is capture or an internal action has happened the menu item turns orange to get attention. " />

          

      </Grid.Column>
    </Grid>
  </Container>
)
}

export default Burp;
