import { useState, useEffect } from 'react';
//On importe le hook useParams de React Router
import { useParams } from 'react-router-dom';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import useGetData from "../../components/useGetData";
// services
import VehiclesService from '../service/VehiclesService';
import FilmsService from '../../films/service/FilmsService';
import PeoplesService from '../../people/service/PeoplesService';
//List
import FilmsList from "../../films/components/FilmsList";
import PeoplesList from "../../people/components/PeoplesList";

const vS =  new VehiclesService();
const filmsService = new FilmsService();
const peoplesService = new PeoplesService();

const IndividualVehicle = () => {
    const [vehicle, setVehicle] = useState(null);
    const params = useParams();

    const film = useGetData(
        filmsService.getFilmsById.bind(filmsService),
        vehicle?.films
    );

    const people = useGetData(
        peoplesService.getPeoplesById.bind(peoplesService),
        vehicle?.pilots
    ); 

    const getVehicleById = async () => {
        if (params.id) {
            setVehicle(await vS.getVehicleById(params.id));
        }
    }

    useEffect(() => {
        getVehicleById();
    }, [params]);

    if (!vehicle) {
        return null;
    }

    return (
        <>       
            <Row>
                <Col className='my-3'>
                    <h1>Véhicules</h1>
                    <h2 className='text-center'>{vehicle.name}</h2>
                    <p className='text-center'>{vehicle.model}</p>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Cargo Capacity</th>
                                <td>{vehicle.cargo_capacity}</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Consumables</th>
                                <td>{vehicle.consumables}</td>
                            </tr>
                            <tr>
                                <th>Cost in Credits</th>
                                <td>{vehicle.cost_in_credits}</td>
                            </tr>
                            <tr>
                                <th>Crew</th>
                                <td>{vehicle.crew}</td>
                            </tr>
                            <tr>
                                <th>Max Atmosphering Speed</th>
                                <td>{vehicle.max_atmosphering_speed}</td>
                            </tr>
                            <tr>
                                <th>Passengers</th>
                                <td>{vehicle.passengers}</td>
                            </tr>
                        </tbody>
                    </Table>

                    <h2>Apparition</h2>
                    <FilmsList films={film}/>

                    <h2>Pilots</h2>
                    <PeoplesList peoples={people}/>
                </Col>
            </Row>
        </>
    )

}

export default IndividualVehicle;