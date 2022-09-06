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

    console.log(getUrlId);

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

 
    // const peoples = new peoplesFilm();
    // const starships = new starshipsFilm();
    // const vehicles = new vehiclesFilm();

    return (
       <>       
            <Row>
                <Col className='my-3'>
                    <h1>Film</h1>
                    <h2 className='text-center'>{film.title}</h2>
                    <p className='text-center'>{film.opening_crawl}</p>

                    <h2>Peoples in this film</h2>
                    <Link to={`/film/${people.name}`}>
                        <h3>{people.name}</h3>
                    </Link>

                    <h2>Vehicles in this film</h2>
                    <Link to={`/film/${film.episode_id}`}>
                        <h3>{vehicle.name}</h3>
                    </Link>
                    
                    <h2>Starships in this film</h2>
                    <Link to={`/film/${film.episode_id}`}>
                        <h3>{starship.name}</h3>
                    </Link>
                </Col>
            </Row>
        </>

    )

}

export default IndividualFilm;