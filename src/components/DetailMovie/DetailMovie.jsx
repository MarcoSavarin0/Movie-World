/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import {Loader} from '../Loader/Loader'
import { useLocation } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { Link } from "react-router-dom";

export const DetailMovie = () => {

    const URL_BASE = 'https://api.themoviedb.org/3/movie/'
    const KEY_API = '?api_key=e619d56b3eb9b24b42875f6a55c55241'
    const location = useLocation();
    const id = location.pathname.split('/')[1];
    const [movie, setMovie] = useState({})
    const { data, isLoading, errors } = useFetch(`${URL_BASE}${id}${KEY_API}`)

    const [rating, setRating] = useState(0);
    useEffect(() => {
        if (!isLoading && !errors && data) {
            setMovie(data)
            setRating(data.vote_average);
        }
    }, [data, isLoading, errors, id])

    const renderStars = rating => {
        const totalStars = 5;
        const filledStars = Math.round(rating / 2);

        const stars = [];
        for (let i = 1; i <= totalStars; i++) {
            stars.push(
                <span key={i} className={`star ${i <= filledStars ? 'filled' : ''}`}>
                    ★
                </span>
            );
        }
        return stars;
    };


    return (
        <>

            
            <div className="movie-detail-container"
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`
                }}
            >
                 <Link to="/" className="back-to-home-link"><i className="fa-solid fa-angles-left"></i></Link>
                {
                    isLoading ? <Loader/> :


                        <div className="movie-detail">
                            <img
                                src={  movie.poster_path   ?`https://image.tmdb.org/t/p/w500/${movie.poster_path}` : '/default.jpg'}
                                alt={movie.title}
                                className="movie-poster"
                            />

                            <div className="movie-info">
                                <h2 className="movie-title">{movie.title}</h2>
                                <p className="movie-release-date">Release Date: {movie.release_date}</p>
                                <div className="movie-rating">
                                    {renderStars(rating)}
                                </div>
                                <p className="movie-overview">{movie.overview}</p>
                            </div>
                        </div>
                }
            </div>
        </>
    )
}
