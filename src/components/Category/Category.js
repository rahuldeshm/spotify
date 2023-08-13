import React from "react";
import classes from "./Category.module.css";
import { Col } from "react-bootstrap";
import Header from "../Ui/Header";
import CategoryItem from "./CategoryItem";

function Category() {
  return (
    <Col className={classes.category} sm={2}>
      <Header />
      <CategoryItem />
    </Col>
  );
}

export default Category;
