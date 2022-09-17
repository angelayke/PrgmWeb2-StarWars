import React from "react";
import FilmsList from "./FilmsList";
import useFetchFilms from "../hooks/useFetchFilms";

const Films = () => {
    const data = useFetchFilms();

  return <FilmsList films={data} />; 
}

export default Films;