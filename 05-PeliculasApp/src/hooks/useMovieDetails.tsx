import { useEffect,useState } from 'react'
import movieDb from '../api/movieDB';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast, CreditsResponse } from '../interfaces/creditsInterface';

interface  MovieDetails {
    isLoading: boolean
    movieFull?: MovieFull
    cast:Cast[]

}

export const useMovieDetails = (movieId:number) => {

    const [movieDetails,setMovieDetails] = useState<MovieDetails>({
        isLoading:true,
        movieFull:undefined,
        cast:[]
    })

    const getMovieDetails = async () => {
        const promiseMovieDetails = await movieDb.get<MovieFull>(`/${movieId}`)
        const promiseCastDetails = await movieDb.get<CreditsResponse>(`/${movieId}/credits`)

        const [respMovieDetails,respCastDetails] = await Promise.all([promiseMovieDetails,promiseCastDetails])

        setMovieDetails({
            isLoading:false,
            movieFull:respMovieDetails.data,
            cast:respCastDetails.data.cast
        })

    }

    useEffect(() => {
        getMovieDetails()
    },[])

    return{
        ...movieDetails
    }

    
}
