import React from "react";

import classes from "./Greeting.module.css";

export default function Greeting() {
  return (
    <div>
      <h1 className={classes.text}>Hi, dude!</h1>
      <p className="text-center">Welcome</p>
    </div>
  );
}
