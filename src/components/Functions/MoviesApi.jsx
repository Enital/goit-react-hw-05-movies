import axios from 'axios'

const KEY = '35660997-4fd052661528ba3040eb8e5ad';
const BASEURL = `https://api.themoviedb.org/3`;

export async function trendingMovies() {
    const { data } = await axios.get(`${BASEURL}/trending/movie/day?api_key=${KEY}`);
    console.log(data)
    return data;
}

export async function movieReviews(movie_id) {
    try {
        const res = await axios.get(
            `${BASEURL}/movie/${movie_id}/reviews?api_key=${KEY}`
        );
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export async function cast(movie_id) {
    try {
        const res = await axios.get(
            `${BASEURL}/movie/${movie_id}/credits?api_key=${KEY}`
        );
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export async function moviesSearch(query) {
    try {
        const res = await axios.get(
            `${BASEURL}/search/movie?query=${query}&api_key=${KEY}`
        );
        return res.data;
    } catch (error) {
        console.log(error);
    }
};


// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.