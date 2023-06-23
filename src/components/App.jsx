import { Routes, Route } from "react-router-dom";
import Home from "Pages/Home/Home";
import Movies from "Pages/Movies/Movies";
import Layout from "./Layout/Layout";
import MoviesSearch from "./MoviesSearch/MoviesSearch";
import Casts from "./Casts/Casts";
import Reviews from "./Reviews/Reviews";

export const App = () => {

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<MoviesSearch />} />
          <Route path="movieId" element={<Movies />} >
            <Route path="cast" element={<Casts />} />
            <Route path="reviews" element={<Reviews/> } />
          </Route>
          <Route path="*" element={<div>404</div>} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
  );
};