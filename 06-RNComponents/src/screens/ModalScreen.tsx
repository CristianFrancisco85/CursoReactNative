import React, { useContext, useState } from 'react'
import { Button, Modal, Text, View, StyleSheet } from 'react-native';
import { styles as appStyles} from '../theme/appTheme';
import { ThemeContext } from '../contexts/Theme/ThemeContext';
import { HeaderTitle } from '../components/HeaderTitle';

export const ModalScreen = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const {theme,theme:{colors}} = useContext(ThemeContext)

    return (
        <View style={appStyles.globalMargin}>
            <HeaderTitle title="Modal" />

            <Button
                title="Open Modal"
                onPress={() => {setModalVisible(true)}}
            />

            <Modal
                animationType="fade"
                visible={modalVisible}
                transparent={true}
            >
                <View style={styles.modalBackground}>

                    <View style={{...styles.modalView,backgroundColor:colors.background}} >
                        <Text style={{...appStyles.title,color:colors.text}}>Modal</Text>
                        <Text style={{...appStyles.texto,color:colors.text}}>Cuerpo de Modal</Text>
                        <Button
                            title="Close Modal"
                            onPress={() => {setModalVisible(false)}}
                        />
                    </View>

                </View>
            </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(128,128,128,0.50)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalView: {
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
    },

})