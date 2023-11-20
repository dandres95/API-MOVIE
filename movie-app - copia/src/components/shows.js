import React,{useEffect} from "react";
import "./shows.css";

function Shows() {

  const [data, setData] = useState();
  const chargeShows = async () => {
    const answearShow = await fetch(
      "https://api.themoviedb.org/3/discover/tv?api_key=2d469ef1513c03e647c3c3a1e50de5b2"
    );

    const dataShowJSON = await answearShow.json();
    console.log(dataShowJSON);
    setData(dataShowJSON)
   

    const shows = dataShowJSON.results.slice(1, 4);
    console.log(shows);
    
  };

  useEffect(() => {
    chargeShows();
  }, []);

  let cardShow = "";

 return (

  shows.forEach((show) => {
    cardShow += `
    <div class="got" style="background-image: ur
    l('https://image.tmdb.org/t/p/original${show.poster_path}')">
        <h1></h1>
        <div class="rating1">
          <img src="./Star Fill.png" />
          <img src="./Star Fill.png" />
          <img src="./Star Fill.png" />
          <img src="./Star Fill.png" />
          <img src="./Star Fill.png" />
        </div>
        <h2>${show.original_name}</h2>
      </div>
    `;
  })
 )

}
export default Shows;
