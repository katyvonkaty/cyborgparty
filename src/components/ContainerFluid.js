/* eslint-disable max-len */

import React, { useCallback, useState } from 'react'
import {
  Card,
  Container,
  Header,
  Image,
  Item,
  Label,
  Button,
  Divider,
  Form,
  Grid,
  Segment,
} from "semantic-ui-react";

import Zoom from 'react-medium-image-zoom'
import ImageEnlarger from "react-image-enlarger";

import Udemy from "../images/Udemy.jpg";
import 'react-medium-image-zoom/dist/styles.css'
import honey from "../images/honey.jpg";
import { Document, Page } from 'react-pdf';






import Burp from "../components/Burpsuite";

function SingleSource() {
  const [zoomed, setZoomed] = React.useState(false);

  return (
    <ImageEnlarger
      style={{ width: "500px", height: "auto" }}
      zoomed={zoomed}
      src={Udemy}
      alt="The best dog ever"
      onClick={() => setZoomed(true)}
      onRequestClose={() => setZoomed(false)}
    />
  );
}



const ContainerExampleFluid = () => (


  <div>
    <Container fluid style={{ padding: "50px" }}>
      <h3> Restructuring ... Come Back Soon</h3>
      {SingleSource()}
      {/* <ImageEnlarger
      style={{ width: "200px", height: "auto" }}
      src={honey}
      zoomed={zoomed}

      alt="The best dog ever"
      onClick={() => setZoomed(true)}
      onRequestClose={() => setZoomed(false)}
      
    /> */}
      
      {/* <Segment placeholder>
        <Grid columns={2} stackable style={{ padding: "50px" }}>

            <Item.Group divided>
            <Item>
              <Item.Image src="https://i0.wp.com/allabouttesting.org/wp-content/uploads/2021/03/burpsuite-tool.jpg?resize=1024%2C379" />

              <Item.Content>
                <Item.Header as='a'>12 Years a Slave</Item.Header>
                <Item.Meta>
                  <span className='cinema'>Union Square 14</span>
                </Item.Meta>
                <Item.Description>h</Item.Description>
                <Item.Extra>
                  <Label>IMAX</Label>
                  <Label icon='globe' content='Additional Languages' />
                </Item.Extra>
              </Item.Content>
            </Item> 
          </Item.Group>
    
      </Grid>
    </Segment> */}
  </Container>
  </div >
);

export default ContainerExampleFluid;
