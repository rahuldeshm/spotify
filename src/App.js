import { Container, Row } from "react-bootstrap";
import "./App.css";
import Category from "./components/Category/Category";
import Playing from "./components/Playing/Playing";
import SongsMain from "./components/Songs/SongsMain";

function App() {
  return (
    <Container fluid className="theme">
      <Row>
        <Category />
        <SongsMain />
        <Playing />
      </Row>
    </Container>
  );
}

export default App;
