import { useState, useEffect } from 'react';
//On importe le hook useParams de React Router
import { useParams } from 'react-router-dom';
import FilmsService from '../service/FilmsService';
import FilmsCard from './FilmsCard';

const fS =  new FilmsService();

const IndividualFilm = () => {
    const [film, setFilm] = useState(null);
    const params = useParams();

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
        <FilmsCard film={film}></FilmsCard>
    )

}

export default IndividualFilm;