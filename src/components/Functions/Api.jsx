import axios from 'axios'

export async function api() {
    // const KEY = '35660997-4fd052661528ba3040eb8e5ad';
    // const BASEURL = `https://pixabay.com/api/?key=${KEY}&q=`;

    // const { data } = await axios.get('https://api.themoviedb.org/3/movie/157336?api_key=a28ecb15bd38758c4acd961d44b689ea/trending/get-trending');
    const { data } = await axios.get('https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=a28ecb15bd38758c4acd961d44b689ea');
    return data;
}




// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.