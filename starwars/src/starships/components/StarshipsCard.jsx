import React from 'react';
import Card from "../../components/Card";
import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import getUrlId from '../../components/getUrlId';

const StarshipsCard = ({ starship }) => {
  return (
    <Col className="my-3">
      <Card>
        <BCard.Header as="small">
        <Link to={`/starships/${getUrlId(starship.url)}`}>
          <BCard.Title>{starship.name}</BCard.Title>
        </Link>
        </BCard.Header>
        <BCard.Body>
        <BCard.Subtitle className="mb-2 text-muted">Modèle: {starship.model}</BCard.Subtitle>
        </BCard.Body>
      </Card>
    </Col>
  )
}

export default StarshipsCard