import { useState, useEffect } from 'react';
//On importe le hook useParams de React Router
import { useParams } from 'react-router-dom';
import PeoplesService from '../service/PeoplesService';
import PeoplesCard from './PeoplesCard';

const pS =  new PeoplesService();

const IndividualPeople = () => {
    const [people, setPeople] = useState(null);
    const params = useParams();

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
        <PeoplesCard people={people}></PeoplesCard>
    )

}

export default IndividualPeople;