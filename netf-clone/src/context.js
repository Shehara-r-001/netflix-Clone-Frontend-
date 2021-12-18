import React, { useState, useContext, useEffect } from 'react'
import App from './App'

const api_key = "38204d2f52e0568edb1fc495bef730e5"



const AppContext = React.createContext()

const AppProvider = ({children}) => {


    const requests = {
    trending: `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`,
    top_rated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`,
    action_movies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&include_video=false&with_genres=28`,
    comedy_movies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&include_video=false&with_genres=35`,
    romance_movies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&include_video=false&with_genres=10749`,
    documenteries: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&include_video=false&with_genres=99`,
    horror_movies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&include_video=false&with_genres=27`,
    netflix_originals: `https://api.themoviedb.org/3/discover/tv?with_networks=213&first_air_date.gte=2020-05-01&include_null_first_air_dates=true&api_key=${api_key}`
}

    // const fetchMovies = async () => {
    //     try {
    //         const response = await fetch(requests.trending);
    //         const trending = await response.json()
    //         // console.log(trending)
            
    //         console.log(trending)

            
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // useEffect(() => {
    //     fetchMovies()
    // }, [])

    return (
        <AppContext.Provider value={{requests}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}
