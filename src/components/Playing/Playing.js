import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import classes from "./Playing.module.css";
import DataContext from "../store/data-context";
import Player from "./Player";

function Playing() {
  const ctx = useContext(DataContext);
  return (
    <Col className={classes.playing} sm={6}>
      <Row className={classes.playing_row}>
        <h3>{ctx.activeSong.title}</h3>
        <p>{ctx.activeSong.artist}</p>
        <img src={ctx.activeSong.photo} />
        <Player url={ctx.activeSong.url} />
      </Row>
    </Col>
  );
}

export default Playing;
