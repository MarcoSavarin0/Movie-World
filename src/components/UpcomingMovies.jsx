/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { Carrousel } from "./Carrousel/Carrousel";
import {Loader} from './Loader/Loader'
export const UpcomingMovies = () => {
    const URL_BASE = 'https://api.themoviedb.org/3/movie/upcoming?api_key=';
    const API_KEY = 'e619d56b3eb9b24b42875f6a55c55241';
    const { data, isLoading, errors } = useFetch(`${URL_BASE}${API_KEY}`);
    const moviesPerPage = 4;
    const pages = Math.ceil(data?.results.length / moviesPerPage);
    const movieGroups = Array.from({ length: pages }, (_, pageIndex) =>
        data.results.slice(pageIndex * moviesPerPage, (pageIndex + 1) * moviesPerPage)
    );

  return (
    <>
        {
            isLoading ? (<Loader/>) 
            :
            (<Carrousel title="Upcoming Movies" items={movieGroups} path='/upcoming' />)
        }
        

    
    </>
  )
}
