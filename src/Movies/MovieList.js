import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function MovieList(props) {
  const navigate =useNavigate()
  const onMovieClick = id => () => {
    navigate(`movies/${id}`)
  }
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails link={<Link to={`movies/${movie.id}`}>details</Link>}
        onMovieClick={onMovieClick(movie.id)} 
        key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;
  const {onMovieClick, link} = props

  return (
    <div className="movie-card" onClick={onMovieClick}>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      {link}
    </div>
  );
}
