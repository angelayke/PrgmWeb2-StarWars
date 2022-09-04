import React from 'react';
import Card from "../../components/Card";
import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const FilmsCard = ({ film }) => {
  return (
    <Col className="my-3">
        <Card>
          <BCard.Header as="small">Date de sortie: {film.release_date}</BCard.Header>
          <BCard.Body>
            <Link to={`/films/${film.id}`} /* Je me demande si ici je ne devrais pas plutot mettre un lien du genre /films/FicheFilm/ */>
              <BCard.Title>{film.title}</BCard.Title>
            </Link>
          </BCard.Body>
        </Card>
    
    </Col>
  )
}

export default FilmsCard