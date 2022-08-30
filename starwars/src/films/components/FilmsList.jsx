import React from 'react'
import FilmsCard from "./FilmsCard";
import Row from "react-bootstrap/Row"

const FilmsList = ({ films }) => {
  return (
    <Row>
        {films.map((film) => (
            <FilmsCard key={film.episode_id} film={film} />
        )
        )}
    </Row>
  )
}

export default FilmsList