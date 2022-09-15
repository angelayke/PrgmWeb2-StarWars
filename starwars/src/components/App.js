import Container from "react-bootstrap/Container";
import Films from "../films/components/Films";
import Starships from "../starships/components/Starships";
import Vehicles from "../vehicles/components/Vehicles";
import Peoples from "../people/components/Peoples";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndividualFilm from "../films/components/IndividualFilm";
import IndividualPeople from "../people/components/IndividualPeople";
import IndividualVehicle from "../vehicles/components/IndividualVehicle";
import IndividualStarship from "../starships/components/IndividualStarship";
import AppContainer from "../auth/components/AppContainer";
import AuthLayout from "../auth/components/authLayout";


function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Container>
          <User />
          <Routes>
            <Route path="login" element={<AuthLayout />} />
            <Route path="/" element={<Films />}/>
            <Route path="/films/:episode_id" element={<IndividualFilm />} />
            <Route path="/people" element={<Peoples />}/>
            <Route path="/people/:name" element={<IndividualPeople />} />
            <Route path="/vehicles" element={<Vehicles />}/>
            <Route path="/vehicles/:name" element={<IndividualVehicle />} />
            <Route path="/starships" element={<Starships />}/>
            <Route path="/starships/:name" element={<IndividualStarship />} />
          </Routes>
        </Container>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
