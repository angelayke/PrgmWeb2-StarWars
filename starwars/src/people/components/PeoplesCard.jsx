import React from 'react';
import Card from "../../components/Card";
import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import getUrlId from '../../components/getUrlId';

const PeoplesCard = ({ people }) => {
  return (
    <Col className="my-3">
      <Card>
        <BCard.Header as="small">
          <Link to={`/people/${getUrlId(people.url)}`}>
            <BCard.Title>{people.name}</BCard.Title>
          </Link>
        </BCard.Header>
        <BCard.Body>
          <BCard.Text>Année de naissance: {people.birth_year}</BCard.Text>
        </BCard.Body>
      </Card>
    </Col>
  )
}

export default PeoplesCard