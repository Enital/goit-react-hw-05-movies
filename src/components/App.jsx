// import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "Pages/Home/Home";
import Movies from "Pages/Movies/Movies";
import Layout from "./Layout/Layout";
import MoviesSearch from "./MoviesSearch/MoviesSearch";
import Casts from "./Casts/Casts";
import Reviews from "./Reviews/Reviews";
// import { trendingMovies } from "./Functions/MoviesApi";



export const App = () => {
  // const [films, setFilms] = useState({})

  // useEffect(() => {
  //   const getAPI = async () => {
  //     try {
  //       const data = await trendingMovies();
  //       console.log(data)
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
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<MoviesSearch />} />
          <Route path="movies/:movieId" element={<Movies />} >
            <Route path="cast" element={<Casts />} />
            <Route path="reviews" element={<Reviews/> } />
          </Route>
          <Route path="*" element={<div>404</div>} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
  );
};

// Для сторінок створена папкa pages на рівні з components Під час сабміту форми обов’язково записувати слово для пошуку в параметри рядка запиту, сама форма повинна бути в окремому компоненті.
// const handleSubmit= value => {
// setSearchParams({ query: value });
// };
// На сторінках Movies, Cast, Reviews в масиві залежностей повинен бути id фільма який ми отримали з рядка запиту
// const { movieId } = useParams();
// useEffect(() => {
// if (!movieId) return;
// }, [movieId]);
// Коли додаємо функціонал кнопки повернення назад, перевіряти, що точно є значення from в location.state
// const location = useLocation();
// const backLink = location.state?.from ?? '/';
// Якщо з бека не прийшли фото акторів або постер, поставити дефолтну каритнку
// const defaultImg = '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>'

// <img src={
//  movieData.poster_path ?
//  [<https://image.tmdb.org/t/p/w500/${movieData.poster_path}>](<https://image.tmdb.org/t/p/w500/$%7BmovieData.poster_path%7D>)
//  : defaultImg
// }
// width={250}
// alt="poster"
// />
// Створення списку фільмів на сторінках Home, Movies виносимо в окремий компонент MoviesList.
// Домашня робота об'ємна, багатогранна і цікава. Обов'язково дивимося демо-відео і реалізуємо покроково. Всім гарного і продуктивного тижня)) (отредактировано) 



// // https://api.themoviedb.org/3/movie/157336?api_key=a28ecb15bd38758c4acd961d44b689ea&append_to_response=videos

// // /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// // /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// // /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// // /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// // /movies/get-movie-reviews запит оглядів для сторінки кінофільму.