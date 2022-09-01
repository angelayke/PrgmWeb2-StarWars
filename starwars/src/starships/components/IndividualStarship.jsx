import { useState, useEffect } from 'react';
//On importe le hook useParams de React Router
import { useParams } from 'react-router-dom';
import StarshipsService from '../service/StarshipsService';
import StarshipsCard from './StarshipsCard';

const sS =  new StarshipsService();

const IndividualStarship = () => {
    const [starship, setStarship] = useState(null);
    const params = useParams();

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
        <StarshipsCard starship={starship}></StarshipsCard>
    )

}

export default IndividualStarship;