import React, { useContext, useEffect } from 'react'
import { ScrollView,Image, Text,FlatList, ActivityIndicator, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { appStyles } from '../theme/appTheme'
import { ThemeContext } from '../contexts/Theme/ThemeContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonCard } from '../components/PokemonCard';

export const HomeScreen = () => {

    const {theme} = useContext(ThemeContext)
    const {top} = useSafeAreaInsets()
    const {pokemonList,loading,loadPokemons}= usePokemon()


    return (
        <>
            <Image
                source={require('../assets/pokebola.png')}
                style={appStyles.pokebolaBackground}
            />
            
            <View style={{
                ...appStyles.globalMargin,
                alignItems: 'center',
            }}>

            <FlatList
                data={pokemonList}
                keyExtractor={(pokemon) => pokemon.id}
                renderItem={({ item }) => <PokemonCard pokemon={item} />}

                showsVerticalScrollIndicator={false}
                numColumns={2}

                onEndReached={loadPokemons}
                onEndReachedThreshold={0.2}

                ListFooterComponent={loading?<ActivityIndicator size="large" color={theme.colors.primary} />:null}
                ListHeaderComponent={<Text style={{
                    ...appStyles.title,
                    ...appStyles.globalMargin,
                    color:theme.colors.text,
                    top : top+20,
                    marginBottom:30
                }}>Pokedex</Text>}
            />

            </View>
        
        </>
    )
}
