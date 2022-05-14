import { useEffect, useRef, useState } from "react";
import { pokemonApi } from "../api/pokemonApi";
import { PokemonResponse, Result, SimplePokemon } from '../interfaces/IPokemon';


export const usePokemon = () => {

    const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40')
    const [pokemonList, setPokemonList] = useState<SimplePokemon[]>([]);
    const [loading, setLoading] = useState(true);

    const loadPokemons = async () => {
        setLoading(true);
        const resp = await pokemonApi.get<PokemonResponse>(nextPageUrl.current);
        nextPageUrl.current = resp.data.next;
        mapPokemonList(resp.data.results);
        setLoading(false);

    }

    const capitalize = (s:string) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    const mapPokemonList = (pokemonList: Result[]) => {
        const newPokemonList:SimplePokemon[] = pokemonList.map(pokemon => {

            const urlParts = pokemon.url.split('/');
            const id = urlParts[urlParts.length - 2];
            return {
                id,
                name: capitalize(pokemon.name),
                picture: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
            }
        })
        setPokemonList(oldPokemonList => [...oldPokemonList, ...newPokemonList]);
    }

    useEffect(() => {
        loadPokemons()
    }, [])

    return {
        pokemonList,
        loading,
        loadPokemons,
    }
     
}
