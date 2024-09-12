import React from "react";
import classes from "../assets/css/Switch.module.css";

export default function Switch({ status, event, bg_color = "", id }) {
  return (
    <div className={`${classes["switch-container"]} mx-auto`}>
      <input
        type="checkbox"
        className={classes.checkbox}
        id={id}
        defaultChecked={status}
        onClick={event}
      />
      <label
        className={classes.switch}
        style={{ backgroundColor: `${bg_color}` }}
        htmlFor={id}
      >
        <span className={classes.slider}></span>
      </label>
    </div>
  );
}
