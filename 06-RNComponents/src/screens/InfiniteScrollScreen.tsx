import React, { useContext, useState } from 'react'
import { Text, View, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { styles as appStyles} from '../theme/appTheme';
import { FadeInImage } from '../components/FadeInImage';
import { ThemeContext } from '../contexts/Theme/ThemeContext';

export const InfiniteScrollScreen = () => {

    const [numbers, setNumbers] = useState([0,1,2,3,4,5]);
    const {theme,theme:{colors}} = useContext(ThemeContext)

    const loadMore = () => {
        const newArray:number[] = []
        for(let i = 0; i < 5; i++) {
            newArray[i] = numbers.length + i;
        }
        setTimeout(() => {
        setNumbers([...numbers, ...newArray]);
        }, 2000);
    }

    const renderItem = (item:number) => {
        return (
            <FadeInImage 
                uri={`https://picsum.photos/id/${item}/1024/1024`}
                style={{
                    width: '100%',
                    height: 400,
                }} 
            />
        )
    }

    return (
        <View >
            <FlatList
                data={numbers}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => renderItem(item)}
                ListHeaderComponent={ <Text style={{...appStyles.title,alignSelf:'center',color:colors.text}}>Infinite Scroll</Text>}

                onEndReached={() => {
                    loadMore();
                }}
                onEndReachedThreshold={0.5}

                ListFooterComponent={()=>
                    <View>
                        <ActivityIndicator size="large" color={colors.primary} />
                    </View>
                }
            />
        </View>
    )
}


