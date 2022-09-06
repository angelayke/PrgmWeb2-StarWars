import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//On importe le hook useParams de React Router
import { useParams } from 'react-router-dom';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import useGetData from "../../components/useGetData";
import Container from "react-bootstrap/Container";
// services
import FilmsService from '../service/FilmsService';
import VehiclesService from '../../vehicles/service/VehiclesService';
import StarshipsService from '../../starships/service/StarshipsService';
import PeoplesService from '../../people/service/PeoplesService';
// card
import FilmsCard from './FilmsCard';
// individual
import IndividualPeople from '../../people/components/IndividualPeople';
import VehiclesCard from '../../vehicles/components/VehiclesCard';
import StarshipsCard from '../../starships/components/StarshipsCard';
import Peoples from '../../people/components/Peoples';


const fS = new FilmsService();
const peoplesService = new PeoplesService();
const starshipsService = new StarshipsService();
const vehiclesService = new VehiclesService();

const IndividualFilm = () => {
    const [film, setFilm] = useState(null);
    const params = useParams();

    
    const peoplesFilm = useGetData(
        peoplesService.getPeoplesById.bind(peoplesService),
        film?.name
    ); 
    console.log(peoplesFilm);

   
    const starshipsFilm = useGetData(
        starshipsService.getStarshipsById.bind(starshipsService),
        film?.starships
    ); 
    console.log(starshipsFilm);

   
    const vehiclesFilm = useGetData(
        vehiclesService.getVehiclesById.bind(vehiclesService),
        film?.vehicles
    ); 
    console.log(vehiclesFilm);

    const getFilmById = async () => {
        if (params.episode_id) {
            setFilm(await fS.getFilmById(params.episode_id));
            console.log(getFilmById);
        }
    }

    useEffect(() => {
        getFilmById();
    }, [params]);

    if (!film) {
        return null;
    }
    const peoples = new peoplesFilm();
    const starships = new starshipsFilm();
    const vehicles = new vehiclesFilm();

    return (
        <>       
        <FilmsCard film={film}></FilmsCard>
        <Row>
            <h1>Film</h1>
            <Col className='my-3'>
                <h2 className='text-center'>{film.title}</h2>
                <p className='text-center'>{film.opening_crawl}</p>
                    <h3>Peoples</h3>
                    <Peoples />
                    <PeoplesCard peoples={peoplesFilm}></PeoplesCard>

                    <h3>Starships</h3>
                    <Starships />
                    <StarshipsCard starships={starshipsFilm}></StarshipsCard>

                    <h3>Vehicles</h3>
                    <Vehicles />
                    <VehiclesCard vehicles={vehiclesFilm}></VehiclesCard>    

            </Col>
        </Row>
    </>
    )

}

export default IndividualFilm;