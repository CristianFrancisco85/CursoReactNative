import { useEffect, useState } from 'react';
import movieDb from "../api/movieDB"
import { Movie, MovieDBMoviesResponse } from '../interfaces/movieInterface';

interface MoviesState {
    nowPlaying: Movie[],
    popular: Movie[],
    upcoming: Movie[],
    topRated: Movie[],
}

export const useMovies = () => {

    const [moviesState,setMoviesState] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        upcoming: [],
        topRated: [],
    })

    const [isLoading, setIsLoading] = useState(true)

    const getMovies = async () => {

        const nowPlayingPromise =  movieDb.get<MovieDBMoviesResponse>('/now_playing')
        const popularPromise    =  movieDb.get<MovieDBMoviesResponse>('/popular')
        const topPromise        =  movieDb.get<MovieDBMoviesResponse>('/top_rated')
        const upcomingPromise   =  movieDb.get<MovieDBMoviesResponse>('/upcoming')

        const response = await Promise.all([nowPlayingPromise,popularPromise,topPromise,upcomingPromise])

        setMoviesState({
            nowPlaying: response[0].data.results,
            popular: response[1].data.results,
            topRated: response[2].data.results,
            upcoming: response[3].data.results,
        })

        setIsLoading(false)
    }

    useEffect (() => {
        getMovies()
    }, [])

    return {
        ...moviesState,
        isLoading
    }

}