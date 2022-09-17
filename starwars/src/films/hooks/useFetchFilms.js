import FilmsService from "../service/FilmsService";
import useGetData from "../../components/useGetData";
import { useEffect } from "react";
import { useState } from "react";

const filmsService = new FilmsService();

const useFetchFilms = () => {
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

      return data;
}

export default useFetchFilms;