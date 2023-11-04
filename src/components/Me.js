import React from "react";
import { Button,Header, Grid,Segment, Image, Item, Label } from "semantic-ui-react";

const paragraph = <Image src="/images/wireframe/short-paragraph.png" />;

const Me = () => (
  <Grid ui centered grid style={{padding:"100px"}}>
    <Grid.Row>
      <Grid.Column computer={10} tablet={14} mobile={16} center padded="very">
      <Header size='huge'>Hello, I'm Katie, and I enjoy computers and baked treats.</Header>{" "}
          <p>
            {" "}
            I like traveling, spending time with my furry companion in the
            outdoors, and I'm also very interested in design, applications,
            challenging puzzles, as well as solving the simpler ones. Sundays
            are another favorite of mine.{" "}
          </p>
          <p> <i> This is a compilation of my interests and preferences 🚀 </i></p>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Me;
