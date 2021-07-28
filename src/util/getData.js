import { useEffect, useState } from "react";

let API = 'https://api.themoviedb.org/3/discover/movie/';
let API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDM2ZGY2NzlhY2QwMDA3NDk1Zjc3NDQ3OGVkNjA4OCIsInN1YiI6IjYwZjM5NDFhNGMyNTkyMDA3ZTcxNTczNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mrlGNCvmI4kwH8g-hS_vA9Tq8qy0fX3jOSCROPXQRHM';

export function GetData() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API, {
        headers: {
            Authorization: 
                "Bearer " + API_KEY,
                "Content-Type": "application/json;charset=utf-8"
        }
    }).then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return movies;
}
