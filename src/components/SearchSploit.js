import { Container, Grid } from "semantic-ui-react";
import Tag from "../components/Tag";
import MeatPotatoes from "../components/MeatPotatoes";
import search1 from "../images/search1.jpg";
import search2 from "../images/search2.jpg";
import search3 from "../images/search3.jpg";
import search4 from "../images/search4.jpg";
import search5 from "../images/search5.jpg";




function SearchSploit() {
  return(
  <Container class="testing" centered style={{ marginTop: "20px" }}>
    <Grid centered>
      <Grid.Column centered>
      <Tag CVEscore="CVE-2018-16763" label="Script Kiddies" />

        <h1> Getting Vulnerable </h1>
        <MeatPotatoes
          number="1"
          solutionStep="What is the name of the app running on the vulnerable machine?"
          solutionImage={search1}
          moreInfo="Fuel CMS V1.4. We see this loud and clear!"
        />
        <MeatPotatoes
          number="2"
          solutionStep="What is the number of the CVE that allows an attacked to remotely execute code on this application?"
          solutionImage={search3}
          moreInfo="CVE-2018-16763 is the one we are looking for, but frankly they all look fun."
        />
        <MeatPotatoes
          number="3"
          solutionStep="With the research and skills available to me, how can I exploit this vulnerability?"
          solutionImage={search2}
          moreInfo="I'm going to use search sploit to scan for known vulnerabilities and download the file for easy execution."
        />
        <MeatPotatoes
          number="4"
          solutionStep="Running the script and establishing a stable shell"
          solutionImage={search4}
          moreInfo="I'm going to use search sploit to scan for known vulnerabilities and download the file for easy execution."
        />
        <MeatPotatoes
          number="5"
          solutionStep="Knock knock, its me the hacker"
          solutionImage={search5}
          moreInfo="With the reverse shell established I'm able to browse the files for what I'm looking for. After catting the flag file, I get the keys to the THM kingdom."
        />



      </Grid.Column>
    </Grid>
  </Container>
)
}

export default SearchSploit;
