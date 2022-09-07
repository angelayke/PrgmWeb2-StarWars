import React from 'react'
import VehiclesCard from "./VehiclesCard";
import Row from "react-bootstrap/Row"

const VehiclesList = ({ vehicles }) => {
  return (
    <Row>
      <h3>Vehicles</h3>
        {vehicles.map((vehicle) => (
            <VehiclesCard key={vehicle.name} vehicle={vehicle} />
        )
        )}
    </Row>
  )
}

export default VehiclesList