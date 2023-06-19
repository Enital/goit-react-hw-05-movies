import { Link } from "react-router-dom";

const Home = () => {
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
}

export default Home;