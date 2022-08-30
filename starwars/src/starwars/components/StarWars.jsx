import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import StarService from "../service/StarService";
import StarList from "./StarList";

const starService = new StarService();

const StarWars = () => {
    const [data, setData] = useState([]);
    
    const getStarWars =  async () => {
        const starwars = await starService.getStarWars();
        console.log (starwars)
        setData(starwars);
    };

    useEffect(() => {
        getStarWars();
      }, []);

  return <StarList starwars={data} />;
}

export default StarWars