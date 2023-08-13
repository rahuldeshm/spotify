import React, { useContext, useEffect } from "react";
import { Row } from "react-bootstrap";
import classes from "./Playing.module.css";
import DataContext from "../store/data-context";
import Player from "./Player";
import { useColor } from "color-thief-react";
import Header from "../Ui/Header";

function Playing() {
  const ctx = useContext(DataContext);
  const { setT } = ctx;
  const { url, photo } = ctx.activeSong;
  const { data, loading, error } = useColor(photo, "hex", {
    crossOrigin: "anonymous",
  });
  if (error) console.log(error);
  if (loading) console.log(loading);
  useEffect(() => {
    if (data) setT(data);
  }, [data, setT]);
  return (
    <>
      <div className={`${classes.header} d-lg-none`}>
        <div
          className={
            ctx.manu ? `${classes.toggle} ${classes.active}` : classes.toggle
          }
          onClick={() => ctx.setManu()}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Header />
      </div>
      <div className={classes.playing}>
        <Row className={classes.playing_row}>
          <h3>{ctx.activeSong.title}</h3>
          <p>{ctx.activeSong.artist}</p>
          <img src={photo} alt={`${ctx.activeSong.title} img`} />
          <Player url={url} />
        </Row>
      </div>
    </>
  );
}

export default Playing;
