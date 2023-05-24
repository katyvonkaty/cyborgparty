import { Container, Grid } from "semantic-ui-react";
import Tag from "./Tag";
import Opener from "./Opener";
import Summary from "./Summary";
import MeatPotatoes from "./MeatPotatoes";
// import vol from "../images/vol.jpg";
// import vol from "../images/vol.jpg";
// import vol from "../images/vol.jpg";
// import vol from "../images/vol.jpg";
import one from "../images/1four.jpg";
import two from "../images/2changeemailhtml.jpg";
import three from "../images/3emailparam.jpg";
import four from "../images/1four.jpg";
import five from "../images/4exploit.jpg";
import six from "../images/6six.jpg";


 


function CRSF() {
  return(
  <Container class="testing" centered style={{ marginTop: "20px" }}>
    <Grid centered>
      <Grid.Column centered>
        <Tag CVEscore="Cross Site Request Forgery" label="The laymans attack " />
        <Opener problemContent="CSRF: Attacker will prompt user to devulge their private information via hidden malicious link. Allowing the attacked to work around the same origin policy, which is designed to prevent different websites from interfering with each other "  />
    

        <MeatPotatoes
          number="1"
          solutionStep="How Does CSRF work?"
          solutionImage={two}

          moreInfo="Attacker will prompt user to devulge their private information via hidden malicious link. Allowing the attacked to work around the same origin policy, which is designed to prevent different websites from interfering with each other. A relevant action, cookie based session handling, no unpredictable request parameters"
        />



<MeatPotatoes summary
          number="3"
          solutionStep="How to Deliver a CSRF exploit?"
          solutionImage={three}

          moreInfo="The change email payload shows us what we already knew... email is what we are after. By targeting that value we can change the email to whatever we prefer, most likely our own hacky email."
        />
        <Summary summary = "An HTTP request to change user's email made by the user provides an attack vector that is interesting to the attacker, application uses a session cookie to identify the user, the parameters in the request are easily identified."
        />

<MeatPotatoes summary
          number="4"
          solutionStep="Form Request"
          solutionImage={four}

          moreInfo="You could use burpsuite professional to craft an exploit, or you can edit the HTML directly. We target the change email form as where we want to put our malicious link."
        />

<MeatPotatoes summary
          number="4"
          solutionStep="Lights, Camera, Exploitation"
          solutionImage={five}

          moreInfo="The action and value parameters are the ones to pay attention to in this image. Action is pointing us to the website that looks, talks and acts like a website we know but it is malicious. The value is hardcoded in so that it reflects our own email. Lastly, the script creates an instanteous submit which eliminates the user having to do anything else, we now have a foothold."
          
        />
  <MeatPotatoes summary
            number="5"
            solutionStep="Proof"


  solutionImage={six}
  />
      
      </Grid.Column>
    </Grid>
  </Container>
)
}

export default CRSF;
