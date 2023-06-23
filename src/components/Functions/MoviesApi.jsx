// import axios from 'axios'

// const KEY = '35660997-4fd052661528ba3040eb8e5ad';
// const BASEURL = `https://api.themoviedb.org/3`;

// export async function trendingMovies() {
//     const { data } = await axios.get(`${BASEURL}/trending/movie/day?api_key=${KEY}`);
//     console.log(data)
//     return data;
// }

// export async function movieReviews(movie_id) {
//     try {
//         const res = await axios.get(
//             `${BASEURL}/movie/${movie_id}/reviews?api_key=${KEY}`
//         );
//         return res.data;
//     } catch (error) {
//         console.log(error);
//     }
// };

// export async function cast(movie_id) {
//     try {
//         const res = await axios.get(
//             `${BASEURL}/movie/${movie_id}/credits?api_key=${KEY}`
//         );
//         return res.data;
//     } catch (error) {
//         console.log(error);
//     }
// };

// export async function moviesSearch(query) {
//     try {
//         const res = await axios.get(
//             `${BASEURL}/search/movie?query=${query}&api_key=${KEY}`
//         );
//         return res.data;
//     } catch (error) {
//         console.log(error);
//     }
// };


// // /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// // /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// // /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// // /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// // /movies/get-movie-reviews запит оглядів для сторінки кінофільму.

import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';

export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmU0MGUwOWI3NDZlZTI2MWY4MmY5MTliZWI5MjgwOCIsInN1YiI6IjY0OGFjMDczMjYzNDYyMDBlYjc0NWJkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nrZ244O_eY9vRaeacdayZYNOixh-XOkGIuO3mgMPuaw',
  },
};

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}trending/movie/day?language=en-US`,
    options
    );
    // console.log(data.results)
  return data.results;
};

export const fetchMoviesId = async movieId => {
  const { data } = await axios.get(`${BASE_URL}movie/${movieId}`, options);
  return data;
};

export const fetchMovieSearch = async queryName => {
  const { data } = await axios.get(
    `${BASE_URL}search/movie?query=${queryName}&page=1`,
    options
  );
  return data.results;
};

export const fetchMovieCast = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}movie/${movieId}/credits`,
    options
  );
  return data.cast;
};

export const fetchMovieReviews = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}movie/${movieId}/reviews`,
    options
  );
  return data.results;
};