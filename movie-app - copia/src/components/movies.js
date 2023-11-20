import React,{useEffect,useState} from "react";
import "./movies.css";

function Movie() {
  const [data, setData] = useState();
  const chargeMovie = async () => {
    const answear = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=2d469ef1513c03e647c3c3a1e50de5b2"
    );
    console.log(answear.status);

    const answearJSON = await answear.json();
    setData(answearJSON);

    console.log(answearJSON);

  }
    useEffect(() => {
      chargeMovie();
    }, []);

    const movies = answearJSON.results.slice(1, 6);

    let cardsMovie = "";

  return (

    movies.forEach((movie) => {
      cardsMovie += `
      <div class="card" style="background-image: url('https://image.tmdb.org/t/p/original${movie.poster_path}')">
        <h1></h1>
        <div class="rating1">
          <img src="./Star Fill.png" />
          <img src="./Star Fill.png" />
          <img src="./Star Fill.png" />
          <img src="./Star Fill.png" />
          <img src="./Star Fill.png" />
        </div>
        <h2>${movie.original_title}</h2>
      </div>
    `;
    })
  )
};

export default Movie;
