/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from "react-router-dom";

export const Carrousel = ({ title, items,path }) => {
    return (
        <div className="carousel-container content-container">
         <Link to={path}><h1 className="text-center">{title}</h1></Link>
            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {items.map((group, groupIndex) => (
                        <div
                            key={groupIndex}
                            className={`carousel-item ${groupIndex === 0 ? 'active' : ''}`}
                        >
                            <div className="d-flex justify-content-center movie-card-container">
                                {group.map(item => (
                                    <Link key={item.id} to={`/${item.id}`}>
                                        <div className="card movie-card">
                                            <img
                                                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                                                alt={item.title || item.name}
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
                    data-bs-target="#carousel"
                    data-bs-slide="prev"
                    
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carousel"
                    data-bs-slide="next"
                   
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );

}
