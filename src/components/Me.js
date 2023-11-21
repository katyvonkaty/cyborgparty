import React from "react";

import { Button,Header, Grid,Segment, Image, Item, Label } from "semantic-ui-react";
import bg from "../images/bg.png";

const paragraph = <Image src="/images/wireframe/short-paragraph.png" />;

const Me = () => (
<>
  <Grid divided="vertically" ui centered grid style={{padding:"100px"}}>
    <Grid.Row columns={2}>
    <Grid.Column>

      {/* <Grid.Column computer={10} tablet={14} mobile={16} center padded="very"> */}
      <Header size='huge'>Hello, I'm Katie</Header>{" "}

          <p>
            {" "}
          lorem lorem lorem lorem lorem lorem lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem lorem.{" "}
          </p>
          <p> <i> This is a compilation of my interests and preferences 🚀 </i></p>
      </Grid.Column>
      <Grid.Column>
<Image src={bg} />

</Grid.Column>
      
    
    </Grid.Row>
  </Grid>
  </>
);

export default Me;
