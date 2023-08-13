import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import classes from "./SongItem.module.css";
import DataContext from "../store/data-context";

function SongItem(props) {
  const ctx = useContext(DataContext);
  const time = `${Math.floor(+props.e.duration / 60)}:${
    +props.e.duration % 60
  }`;
  return (
    <div
      className={
        props.e._id === ctx.activeSong._id ? classes.activeitem : classes.item
      }
      onClick={() => {
        ctx.setActiveS(props.e);
      }}
    >
      <div className={classes.imgdiv}>
        <img src={props.e.photo}></img>
      </div>
      <div className={classes.disc}>
        <p>{props.e.title}</p>
        <p className={classes.artist}>{props.e.artist}</p>
      </div>
      <div>
        <p>{time}</p>
      </div>
    </div>
  );
}

export default SongItem;
