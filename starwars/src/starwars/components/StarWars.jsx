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

        setData(
            await Promise.all(
                starwars.map((starwar) =>
                    starService.getStarWarsWithReturnedUrl(starwar.url)
                )
            )
        );
    };

    useEffect(() => {
        getStarWars();
      }, []);

  return <StarList starwars={data} />;
}

export default StarWars