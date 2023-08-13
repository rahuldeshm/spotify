import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import DataContext from "../store/data-context";

function SelectCat() {
  const ctx = useContext(DataContext);
  const selectChangeHandler = (e) => {
    const selectedOption = ctx.category.find(
      (option) => option.id === parseInt(e.target.value)
    );
    ctx.setActiveC(selectedOption);
  };
  return (
    <Row className="d-lg-none">
      <select onChange={selectChangeHandler} className="select">
        {ctx.category.map((e) => (
          <option key={e.id} value={e.id}>
            {e.title}
          </option>
        ))}
      </select>
    </Row>
  );
}

export default SelectCat;
