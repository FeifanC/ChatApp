import React from "react";
import closeIcon from "../../asset/close.png"
import onlineIcon from "../../asset/online.png"


import "./InfoBar.css";

const infoBar = ({room}) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online" />
      <h3>{`room ${room}`}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/">
        <img src={closeIcon} alt="close" />
      </a>
    </div>
  </div>
);

export default infoBar;
