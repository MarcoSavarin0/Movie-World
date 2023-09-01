/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";


export const Header = () => {
    const URL_BASE = 'https://api.themoviedb.org/3/trending/all/week?api_key=';
    const API_KEY = 'e619d56b3eb9b24b42875f6a55c55241';
    const { data, isLoading, errors } = useFetch(`${URL_BASE}${API_KEY}`);
    const [movies, setMovies] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!isLoading && !errors && data) {
            setMovies(data.results);
        }
    }, [data, isLoading, errors]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % movies.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [movies.length]);

    return (
        <header>
            {movies.length > 0 && (
                <div
                    className="header-background"
                    style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movies[currentIndex].backdrop_path})` }}
                >
                  <h3 className="header-text">Movie World</h3>
                </div>
            )}
        </header>
    );
}
