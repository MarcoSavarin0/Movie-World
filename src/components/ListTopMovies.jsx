/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { Carrousel } from "./Carrousel/Carrousel";
import {Loader} from './Loader/Loader'
export const ListTopMovies = () => {
    const URL_BASE = 'https://api.themoviedb.org/3/movie/now_playing?api_key=';
    const API_KEY = 'e619d56b3eb9b24b42875f6a55c55241';
    const { data, isLoading, errors } = useFetch(`${URL_BASE}${API_KEY}`);
    const moviesPerPage = 4;
    const pages = Math.ceil(data?.results.length / moviesPerPage);
    const movieGroups = Array.from({ length: pages }, (_, pageIndex) =>
        data.results.slice(pageIndex * moviesPerPage, (pageIndex + 1) * moviesPerPage)
    );

    return (
        <>
            <div className="carousel-container">
                <h1 className="text-center">Popular Movies</h1>
                {isLoading ? (
                   <Loader/> 
                ) : errors ? (
                    <p>OH NO UN ERROR: {errors.message}</p>
                ) : (
                    <div id="movieCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {movieGroups.map((movies, pageIndex) => (
                                <div
                                    key={pageIndex}
                                    className={`carousel-item ${pageIndex === 0 ? 'active' : ''}`}
                                >
                                    <div className="d-flex justify-content-center movie-card-container">
                                        {movies.map(movie => (
                                            <Link key={movie.id} to={`/${movie.id}`}>
                                                <div className="card movie-card">
                                                    <img
                                                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                                        alt={movie.title}
                                                        className="card-img-top"
                                                    />
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#movieCarousel"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#movieCarousel"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                )}
            </div>

        </>
    );

};