import { useState, useEffect } from 'react';
//On importe le hook useParams de React Router
import { useParams } from 'react-router-dom';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import useGetData from "../../components/useGetData";
import Table from 'react-bootstrap/Table';
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
       
        <>       
            <Row>
                <Col className='my-3'>
                    <h1>Personnage</h1>
                    <h2 className='text-center'>{people.name}</h2>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Année de naissance</th>
                                <td>{people.birth_year}</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Couleur des yeux</th>
                                <td>{people.eye_color}</td>
                            </tr>
                            <tr>
                                <th>Couleur des cheveux</th>
                                <td>{people.hair_color}</td>
                            </tr>
                            <tr>
                                <th>Poids</th>
                                <td>{people.mass}</td>
                            </tr>
                            <tr>
                                <th>Couleur de peau</th>
                                <td>{people.skin_color}</td>
                            </tr>
                        </tbody>
                    </Table>

                    <h2>Apparition</h2>
                    <FilmsList films={film}/>

                    <h2>Vehicules utilisés</h2>
                   <VehiclesList vehicles={vehicle}/>
                    
                    <h2>Vaisseaux spatiaux</h2>
                    <StarshipsList starships={starship}/>
                    
                </Col>
            </Row>
        </>
    )

}

export default IndividualPeople;