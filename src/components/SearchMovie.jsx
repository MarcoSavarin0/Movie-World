/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { CardMovie } from "./Card/CardMovie";
import { ButtonPage } from "./Button/ButtonPage";
import {Loader} from './Loader/Loader'

export const SearchMovie = () => {
    const URL_BASE = "https://api.themoviedb.org/3/search/movie";
    const API_KEY = "e619d56b3eb9b24b42875f6a55c55241";
    const [busqueda, setBusqueda] = useState("");
    const [pelicula, setPelicula] = useState([]);
    const [validateFetch, setValidateFetch] = useState(false)
    const [page, setPage] = useState(1)

    const handleInput = (e) => {
        setBusqueda(e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
    };
    const { data, isLoading, errors } = useFetch(validateFetch ? `${URL_BASE}?query=${busqueda}&api_key=${API_KEY}&page=${page}` : null)

    useEffect(() => {
        if (!isLoading && !errors && data) {
            setPelicula(data.results);
            setValidateFetch(false);
        }
    }, [data, isLoading, errors, page]);

    const usarFecth = () => {
        setValidateFetch(true)
        setPage(1)
    }

    const handlePageAdd = (valor) => {
        setPage(page + 1)
        setValidateFetch(true)
    }
    const handlePageRed = (valor) => {
        if (0 > page) return
        setPage(page - valor)
        setValidateFetch(true)
    }


    return (
        <div className="container">
            <h1>Search Movie</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={handleInput}
                    placeholder="Search your favorite movie..."
                />
                <button
                    type="submit"
                    className="search-button"
                    onClick={usarFecth}
                    value={busqueda}
                >Search</button>
            </form>
            <CardMovie pelicula={pelicula} />
                <ButtonPage
                    page={page}
                    handlePageRed={handlePageRed}
                    handlePageAdd={handlePageAdd}
                    totalPages={data?.total_pages}
                />
        </div>
    );
};
