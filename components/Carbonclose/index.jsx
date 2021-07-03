import React from "react";
import "./Carbonclose.css";

function Carbonclose(props) {
  const { src } = props;

  return (
    <div className="carbonclose">
      <img className="vector-1" src={src} />
    </div>
  );
}

export default Carbonclose;
