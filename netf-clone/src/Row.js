import React, { useState, useEffect } from 'react'
import './index.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const tmdb_img_path = 'https://image.tmdb.org/t/p/original/';

function Row({title, url, isOriginal}) {

    const [movies, setMovies ] = useState(null);
    const [trailerUrl, setTrailerUrl] = useState("");

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

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    }

    const handleClick = (poster) => {
        if (trailerUrl){
            setTrailerUrl("");
        }
        else{
            movieTrailer(poster?.title || "")
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
            }).catch((error) => console.log(error));
        }
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
                            onClick={() => handleClick(poster)}
                            className={`row-img ${isOriginal && 'row-img-large'}`} 
                            src={`${tmdb_img_path}${isOriginal ? poster_path : backdrop_path}`} 
                            alt={title} />
                    )
                })}
            </div>
            { trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
            
        </div>
    )
}

export default Row
