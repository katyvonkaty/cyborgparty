import React from "react";
import { Header, Segment } from "semantic-ui-react";

const Opener = (props) => {
  return (
    <>
      <h1> {props.opener} </h1>
      <Header as="h3" block>
        {props.problemContent}
      </Header>
    </>
  );
};

export default Opener;
