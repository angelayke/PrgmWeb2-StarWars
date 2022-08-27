import React from 'react'
import StarCard from "./StarCard";
import Row from "react-bootstrap/Row"

const StarList = ({ starwars }) => {
  return (
    <Row>
        {starwars.map((starwar) => (
            <StarCard key={starwar.id} starwar={starwar} />
        )
        )}
    </Row>
  )
}

export default StarList