import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { fetchMovieSearch } from '../../components/Functions/MoviesApi';
import MoviesList from 'components/MoviesList/MoviesList';
import { Notify } from 'notiflix';
import Loader from 'components/Loader/Loader';

import css from './movie.module.css'

function Movies() {
    const [urlParams, setUrlParams] = useSearchParams({});
    const query = urlParams.get('search');
    const [queryString, setQueryString] = useState(query ? query : '');
    const [moviesList, setMoviesList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();

    function onInputChange(e) {
        setQueryString(e.target.value);
    }

    async function onFormSubmit(e) {
        e.preventDefault();
        setUrlParams(queryString.trim() !== '' ? { search: queryString } : {});


        if (queryString.trim() === '') {
            Notify.warning('Please enter movie title to search');
            setMoviesList([]);
        }
    }

    useEffect(() => {
        async function getData() {
            try {
                if (!query) return;
                const data = await fetchMovieSearch(query);
                setMoviesList(data);

                if (data.length === 0) Notify.failure('Sorry, this movie not found');
            } finally {
                setIsLoading(false);
            }
        }
        getData();
    }, [query]);

    // console.log(urlParams(search))
    return (
        <>
            <form onSubmit={onFormSubmit} className={css.formMovie}>
                <input type='text' value={queryString} onChange={onInputChange} />
                <button type='submit'>
                    Search
                </button>
            </form>

            <MoviesList movies={moviesList} backPage={location} />
            {isLoading && <Loader />}
        </>
    );
}

export default Movies;