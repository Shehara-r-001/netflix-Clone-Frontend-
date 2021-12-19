import React, { useContext, useState, useEffect } from 'react'
import { useGlobalContext } from './context'
import './index.css'

const tmdb_img_path = 'https://image.tmdb.org/t/p/original/';

function Cover() {

    const [movie, setMovie] = useState([])
    const { requests } = useGlobalContext()

    const fetchMovie = async () => {
        const response = await fetch(requests.netflix_originals);
        const data = await response.json(1);
        // let random_movie = data.results[Math.floor(Math.random()*data.results.length-1)]
        // console.log(random_movie)
        setMovie(data.results[Math.floor(Math.random()*data.results.length-1)]);
    }

    useEffect(() => {
        fetchMovie()
    }, [])

    // console.log(movie)

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n-1) + '...' : str;
    }

    return (
        <header className='cover'
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: 'center center'
            }}>
            {/* {movie.map((item) => {
                const { backdrop_path, title} = item;
                return(
                    <img className='cover-img' src={`${tmdb_img_path}${backdrop_path}`} alt={title} />
                )
            })} */}
            <div className="cover-stuff">
                <h1 className='cover-title'>
                    {movie?.title || movie?.name || movie?.original_name}
                    {/* optional chaining */}
                </h1>
                <div className="cover-btn-div">
                    <button className="cover-btn">
                        Play
                    </button>
                    <button className="cover-btn">
                        My List
                    </button>
                </div>
                    <h1 className="cover-description">
                        {truncate(movie?.overview, 150)}
                    </h1>

            </div>
            <div className="cover-fade"/>
        </header>
    )
}

export default Cover
