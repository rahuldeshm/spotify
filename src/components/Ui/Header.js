import React from "react";
import { Row } from "react-bootstrap";
import classes from "./Header.module.css";
import { BsSpotify, BsRCircle } from "react-icons/bs";

function Header() {
  return (
    <Row className={classes.heading}>
      <h3>
        <BsSpotify className={classes.logo} size={40} />
        Spotify
        <BsRCircle className={classes.rlogo} size={7} />
      </h3>
    </Row>
  );
}

export default Header;
