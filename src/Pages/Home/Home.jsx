import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchTrendingMovies } from "components/Functions/MoviesApi";
// import MoviesList from "components/MoviesList/MoviesList";
import css from './home.module.css'
import Loader from "components/Loader/Loader";

const Home = () => {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        async function getMovies() {
            try {
                const data = await fetchTrendingMovies();
                setMovies(data);
                console.log(data);
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
            <h1>Trending today</h1>
            <div>
                <ul className={css.films}>
                    {movies.map(movie => {
                        return (
                            <li key={movie.id} className={css.filmsList}>
                                <Link to={`movies/${movie.id}`}>
                                    <span> {movie.title}</span>
                                </Link>
                            </li>
                            // <MoviesList key={movie.id} movies={movies} id={movie.id } title={movie.title} />
                        )
                    })}
                </ul>
            </div>
            </div>
            {isLoading&&<Loader />}
        </>
    )
};

export default Home;