import { Container, Divider, Grid, Image, Segment } from "semantic-ui-react";
import Info from "../components/Info";
import Tag from "../components/Tag";
import Opener from "../components/Opener";
import Summary from "../components/Summary";
import MeatPotatoes from "../components/MeatPotatoes";
import Options from "../components/Options";
import MenuDefault from "../components/Menu";
import Foothold from "../components/Foothold";
import one from "../images/one.jpg";
import two from "../images/two.jpg";
import three from "../images/three.jpg";
import four from "../images/four.jpg";



function Evernote() {
  return(
  <Container class="testing" centered style={{ marginTop: "20px" }}>
    <Grid centered>
      <Grid.Column centered>
        <Opener opener="Script Kiddie vs Iraq"  />
        <MeatPotatoes
          number="1"
          solutionStep="Which IP Doesn't Match the Rest?"
          solutionImage={one}
          moreInfo="I spent the holidays with my family in Ireland, where my cousin is actually an IT guy. We were talking about my studies and his job when all of a sudden I received a note from evernote of a suspicious login. Evernote was able to log the suspicious IP address and from there I went into recon mode."
        />
        <MeatPotatoes
          number="2"
          solutionStep="Running a nslookup gives me all the info i need"
          solutionImage={two}
          moreInfo="It’s clear the person, address and phone of the alleged attacker."
        />
        <MeatPotatoes
          number="3"
          solutionStep="Further light passive recon"
          solutionImage={three}
          moreInfo="Nothing like some social engineering to get to the bottom of things."
        />
        <MeatPotatoes
          number="4"
          solutionStep="Testing the Waters"
          solutionImage={four}
          moreInfo="This is where my cousin comes in. We were a little bored so we decided to send him an email and see what happens. At first I wanted to demand $10m ransom for him trying to access my account, but my cousin talked me out of it. We decided on the below."
        />

      </Grid.Column>
    </Grid>
  </Container>
)
}

export default Evernote;
