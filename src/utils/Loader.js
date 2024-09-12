import React from "react";
import classes from '../assets/css/Loader.module.css';
const Loader = () => {
  return (
    <div className={classes.loader_container}>
        <div className={classes.lds_ellipsis}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
  );
};

export default Loader;