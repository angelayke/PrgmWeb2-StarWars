import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import StarshipsService from "../service/StarshipsService";
import StarshipsList from "./StarshipsList";
import useGetData from "../../components/useGetData";

const starshipsService = new StarshipsService();

const Starships = () => {
    const [data, setData] = useState([]);

    const starships = useGetData(
        starshipsService.getStarshipsById.bind(starshipsService),
        data?.starships
    ); 

    /*const starshipsPilots = useGetData(
        starshipsService.getStarshipsById.bind(starshipsService),
        data?.pilots
    ); pas ici*/
    
    const getStarships =  async () => {
        const starships = await starshipsService.getStarships();
        console.log (starships)
        setData(starships);
    };

    useEffect(() => {
        getStarships();
      }, []);

  return <StarshipsList starships={data} />; 
}

export default Starships;