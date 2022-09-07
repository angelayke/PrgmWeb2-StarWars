import Container from "react-bootstrap/Container";
import Films from "../films/components/Films";
import Starships from "../starships/components/Starships";
import Vehicles from "../vehicles/components/Vehicles";
import Peoples from "../people/components/Peoples";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndividualFilm from "../films/components/IndividualFilm";
import IndividualPeople from "../people/components/IndividualPeople";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Films />}/>
          <Route path="/films/:episode_id" element={<IndividualFilm />} />
          <Route path="/people" element={<Peoples />}/>
          <Route path="/people/:name" element={<IndividualPeople />} />
        </Routes>

      </Container>
    </BrowserRouter>
  );
}

export default App;
