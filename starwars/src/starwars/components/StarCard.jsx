import React from 'react';
import Card from "../../components/Card";
import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const StarCard = ({ starwar }) => {
  return (
    <Col className="my-3">
      <Card>
        <BCard.Header as="small">{starwar.id}</BCard.Header>
        <BCard.Body>
          <BCard.Title>{starwar.name}</BCard.Title>
        </BCard.Body>
      </Card>
    </Col>
  )
}

export default StarCard