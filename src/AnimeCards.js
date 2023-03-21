import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import './Anime.scss';
import { API_KEY } from "./constantS";

export default function AnimeCards() {
  const [animeList, setAnimeList] = useState([]);
  const fetchAnime = () => {
    axios
      .get(`https://animes5.p.rapidapi.com/?rapidapi-key=${API_KEY}`)
      .then((res) => {
        setAnimeList(res.data.animes);
        console.log("res", animeList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchAnime();
  }, []);

  return (
    <>   
    
     <div className="cards">
      {animeList.map((anime) => (
        <div className="card" key={anime.id}>
          <div className="card-body">
          <img src={anime.main_picture.medium} alt="anime_img" />
          <div className="card-text">
            <label>Title:</label><label>{anime.title}</label>
          </div>
        </div>
        </div>
      ))}
    </div>
    </>

  );
}
