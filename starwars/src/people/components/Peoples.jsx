import React from "react";
import PeoplesList from "./PeoplesList";
import useFetchPeoples from "../hooks/useFetchPeoples,js";



const Peoples = () => {
    const data = useFetchPeoples();

  return <PeoplesList peoples={data} />; 
}

export default Peoples;