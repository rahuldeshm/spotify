import React, { useState } from "react";
import { Row } from "react-bootstrap";
import classes from "./Songs.module.css";
import { BiSearch } from "react-icons/bi";
import SongItem from "./SongItem";

function LoadedSongs(props) {
  const [txt, setTxt] = useState("");

  const filtered = props.data.getSongs.filter((e) => {
    return (
      e.title.toLowerCase().indexOf(txt) >= 0 ||
      e.artist.toLowerCase().indexOf(txt) >= 0
    );
  });
  return (
    <>
      <Row className={classes.h}>
        <h1 className="d-none d-lg-block">{props.id}</h1>
        <input
          type="text"
          placeholder="Search Song, Artist"
          onChange={(e) => setTxt(e.target.value.toLowerCase())}
        />
        <BiSearch className={classes.icon} size={20} />
      </Row>
      {filtered.map((e, index) => {
        return <SongItem e={e} index={index} key={e._id} />;
      })}
    </>
  );
}

export default LoadedSongs;
