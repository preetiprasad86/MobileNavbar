import React from "react";
import "./Frame27.css";

function Frame27(props) {
  const {
    unselected,
    unselected2,
    unselected3,
    unselected4,
    unselected5,
    unselected6,
    unselected7,
    unselected8,
  } = props;

  return (
    <div className="frame-27">
      <div className="unselected valign-text-middle typography-body-smalltext-14-regular">{unselected}</div>
      <div className="unselected-1 valign-text-middle typography-body-smalltext-14-regular">{unselected2}</div>
      <div className="unselected-2 valign-text-middle typography-body-smalltext-14-regular">{unselected3}</div>
      <div className="unselected-3 valign-text-middle typography-body-smalltext-14-regular">{unselected4}</div>
      <div className="unselected-4 valign-text-middle typography-body-smalltext-14-regular">{unselected5}</div>
      <div className="unselected-5 valign-text-middle typography-body-smalltext-14-regular">{unselected6}</div>
      <div className="unselected-6 valign-text-middle typography-body-smalltext-14-regular">{unselected7}</div>
      <div className="unselected-7 valign-text-middle typography-body-smalltext-14-regular">{unselected8}</div>
    </div>
  );
}

export default Frame27;
