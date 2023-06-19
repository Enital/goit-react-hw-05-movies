import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { api } from "./Functions/Api";
import Home from "Pages/Home";
import Movies from "Pages/Movies";
import { Layout } from "./Layout/Layout";
import MoviesSearch from "./MoviesSearch/MoviesSearch";
import Casts from "./Casts/Casts";
import Reviews from "./Reviews/Reviews";

export const App = () => {
  // const [films, setFilms] = useState({})

  // useEffect(() => {
  //   const getAPI = async () => {
  //     try {
  //       const data = await api();
  //       // console.log(data)
  //       setFilms(data);
  //       console.log(films);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       return;
  //     }
  //   }


  //   getAPI();
  // },[])
  
  
  // const {results}= films
  return (
    <div>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/:movieId" element={<Movies /> } /> */}
          <Route path="/movies" element={<MoviesSearch />} />
          <Route path="/:movieId" element={<Movies />} />
          <Route>
            <Route path="cast" element={<Casts />} />
            <Route path="reviews" element={<Reviews/> } />
          </Route>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
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