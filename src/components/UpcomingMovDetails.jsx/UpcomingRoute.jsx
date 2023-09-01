/* eslint-disable no-unused-vars */
import { useFetch } from "../../hooks/useFetch"
import React, { useState, useEffect } from "react";
import { CardMovie } from "../Card/CardMovie";
import { ButtonPage } from "../Button/ButtonPage";
import { Link } from "react-router-dom";
import {Loader} from '../Loader/Loader'
export const UpcomingRoute = () => {

    const URL_BASE = 'https://api.themoviedb.org/3/movie/upcoming?api_key=';
    const API_KEY = 'e619d56b3eb9b24b42875f6a55c55241';
    const [page, setPage] = useState(1)
    const { data, isLoading, errors } = useFetch(`${URL_BASE}${API_KEY}&page=${page}`);
    const [movies, setMovies] = useState([])
    const handlePageAdd = (valor) => {
        setPage(page + 1)

    }
    const handlePageRed = (valor) => {
        if (0 > page) return
        setPage(page - valor)

    }


    useEffect(() => {
        if (!isLoading && !errors && data) {
            setMovies(data.results)
            console.log(data.results);
        }
    }, [data, isLoading, errors, page])

    return (
        <>
             <Link to="/" className="back-to-home-link"><i className="fa-solid fa-angles-left"></i></Link>


            {isLoading ? (<Loader/> ) :
                (
                    <>
                        <CardMovie
                            pelicula={movies}
                            isLoading={isLoading}
                        />
                        <ButtonPage
                            page={page}
                            handlePageRed={handlePageRed}
                            handlePageAdd={handlePageAdd}
                            totalPages={data?.total_pages}
                        />


                    </>
                )
            }



        </>
    )
}
