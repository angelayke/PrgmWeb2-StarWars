import React from 'react';
import Card from "../../components/Card";
import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const FilmsCard = ({ film }) => {
  return (
    <Col className="my-3">
      <Card>
        <BCard.Header as="small">Blabla</BCard.Header>
        <BCard.Body>
          <BCard.Title>{film.title}</BCard.Title>
        </BCard.Body>
      </Card>
    </Col>
  )
}

export default FilmsCard