import React from 'react';
import Card from "../../components/Card";
import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const PeoplesCard = ({ people }) => {
  return (
    <Col className="my-3">
      <Card>
        <BCard.Header as="small">
        <BCard.Title>{people.name}</BCard.Title>
        </BCard.Header>
        <BCard.Body>
          <BCard.Text>Année de naissance: {people.birth_year}</BCard.Text>
        </BCard.Body>
      </Card>
    </Col>
  )
}

export default PeoplesCard