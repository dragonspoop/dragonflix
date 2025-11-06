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
  const [recentSearchs, setRecentSearches] = useState<string[]>([])
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
      q!=''?recentSearchs.push(q):
      setRecentSearches(recentSearchs)
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
      <Trending />
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={searchMovies}
        recentSearchs={recentSearchs}
      />

      {searchResults && searchResults.length > 0 && (
        <div>
          <div className="m-5 mt-2 mb-2 text-3xl pl-7 p-1 rounded-md border">Search results</div>
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
      <div className=" m-5 mt-2 mb-2 text-3xl pl-7 p-1 rounded-md border">Movies</div>
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
