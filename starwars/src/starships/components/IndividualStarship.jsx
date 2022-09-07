import { useState, useEffect } from 'react';
//On importe le hook useParams de React Router
import { useParams } from 'react-router-dom';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import useGetData from "../../components/useGetData";
// services
import StarshipsService from '../service/StarshipsService';
import FilmsService from '../../films/service/FilmsService';
import PeoplesService from '../../people/service/PeoplesService';
//List
import FilmsList from "../../films/components/FilmsList";
import PeoplesList from "../../people/components/PeoplesList";

const sS =  new StarshipsService();
const filmsService = new FilmsService();
const peoplesService = new PeoplesService();

const IndividualStarship = () => {
    const [starship, setStarship] = useState(null);
    const params = useParams();

    const film = useGetData(
        filmsService.getFilmsById.bind(filmsService),
        starship?.films
    );

    const people = useGetData(
        peoplesService.getPeoplesById.bind(peoplesService),
        film?.pilots
    ); 

    const getStarshipById = async () => {
        if (params.id) {
            setStarship(await sS.getStarshipById(params.id));
        }
    }

    useEffect(() => {
        getStarshipById();
    }, [params]);

    if (!starship) {
        return null;
    }

    return (
        <>       
            <Row>
                <Col className='my-3'>
                    <h1>Vaisseau Spatial</h1>
                    <h2 className='text-center'>{starship.name}</h2>
                    <p className='text-center'>{starship.model}</p>

                    <h2>Apparition</h2>
                    <FilmsList films={film}/>

                    <h2>Pilots</h2>
                    <PeoplesList peoples={people}/>
                </Col>
            </Row>
        </>
    )

}

export default IndividualStarship;