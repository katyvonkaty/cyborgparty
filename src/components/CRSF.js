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
          solutionStep="Define the Vulnerability"
          solutionImage={one}

          moreInfo="Attacker will prompt user to devulge their private information via hidden malicious link. Allowing the attacked to work around the same origin policy, which is designed to prevent different websites from interfering with each other."
        />

<MeatPotatoes summary
          number="2"
          solutionStep="How Does CSRF work?"
          solutionImage={two}

          moreInfo="A relevant action, cookie based session handling, no unpredictable request parameters."
        />

<Summary summary = "An HTTP request to change user's email made by the user provides an attack vector that is interesting to the attacker, application uses a session cookie to identify the user, the parameters in the request are easily identified."
        />

<MeatPotatoes summary
          number="3"
          solutionStep="How to Deliver a CSRF exploit?"
          solutionImage={three}

          moreInfo="The attacker will plant the malicious link in a website that they run. They may phish a user over email or social media to click a link supplied by the attacker."
        />

<MeatPotatoes summary
          number="4"
          solutionStep="How to Deliver a CSRF exploit?"
          solutionImage={four}

          moreInfo="The attacker will plant the malicious link in a website that they run. They may phish a user over email or social media to click a link supplied by the attacker."
        />

<MeatPotatoes summary
          number="4"
          solutionStep="How to Deliver a CSRF exploit?"
          solutionImage={five}

          moreInfo="The attacker will plant the malicious link in a website that they run. They may phish a user over email or social media to click a link supplied by the attacker."
          solutionImage={six}
        />
       
      
      </Grid.Column>
    </Grid>
  </Container>
)
}

export default CRSF;
