import React from "react";
import Songs from "./Songs";
import { Col } from "react-bootstrap";
import classes from "./Songs.module.css";

function SongsMain() {
  return (
    <Col className={classes.songs} sm={4}>
      <Songs />
    </Col>
  );
}

export default SongsMain;
