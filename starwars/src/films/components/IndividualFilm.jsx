import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
//On importe le hook useParams de React Router
import { useParams } from 'react-router-dom';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import useGetData from "../../components/useGetData";
import getUrlId from '../../components/getUrlId';
// services
import FilmsService from '../service/FilmsService';
import VehiclesService from '../../vehicles/service/VehiclesService';
import StarshipsService from '../../starships/service/StarshipsService';
import PeoplesService from '../../people/service/PeoplesService';
//List
import PeoplesList from "../../people/components/PeoplesList";
import VehiclesList from "../../vehicles/components/VehiclesList";
import StarshipsList from "../../starships/components/StarshipsList";


const fS = new FilmsService();
const peoplesService = new PeoplesService();
const starshipsService = new StarshipsService();
const vehiclesService = new VehiclesService();


const IndividualFilm = () => {
    const [film, setFilm] = useState(null);
    const params = useParams();
    
    const people = useGetData(
        peoplesService.getPeoplesById.bind(peoplesService),
        film?.characters
    ); 

    const starship = useGetData(
        starshipsService.getStarshipsById.bind(starshipsService),
        film?.starships
    ); 

    const vehicle = useGetData(
        vehiclesService.getVehiclesById.bind(vehiclesService),
        film?.vehicles
    ); 

    const getFilmsById = async () => {
        if (params.episode_id) {
            setFilm(await fS.getFilmsById(params.episode_id));
        }
    }
    useEffect(() => {
        getFilmsById();
    }, [params]);

    if (!film) {
        return null;
    }


    return (
       <>       
            <Row>
                <Col className='my-3'>
                    <h1>Film</h1>
                    <h2 className='text-center'>{film.title}</h2>
                    <p className='text-center'>{film.opening_crawl}</p>

                    <h2>Peoples in this film</h2>
                    <PeoplesList peoples={people}/>

                    <h2>Vehicles in this film</h2>
                    <VehiclesList vehicles={vehicle}/>
                    
                    <h2>Starships in this film</h2>
                    <StarshipsList starships={starship}/>
                    
                </Col>
            </Row>
        </>

    )

}

export default IndividualFilm;