import React, { useContext } from 'react'
import { Text, View,SectionList } from 'react-native'
import { ItemSeparator } from '../components/ItemSeparator';
import { styles } from '../theme/appTheme'
import { ThemeContext } from '../contexts/Theme/ThemeContext';
import { HeaderTitle } from '../components/HeaderTitle';

export const CustomSectionList = () => {

    const {theme:{colors}} = useContext(ThemeContext)

    interface Casas {
        casa: string;
        data: string[];
    }
    
    const casas: Casas[] = [
        {
          casa: "DC Comics",
          data: ["Batman", "Superman", "Robin", ]
        },
        {
          casa: "Marvel Comics",
          data: ["Antman", "Thor", "Spiderman","Ironman", ]
        },
        {
          casa: "Anime",
          data: ["Kenshin", "Goku", "Saitama", ]
        }
        
    ];


    return (
        <View style ={styles.globalMargin}>

            <SectionList
                sections={casas}
                keyExtractor={(item, index) => item + index}

                ListHeaderComponent={() => <HeaderTitle title='Lista de personajes' />}

                renderSectionHeader={({ section: { casa } }) => (
                    <Text style={{...styles.title,color:colors.text}}>{casa}</Text>
                )}
                renderItem={({ item }) => <Text style={{...styles.texto,color:colors.text}}>{item}</Text>}
                SectionSeparatorComponent={() => <ItemSeparator />}
                renderSectionFooter={({ section }) => (
                    <Text style={{color:colors.text}}>{`Total ${section.data.length}`}</Text>
                )}

                ListFooterComponent={() => <Text style={{...styles.title,color:colors.text}}>Fin de la lista</Text>}
                    
            />
        </View>

    )
}
