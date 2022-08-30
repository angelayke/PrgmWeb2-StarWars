import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import VehiclesService from "../service/VehiclesService";
import VehiclesList from "./VehiclesList";
import useGetData from "../../components/useGetData"

const vehiclesService = new VehiclesService();

const Vehicles = () => {
    const [data, setData] = useState([]);

    const vehicles = useGetData(
        vehiclesService.getVehiclesById.bind(vehiclesService),
        data?.vehicles
    ); 
    
    const getVehicles =  async () => {
        const vehicles = await vehiclesService.getVehicles();
        console.log (vehicles)
        setData(vehicles);
    };

    useEffect(() => {
        getVehicles();
      }, []);

  return <VehiclesList vehicles={data} />; 
}

export default Vehicles;