
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Trending from "./components/Trending";
import { useState, useEffect } from "react";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

const BASE_URL = "https://api.themoviedb.org/3";

const App = () => {
  const [recentSearchs, setRecentSearches] = useState<string[]>([]);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const API_KEY = import.meta.env.VITE_TMDB_API;
  const API_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };
  const fetchMovies = async () => {
    try {
      const endpoint = `${BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const res = await fetch(endpoint, API_OPTIONS);
      const data = await res.json();
      console.log("Response:", res);
      console.log("Data:", data);
      setMovies(data.results);
      console.log("Movies state:", movies);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
  const searchMovies = async () => {
    try {
      const q = searchTerm.trim();
      q != "" ? recentSearchs.push(q) : setRecentSearches(recentSearchs);
      if (!q) {
        // clear previous search results if query is empty
        setSearchResults([]);
        return;
      }
      const endpoint = `${BASE_URL}/search/movie?query=${encodeURIComponent(
        q
      )}`;
      const res = await fetch(endpoint, API_OPTIONS);
      const data = await res.json();
      console.log("Search Response:", res);
      console.log("Search Data:", data);
      setSearchResults(data.results || []);
    } catch (error) {
      console.error("Error searching movies:", error);
      setSearchResults([]);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <section className="container mx-auto px-4 py-8">
    
    {/* Refined Heading */}
    <div className="flex items-center space-x-3 mb-6">
        <h2 className="text-2xl font-extrabold text-gray-100 border-l-4 border-red-600 pl-4">
            Trending Movies
        </h2>
        {/* Optional: Add a simple icon for flair */}
        <span className="text-red-600 text-3xl">🔥</span>
    </div>

    {/* Movie Grid Container */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        
        {/* Map through your movies here */}
        {movies.length > 0 && [...Array(6)].map((_, i) => {
            const randomIndex = Math.floor(Math.random() * movies.length);
            const movie = movies[randomIndex];
            return (
                <Trending
                    key={`${movie.id}-${i}`}
                    title={movie.title}
                    posterPath={movie.poster_path}
                    // You might want to pass more data like rating or genre
                />
            );
        })}
        
    </div>
</section>
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={searchMovies}
        recentSearchs={recentSearchs}
      />

      {searchResults && searchResults.length > 0 && (
        <div>
          <div className="flex items-center space-x-3 mb-6">
        <h2 className="text-2xl font-extrabold text-gray-100 border-l-4 border-red-600 pl-4">
            Search Results
        </h2>
        {/* Optional: Add a simple icon for flair */}
        <span className="text-red-600 text-3xl">🔥</span>
    </div>
          <div className="justify-center w-full flex flex-wrap gap-4 p-4">
            {searchResults.map((movie) => (
              <Card
                key={movie.id}
                title={movie.title}
                posterPath={movie.poster_path}
                releaseDate={movie.release_date}
                voteAverage={movie.vote_average}
              />
            ))}
          </div>
        </div>
      )}
      <div className="flex items-center space-x-3 mb-6">
        <h2 className="text-2xl font-extrabold text-gray-100 border-l-4 border-red-600 pl-4">
            Movies
        </h2>
        {/* Optional: Add a simple icon for flair */}
        <span className="text-red-600 text-3xl">🔥</span>
    </div>
      <div className="justify-center w-full flex flex-wrap gap-4">
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <Card
              key={movie.id}
              title={movie.title}
              posterPath={movie.poster_path}
              releaseDate={movie.release_date}
              voteAverage={movie.vote_average}
            />
          ))
        ) : (
          <p>Loading movies...</p>
        )}
      </div>
    </>
  );
};

export default App;
