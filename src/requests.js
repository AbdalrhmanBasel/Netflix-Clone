const API_KEY = "bc8b048089dbd555dc5e1249c0d6ad6b";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}`, 
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    // fetchTopRated: `/discover/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`, 
    // fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`, 
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`, 
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests