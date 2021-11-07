import React from "react";
import classes from "./MeetupDetails.module.css";

export default function MeetupDetails(props) {
  return (
    <section className={classes.detail}>
      <img src={props.url} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}
