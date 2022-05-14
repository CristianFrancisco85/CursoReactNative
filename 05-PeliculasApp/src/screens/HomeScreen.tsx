import React, { useContext, useEffect } from 'react'
import { View, ActivityIndicator, useWindowDimensions, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import { useMovies } from '../hooks/useMovies';
import { MovieCard } from '../components/MovieCard';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';
import { getImageColors } from '../helpers/getColors';
import { GradientContext } from '../contexts/GradientContext';

export const HomeScreen = () => {

    const {nowPlaying,popular,topRated,upcoming,isLoading} = useMovies()
    const {top} = useSafeAreaInsets()
    const {width: windowWidth} = useWindowDimensions()
    const {setMainColors,setPreviousColors} = useContext(GradientContext)

    useEffect(() => {
        if(nowPlaying.length>0){
            getPosterColors(0)
        }
    }, [nowPlaying])

    const getPosterColors = async (index:number) => {
        const movie = nowPlaying[index]
        const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

        const {primary = 'green',secondary='orange'}= await getImageColors(uri)

        setMainColors({primary,secondary})
    }

    if (isLoading){
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}> 
                <ActivityIndicator color='red' size={100}/>
            </View>
        )
    }
    
    return (
        <GradientBackground>

        <ScrollView>
        <View style={{marginTop:top+20}}>

            {/* Carousel Principal */}

            <View style={{
                height: 440,
            }}>
                <Carousel
                    data={nowPlaying}
                    renderItem={({item}) => <MovieCard movie={item}/>}
                    sliderWidth={windowWidth}
                    itemWidth={300}
                    inactiveSlideOpacity={0.9}
                    onSnapToItem={(index) => getPosterColors(index)}
                />
            </View>

            {/*Peliculas Populares */}
            
            <HorizontalSlider title='Popular' movies={popular}/>
            <HorizontalSlider title='Top Rated' movies={topRated}/>
            <HorizontalSlider title='Upcoming' movies={upcoming}/>

        </View>
        </ScrollView>

        </GradientBackground>
    )
}
