import React, { useContext } from 'react'
import { Text, View, ScrollView, StyleSheet, FlatList } from 'react-native';
import { PokemonFull } from '../interfaces/IPokemon';
import { appStyles } from '../theme/appTheme';
import { ThemeContext } from '../contexts/Theme/ThemeContext';
import { FadeInImage } from './FadeInImage';

interface Props {
    pokemon:PokemonFull
}

export const PokemonDetails = (props:Props) => {

    const {pokemon} = props
    const {theme} = useContext(ThemeContext)

    return (
        <ScrollView
            style={{
                ...StyleSheet.absoluteFillObject,
            }}
        >
            {/**Tipos */}
            <View style={{...styles.container,marginTop:375}}>
                <Text style={{...appStyles.title,color:theme.colors.text}}> Types </Text>
                <View style={{flexDirection:'row'}}>
                    {pokemon.types.map((type,index)=>{
                        return <Text key={index} style={{...appStyles.largeText,color:theme.colors.text}}>{type.type.name}
                        {index!==pokemon.types.length-1?', ':''}</Text>
                    })}
                </View>
            </View>

            {/**Peso */}
            <View style={styles.container}>
                <Text style={{...appStyles.title,color:theme.colors.text}}> Weight </Text>
                <Text style={{...appStyles.largeText,color:theme.colors.text}}> {pokemon.weight} kg </Text>
            </View>

            {/**Sprites */}
            <View style={styles.container}>
                <Text style={{...appStyles.title,color:theme.colors.text}}> Sprites </Text>
            </View>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <FadeInImage
                    uri={pokemon.sprites.front_default}
                    style={{...styles.spriteImg}}
                />
                <FadeInImage
                    uri={pokemon.sprites.back_default}
                    style={{...styles.spriteImg}}
                />
                <FadeInImage
                    uri={pokemon.sprites.front_shiny}
                    style={{...styles.spriteImg}}
                />
                <FadeInImage
                    uri={pokemon.sprites.back_shiny}
                    style={{...styles.spriteImg}}
                />
            </ScrollView>

            {/**Habilidades */}
            <View style={styles.container}>
                <Text style={{...appStyles.title,color:theme.colors.text}}> Habilidades </Text>
                <View style={{flexDirection:'row'}}>
                    {pokemon.abilities.map(({ability},index)=>{
                        return <Text key={ability.name} style={{...appStyles.largeText,color:theme.colors.text}}>{ability.name}
                        {index!==pokemon.types.length-1?', ':''}</Text>
                    })}
                </View>
            </View>

            {/**Movimientos */}
            <View style={styles.container}>
                <Text style={{...appStyles.title,color:theme.colors.text}}> Movimientos </Text>
                <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                    {pokemon.moves.map(({move},index)=>{
                        return <Text key={move.name} style={{...appStyles.largeText,color:theme.colors.text}}>{move.name}
                        {index!==pokemon.types.length-1?', ':''}</Text>
                    })}
                </View>
            </View>

            {/**Stats */}
            <View style={styles.container}>
                <Text style={{...appStyles.title,color:theme.colors.text}}> Stats </Text>
                <View>
                    {pokemon.stats.map((stat)=>{
                        return <View key={stat.stat.name} style={{flexDirection:'row'}}>
                            <Text style={{...appStyles.largeText,color:theme.colors.text,width:250}}>{stat.stat.name}</Text>
                            <Text style={{...appStyles.subtitle,color:theme.colors.text}}>{stat.base_stat}</Text>
                        </View>
                    })}
                </View>
            </View>
            
            <View style={{
                marginBottom:80,
                alignItems:'center',
            }}>
                <FadeInImage
                    uri={pokemon.sprites.front_default}
                    style={{...styles.spriteImg}}
                />
            </View>
                
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    spriteImg:{
        width:150,
        height:150,
    }

})