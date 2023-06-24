import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';

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