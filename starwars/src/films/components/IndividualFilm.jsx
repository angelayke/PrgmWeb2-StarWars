import { useState, useEffect } from 'react';
//On importe le hook useParams de React Router
import { useParams } from 'react-router-dom';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FilmsService from '../service/FilmsService';
import useGetData from "../../components/useGetData"
import FilmsCard from './FilmsCard';
import PeoplesCard from '../../people/components/PeoplesCard';
import VehiclesCard from '../../vehicles/components/VehiclesCard';
import StarshipsCard from '../../starships/components/StarshipsCard';

const fS =  new FilmsService();
//const peopleFilmService = new PeopleFilmService ()

const IndividualFilm = () => {
    const [film, setFilm] = useState(null);
    const params = useParams();

    const peoples = new peoplesFilm();
    const vehicles = new vehiclesFilm();
    const starships = new starshipsFilm();
    const peoplesFilm = useGetData(
        peopleFilmService.getFilmsById.bind(peopleFilmService),
        film?.characters
    ); 
    console.log(peoplesFilm);

    const starshipsFilm = useGetData(
        starshipFilmService.getFilmsById.bind(starshipFilmService),
        film?.starship
    ); 
    console.log(starshipsFilm);

    const vehiclesFilm = useGetData(
        vehicleFilmService.getFilmsById.bind(vehicleFilmService),
        film?.vehicle
    ); 
    console.log(peoplesFilm);

    const getFilmById = async () => {
        if (params.id) {
            setFilm(await fS.getFilmById(params.id));
        }
    }

    useEffect(() => {
        getFilmById();
    }, [params]);

    if (!film) {
        return null;
    }
    

    return (
        <>
        <FilmsCard film={film}></FilmsCard>
        <Row>
        <h1>Film</h1>
        <Col className='my-3'>
            <h2 className='text-center'>{film.title}</h2>
            <p className='text-center'>{film.opening_crawl}</p>

            <h3>Peoples</h3>
            <PeoplesCard peoples={peoplesFilm}></PeoplesCard>

            <h3>Starships</h3>
            <StarshipsCard starships={starshipsFilm}></StarshipsCard>

            <h3>Vehicles</h3>
            <VehiclesCard vehicles={vehiclesFilm}></VehiclesCard>

        </Col>
    </Row>
      
        </>
    )

}

export default IndividualFilm;