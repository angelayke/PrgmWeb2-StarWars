import Container from "react-bootstrap/Container";
import Films from "../films/components/Films";
import Starships from "../starships/components/Starships";
import Vehicles from "../vehicles/components/Vehicles";
import Peoples from "../people/components/Peoples";

function App() {
  return (
    <Container>
      <Films />
      <br />
      <Peoples />
      <br />
      <Vehicles />
      <br />
      <Starships />
    </Container>
  );
}

export default App;
