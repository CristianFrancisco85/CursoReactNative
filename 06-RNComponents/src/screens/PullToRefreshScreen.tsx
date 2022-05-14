import React, { useContext, useState } from 'react'
import { RefreshControl, ScrollView, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { ThemeContext } from '../contexts/Theme/ThemeContext';
import { HeaderTitle } from '../components/HeaderTitle';

export const PullToRefreshScreen = () => {
   
    const [refreshing,setRefreshing] = useState(false)
    const [data,setData] = useState('')
    const {theme,theme:{colors}} = useContext(ThemeContext)

    const onRefresh = ()=>{
        setRefreshing(true)
        setTimeout(()=>{
            setRefreshing(false)
            setData('Refreshed')
        },2000)
    }

    return (
        <ScrollView 
        style={styles.globalMargin}
        refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                progressViewOffset={100}
                progressBackgroundColor={colors.primary}
                colors={['white']}
            />
        }
        
        >
            <HeaderTitle title="Pull to refresh" />
            <View>
                <Text style={{...styles.title,color:colors.text}}>{data}</Text>
            </View>

        </ScrollView>
    )
}
