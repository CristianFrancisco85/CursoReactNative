import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/StackNavigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { appStyles } from '../theme/appTheme';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemonFull } from '../hooks/usePokemonFull';
import { PokemonDetails } from '../components/PokemonDetails';

interface Props extends StackScreenProps<RootStackParamList,'Pokemon'>{}

export const PokemonScreen = (props:Props) => {

    const {pokemon,color}= props.route.params
    const {navigation} = props
    const {top} = useSafeAreaInsets()

    const {pokemon:pokemonFull,loading}=usePokemonFull(pokemon.id) 
    console.log(pokemonFull.abilities)  

    return (
        <View style={{flex:1}}>

            <View style={{...styles.header,backgroundColor: color,}}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={()=>navigation.goBack()}
                    style={{...styles.backButton,top:top+10}}
                >
                    <Icon name='arrow-back-outline' color='white' size={50}/>
                </TouchableOpacity>

                <Text style={{...appStyles.title,...styles.pokemonTitle,top:top+25}}>
                    {pokemon.name+'\n'}#{pokemon.id}
                </Text>

                <Image
                    source={require('../assets/pokebola-blanca.png')}
                    style={{...styles.pokebolaImg}}
                />
                <FadeInImage
                    uri={pokemon.picture}
                    style={{...styles.pokemonImg}}
                />
            </View>
 
            {loading? 
                <View style={{...styles.loadingContainer}}>
                <ActivityIndicator size={100} color={color} />
                </View>
                :<PokemonDetails pokemon={pokemonFull}/>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height: 370,
        zIndex: 999,
        alignItems: 'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
    },
    backButton:{
        position: 'absolute',
        top: 20,
        left: 20,
    },
    pokemonTitle:{
        color: 'white',
        textAlign: 'center',
    },
    pokemonImg:{
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -15,
    },
    pokebolaImg:{
        width: 250,
        height: 250,
        bottom: -20,
        opacity: 0.75,
    },
    loadingContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

})
