import React from 'react';
import Card from "../../components/Card";
import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const StarshipsCard = ({ starship }) => {
  return (
    <Col className="my-3">
      <Card>
        <BCard.Header as="small">
        <Link to={`/starships/${starship.id}`}>
          <BCard.Title>{starship.name}</BCard.Title>
        </Link>
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