import React from "react";
import Group86 from "../Group86";
import Carbonclose from "../Carbonclose";
import Frame27 from "../Frame27";
import "./Group215.css";

function Group215(props) {
  const { group86Props, carboncloseProps, frame27Props } = props;

  return (
    <div className="group-215">
      <div className="group-214">
        <Group86 group85={group86Props.group85} whiteProps={group86Props.whiteProps} />
        <Carbonclose src={carboncloseProps.src} />
      </div>
      <Frame27 {...frame27Props} />
    </div>
  );
}

export default Group215;
