import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, ActivityIndicator } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';

interface Props extends StackScreenProps<RootStackParams,'DetailScreen'>{}

const screenHeight = Dimensions.get('screen').height

export const DetailScreen = (props:Props) => {


    const {route} = props
    const movie = route.params
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

    const {isLoading,movieFull,cast} = useMovieDetails(movie.id)

    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <View style={styles.imageBorder}>
                    <Image
                        source={{uri}}
                        style={styles.posterImage}
                    />
                </View>
            </View>
            <View style={styles.marginContainer}>
                
                <Text style={styles.title}>{movie.original_title}</Text>
                <Text style={styles.subtitle}>{movie.title}</Text>
            </View>


            {   
                isLoading
                    ?<ActivityIndicator size={50} color="#000" style={{marginTop:20}}/>
                    :<MovieDetails movieFull={movieFull!} cast={cast}/>
            }

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: screenHeight * 0.7,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,
        elevation: 10,
        
    },
    imageBorder: {
        flex: 1,
        overflow: 'hidden',
        padding: 10,
    },
    posterImage: {
        flex: 1,
        borderRadius: 25,
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    subtitle:{
        fontSize: 16,
        color: '#000',
        opacity: 0.8,
    },

})
