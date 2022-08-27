import React from 'react';
import Card from "../../components/Card";
import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const StarCard = ({ starwars }) => {
  return (
    <Col className="my-3">
      <Card>
        <BCard.Header as="small">{starwars.id}</BCard.Header>
        <BCard.Body>
          <BCard.Title>{starwars.name}</BCard.Title>
        </BCard.Body>
      </Card>
    </Col>
  )
}

export default StarCard