import React from "react"
import { useState, useEffect } from "react"
import MovieCard from "./MovieCard"
import './App.css'
const OMDB_API = 'http://www.omdbapi.com/?apikey=9110497b&'

const App = () => {
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')

    const searchMovie = title => {
        fetch(`${OMDB_API}s=${title}`)
            .then(response => response.json())
            .then(data => setMovies(data.Search))
    }
    // useEffect(() => {
    //     searchMovie()
    // }, [])

    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input type="text" placeholder="Search here..." value={search} onChange={(e) => setSearch(e.target.value)}/>
                <button type="submit" className="search-btn" onClick={() => searchMovie(search)}>Search</button>
            </div>
            {
                movies.length > 0 ? 
                (
                    <div className="container">
                        {movies.map(movie => (
                            <MovieCard movie={movie}/>
                        ))}
                    </div>
                ) : 
                (
                    <div className="empty">
                        <h2>No Movies Found!</h2>
                    </div>
                )
            }
        </div>
    )
}

export default App