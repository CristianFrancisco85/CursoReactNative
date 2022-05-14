import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import  Icon  from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import { CastCard } from './CastCard';

interface Props {
    movieFull : MovieFull
    cast : Cast[]
}

export const MovieDetails = (props:Props) => {

    const {movieFull,cast} = props
    
    return (
    <>
        {/*Detalles */}
        <View style={styles.marginContainer}>
            
            <View style={{flexDirection:'row'}}>
                <Icon
                    name="star-outline"
                    color="#FFD700"
                    size={20}
                />
                <Text style={styles.secondaryText}>{movieFull.vote_average}</Text>
                <Text style={{...styles.secondaryText,marginLeft:5}}>
                    -{movieFull.genres.map(genre => genre.name).join(', ')}
                </Text>
            </View>

            {/*Sinopsis */}
            <View>
                <Text style={styles.primaryText}>{movieFull.overview}</Text>
            </View>
            
            {/*Presupuesto */}
            <View>
                <Text style={styles.title}>Presupuesto</Text>
                <Text style={styles.primaryText}>{currencyFormatter.format(movieFull.budget,{code:'USD'})}</Text>
            </View>
            
        </View>

        {/*Casting */}
        <View style={styles.actoresContainer}>
            <Text style={{...styles.title,marginLeft:20}}>Actores</Text>
            <FlatList
                horizontal
                data={cast}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => <CastCard actor={item}/>}
                showsHorizontalScrollIndicator={false}
                style={{marginTop:10,height:70}}
            /> 
        </View>
    </>
    )
}

const styles = StyleSheet.create({
    primaryText:{
        fontSize:16,
        color:'black',
        marginTop:10,
    },
    secondaryText:{
        fontSize:15,
        color:'grey',
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
    },
    marginContainer:{
        marginHorizontal:20
    },
    actoresContainer:{
        marginTop:10,
        marginBottom:100,
    },


})