/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from "react-router-dom";
import { Loader } from '../Loader/Loader';
export const CardMovie = ({ pelicula, isLoading }) => {
  return (
    <div className="movie-list">
      {
        isLoading ? <Loader /> :

          pelicula.map((peli) => (
            <Link key={peli.id} to={`/${peli.id}`}>
              <div className="movie-card">
                <img src={peli.poster_path ? `https://image.tmdb.org/t/p/w500/${peli.poster_path}` : '/default.jpg'} alt={peli.title} />
                <h2>{peli.title}</h2>
              </div>
            </Link>
          ))}
    </div>
  );
}
