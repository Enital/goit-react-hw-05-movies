import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../components/Functions/MoviesApi';
import Loader from 'components/Loader/Loader';

import css from './cast.module.css'

export default function Cast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function getCast() {
            try {
                const data = await fetchMovieCast(movieId);
                setCast(data);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }

        getCast()
    }, [movieId]);

    return (
        <>
            <ul className={css.castList}>
                {cast.map(({ id, name, profile_path, character }) => {
                    return (
                        <li key={id} className={css.castItem}>
                            <img
                                width="100px"
                                height="150px"
                                src={`https://image.tmdb.org/t/p/original/${profile_path}`}
                                alt={name}
                            />
                            <span className={css.actorName}>{name}</span>
                            <p>{character}</p>
                        </li>
                    );
                })}
            </ul>
            {isLoading && <Loader />}
        </>
    );
}