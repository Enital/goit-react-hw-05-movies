import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchMoviesId } from '../../components/Functions/MoviesApi';

import css from './movieDetails.module.css';

function MovieDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState('');
    const [isLoading, setIsLoading] = useState(true);

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

    // const location = useLocation();
    // const backLinkHref = location.state?.from ?? '/';

    return (
        movie && (
            <>
                <div className={css.sectionDetails} >
                    {/* <GoBackLink to={backLinkHref}>&larr; Go back</GoBackLink> */}
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
                    <ul>
                        <li className={css.addInfo}>
                            <Link to="cast">
                                <span>Cast</span>
                            </Link>
                        </li>
                        <li className={css.addInfo}>
                            <Link to="reviews">
                                <span>Reviews</span>
                            </Link>
                        </li>
                    </ul>
                    {/* <Suspense fallback={<div>Loading page...</div>}> */}
                    {/* <Outlet /> */}
                    {/* </Suspense> */}
                </div>
                {isLoading && <Loader />}
            </>
        )
    );
}

export default MovieDetails;