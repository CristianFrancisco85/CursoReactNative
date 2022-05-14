import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';

interface Props {
    actor : Cast
}

export const CastCard = (props:Props) => {

    const {actor} = props

    const uri = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`

    return (
        <View style={styles.mainContainer}>
            {
                actor.profile_path && <Image
                source={{uri}}
                style={styles.image}
                />
            }
            
            <View style={styles.infoContainer}>
                <Text style={styles.primaryText}>{actor.name}</Text>
                <Text style={styles.secondaryText}>{actor.character}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    primaryText:{
        fontSize:18,
        fontWeight:'bold',
        color:'black',
    },
    secondaryText:{
        fontSize:15,
        color:'grey',
    },
    marginContainer:{
        marginHorizontal:20
    },
    mainContainer:{
        flexDirection:'row',
        backgroundColor:'rgb(245,245,245)',
        height:50,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,
        elevation: 10,
        borderRadius:50,
        marginHorizontal:20,
        paddingRight:15,
    },
    image:{
        width:50,
        height:50,
        borderRadius:50,
    },
    infoContainer:{
        marginLeft:10,
    }


})
