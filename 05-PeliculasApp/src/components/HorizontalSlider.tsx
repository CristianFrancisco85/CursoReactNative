import React from 'react'
import { Movie } from '../interfaces/movieInterface';
import { View, Text, FlatList } from 'react-native';
import { MovieCard } from './MovieCard';

interface Props {
    title?: string
    movies: Movie[]
}

export const HorizontalSlider = (props:Props) => {

    const {title,movies} = props


    return (
        <View style={{
            height: title?270:240,
        }}>
            {title && <Text style={{
                fontSize: 30,
                color: 'black',
                fontWeight: 'bold',
                marginLeft: 10,
            }}>{title}</Text>}

            <FlatList
                data={movies}
                renderItem={({item}) => (
                    <MovieCard movie={item} width={140} height={200}/>
                )}
                keyExtractor={item => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
            
        </View>
    )
}
