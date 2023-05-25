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
import web1 from "../images/web1.jpg";
import web2 from "../images/web2.png";
import web3 from "../images/web3.png";
import web4 from "../images/web4.jpg";





 


function CRSF() {
  return(
  <Container class="testing" centered style={{ marginTop: "20px" }}>
    <Grid centered>
      <Grid.Column centered>
        <Tag CVEscore="Cross Site Request Forgery" label="The Trojan Horse " />
        <Opener problemContent="CSRF: The attacker manipulates the user into divulging their private information by enticing them through a concealed malicious link. This exploitation enables the attacker to circumvent the same origin policy, which serves to safeguard against unauthorized interference between distinct websites."  />
    

        <MeatPotatoes
          number="1"
          solutionStep="How Does CSRF work?"
          solutionImage={two}

          moreInfo="The attacker employs a deceptive strategy to induce the user into sharing their private information by enticing them with a hidden malicious link. Through this deceptive maneuver, the attacker cleverly bypasses the protective measures imposed by the same origin policy, which is in place to prevent unauthorized interference between distinct websites. This attack takes advantage of the application's reliance on cookie-based session handling and the absence of unpredictable request parameters, allowing the attacker to exploit these vulnerabilities effectively."
        />



<MeatPotatoes summary
          number="3"
          solutionStep="How to Deliver a CSRF exploit?"
          solutionImage={three}

          moreInfo="The change email payload confirms our initial objective: obtaining the email address. By specifically targeting and manipulating the value associated with the email parameter, we gain the ability to substitute it with our preferred email address, often one specifically designed for hacking purposes."
        />
        <Summary summary = "The act of an authenticated user initiating an HTTP request to change their email presents an intriguing attack vector that captures the interest of potential attackers. In this scenario, the application employs a session cookie as a means of user identification, while the parameters within the request can be readily identified and manipulated by the attacker."
        />

<MeatPotatoes summary
          number="4"
          solutionStep="Form Request"
          solutionImage={four}

          moreInfo="To execute the exploit, you have the option of utilizing Burp Suite Professional, a powerful tool for crafting sophisticated exploits. Alternatively, you can directly modify the HTML code. Our target for this attack is the change email form, which serves as the focal point for injecting our malicious link."
        />

<MeatPotatoes summary
          number="4"
          solutionStep="Lights, Camera, Exploitation"
          solutionImage={five}

          moreInfo="Within this image, it is crucial to focus on the action and value parameters. The action parameter redirects us to a deceptive website that convincingly mimics a familiar site, luring us into a false sense of security. The value parameter is hardcoded to replicate our own email address, further deceiving us into thinking it is a legitimate interaction. Moreover, the script orchestrates an immediate submission, eliminating the need for any additional user interaction. As a result, the attacker gains an immediate foothold, exploiting this vulnerability."
          
        />
  <MeatPotatoes summary
            number="5"
            solutionStep="Proof"


  solutionImage={six}
  />

<Opener problemContent="CSRF: Token Validation"  />
<MeatPotatoes summary
          number="1"
          solutionStep="What is a CSRF token?"
          solutionImage={web1}

          moreInfo="While certain applications appropriately validate the token when the request employs the POST method, they may unintentionally overlook the validation process when the GET method is utilized."
        />
        <Summary summary = "Some applications correctly validate the token when the request uses the POST method but skip the validation when the GET method is used."
     />

<MeatPotatoes summary
          number="2"
          solutionStep="Validation of CSRF token depends on request method"
          solutionImage={web2}

          moreInfo="By exploiting a potential vulnerability, an attacker can circumvent the validation mechanism by switching to the GET method."
        />

<MeatPotatoes summary
          number="3"
          solutionImage={web3}
     />


<MeatPotatoes summary
          number="4"
          solutionStep="What is a CSRF token?"
          solutionImage={web4}

          moreInfo="This code, when executed upon loading, will dynamically modify the user's email address."
        />
        <Summary summary ="CSRF tokens play a crucial role in safeguarding against CSRF attacks by introducing an element of unpredictability, thereby making it extremely challenging for attackers to predict and construct a valid request on behalf of the victim. By leveraging these tokens, malicious actors are effectively thwarted from anticipating the token's value, rendering it useless for any malevolent purposes."
     />



      
      </Grid.Column>
    </Grid>
  </Container>
)
}

export default CRSF;


