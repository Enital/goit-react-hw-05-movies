import { useState, useEffect } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import { api } from "./Functions/Api";
import Home from "Pages/Home";
import Movies from "Pages/Movies";

export const App = () => {
  const [films, setFilms] = useState({})

  useEffect(() => {
    const getAPI = async () => {
      try {
        const data = await api();
        // console.log(data)
        setFilms(data);
        console.log(films);
      } catch (error) {
        console.log(error);
      } finally {
        return;
      }
    }


    getAPI();
  },[])
  
  
  // const {results}= films
  return (
    <div>
      <nav>
        <Link to ="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
};



// https://api.themoviedb.org/3/movie/157336?api_key=a28ecb15bd38758c4acd961d44b689ea&append_to_response=videos

// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.