import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchTrendingMovies } from "components/Functions/MoviesApi";

const Home = () => {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        

        async function getMovies() {
            try {
                setIsLoading(true);
                const data = await fetchTrendingMovies();
                setMovies(data);
                console.log(data);
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false);
            }
        }

        getMovies()
        
    }, []);


    return (
        <div>
            <h1>Trending today</h1>
            <div>
                {['m1', 'm2', ['m3'], ['m4'], ['m5']].map(movie => {
                    return (
                        <Link key={movie} to={`${movie}`}>
                            {movie}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
};

export default Home;