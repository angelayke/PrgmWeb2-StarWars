import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import FilmsService from "../service/FilmsService";
import FilmsList from "./FilmsList";
import useGetData from "../../components/useGetData"

const filmsService = new FilmsService();

const Films = () => {
    const [data, setData] = useState([]);
    //hook personnalisé mathieu
    const films = useGetData(
        filmsService.getFilmsById.bind(filmsService),
        data?.films
    ); 
    //
    const getFilms =  async () => {
        const films = await filmsService.getFilms();
        console.log (films)
        setData(films);
    };

    useEffect(() => {
        getFilms();
      }, []);

  return <FilmsList films={data} />; 
}

export default Films;