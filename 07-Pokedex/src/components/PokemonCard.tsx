import React, { useEffect, useRef, useState } from 'react'
import { Text, TouchableOpacity, View, StyleSheet, useWindowDimensions, Image } from 'react-native';
import { SimplePokemon } from '../interfaces/IPokemon';
import { FadeInImage } from './FadeInImage';
import { appStyles } from '../theme/appTheme';
import { getImageColors } from '../helpers/getColors';
import { useNavigation } from '@react-navigation/native';


interface Props {
    pokemon : SimplePokemon
}

export const PokemonCard = (props:Props) => {

    const {pokemon} = props

    const {width:windowsWidth}= useWindowDimensions()
    const [bgColor,setBgColor] = useState('grey')
    const isMounted = useRef(true)
    const {navigate} = useNavigation()

    const getColors = async () => {
        if(pokemon.picture){
            const {primary='grey'} = await getImageColors(pokemon.picture)
            if(isMounted.current){
                setBgColor(primary)
            }
        }
    }

    useEffect(()=>{

        getColors()

        return ()=>{
            isMounted.current = false
        }

    },[])

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={()=>navigate('Pokemon' as never,{pokemon,color:bgColor} as never)}
        >
        <View style={{...styles.cardContainer,width:windowsWidth*0.4,backgroundColor:bgColor}}>



            <View style={styles.pokebolaContainer}>
                <Image
                    source={require('../assets/pokebola-blanca.png')}
                    style={styles.pokebola}
                />
            </View>

            <FadeInImage
                uri={pokemon.picture}
                style={styles.pokemonImage}
            />

            <Text style = {{...appStyles.subtitle,...styles.name,color:'white'}}>
                {pokemon.name}
                {'\n#'+pokemon.id}
            </Text>

        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        height: 100,
        marginBottom: 20,
        borderRadius: 10,
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    }, 
    name:{
        paddingHorizontal:8,
        paddingVertical:5,
    },
    pokebola:{
        width: 110,
        height: 110,
        opacity: 0.5,
        bottom: -20,
        right: -20,
    },
    pokebolaContainer:{
        width: 110,
        height: 110,
        position: 'absolute',
        bottom: 0,
        right: 0,
        overflow: 'hidden',
    },
    pokemonImage:{
        width: 100,
        height: 100,
        position: 'absolute',
        right: -5,
        bottom: -5,
    }   
})
