import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Category from "./components/Category/Category";
import Playing from "./components/Playing/Playing";
import { useContext } from "react";
import DataContext from "./components/store/data-context";
import Songs from "./components/Songs/Songs";
import SelectCat from "./components/Ui/SelectCat";

function App() {
  const ctx = useContext(DataContext);
  const color = ctx.theme;
  const theme = {
    background: `radial-gradient(circle, ${color} 0%, rgba(0,0,0,1) 100%)`,
    color: "white",
  };
  const { manu } = ctx;

  const cls = window.innerWidth < 576 ? (manu ? "manu" : "amanu") : "";

  return (
    <Container fluid style={theme}>
      <Row>
        <Col className="category d-none d-sm-none d-lg-block" lg={3} xl={2}>
          <Category />
        </Col>
        <Col className={`songs ${cls} d-sm-block`} sm={6} lg={4} xl={4}>
          <SelectCat />
          <Songs />
        </Col>
        <Col xs={12} sm={6} lg={5} xl={6}>
          <Playing />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
