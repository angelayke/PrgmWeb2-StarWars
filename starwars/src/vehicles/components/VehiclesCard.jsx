import React from 'react';
import Card from "../../components/Card";
import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const VehiclesCard = ({ vehicle }) => {
  return (
    <Col className="my-3">
      <Card>
        <BCard.Header as="small">
        <BCard.Title>{vehicle.name}</BCard.Title>
          <BCard.Subtitle className="mb-2 text-muted">Modèle: {vehicle.model}</BCard.Subtitle>
        </BCard.Header>
        <BCard.Body>
          <BCard.Text>Fabricant: {vehicle.manufacturer}</BCard.Text>
        </BCard.Body>
      </Card>
    </Col>
  )
}

export default VehiclesCard