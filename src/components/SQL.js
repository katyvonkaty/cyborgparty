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





 


function SQL() {
  return(
  <Container class="testing" centered style={{ marginTop: "20px" }}>
    <Grid centered>
      <Grid.Column centered>
        <Tag CVEscore="SQL Injection" label=" Data Manipulation" />
        <Opener problemContent="Web security vulnerabilitie that can interfere with the queries an application is making to its database, thus disrupting the integrity and confdentialty of the data. "  />
    

        <MeatPotatoes
          number="1"
          solutionStep="Impact of a successful SQL injection attack"
          solutionImage={two}

          moreInfo="At the highest level, an SQL injection attack can provide a bad actor with access to a users PII ie username, passwords, credit card details. This attack is particularly malicious due to the long lasting results. Attackers can and have installed backdoors during their attacks which provides them continued access to protected data long after they were originally detected."
        />



<MeatPotatoes summary
          number="3"
          solutionStep="Retreiving hidden data"
          solutionImage={three}

          moreInfo="https://insecure-website.com/products?category=Gifts'--  "
        />
          <Summary summary = "This results in the SQL query: SELECT * FROM products WHERE category = 'Gifts'--' AND released = 1"
        />
        <Summary summary = "-- the double dash is a comment indicator in SQL, which means the rest of the query is interpreted as a comment and anything coming after it is essentially removed. Ultimately, this would result in all gifts and products are being displayed, including unreleased ones."
        />

<MeatPotatoes summary
          number="4"
          solutionStep="Subverting application logic"
          solutionImage={four}

          moreInfo="SELECT * FROM users WHERE username = 'wiener' AND password = 'bluecheese'"
        />

<Summary summary = "If a user is found with that username and password, the application will proceed as expected."
        />

<Summary summary = "However, if we add a comment to the query, the action would negate checking for a password since everything comment is void. The command to bypass a password check looks like so:"
        />
        <MeatPotatoes summary
       
          moreInfo="SELECT * FROM users WHERE username = 'administrator'--' AND password = '' "
        />

<MeatPotatoes summary
          number="4"
          solutionStep="Retrieving data from other database tables"

          moreInfo="Using the UNION command in SQL is a super power of combining multiple queries. Union allows an additional select query and applends the results to the original query."
          
        />
  <MeatPotatoes summary
            moreInfo= " (double quotes) SELECT name, description FROM products WHERE category = 'Gifts' (double quotes) gives the attacker the power to also submit (double quotes) 'UNION SELECT username, password FROM users-- (double quotes) which causes the database to reply with all the usernames and passwords." 
  />

<Opener problemContent="How to detect SQL injection vulnerabilties"  />
<MeatPotatoes summary
          solutionStep="Searching for SQL injection cheat sheet"
          solutionImage={web1}

          moreInfo="While certain applications appropriately validate the token when the request employs the POST method, they may unintentionally overlook the validation process when the GET method is utilized."
        />
        <Summary summary = "Some applications correctly validate the token when the request uses the POST method but skip the validation when the GET method is used." />
   

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

export default SQL;


