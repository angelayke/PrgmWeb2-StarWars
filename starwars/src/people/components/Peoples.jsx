import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PeoplesService from "../service/PeoplesService";
import PeoplesList from "./PeoplesList";
import useGetData from "../../components/useGetData"

const peoplesService = new PeoplesService();

const Peoples = () => {
    const [data, setData] = useState([]);

    const peoples = useGetData(
        peoplesService.getPeoplesById.bind(peoplesService),
        data?.peoples
    ); 
    
    const getPeoples =  async () => {
        const peoples = await peoplesService.getPeoples();
        console.log (peoples)
        setData(peoples);
    };

    useEffect(() => {
        getPeoples();
      }, []);

  return <PeoplesList peoples={data} />; 
}

export default Peoples;