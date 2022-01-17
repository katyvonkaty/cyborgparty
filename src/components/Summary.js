import React from "react";
import { Icon } from "semantic-ui-react";

const Summary = (props) => {
  return (
    <>
      <p> <Icon name="check" size="small" /> {props.summary} </p>
    </>
  )
}

export default Summary;
