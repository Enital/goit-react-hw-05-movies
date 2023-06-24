import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'components/Functions/MoviesApi';
import Loader from 'components/Loader/Loader';

export default function Reviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState('');
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function getData() {
            try {
                const data = await fetchMovieReviews(movieId);
                setReviews(data);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }

        getData();
    }, [movieId]);

    return (
        <>
            {reviews.length > 0 ? (
                <ul>
                    {reviews.map(review => {
                        return (
                            <li key={review.id}>
                                <h3>{review.author}</h3>
                                <p>{review.content}</p>
                            </li>
                        );
                    })}
                </ul>
            ) : (<p>We don't have any reviews for this movie</p>)}
            
            {isLoading && <Loader />}
        </>
    )
};