import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { FlatItem } from '../components/FlatItem'
import { styles } from '../theme/appTheme'
import { menuItems } from '../data/menuItems'
import { ItemSeparator } from '../components/ItemSeparator';
import { HeaderTitle } from '../components/HeaderTitle';

export const HomeScreen = () => {

    return (
        <View style={{flex:1,...styles.globalMargin}}>

            <FlatList
                data={menuItems}
                keyExtractor={item => item.name}
                renderItem={({item}) => <FlatItem menuItem={item}/>}
                ListHeaderComponent={<HeaderTitle title='Opciones de Menu'/>}
                ItemSeparatorComponent={ItemSeparator}
            />
            
        </View>
    )
}
