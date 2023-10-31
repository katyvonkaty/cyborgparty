import { Container, Grid } from "semantic-ui-react";
import Summary from "../components/Summary";
import Tag from "../components/Tag";
import Opener from "../components/Opener";
import MeatPotatoes from "../components/MeatPotatoes";

function Burp() {
  return (
    <Container class="testing" centered style={{ marginTop: "20px" }}>
      <Grid centered>
        <Grid.Column centered>
          <Tag CVEscore="Burpppp" label="Hot and New" />
          <Opener opener="Burpsuite" />
          <Summary
            summary="Burpsuite is application testing software, its essential is any web penetration test.
            But what is it exactly???
            Java based framework designed to serve as a tool for website penetration. In laymans terms burpsite captures and enables manipulation of HTTP/HTTPS traffic. Esstenially you have the ability to intercept, view and modify web requests before they reach the target server."
          />
          <Summary summary="Burp suite comes in a few different flavors ($(community)-$$$$(enterprise)) and they offer a web academy too. There are several tools apart of brupsuites core features that one should know their way around. Think of it like the 7 dwarfs of security. Proxy, repeater, intruder, decoder, comparer and sequenver. Proxy is the star of the show, enables the interception and modification of requests and responses. Repeater allows for cpaturing, modifying and resending the same reqeust multiple times." />

          <MeatPotatoes
            number="1"
            solutionStep="Burp Fam"
            moreInfo="Burp proxy enables interception and modification of request.
            Repeater lets you capture and send the request multiple times.
            Intruder sprays endpoints with requests.
            Decoder can decode captured information or encode payloads.
            Comparer compares data at the word or byte level,
            "
          />
          <MeatPotatoes
            number="2"
            solutionStep="Intruder"
            moreInfo="Intruder is used for generally spraying endpoints think brute force or fuzzing.
            The navigation is where you can switch between actions, and when new traffic is capture or an internal action has happened the menu item turns orange to get attention."
          />
          <MeatPotatoes
            number="3 My Fav"
            solutionStep="Intruder - Pitchfork"
            moreInfo="Using pitchfork, we have the ability to use multiple payloads, which is ideal for username and password. We can sub a wordlist for username and passwords, and then load them in the payloads section respectively. Upon launching the attack, a new window opens to keep track of the current attack. Burp does the heavy lifting for us and runs through each list, containing thousands of options, and if your lucky,  after a minute or so you'll see that you have successfully cracked the username and password."
          />
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default Burp;
