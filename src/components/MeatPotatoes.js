import React from "react";
import { Image, Label } from "semantic-ui-react";

const MeatPotatoes = (props) => {
  return (
    <>
      <p style={{ marginTop: "30px" }}>
        {" "}
        <Label circular color={"grey"}>
          {" "}
          {props.number}{" "}
        </Label>
        <b> {props.solutionStep} </b>{" "}
      </p>
      <p style={{ marginTop: "10px" }}> {props.moreInfo} </p>
      <img
        style={{ width: "100%", borderRadius: "25% !important" }}
        src={props.img1}
      />
      <Image
        style={{ width: "100%", borderRadius: "25% !important" }}
        src={props.solutionImage}
        borderRadius="25px"
      />
    
      <br />{" "}
    </>
  );
};

export default MeatPotatoes;
