import React from "react";
import { Image, Label, List } from "semantic-ui-react";

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
      <List divided relaxed>
        <List.Item>
          <List.Icon name="github" size="large" verticalAlign="middle" />
          <List.Content>
            <List.Header as="a">Semantic-Org/Semantic-UI</List.Header>
            <List.Description as="a">Updated 10 mins ago</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="github" size="large" verticalAlign="middle" />
          <List.Content>
            <List.Header as="a">Semantic-Org/Semantic-UI-Docs</List.Header>
            <List.Description as="a">Updated 22 mins ago</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="github" size="large" verticalAlign="middle" />
          <List.Content>
            <List.Header as="a">Semantic-Org/Semantic-UI-Meteor</List.Header>
            <List.Description as="a">Updated 34 mins ago</List.Description>
          </List.Content>
        </List.Item>
      </List>
      <br />{" "}
    </>
  );
};

export default MeatPotatoes;
