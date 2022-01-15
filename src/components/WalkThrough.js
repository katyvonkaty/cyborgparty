import React from "react";
import { Grid, Container, Image } from "semantic-ui-react";

const WalkThrough = (props) => {
  return (
    <>
      <Container centered style={{ marginTop: "100px" }}>
        <Grid centered>
          <Grid.Column centered width={8}>
            <h3> {props.projectHeader} </h3>
            <h1> {props.projectExplainer} </h1>
            <p> {props.login} </p>
            <br />
            <p> <b>  {props.problemContent} </b> </p>
            <p> {props.solution} </p>
            <p> {props.problemContent1} </p>
            <br />
            <p> {props.problemContent2} </p>
            <br />

            <p> {props.problemContent3} </p>


            <br />
            <p> <b> {props.solutionContent1} </b> </p>
            <img style={{width:"100%"}}src={props.img1} />

            <img style={{width:"100%"}} src={props.img2} />
            <br />

            <p> {props.solutionContent2} </p>
            <img style={{width:"100%"}} src={props.img3} />

            <br />
            <p> {props.solutionContent3} </p>
            <img style={{width:"100%"}} src={props.img4} />
  <br />
            <p> {props.solutionContent4} </p>
            <img style={{width:"100%"}} src={props.img5} />

            <br />

            <p> {props.solutionContent5} </p>
            <img style={{width:"100%"}} src={props.img6} />
            <br />

            <p> {props.solutionContent6} </p>
            <img style={{width:"100%"}} src={props.img5} />

            <p> {props.solutionContent7} </p>
            <img style={{width:"100%"}} src={props.img7} />
            <br />





          </Grid.Column>
        </Grid>
      </Container>
      </>
    );
  }

  export default WalkThrough;
