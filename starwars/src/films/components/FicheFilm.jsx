import React from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "../../components/Card";
import BCard from "react-bootstrap/Card";

//import { Link } from "react-router-dom";

const FicheFilm = ({ ficheFilm }) => {
  return (
    <Row>
        <h1>Film</h1>
        <Col className='my-3'>
            <h2 className='text-center'>{ficheFilm.title}</h2>
            <p className='text-center'>{ficheFilm.opening_crawl}</p>

            <h3>People</h3>
            <Card>
                <BCard>
                    
                </BCard>
            </Card>
        </Col>
    </Row>
  )
}

export default FicheFilm