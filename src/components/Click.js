import { Container, Grid } from "semantic-ui-react";
import Tag from "../components/Tag";
import MeatPotatoes from "../components/MeatPotatoes";
import Summary from "../components/Summary";
import Info from "../components/Info";


import one from "../images/one.jpg";
import two from "../images/two.jpg";
import three from "../images/three.jpg";
import four from "../images/four.jpg";
import click from "../images/click.png";
import code from "../images/code.png";
import emails from "../images/emails.png";
import network from "../images/network.png";







function Click() {
  return(
  <Container class="testing" centered style={{ marginTop: "20px" }}>
    <Grid centered>
      <Grid.Column centered>
      <Tag CVEscore="User Interface Redressing" label="Hidden in Plain Sight" />
    <Info problemContent="Clickjacking, also known as a “UI redress attack”, is when an attacker uses multiple transparent or opaque layers to trick a user into clicking on a button or link on another page when they were intending to click on the top level page. " />
        <MeatPotatoes
          number="1"
          solutionStep="Seeing isn't always believing"
          solutionImage={"https://cdn.invicti.com/statics/img/ogimage/clickjacking-attacks.png"}
          moreInfo="
          Clickjacking is a deceptive attack where a malicious code disguises itself as a legitimate component of a website. It tricks users into clicking on a malicious link without their knowledge. This attack is similar to a chameleon in nature because it camouflages itself to blend in with the website's appearance. "
        />
        <MeatPotatoes
          number="2"
          solutionStep="Basic clickjacking attack"
          moreInfo="The malicious link may appear harmless, such as a sign-up link for a 5k race, but it actually redirects the user to a payment account on a different website. The lack of visual discrepancies makes it difficult for users to realize they are being redirected to an unintended destination.Attackers acheive this by manipulating CSS, specifically the z-index of how elements stack upon load."
        />
     
        <MeatPotatoes
          number="4"
          solutionStep="Hidden email tags"
          solutionImage={emails}
          moreInfo="On the left we have our email input and it's filled in with what the user thinks will be used to populater their email on the backend. On the right we have a form that looks like and acts like an email submit form for the websites company, but it is not. The link in this form has a hidden form behind it which will change the email address to what the bad actor has put in the value, in this case it is mrpoodle@gmail.com."
        />
           <MeatPotatoes
          number="3"
          solutionStep="Clickjacking with prefilled form input"
          solutionImage={network}
          moreInfo="The POST request from the change-email submit button sends the following form data. As you can see, the email is not the same as what was intended from the user, but it is what the application has captured and stored."
        />

        <Summary summary="Always hover over a link before click to see it's destination" />
        <Summary summary="Use trusted websites on secure networks and don't click on links sent by unknown parties" />
      

        <MeatPotatoes
          number="4"
          solutionStep="Exploiting with code"
          solutionImage={code}
          moreInfo="There are many ways to carry out this type of attack, and here was the way I chose. You can also carry it out using a iframe to store the form behind it as well."
        />

        

      </Grid.Column>
    </Grid>
  </Container>
)
}

export default Click;
