import { useLocation, Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
    const location = useLocation();

    return (
        <>
            {movies.length !== 0 && (
                <ul>
                    {movies.map(({ id, title }) => {
                        return (
                            <li key={id}>
                                <span >
                                </span>
                                <Link to={`/movies/${id}`} state={{ from: location }}>
                                    {title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            )}
        </>
    );
};

export default MoviesList;