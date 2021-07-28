import { GetData } from "../../util/getData";
import "./movies.scss";
import {Movie} from "../Movie";

export const Movies = () => {
  const movies = GetData();
  console.log(movies);
  return (
    <div className="movies-grid">
      {movies.map((movie) => (
       <Movie key={movie.id} movie={movie}/>
      ))}
    </div>
  );
}
