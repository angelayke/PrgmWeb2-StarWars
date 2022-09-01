import React from 'react';
import Card from "../../components/Card";
import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const StarshipsCard = ({ starship }) => {
  return (
    <Col className="my-3">
      <Card>
        <BCard.Header as="small">
        <BCard.Title>{starship.name}</BCard.Title>
          <BCard.Subtitle className="mb-2 text-muted">Modèle: {starship.model}</BCard.Subtitle>
        </BCard.Header>
        <BCard.Body>
          <BCard.Text>Pilote: {starship.pilots}</BCard.Text>
        </BCard.Body>
      </Card>
    </Col>
  )
}

export default StarshipsCard