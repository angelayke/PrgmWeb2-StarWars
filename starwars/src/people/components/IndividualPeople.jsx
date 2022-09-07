import { useState, useEffect } from 'react';
//On importe le hook useParams de React Router
import { useParams } from 'react-router-dom';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import useGetData from "../../components/useGetData";
// services
import PeoplesService from '../service/PeoplesService';
import VehiclesService from '../../vehicles/service/VehiclesService';
import StarshipsService from '../../starships/service/StarshipsService';
import FilmsService from '../../service/FilmsService';
//List
import PeoplesList from "../people/components/PeoplesList";
import VehiclesList from "../../vehicles/components/VehiclesList";
import StarshipsList from "../../starships/components/StarshipsList";
import FilmsList from "../../films/components/FilmsList";

import PeoplesCard from './PeoplesCard';

const pS = new PeoplesService();
const starshipsService = new StarshipsService();
const vehiclesService = new VehiclesService();
const filmsService = new FilmsService();

const IndividualPeople = () => {
    const [people, setPeople] = useState(null);
    const params = useParams();

    const starship = useGetData(
        starshipsService.getStarshipsById.bind(starshipsService),
        people?.starships
    ); 

    const vehicle = useGetData(
        vehiclesService.getVehiclesById.bind(vehiclesService),
        people?.vehicles
    ); 

    const film = useGetData(
        filmsService.getFilmsById.bind(filmsService),
        people?.films
    );

    const getPeopleById = async () => {
        if (params.id) {
            setPeople(await pS.getPeopleById(params.id));
        }
    }

    useEffect(() => {
        getPeopleById();
    }, [params]);

    if (!people) {
        return null;
    }

    return (
        <PeoplesCard people={people}></PeoplesCard>
    )

}

export default IndividualPeople;