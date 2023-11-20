import React, { useEffect, useState } from "react";
import "./banner.css";
import iconplay from "../components/images/iconplay.png";
import iconbutton from "../components/images/button.png";
import iconstar from "../components/images/star.png";
import movieimage from "../components/images/Movie.png";
import shape from "../components/images/Shape.png";
import account from "../components/images/account.png";
import settings from "../components/images/settings.png";

function Banner() {
  const [data, setData] = useState();
  const chargeMovieBanner = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=2d469ef1513c03e647c3c3a1e50de5b2"
    );
    console.log(response.status);

    const responseJSON = await response.json();
    setData(responseJSON);

    console.log(responseJSON);
  };
  
  useEffect(() => {
    chargeMovieBanner();
  }, []);

  const firstMovie = data.results[0];

  return (
    <div className="container1 js-container1">
      <div className="menu">
        <img src={iconplay} className="icon1" />
        <img src={shape} className="icon2" />
        <img src={movieimage} className="icon3" />
        <img src={iconbutton} className="icon4" />
        <img src={iconstar} className="icon5" />
      </div>

      <div className="principal">
        <div className="settings">
          <img src={account} />
          <img src={settings} />
        </div>
        <div className="genre1"></div>
        <div className="banner-container">
          <h2>${firstMovie.original_title}</h2>
          <h3>${firstMovie.overview}</h3>
          <button class="button1">Watch now</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
