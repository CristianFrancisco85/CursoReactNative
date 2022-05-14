import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { useNavigation } from '@react-navigation/core';

interface MovieCardProps {
    movie: Movie
    height?: number
    width?: number
}

export const MovieCard = (props:MovieCardProps) => {

    const {movie,height=420,width=300} = props

    const {navigate} = useNavigation()

    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

    return (
        <TouchableOpacity 
        onPress={() => navigate('DetailScreen' as never,movie as never)}
        activeOpacity={0.8}
        style={{
            width,
            height,
            marginHorizontal:2,
            paddingBottom:20,
            paddingHorizontal:7,
        }}>
            <View style={styles.imgContainer}>
                <Image
                    source={{uri}}
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image:{
        flex: 1,
        borderRadius: 20,
    },
    imgContainer:{
        flex: 1,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,
        elevation: 10,
        borderRadius: 9,
    }

})
