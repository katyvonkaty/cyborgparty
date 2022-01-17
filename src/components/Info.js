import React from "react";

const Info = (props) => {
  return(
    <>
    <h1>{props.projectExplainer} </h1>
    <h3>{props.problemContent} </h3>
    <img src={props.imageHeader} style={{width:"50%"}} />
    </>
  );
};

export default Info;
