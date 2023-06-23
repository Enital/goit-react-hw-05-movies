import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../components/Functions/MoviesApi';

export default function Cast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        async function getCast() {
            try {
                const data = await fetchMovieCast(movieId);
                setCast(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
            finally {
                return;
            }
        }

        getCast()
    }, [movieId]);

    return (
        // cast && (
        <ul>
            {cast.length === 0 && <p>Sorry, we don't have any cast on this movie</p>}
            {cast.map(({ id, name, profile_path, character }) => {
                return (
                    <li key={id}>
                        <img
                            width="100px"
                            height="150px"
                            src={`https://image.tmdb.org/t/p/original/${profile_path}`}
                            alt={name}
                        />
                        <h3>{name}</h3>
                        <p>{character}</p>
                    </li>
                );
            })}
        </ul>
        // )
    );
}