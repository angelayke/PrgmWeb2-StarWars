import React from 'react'
import PeoplesCard from "./PeoplesCard";
import Row from "react-bootstrap/Row"

const PeoplesList = ({ peoples }) => {
  return (
    <Row>
      <h1>Peoples</h1>
        {peoples.map((people) => (
            <PeoplesCard key={people.name} people={people} />
        )
        )}
    </Row>
  )
}

export default PeoplesList