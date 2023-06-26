import { Link } from 'react-router-dom';

const MoviesList = ({ movies, backPage }) => {

    return (
        <>
            {movies.length !== 0 && (
                <ul>
                    {movies.map(({ id, title }) => {
                        return (
                            <li key={id}>
                                <span >
                                </span>
                                <Link to={`/movies/${id}`} state={{from: backPage}}>
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