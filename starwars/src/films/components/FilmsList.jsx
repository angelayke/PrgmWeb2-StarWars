import React from 'react'
import FilmsCard from "./FilmsCard";
import Row from "react-bootstrap/Row"

const FilmsList = ({ films }) => {
  return (
    <Row>
      <h1>Films</h1>
        {films.map((film) => (
            <FilmsCard key={film.episode_id} film={film} />
        )
        )}
    </Row>
  )
}

export default FilmsList