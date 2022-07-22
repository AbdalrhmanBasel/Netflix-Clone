import { useState , useEffect  } from "react"
import axios from '../../axios';
import React from 'react'
import './Banner.css'
import requests from "../../requests"

function Banner() {
     // SEE MORE/LESS FUNCTION
    const seeMore = (string, n) => string?.length > n ? string.substr(0,n - 1) + "..." : string;
 
    // FETCH MOVIES FROM DATABASE
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        
    fetchData();

    }, [])

    

  return (
    <header className="banner"
        style={{
            backgroundSize:"cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition:"center center",
        }}
    >
        <div className="banner__contents">
            <h1 className="banner__title">${movie?.title || movie?.name || movie?.original_name}</h1>
            <div className="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">My List</button>
            </div>

            <div className="banner__description">
                <h2> {seeMore(`${movie?.overview}`, 150)}</h2>
            </div>
        </div>

        

        {/* Fade Out Effect */}
        <div className="banner--fadeBottom"/>
    </header>
  )
}

export default Banner