import React from 'react'
import StarshipsCard from "./StarshipsCard";
import Row from "react-bootstrap/Row"

const StarshipsList = ({ starships }) => {
  return (
    <Row>
      <h1>Starships</h1>
        {starships.map((starship) => (
            <StarshipsCard key={starship.name} starship={starship} />
        )
        )}
    </Row>
  )
}

export default StarshipsList