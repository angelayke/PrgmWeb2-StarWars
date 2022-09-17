import React from "react";
import FilmsService from "../service/FilmsService";
import FilmsList from "./FilmsList";

import useFetchFilms from "../hooks/useFetchFilms";

const filmsService = new FilmsService();

const Films = () => {
    const data = useFetchFilms();

  return <FilmsList films={data} />; 
}

export default Films;