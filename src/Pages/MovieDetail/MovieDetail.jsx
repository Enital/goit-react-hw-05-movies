import Loader from 'components/Loader/Loader';
import { Suspense, useEffect, useState, useRef } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMoviesId } from '../../components/Functions/MoviesApi';

import css from './movieDetails.module.css';

function MovieDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    
    const location = useLocation();
    const goBackRef=useRef(location.state?.from ?? '/')
    
    useEffect(() => {

        async function getMovies() {
            try {
                const data = await fetchMoviesId(movieId);
                setMovie(data);               
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }

        getMovies()
        
    }, [movieId]);

    return (
        movie && (
            <>
                <div className={css.sectionDetails} >
                    <Link className={css.goBack} to={goBackRef.current}>Go back</Link>
                    <div className={css.movieDetail}>
                        <img
                            width="200px"
                            height="300px"
                            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <div className={css.movieInfo}>
                            <h2 className={css.title}>{movie.title}</h2>
                            <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
                            <h3>Overview</h3>
                            <p>{movie.overview}</p>
                            <h3>Genres</h3>
                            <div className={css.genres}>
                                {movie.genres.map(genre => {
                                    return <p key={genre.id}>{genre.name}</p>;
                                })}
                            </div>
                        </div>
                    </div>
                    <h4>Additional information</h4>
                    <ul className={css.list}>
                        <li className={css.addInfo}>
                            <Link to="cast" className={css.addInfoSub}>
                                <span className={css.addLink}>Cast</span>
                            </Link>
                        </li>
                        <li className={css.addInfo}>
                            <Link to="reviews" className={css.addInfoSub}>
                                <span className={css.addLink}>Reviews</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
                {isLoading && <Loader />}
            </>
        )
    );
}

export default MovieDetails;