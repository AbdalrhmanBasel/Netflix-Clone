import React from 'react';
import "./HomeScreen.css";
import Nav from "../Nav/Nav"
import Banner from "../Banner/Banner"
import Row from "../Rows/Row"
import requests from '../../requests';

function HomeScreen() {
  return (
    <div className="homeScreen">
        <Nav />
        <Banner/>

        <Row 
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />

        <Row title="Trending Row" fetchUrl={requests.fetchTrending}/>
        {/* <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/> */}
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
        {/* <Row title="Comedy Movies" fetchUrl={requests.fetchComedyfetchTopRated}/> */}
        <Row title="Horror Movies" fetchUrl={requests.fetchRomanceMovies}/>
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>   
    
    
    </div>
  )
}

export default HomeScreen