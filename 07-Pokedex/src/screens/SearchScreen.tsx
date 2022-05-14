import React, { useContext, useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList, useWindowDimensions, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SearchInput } from '../components/SearchInput';
import { appStyles } from '../theme/appTheme';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { ThemeContext } from '../contexts/Theme/ThemeContext';
import { PokemonCard } from '../components/PokemonCard';
import { SimplePokemon } from '../interfaces/IPokemon';

export const SearchScreen = () => {

    const {top} = useSafeAreaInsets()
    const {loading,pokemonList} = usePokemonSearch()
    const {theme} = useContext(ThemeContext)
    const {width} = useWindowDimensions()
    const [searchText,setSearchText] = useState('')
    const [pokemonListFiltered,setPokemonListFiltered] = useState<SimplePokemon[]>([])

    useEffect(() => {

        if (searchText.length === 0) {
            setPokemonListFiltered([])
        } 
        else if(isNaN(Number(searchText))){
            setPokemonListFiltered(pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(searchText.toLowerCase())))
        }
        else {
            const pokemonById = pokemonList.find(pokemon => pokemon.id === searchText)
            setPokemonListFiltered(pokemonById ? [pokemonById] : [])
        }
    },[searchText])


    if(loading){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator size='large' color={theme.colors.primary}/>
                <Text style={{color:theme.colors.primary}}>Cargando ...</Text>
            </View>
        )
    }

    return (
        <View style={{flex:1,...appStyles.globalMargin}}>

            <SearchInput 
                onDebounce={(text) => setSearchText(text)}
                style={{
                position:'absolute',
                zIndex:1,
                width:width-40,
                top:(Platform.OS === 'ios') ? top : top+20,
                }} 
            />

            <FlatList
                data={pokemonListFiltered}
                keyExtractor={(pokemon) => pokemon.id}
                renderItem={({ item }) => <PokemonCard pokemon={item} />}

                showsVerticalScrollIndicator={false}
                numColumns={2}

                ListHeaderComponent={<Text style={{
                    ...appStyles.title,
                    ...appStyles.globalMargin,
                    color:theme.colors.text,
                    marginTop:top+75,
                }}></Text>}
            />
            
        </View>
    )
};
