import React from "react";
import { Label } from "semantic-ui-react";

const Tag = (props) => {
  return (
    <>
    <h3> {props.CVEscore} </h3>
    <Label as="a" color="teal" tag>
      {props.label}
    </Label>
    </>
  )
}

export default Tag;
