import React, { useState, useEffect } from 'react'
import './index.css';

const tmdb_img_path = 'https://image.tmdb.org/t/p/original/';

function Row({title, url, isOriginal}) {

    const [movies, setMovies ] = useState(null);

    const fetchData = async () => {
        const response = await fetch(url);
        const movies = await response.json();
        // console.log(movies)
        setMovies(movies.results)
    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log(movies)

    if (movies == null){
        return(
            <h3>No data</h3>
        )
    }

    return (
        <div className='row'>
            <h2>{title}</h2>

            <div className='row-imgs'>
                {movies.map((poster) => {
                    const { poster_path, title, id, backdrop_path } = poster;
                    return(
                        <img 
                            key={id} 
                            className={`row-img ${isOriginal && 'row-img-large'}`} 
                            src={`${tmdb_img_path}${isOriginal ? poster_path : backdrop_path}`} 
                            alt={title} />
                    )
                })}
            </div>
        </div>
    )
}

export default Row
