import { Container, Grid } from "semantic-ui-react";
import Tag from "../components/Tag";
import MeatPotatoes from "../components/MeatPotatoes";
import one from "../images/one.jpg";
import two from "../images/two.jpg";
import three from "../images/three.jpg";
import four from "../images/four.jpg";
import click from "../images/click.png";




function Click() {
  return(
  <Container class="testing" centered style={{ marginTop: "20px" }}>
    <Grid centered>
      <Grid.Column centered>
      <Tag CVEscore="All's Fair in Cyberwarfare" label="Script Kiddies" />

        <h1> Clickjacking</h1>
        <MeatPotatoes
          number="1"
          solutionStep="Seeing isn't always believing"
          solutionImage={click}
          moreInfo="
          Clickjacking is a deceptive attack where a malicious code disguises itself as a legitimate component of a website. It tricks users into clicking on a malicious link without their knowledge. This attack is similar to a chameleon in nature because it camouflages itself to blend in with the website's appearance. "
        />
        <MeatPotatoes
          number="2"
          solutionStep="Basic clickjacking attack"
          solutionImage={two}
          moreInfo="The malicious link may appear harmless, such as a sign-up link for a 5k race, but it actually redirects the user to a payment account on a different website. The lack of visual discrepancies makes it difficult for users to realize they are being redirected to an unintended destination.Attackers acheive this by manipulating CSS, specifically the z-index of how elements stack upon load."
        />
        <MeatPotatoes
          number="3"
          solutionStep="Clickjacking with prefilled form input"
          solutionImage={three}
          moreInfo="There are websites that enable forms unsecurely, allowing technically savy people to see GET parameters before form submission. This leave the GET value of the URL vulnerable to be mofified. A transparent 'submit' button is overlaid and responsible for taking the user to a malicious link."
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
