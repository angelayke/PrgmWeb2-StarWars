import { useState, useEffect } from 'react';
//On importe le hook useParams de React Router
import { useParams } from 'react-router-dom';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FilmsService from '../service/FilmsService';
//import useGetData from "../../components/useGetData"
import FilmsCard from './FilmsCard';
import PeoplesCard from '../../people/components/PeoplesCard';

const fS =  new FilmsService();
//const peopleFilmService = new PeopleFilmService ()

const IndividualFilm = () => {
    const [film, setFilm] = useState(null);
    const params = useParams();

    const peoples = new peoples;
    //const peoplesFilm = useGetData(
     //   peopleFilmService.getFilmsById.bind(peopleFilmService),
      //  film?.characters
    //); 
    //console.log(peoplesFilm);

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
            <PeoplesCard peoples={peoples}></PeoplesCard>

        </Col>
    </Row>
      
        </>
    )

}

export default IndividualFilm;