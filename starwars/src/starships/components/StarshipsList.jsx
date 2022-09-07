import React from 'react'
import StarshipsCard from "./StarshipsCard";
import Row from "react-bootstrap/Row"

const StarshipsList = ({ starships }) => {
  return (
    <Row>
      <h3>Starships</h3>
        {starships.map((starship) => (
            <StarshipsCard key={starship.name} starship={starship} />
        )
        )}
    </Row>
  )
}

export default StarshipsList