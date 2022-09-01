import Container from "react-bootstrap/Container";
import Films from "../films/components/Films";
import Starships from "../starships/components/Starships";
import Vehicles from "../vehicles/components/Vehicles";
import Peoples from "../people/components/Peoples";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndividualFilm from "../films/components/IndividualFilm";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Films />}/>
          <Route path="/films/:id" element={<IndividualFilm />} />
          </Routes>
          <Peoples />
          
          <Vehicles />
        
          <Starships />
        
      </Container>
    </BrowserRouter>
  );
}

export default App;
