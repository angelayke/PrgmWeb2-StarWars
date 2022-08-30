import Container from "react-bootstrap/Container";
import Films from "../films/components/Films";
import Vehicles from "../vehicles/components/Vehicles";

function App() {
  return (
    <Container>
      <Films />
      <br />
      <Vehicles />
    </Container>
  );
}

export default App;
