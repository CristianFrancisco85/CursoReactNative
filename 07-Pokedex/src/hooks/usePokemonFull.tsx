import { useEffect, useState } from "react"
import { pokemonApi } from "../api/pokemonApi";
import { PokemonFull } from '../interfaces/IPokemon';


export const usePokemonFull = (id:string) => {

    const [loading,setLoading]=useState(true)
    const [pokemon,setPokemon]=useState<PokemonFull>({} as PokemonFull)

    const loadPokemon = async () => {
        setLoading(true)
        const resp = await pokemonApi.get<PokemonFull>(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon(resp.data);
        setLoading(false)
    }

    useEffect(() => {
        loadPokemon()
    }, [])


    return {
        pokemon,
        loading,
    }
}