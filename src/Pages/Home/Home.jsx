import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { fetchTrendingMovies } from "components/Functions/MoviesApi";
import css from './home.module.css'
import Loader from "components/Loader/Loader";

const Home = () => {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const location = useLocation();
    // console.log(location)
    useEffect(() => {

        async function getMovies() {
            try {
                const data = await fetchTrendingMovies();
                setMovies(data);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }

        getMovies()

    }, []);

    return (
        <>
            <div className={css.section}>
                <h1 className={css.titleH}>Trending today</h1>
                <div>
                    <ul className={css.films}>
                        {movies.map(movie => {
                            return (
                                <li key={movie.id} className={css.filmsList}>
                                    <Link to={`movies/${movie.id}`} state={{ from: location }}>
                                        {/* <img className={css.imgHome}
                                            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                            alt={movie.title}
                                        /> */}
                                        <span className={css.movieTitle}> {movie.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            {isLoading && <Loader />}
        </>
    )
};

export default Home;