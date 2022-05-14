import React, { useContext, useState } from 'react'
import { Image, ImageSourcePropType, SafeAreaView, Text, useWindowDimensions, View, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import Carousel,{Pagination} from 'react-native-snap-carousel';
import Icon  from 'react-native-vector-icons/Ionicons';
import { useAnimation } from '../hooks/useAnimation';
import { useNavigation } from '@react-navigation/core';
import { ThemeContext } from '../contexts/Theme/ThemeContext';

export const SlidesScreens = () => {

    const {width:screenWidth,height:screenHeight} = useWindowDimensions();
    const [activeSlide, setActiveSlide] = useState(0);
    const {opacity,fadeIn} = useAnimation()
    const {navigate} = useNavigation();
    const [btnEnable,setBtnEnable] = useState(false);
    const {theme,theme:{colors}} = useContext(ThemeContext)

    interface Slide {
        title: string;
        desc: string;
        img: ImageSourcePropType
    }
    
    const items: Slide[] = [
        {
            title: 'Titulo 1',
            desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
            img: require('../assets/slide-1.png')
        },
        {
            title: 'Titulo 2',
            desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
            img: require('../assets/slide-2.png')
        },
        {
            title: 'Titulo 3',
            desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
            img: require('../assets/slide-3.png')
        },
    ]

    const renderItem = (item: Slide) => {
        return (
            <View style={{...styles.container,backgroundColor:colors.background}}>
                <Image source={item.img} style={styles.imageStyle} />
                <Text style={{...styles.title,color:colors.text}}>{item.title}</Text>
                <Text style={{...styles.text,color:colors.text}}>{item.desc}</Text>
            </View>
        )
    }

    const onEndReached = () => {
        setBtnEnable(true);
        fadeIn();
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
            }}
        >
            <Carousel
                data={items}
                renderItem={({item}) => renderItem(item)}
                sliderWidth={screenWidth}
                itemWidth={screenWidth}
                layout='default'
                onSnapToItem={(index) => {
                    setActiveSlide(index)
                }}
                onEndReached={onEndReached}
            />
            <View style={styles.footerView}>
                <Pagination
                    dotsLength={items.length}
                    activeDotIndex={activeSlide}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 10,
                        marginHorizontal: 8,
                        backgroundColor: colors.primary,
                    }}
                />
                
                <Animated.View
                    style={{
                        opacity: opacity,
                    }}
                >
                    <TouchableOpacity 
                        style={{
                            flexDirection: 'row',
                            backgroundColor: colors.primary,
                            width:100,
                            height:40,
                            borderRadius:10,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        activeOpacity={0.8}
                        onPress={() => btnEnable ? navigate('Home' as any) : null}
                        
                    >
                        <Text style={styles.textBtn}> Entrar</Text>
                        <Icon name='chevron-forward-outline' color='white' size={25}/>        
                    </TouchableOpacity>
                </Animated.View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        padding: 40,
        justifyContent: 'center',
    },
    imageStyle:{
        width: 350,
        height: 400,
        borderRadius: 10,
        resizeMode: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text: {
        fontSize: 15,
        marginBottom: 20,
    },
    textBtn: {
        fontSize: 18,
        color: 'white',
    },
    footerView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginHorizontal: 20,
    },


})
