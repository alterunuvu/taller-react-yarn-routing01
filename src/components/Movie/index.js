import "./movie.scss";
import { Link } from "react-router-dom";

const baseImg = 'https://image.tmdb.org/t/p/w300';

export const Movie = ({movie}) => {
  return (
    <Link to={"/moviedetail/" + movie.id}><article className="movie-card">
      <img
        src={baseImg + movie.poster_path}
        alt="Carátula de la película"
      ></img>
      <div>{movie.title}</div>
    </article></Link>
  );
}
