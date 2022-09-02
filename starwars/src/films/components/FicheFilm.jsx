import React from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import H1 from "react-bootstrap/H1";
import Card from "../../components/Card";
import BCard from "react-bootstrap/Card";
import PeoplesCard from './PeoplesCard';
import { Link } from "react-router-dom";

const FicheFilm = ({ ficheFilm }) => {
  return (
    <Row>
        <H1>Film</H1>
        <Col className='my-3'>
            <h2 className='text-center'>{ficheFilm.title}</h2>
            <p className='text-center'>{ficheFilm.opening_crawl}</p>

            <h3>People</h3>
            <Card>
                <BCard>
                    <Link to={`/people/${people.id}`}>
                        {peoples.map((people) => (
                        <PeoplesCard key={people.name} people={people} />
                        )
                        )}
                    </Link>
                </BCard>
            </Card>
        </Col>
    </Row>
  )
}

export default FicheFilm