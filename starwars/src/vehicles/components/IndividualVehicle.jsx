import { useState, useEffect } from 'react';
//On importe le hook useParams de React Router
import { useParams } from 'react-router-dom';
import VehiclesService from '../service/VehiclesService';
import VehiclesCard from './VehiclesCard';

const vS =  new VehiclesService();

const IndividualVehicle = () => {
    const [vehicle, setVehicle] = useState(null);
    const params = useParams();

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
        <VehiclesCard vehicle={vehicle}></VehiclesCard>
    )

}

export default IndividualVehicle;